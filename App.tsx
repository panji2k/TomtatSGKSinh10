import React, { useState, useEffect } from 'react';
import ChapterList from './components/ChapterList';
import SummaryView from './components/SummaryView';
import TextbookView from './components/TextbookView';
import QuizView from './components/QuizView';
import AssistantPanel from './components/AssistantPanel';
import UploadSection from './components/UploadSection';
import { generateQuiz } from './services/geminiService';
import { staticContent } from './data/content';
import { Chapter, Difficulty, QuizQuestion, ViewMode, ContentTab, SummaryData, ExampleItem, TextbookSection } from './types';

const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('theory'); // 'theory', 'quiz', 'upload'
  const [contentTab, setContentTab] = useState<ContentTab>('core'); // 'core' | 'detailed'
  
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Data State
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [examples, setExamples] = useState<ExampleItem[]>([]);
  const [textbookContent, setTextbookContent] = useState<TextbookSection[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizDifficulty, setQuizDifficulty] = useState<Difficulty>(Difficulty.Basic);
  
  // Cache for QUIZ ONLY
  const [cache, setCache] = useState<Record<string, any>>({});

  const handleApiError = (error: unknown) => {
    console.error("An API error occurred:", error);
  };
  
  const handleSelectChapter = (chapter: Chapter, subTitle?: string) => {
    const fullTitle = subTitle ? `${chapter.title} - ${subTitle}` : chapter.title;
    
    if (currentChapter?.title === fullTitle) return;

    const selectedChapter = { ...chapter, title: fullTitle };
    setCurrentChapter(selectedChapter);
    setViewMode('theory');
    setContentTab('core');
    setQuizQuestions([]); // Clear quiz when chapter changes
    
    // Load static content directly for summary/examples
    const content = staticContent[chapter.id];
    setSummary(content?.summary || null);
    setExamples(content?.examples || []);
    setTextbookContent(content?.textbook || []);
  };

  const fetchQuiz = async (topic: string) => {
    const cacheKey = `${topic}-quiz-${quizDifficulty}`;
    if (cache[cacheKey]) {
      setQuizQuestions(cache[cacheKey]);
      return;
    }

    setLoadingQuiz(true);
    try {
      const result = await generateQuiz(topic, quizDifficulty);
      setQuizQuestions(result);
      setCache(prev => ({ ...prev, [cacheKey]: result }));
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingQuiz(false);
    }
  };

  useEffect(() => {
    if (viewMode === 'quiz' && currentChapter && quizQuestions.length === 0) {
        fetchQuiz(currentChapter.title);
    }
  }, [viewMode, currentChapter, quizDifficulty]);


  const renderMainContent = () => {
    if (viewMode === 'upload') return <UploadSection />;

    if (!currentChapter) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-emerald-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <h2 className="text-xl font-medium text-slate-700">Chào mừng đến với BioSmart 10</h2>
                <p className="mt-2 text-sm">Chọn bài học để bắt đầu</p>
            </div>
        )
    }

    if (viewMode === 'quiz') {
      if (loadingQuiz) {
        return (
          <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 text-sm font-medium">Đang tạo bộ câu hỏi...</p>
          </div>
        );
      }
      return (
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800">Trắc nghiệm ôn tập</h3>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <label className="text-sm font-medium text-slate-500 whitespace-nowrap">Mức độ:</label>
                <select 
                    value={quizDifficulty}
                    onChange={(e) => {
                        setQuizDifficulty(e.target.value as Difficulty);
                        setQuizQuestions([]); 
                    }}
                    className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 p-2.5 w-full sm:w-auto font-medium"
                >
                    <option value={Difficulty.Basic}>{Difficulty.Basic}</option>
                    <option value={Difficulty.Understanding}>{Difficulty.Understanding}</option>
                    <option value={Difficulty.Application}>{Difficulty.Application}</option>
                </select>
              </div>
          </div>
          <QuizView questions={quizQuestions} onRetake={() => fetchQuiz(currentChapter!.title)} />
        </div>
      );
    }
    
    // Theory View
    return (
        <div className="animate-fade-in space-y-6">
            <div className="flex items-center gap-2 sm:gap-4 bg-white p-2 rounded-xl shadow-sm border border-slate-100 w-full sm:w-fit">
                <button
                    onClick={() => setContentTab('core')}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all w-full justify-center sm:w-auto ${
                        contentTab === 'core' 
                        ? 'bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    Kiến thức cốt lõi
                </button>
                <button
                    onClick={() => setContentTab('detailed')}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all w-full justify-center sm:w-auto ${
                        contentTab === 'detailed' 
                        ? 'bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Chi tiết SGK
                </button>
            </div>
            <div className="mt-2">
                {contentTab === 'core' && summary && <SummaryView data={summary} examples={examples} />}
                {contentTab === 'detailed' && <TextbookView data={textbookContent} />}
            </div>
        </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
      <ChapterList 
        currentChapterId={currentChapter?.id || null} 
        onSelectChapter={handleSelectChapter} 
        isOpen={sidebarOpen}
        onCloseMobile={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 h-full">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-20">
            <div className="flex items-center gap-4 overflow-hidden">
                <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
                <h1 className="text-lg font-bold text-slate-800 truncate">{currentChapter ? currentChapter.title.replace(/.*- /, '') : 'Trang chủ'}</h1>
            </div>
            <div className="flex items-center gap-3">
                 <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setViewMode('theory')} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${viewMode === 'theory' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Lý thuyết</button>
                    <button onClick={() => setViewMode('quiz')} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${viewMode === 'quiz' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Trắc nghiệm</button>
                 </div>
                 <button onClick={() => setViewMode(viewMode === 'theory' ? 'quiz' : 'theory')} className="sm:hidden text-emerald-600 font-medium text-sm">{viewMode === 'theory' ? 'Làm trắc nghiệm' : 'Xem lý thuyết'}</button>
                 <button onClick={() => setViewMode('upload')} className="p-2 text-slate-400 hover:text-emerald-600 transition" title="Tải ảnh lên"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /></svg></button>
            </div>
        </header>
        <div className="flex-1 flex overflow-hidden">
             <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 lg:p-8 scrollbar-thin scrollbar-thumb-slate-200">
                 <div className="max-w-4xl mx-auto">
                    {renderMainContent()}
                 </div>
             </div>
             <div className="hidden xl:flex w-[320px] flex-col border-l border-slate-200 bg-white">
                 <AssistantPanel />
             </div>
        </div>
      </div>
    </div>
  );
};

export default App;
