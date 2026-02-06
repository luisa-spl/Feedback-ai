'use client'

import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { feedbackAnalyzer } from './actions';

import { FeedbackForm } from './Components/FeedbackForm';
import { ResultCard } from './Components/ResultCard';
import { ResponseType } from './Types/types';

export default function Home() {
  const [result, setResult] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze(text: string) {
    setLoading(true);
    setResult(null);

    try {
      const data = await feedbackAnalyzer(text);
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top_right,var(--color-indigo-900),var(--color-purple-900),var(--color-slate-950))]">
      <div className="relative w-full max-w-2xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl overflow-hidden text-white ring-1 ring-white/10">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-400/30">
              <Sparkles className="w-6 h-6 text-indigo-300" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-400 to-red-300">
              AI Feedback Analyzer
            </h1>
          </div>
          <p className="text-slate-300 text-sm mt-4 ml-1">
            Não sabe o que responder para o seu cliente? Descubra o sentimento e gere respostas automáticas em segundos.
          </p>
        </div>

        <div className="p-8 space-y-6">
          <FeedbackForm onAnalyze={handleAnalyze} loading={loading} />
          {result && <ResultCard result={result} />}
        </div>
      </div>
    </main>
  );
}