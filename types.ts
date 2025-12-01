export interface Chapter {
  id: string;
  title: string;
  subsections?: string[];
}

export interface Section {
  part: string;
  chapters: Chapter[];
}

export enum Difficulty {
  Basic = "Nhận biết",
  Understanding = "Thông hiểu",
  Application = "Vận dụng",
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

export type ContentTab = 'core' | 'detailed';
export type ViewMode = 'theory' | 'quiz' | 'upload';

// Core Knowledge Types
export interface CoreKnowledgeItem {
  title: string;
  content: string;
  emoji: string;
}

export interface VocabularyItem {
  term: string;
  definition: string;
}

export interface SummaryData {
  intro: string;
  coreKnowledge: CoreKnowledgeItem[];
  vocabulary: VocabularyItem[];
}

export interface ExampleItem {
  title: string;
  scenario: string;
  explanation: string;
  emoji: string;
}

// Detailed Textbook Types
export interface TextbookSubsection {
  title: string; // e.g. "1. Vai trò của nước"
  content: string; // The paragraph content
}

export interface TextbookSection {
  header: string; // e.g. "I. VAI TRÒ CỦA NƯỚC VÀ CHẤT KHOÁNG"
  subsections: TextbookSubsection[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}