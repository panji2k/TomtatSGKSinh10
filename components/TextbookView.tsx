import React from 'react';
import { TextbookSection } from '../types';

interface TextbookViewProps {
  data: TextbookSection[];
}

const TextbookView: React.FC<TextbookViewProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-700">Chưa có nội dung chi tiết</h3>
        <p className="text-slate-500 mt-2 text-sm max-w-sm">
          Nội dung chi tiết cho bài học này hiện chưa có sẵn trong hệ thống.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[60vh]">
        {data.map((section, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            {/* Main Header (I, II, III...) */}
            <div className="flex items-center mb-6">
                <div className="w-1.5 h-8 bg-emerald-500 mr-3 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-800 uppercase tracking-wide">
                    {section.header}
                </h2>
            </div>
            
            {/* Subsections (1, 2, 3...) */}
            <div className="pl-2 sm:pl-4 space-y-6">
                {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx}>
                        <h3 className="text-lg font-bold text-emerald-700 mb-2">
                            {sub.title}
                        </h3>
                        <div className="text-slate-700 leading-7 text-justify text-[15px] prose prose-slate max-w-none whitespace-pre-line">
                            {sub.content}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextbookView;
