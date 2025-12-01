import React from 'react';
import { syllabus } from '../data/syllabus';
import { Chapter } from '../types';

interface ChapterListProps {
  currentChapterId: string | null;
  onSelectChapter: (chapter: Chapter, subTitle?: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ currentChapterId, onSelectChapter, isOpen, onCloseMobile }) => {
  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-40 w-[280px] bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static h-full
      `}
    >
      <div className="h-16 px-5 flex items-center justify-between bg-[#006d5b] text-white shadow-sm flex-shrink-0">
        <div className="flex flex-col">
            <h2 className="text-lg font-bold leading-tight">BioSmart 10</h2>
            <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest">Kết nối tri thức</span>
        </div>
        <button onClick={onCloseMobile} className="lg:hidden text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        {syllabus.map((section, idx) => (
          <div key={idx} className="mb-2">
            <div className="px-5 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{section.part}</div>
            <ul className="space-y-0.5">
              {section.chapters.map((chapter) => {
                 // Try to parse number from "Bài X" or "Chương Y"
                 let numberDisplay = "";
                 const titleParts = chapter.title.split(':');
                 const mainTitle = titleParts.length > 1 ? titleParts[1].trim() : chapter.title;
                 const prefix = titleParts[0].trim(); // e.g., "Bài 1"
                 
                 const match = prefix.match(/\d+/);
                 if (match) numberDisplay = match[0];

                 return (
                  <li key={chapter.id}>
                    {chapter.subsections ? (
                       <div className="space-y-1">
                          <div className="px-5 py-2 text-xs font-bold text-slate-500 bg-slate-50 border-y border-slate-100 mt-2 mb-1">
                              {prefix.toUpperCase()}: {mainTitle}
                          </div>
                          <ul className="space-y-1">
                            {chapter.subsections.map((sub, sIdx) => {
                               // Extract number for subsection "Bài X"
                               const subParts = sub.split(':');
                               const subTitle = subParts.length > 1 ? subParts[1].trim() : sub;
                               const subPrefix = subParts[0].trim();
                               const subMatch = subPrefix.match(/\d+/);
                               const subNum = subMatch ? subMatch[0] : (sIdx + 1).toString();
                               
                               const isSelected = currentChapterId === `${chapter.id}-${sIdx}`;
                               
                               return (
                                <li key={sIdx} className="px-3">
                                  <button
                                    onClick={() => {
                                      onSelectChapter({ ...chapter, id: `${chapter.id}-${sIdx}` }, sub);
                                      if(window.innerWidth < 1024) onCloseMobile();
                                    }}
                                    className={`
                                      group w-full flex items-start gap-3 p-2 rounded-lg transition-all
                                      ${isSelected ? 'bg-emerald-50' : 'hover:bg-slate-50'}
                                    `}
                                  >
                                    <span className={`
                                        flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-bold mt-0.5
                                        ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'}
                                    `}>
                                        {subNum}
                                    </span>
                                    <span className={`text-sm text-left leading-tight ${isSelected ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>
                                        {subTitle}
                                    </span>
                                  </button>
                                </li>
                               )
                            })}
                          </ul>
                       </div>
                    ) : (
                      <div className="px-3">
                        <button
                          onClick={() => {
                            onSelectChapter(chapter);
                            if(window.innerWidth < 1024) onCloseMobile();
                          }}
                          className={`
                            group w-full flex items-center gap-3 p-2 rounded-lg transition-all
                            ${currentChapterId === chapter.id ? 'bg-emerald-50' : 'hover:bg-slate-50'}
                          `}
                        >
                           <span className={`
                                flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-bold
                                ${currentChapterId === chapter.id ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'}
                            `}>
                                {numberDisplay || (idx + 1)}
                            </span>
                            <span className={`text-sm text-left ${currentChapterId === chapter.id ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>
                                {mainTitle}
                            </span>
                        </button>
                      </div>
                    )}
                  </li>
                 );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ChapterList;