  export type FeelingType = 'Positivo' | 'Negativo' | 'Neutro' | 'Erro';
  export type CategoryType = 'Logística' | 'Produto' | 'Atendimento' | 'Outros' | 'Invalido';

  export type ResponseType = {
    feeling: FeelingType;
    category: CategoryType;
    suggestion: string;
  }

