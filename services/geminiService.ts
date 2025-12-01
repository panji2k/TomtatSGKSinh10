import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Difficulty, QuizQuestion, SummaryData, ExampleItem, TextbookSection } from "../types";

// Create a new GenAI instance for each call to ensure the latest API key is used.
const getGenAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_TEXT = 'gemini-2.5-flash';

// Helper to clean JSON string if markdown code blocks are present
const cleanJsonString = (str: string) => {
  return str.replace(/```json\n?|\n?```/g, "").trim();
};

export const generateQuiz = async (topic: string, level: Difficulty): Promise<QuizQuestion[]> => {
  const ai = getGenAI();
  const quizSchema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.INTEGER },
        question: { type: Type.STRING },
        options: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        correctAnswer: { type: Type.INTEGER, description: "Index of the correct option (0-3)" },
        explanation: { type: Type.STRING },
      },
      required: ["id", "question", "options", "correctAnswer", "explanation"],
    },
  };

  try {
    const prompt = `
      Tạo 5 câu hỏi trắc nghiệm Sinh học 10 cho chủ đề: "${topic}".
      Mức độ khó: ${level}.
      
      Yêu cầu:
      - Câu hỏi phải bám sát nội dung sách giáo khoa Kết nối tri thức.
      - 4 đáp án lựa chọn.
      - Giải thích chi tiết tại sao đáp án đó đúng.
      - Trả về JSON thuần túy.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_TEXT,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
      },
    });

    const jsonStr = cleanJsonString(response.text || "[]");
    return JSON.parse(jsonStr) as QuizQuestion[];
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
};

export const analyzeImage = async (file: File, promptText: string): Promise<string> => {
  const ai = getGenAI();
  try {
    const base64Data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        resolve(base64.split(',')[1]); 
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { inlineData: { mimeType: file.type, data: base64Data } },
          { text: promptText || "Giải thích nội dung kiến thức sinh học trong hình ảnh này. Nếu là sơ đồ, hãy mô tả quá trình." }
        ]
      }
    });

    return response.text || "Không thể phân tích hình ảnh.";
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};

export const createChatSession = () => {
  const ai = getGenAI();
  return ai.chats.create({
    model: MODEL_TEXT,
    config: {
      systemInstruction: "Bạn là BioBot, trợ lý học tập môn Sinh học 10 (Sách Kết nối tri thức). Hãy trả lời ngắn gọn, chính xác và thân thiện.",
    }
  });
};
