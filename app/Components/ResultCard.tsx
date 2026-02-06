import { AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { ResponseType } from '../Types/types';
import { GET_FEELING_COLOR } from '../Utils/utils';


interface ResultCardProps {
  result: ResponseType;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
      <div className="flex flex-wrap gap-3 items-center justify-between border-b border-white/5 pb-4">
        <div className="flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md flex items-center gap-1.5 ${GET_FEELING_COLOR[result.feeling]}`}>
            {result.feeling === 'Positivo' ? <CheckCircle2 className="w-3.5 h-3.5" /> : 
             result.feeling === 'Negativo' ? <AlertCircle className="w-3.5 h-3.5" /> : null}
            {result.feeling}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-100 border border-blue-500/30 backdrop-blur-md">
            {result.category}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-indigo-200 text-sm font-medium">
          <MessageSquare className="w-4 h-4" />
          Sugestão de Resposta
        </div>
        <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-slate-200 leading-relaxed text-sm">
          "{result.suggestion}"
        </div>
      </div>
    </div>
  );
}
