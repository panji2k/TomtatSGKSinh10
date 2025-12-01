import React, { useState } from 'react';
import { analyzeImage } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';

const UploadSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(selected);
      setAnalysis('');
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    const result = await analyzeImage(file, prompt);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
        <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-emerald-500">
                <span>Tải ảnh lên</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
              </label>
              <p className="pl-1">để phân tích sơ đồ hoặc hình ảnh SGK</p>
            </div>
            <p className="text-xs leading-5 text-slate-500">PNG, JPG, GIF tối đa 10MB</p>
        </div>

        {preview && (
          <div className="mt-4 relative rounded-lg overflow-hidden border border-slate-200 inline-block">
             <img src={preview} alt="Preview" className="max-h-64 object-contain" />
          </div>
        )}
      </div>

      {file && (
        <div className="flex gap-4 items-center">
            <input 
                type="text" 
                placeholder="Câu hỏi về bức ảnh (ví dụ: Giải thích sơ đồ này)"
                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
                onClick={handleAnalyze} 
                disabled={loading}
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50 transition"
            >
                {loading ? 'Đang phân tích...' : 'Phân tích'}
            </button>
        </div>
      )}

      {analysis && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-fade-in">
             <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Kết quả phân tích</h3>
             <MarkdownRenderer content={analysis} />
        </div>
      )}
    </div>
  );
};

export default UploadSection;