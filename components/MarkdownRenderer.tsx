import React from 'react';

// Basic Markdown parser since we can't use external heavyweight libraries easily in this constraint
// Handles headers, bold, bullet points, and basic paragraphs.
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  
  return (
    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
      {lines.map((line, idx) => {
        // Headers
        if (line.startsWith('### ')) return <h3 key={idx} className="text-xl font-bold text-slate-800 mt-6 mb-3">{line.replace('### ', '')}</h3>;
        if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">{line.replace('## ', '')}</h2>;
        if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-black text-slate-900 mb-6">{line.replace('# ', '')}</h1>;
        
        // Bullet points
        if (line.trim().startsWith('- ')) {
           return (
             <li key={idx} className="ml-4 list-disc pl-2 mb-2">
               {parseInline(line.replace('- ', ''))}
             </li>
           )
        }
        
        // Empty lines
        if (line.trim() === '') return <br key={idx} />;

        // Paragraphs
        return <p key={idx} className="mb-4">{parseInline(line)}</p>;
      })}
    </div>
  );
};

const parseInline = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-slate-900 font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default MarkdownRenderer;