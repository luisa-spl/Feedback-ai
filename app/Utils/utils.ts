import { FeelingType } from "../Types/types";

  export const GET_FEELING_COLOR: Record<FeelingType, any> = {
  Positivo: 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30',
  Negativo: 'bg-rose-500/20 text-rose-100 border-rose-500/30',
  Neutro: 'bg-slate-500/20 text-slate-100 border-slate-500/30',
  Erro: 'bg-red-500/20 text-red-100 border-red-500/30',
};