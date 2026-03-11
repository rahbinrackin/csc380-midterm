import type { WrongAnswerRecord, RunRecord } from "../types";

const WRONG_ANSWERS_KEY = "csc380_wrong_answers";
const RUN_HISTORY_KEY = "csc380_run_history";
const LECTURE_MODE_KEY = "csc380_lecture_mode";

export function getWrongAnswers(): WrongAnswerRecord[] {
  const raw = localStorage.getItem(WRONG_ANSWERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveWrongAnswers(records: WrongAnswerRecord[]): void {
  localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(records));
}

export function recordWrongAnswer(questionId: string, section: string): void {
  const records = getWrongAnswers();
  const existing = records.find((r) => r.questionId === questionId);
  if (existing) {
    existing.wrongCount += 1;
    existing.lastSeen = Date.now();
  } else {
    records.push({ questionId, section, wrongCount: 1, lastSeen: Date.now() });
  }
  saveWrongAnswers(records);
}

export function decrementWrongAnswer(questionId: string): void {
  let records = getWrongAnswers();
  const existing = records.find((r) => r.questionId === questionId);
  if (existing) {
    existing.wrongCount -= 1;
    if (existing.wrongCount <= 0) {
      records = records.filter((r) => r.questionId !== questionId);
    }
  }
  saveWrongAnswers(records);
}

export function getRunHistory(): RunRecord[] {
  const raw = localStorage.getItem(RUN_HISTORY_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveRunRecord(record: RunRecord): void {
  const history = getRunHistory();
  history.push(record);
  localStorage.setItem(RUN_HISTORY_KEY, JSON.stringify(history));
}

export function getConsecutivePerfectRuns(): number {
  const history = getRunHistory();
  let count = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].score === history[i].totalQuestions) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

export function isLectureModeEnabled(): boolean {
  return localStorage.getItem(LECTURE_MODE_KEY) === "true";
}

export function setLectureMode(enabled: boolean): void {
  localStorage.setItem(LECTURE_MODE_KEY, String(enabled));
}

export function clearAllData(): void {
  localStorage.removeItem(WRONG_ANSWERS_KEY);
  localStorage.removeItem(RUN_HISTORY_KEY);
  localStorage.removeItem(LECTURE_MODE_KEY);
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
