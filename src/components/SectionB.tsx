import { useState, useMemo } from "react";
import { multipleChoiceQuestions } from "../data/multipleChoice";
import { lectureQuestions } from "../data/lectureQuestions";
import type { MCQuestion } from "../types";
import { shuffle, isLectureModeEnabled, recordWrongAnswer } from "../utils/storage";
import QuestionCard from "./QuestionCard";

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

export default function SectionB({ onComplete, onBack }: Props) {
  const questions = useMemo(() => {
    let qs: MCQuestion[] = shuffle([...multipleChoiceQuestions]);

    if (isLectureModeEnabled()) {
      const lecMC = lectureQuestions.filter(
        (q) => q.category !== "BUFFER OVERFLOW"
      );
      const lecSample = shuffle(lecMC).slice(0, 3);
      qs = [...qs, ...lecSample];
    }

    return qs;
  }, []);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
    } else {
      recordWrongAnswer(questions[currentIdx].id, "sectionB");
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      onComplete(score, questions.length);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label">Section B</div>
          <h2 style={{ fontSize: "1.3rem" }}>Multiple Choice</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      <QuestionCard
        key={questions[currentIdx].id}
        question={questions[currentIdx]}
        index={currentIdx}
        total={questions.length}
        onAnswer={handleAnswer}
        onSkip={handleNext}
      />
    </div>
  );
}
