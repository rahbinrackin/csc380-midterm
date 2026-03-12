export interface MCQuestion {
  id: string;
  question: string;
  choices: string[];
  correctAnswer: number;
  correctAnswers?: number[];
  explanation: string;
  wrongExplanations: Record<number, string>;
  category?: string;
  source?: "bank" | "lecture";
  lectureRef?: string;
  multiSelect?: number;
}

export interface MatchingPair {
  term: string;
  definition: string;
}

export interface MatchingGroup {
  id: string;
  title: string;
  pairs: MatchingPair[];
}

export interface DiagramQuestion {
  id: string;
  imageUrl: string;
  attackName: string;
  acceptableNames: string[];
  prevention: string;
  acceptablePreventions: string[];
  explanation: string;
}

export interface ShortResponseQuestion {
  id: string;
  question: string;
  modelAnswer: string;
  keyPoints: string[];
  category?: string;
  source?: "bank" | "lecture";
  group: "exam" | "extra";
}

export interface WrongAnswerRecord {
  questionId: string;
  section: string;
  wrongCount: number;
  lastSeen: number;
}

export interface RunRecord {
  runNumber: number;
  section: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
}

export type Section = "home" | "sectionA" | "sectionB" | "sectionC" | "sectionD" | "review" | "results";
