import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  questions: QuizQuestion[];
  onRetake: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ questions, onRetake }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (qId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  if (!questions || questions.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             <p>Không có dữ liệu câu hỏi.</p>
        </div>
    );
  }

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      {/* Result Card */}
      {isSubmitted && (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 shadow-sm text-center relative overflow-hidden">
          <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Kết quả bài làm</h3>
              <div className="flex justify-center items-end gap-2 mb-4">
                  <span className="text-5xl font-black text-emerald-600">{score}</span>
                  <span className="text-2xl font-medium text-slate-400 mb-1">/{questions.length}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 max-w-xs mx-auto mb-6">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
              </div>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  onRetake();
                }}
                className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
              >
                Làm lại / Câu hỏi mới
              </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            
            return (
              <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="flex gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold rounded-lg text-sm border border-emerald-100">
                    {idx + 1}
                  </span>
                  <h4 className="text-lg font-medium text-slate-800 pt-0.5 leading-snug">{q.question}</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-12">
                  {q.options.map((opt, oIdx) => {
                    let btnClass = "w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 relative ";
                    let icon = null;
                    
                    if (isSubmitted) {
                      if (oIdx === q.correctAnswer) {
                        btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 font-medium ring-1 ring-emerald-500";
                        icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 absolute right-3 top-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
                      } else if (userAnswer === oIdx) {
                        btnClass += "bg-red-50 border-red-300 text-red-700";
                        icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 absolute right-3 top-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
                      } else {
                        btnClass += "bg-white border-slate-100 opacity-50";
                      }
                    } else {
                      if (userAnswer === oIdx) {
                        btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm ring-1 ring-emerald-500";
                      } else {
                        btnClass += "bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelect(q.id, oIdx)}
                        disabled={isSubmitted}
                        className={btnClass}
                      >
                        <div className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-md border text-xs font-bold mt-0.5 ${
                            isSubmitted && oIdx === q.correctAnswer ? 'bg-emerald-200 border-emerald-300 text-emerald-800' : 
                            userAnswer === oIdx ? 'bg-emerald-200 border-emerald-300 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'
                        }`}>
                            {String.fromCharCode(65 + oIdx)}
                        </div>
                        <span className="flex-1">{opt}</span>
                        {icon}
                      </button>
                    );
                  })}
                </div>

                {isSubmitted && (
                  <div className="mt-4 md:ml-12 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm flex gap-3 animate-fade-in">
                    <div className="flex-shrink-0 mt-0.5 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <span className="font-bold text-slate-800 block mb-1">Giải thích:</span>
                        <span className="text-slate-600">{q.explanation}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {!isSubmitted && (
        <div className="fixed bottom-6 left-0 right-0 lg:left-[280px] xl:mr-[320px] px-6 pointer-events-none flex justify-center z-10">
          <button
            onClick={() => setIsSubmitted(true)}
            disabled={Object.keys(userAnswers).length < questions.length}
            className={`
              pointer-events-auto px-10 py-3.5 rounded-full shadow-xl font-bold text-white transition-all transform
              flex items-center gap-2
              ${Object.keys(userAnswers).length < questions.length 
                ? 'bg-slate-400 cursor-not-allowed translate-y-20 opacity-0' 
                : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105 hover:shadow-emerald-500/30 translate-y-0 opacity-100'
              }
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Nộp bài
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizView;