import React from 'react';
import { ExampleItem } from '../types';

const ExampleView: React.FC<{ data: ExampleItem[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-6 animate-fade-in pb-8">
      {data.map((item, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
          {/* Card Header */}
          <div className="bg-emerald-50/50 p-4 border-b border-emerald-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-emerald-100">
              {item.emoji}
            </div>
            <h3 className="font-bold text-lg text-emerald-900">{item.title}</h3>
          </div>
          
          {/* Card Content */}
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Tình huống thực tế
              </div>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                {item.scenario}
              </p>
            </div>
            
            <div>
               <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                 </svg>
                 Giải thích sinh học
               </div>
               <p className="text-slate-700 leading-relaxed italic border-l-2 border-emerald-300 pl-3">
                 {item.explanation}
               </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExampleView;