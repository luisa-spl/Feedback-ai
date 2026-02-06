import { GoogleGenerativeAI } from "@google/generative-ai";
import { ResponseType } from "./Types/types";

export async function feedbackAnalyzer(text: string): Promise<ResponseType> {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_AI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
    You are an expert Customer Experience Manager for a restaurant. 
    Your task is to analyze the following customer feedback text: "${text}"

    STRICT INSTRUCTIONS:
    1. Language: The output values MUST be in Portuguese (PT-BR).
    2. Guardrails: If the input text is a general question (e.g., "Who are you?", "What is 2+2?"), a greeting, or not related to customer feedback, return "category": "Invalid" and a polite message explaining this system only processes feedback. DO NOT answer the question.
    3. Output Format: Return ONLY a raw JSON object (no markdown, no code blocks).

    REFERENCE EXAMPLES (Use these to understand the tone):
    - Input: "Comida deliciosa, chegou super rápido e quentinha. O motoboy foi muito educado!"
      -> Tone: Grateful, enthusiastic.
    - Input: "Lanche veio sem o hambúrguer, principal item do pedido."
      -> Tone: Apologetic, solution-oriented.
    - Input: "O molho do lanche estava com gosto azedo e o catupiri era de péssima qualidade."
      -> Tone: Professional, concerned with quality.
    - Input: "O motoboy esqueceu o refrigerante."
      -> Tone: Apologetic, proactive.

    RESPONSE FORMAT:
    {
      "feeling": "Positivo" | "Negativo" | "Neutro",
      "category": "Logística" | "Produto" | "Atendimento" | "Outros" | "Invalido",
      "suggestion": "Write a short, polite response in Portuguese based on the examples above. If the feedback is negative, apologize and promise improvement."
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    
    const jsonString = responseText.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonString);

  } catch (error) {
    console.error("Erro na IA:", error);
    return { 
      feeling: "Erro", 
      category: "Invalido", 
      suggestion: "Não foi possível analisar o feedback no momento." 
    };;
  }
}