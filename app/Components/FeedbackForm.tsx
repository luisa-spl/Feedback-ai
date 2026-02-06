'use client';

import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";

interface FeedbackFormProps {
  loading: boolean;
  onAnalyze: (text: string) => void;
}

export function FeedbackForm({ loading, onAnalyze }: FeedbackFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAnalyze(text);
  }

  return (
    <>
      <label className="text-sm font-medium text-slate-300 ml-1">Feedback do Cliente</label>
      <textarea
        className="w-full h-40 bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none backdrop-blur-sm mt-4"
        placeholder="Ex: O atendimento foi ótimo, mas a comida demorou um pouco..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
        className="w-full h-12 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        {loading ? <><Loader2 className="w-5 h-5 animate-spin" />Analisando...</> : <><Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />Gerar Análise</>}
      </button>
    </>
  );
}
