import { useState, useMemo } from "react";
import { multipleChoiceQuestions } from "../data/multipleChoice";
import { bufferOverflowQuestions } from "../data/bufferOverflow";
import { lectureQuestions } from "../data/lectureQuestions";
import type { MCQuestion } from "../types";
import { getWrongAnswers, decrementWrongAnswer } from "../utils/storage";
import QuestionCard from "./QuestionCard";

interface Props {
  onBack: () => void;
}

export default function ReviewMode({ onBack }: Props) {
  const allQuestions = useMemo(() => {
    const all: MCQuestion[] = [
      ...multipleChoiceQuestions,
      ...bufferOverflowQuestions,
      ...lectureQuestions,
    ];
    return all;
  }, []);

  const reviewQuestions = useMemo(() => {
    const wrongRecords = getWrongAnswers();
    if (wrongRecords.length === 0) return [];

    wrongRecords.sort((a, b) => b.wrongCount - a.wrongCount);

    const qs: MCQuestion[] = [];
    for (const record of wrongRecords) {
      const q = allQuestions.find((q) => q.id === record.questionId);
      if (q) qs.push(q);
    }
    return qs;
  }, [allQuestions]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (reviewQuestions.length === 0) {
    return (
      <div className="results-section">
        <div className="results-score" style={{ fontSize: "2rem" }}>
          No mistakes to review!
        </div>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          You haven't gotten any questions wrong yet, or you've already mastered them all.
        </p>
        <button className="btn btn--primary" onClick={onBack}>Back to Home</button>
      </div>
    );
  }

  if (finished) {
    const pct = reviewQuestions.length > 0 ? Math.round((score / reviewQuestions.length) * 100) : 0;
    return (
      <div className="results-section">
        <div className="section-label" style={{ marginBottom: "1rem" }}>Review Complete</div>
        <div className="results-score">{pct}%</div>
        <div className="results-label">{score} / {reviewQuestions.length} correct</div>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
          Questions you got right have been decremented from your mistake pool.
        </p>
        <button className="btn btn--primary" onClick={onBack}>Back to Home</button>
      </div>
    );
  }

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
      decrementWrongAnswer(reviewQuestions[currentIdx].id);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= reviewQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label" style={{ color: "var(--warning)" }}>Review Mistakes</div>
          <h2 style={{ fontSize: "1.3rem" }}>Questions You Got Wrong</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      <QuestionCard
        key={reviewQuestions[currentIdx].id + "-review"}
        question={reviewQuestions[currentIdx]}
        index={currentIdx}
        total={reviewQuestions.length}
        onAnswer={handleAnswer}
        onSkip={handleNext}
      />
    </div>
  );
}
