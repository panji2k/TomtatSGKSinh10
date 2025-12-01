import React from 'react';
import { SummaryData, ExampleItem } from '../types';
import ExampleView from './ExampleView';

interface SummaryViewProps {
  data: SummaryData;
  examples: ExampleItem[];
}

const SummaryView: React.FC<SummaryViewProps> = ({ data, examples }) => {
  return (
    <div className="space-y-8 animate-fade-in pb-8">
      {/* Introduction */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Tổng quan
        </h3>
        <p className="text-slate-600 leading-relaxed">{data.intro}</p>
      </div>

      {/* Core Knowledge Grid */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Kiến thức cốt lõi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.coreKnowledge.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-emerald-50 rounded-full flex items-center justify-center text-xl shadow-inner mt-1">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base text-justify">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Examples Section */}
      {examples && examples.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
             </svg>
             Ví dụ & Ứng dụng thực tế
          </h3>
          <ExampleView data={examples} />
        </div>
      )}

      {/* Vocabulary List */}
      <div>
         <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Thuật ngữ quan trọng
        </h3>
        <div className="grid gap-3">
          {data.vocabulary.map((vocab, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row bg-slate-50 rounded-lg p-4 border border-slate-200">
              <span className="font-bold text-emerald-800 min-w-[150px] mb-1 sm:mb-0">{vocab.term}</span>
              <span className="text-slate-600 text-sm border-l-0 sm:border-l border-slate-300 sm:pl-4">{vocab.definition}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryView;