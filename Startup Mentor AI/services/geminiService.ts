
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Mentor, MentorshipResponse } from "../types";

const getAIInstance = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMentorship = async (
  idea: string,
  mentor: Mentor
): Promise<MentorshipResponse> => {
  const ai = getAIInstance();
  
  const systemInstruction = `You are playing the role of ${mentor.name}. 
  Professional Background: ${mentor.experience}. 
  Philosophy: ${mentor.description} 
  Personality: ${mentor.personality}
  
  TASK: Provide extremely high-fidelity mentorship for the following startup vision. 
  
  VOICE GUIDELINES:
  - Respond entirely in YOUR signature voice.
  - Be direct and professional. Provide the "hard truths".

  RESPONSE REQUIREMENTS:
  1. PERSPECTIVE: Analysis of the concept.
  2. PROBLEM: A concise, hard-hitting 1-2 sentence problem statement.
  3. SOLUTION: A crisp 1-2 sentence value proposition of the solution.
  4. EVALUATION: Deep audit identifying bottlenecks.
  5. PLAN: 5-step roadmap.
  6. TECH STACK: Philosophy-aligned stack.
  7. GROWTH STRATEGY: Scaling and moat logic.
  8. FINAL ADVICE: Signature closing quote.

  OUTPUT FORMAT: YOU MUST RESPOND IN VALID JSON ONLY. NO MARKDOWN. NO CODE BLOCKS.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Startup Vision: ${idea}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            perspective: { type: Type.STRING },
            problem: { type: Type.STRING },
            solution: { type: Type.STRING },
            evaluation: { type: Type.STRING },
            plan: { type: Type.ARRAY, items: { type: Type.STRING } },
            techStack: {
              type: Type.OBJECT,
              properties: {
                frontend: { type: Type.STRING },
                backend: { type: Type.STRING },
                database: { type: Type.STRING },
                ai: { type: Type.STRING },
                hosting: { type: Type.STRING }
              },
              required: ["frontend", "backend", "database", "ai", "hosting"]
            },
            growthStrategy: { type: Type.STRING },
            finalAdvice: { type: Type.STRING }
          },
          required: ["perspective", "problem", "solution", "evaluation", "plan", "techStack", "growthStrategy", "finalAdvice"]
        }
      }
    });

    const jsonText = response.text || "";
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw new Error("The Mentor is temporarily unavailable due to a cognitive bottleneck.");
  }
};

export const streamMentorChat = async (
  message: string,
  mentor: Mentor,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  onChunk: (text: string) => void
) => {
  const ai = getAIInstance();
  const systemInstruction = `You are ${mentor.name}. Continue the mentorship session. 
  Maintain your signature voice, personality, and strategic bias. 
  Keep responses concise, professional, and insightful.
  
  SPECIAL COMMAND: If the user asks for a 'slide', 'ppt', or 'summary', respond by emphasizing the Problem and Solution in a format suitable for an executive summary.
  
  Current context: ${mentor.description} ${mentor.personality}`;

  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction,
    },
    history: history,
  });

  const result = await chat.sendMessageStream({ message });

  for await (const chunk of result) {
    const text = (chunk as GenerateContentResponse).text;
    if (text) {
      onChunk(text);
    }
  }
};
