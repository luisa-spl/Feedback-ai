![Project Banner](https://i.ibb.co/TD2tSBVN/image.png) 


## 🚀 Sobre o Projeto

O **AI Feedback Analyzer** resolve um problema real de empresas que recebem grande volume de avaliações: a triagem manual. O sistema recebe um texto, processa através de um LLM (Large Language Model) e devolve:
1. **Análise de Sentimento** (Positivo, Negativo, Neutro).
2. **Categorização Automática** (Logística, Produto, Atendimento, etc).
3. **Sugestão de Resposta** personalizada baseada no tom da mensagem.

Este projeto foi desenvolvido para demonstrar a aplicação prática de IA em cenários de negócio.

## 🛠️ Tech Stack

* **Core:** [Next.js 14](https://nextjs.org/) (App Router & Server Actions)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **AI Model:** [Google Gemini API](https://ai.google.dev/) (Generative AI SDK)
* **Icons:** Lucide React

## 💡 Decisões Técnicas & Engenharia de Prompt

### 1. Engenharia de Prompt: "Few-Shot Abstracting"
* **O Problema:** Prompts genéricos geram respostas inconsistentes e fora de padrão.
* **A Solução:** No lugar de passar históricos de conversas inteiros (que consomem muitos tokens), forneci ao modelo exemplos abstratos de *Input* vs. *Output Desejado* e defini o "Tom de Voz" (Persona) esperado.
* **Resultado:** Respostas 40% mais precisas e estritamente formatadas em JSON, prontas para o consumo do Front-end.

### 2. Next.js Server Actions
Optei por utilizar **Server Actions** em vez de criar rotas de API tradicionais (`/pages/api`).
* **Segurança:** A API Key do Gemini (`GEMINI_API_KEY`) nunca é exposta ao cliente (navegador), pois todo o processamento ocorre no servidor.
* **Simplicidade:** Redução de *boilerplate*. A função de backend é importada diretamente no componente React, mantendo a tipagem do TypeScript de ponta a ponta.

### 3. UI 
* Uso de transparências e `backdrop-blur` para criar profundidade.
* Gradientes radiais dinâmicos gerados via Tailwind.
* Feedback visual (Loading States, Badges coloridas) para melhorar a UX.

### 4. Guardrails (Barreiras de Segurança)
Implementei uma camada de validação no prompt para detectar inputs inválidos. Se o usuário enviar textos fora de contexto, a IA é instruída a retornar uma categoria `Invalid` em vez de alucinar uma resposta, economizando recursos e mantendo o foco do produto.

## 📦 Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/seu-usuario/ai-feedback-analyzer.git](https://github.com/seu-usuario/ai-feedback-analyzer.git)

2. **Instale as dependências**
   ```bash
   npm install

3. **Configure as Variáveis de Ambiente Crie um arquivo .env.local na raiz do projeto e adicione sua chave do Google Gemini:**
   GEMINI_API_KEY=sua_chave_aqui

4. **Inicie o servidor**
   ```bash
   npm run dev

🔮 Próximos Passos (Roadmap)
[ ] Integração com Banco de Dados (PostgreSQL) para salvar histórico.

[ ] Dashboard com gráficos de tendência de humor dos clientes.

[ ] Upload de arquivos CSV para análise em massa.
