import { useState } from "react";
import type { MCQuestion } from "../types";

interface Props {
  question: MCQuestion;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
  onSkip: () => void;
}

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function QuestionCard({ question, index, total, onAnswer, onSkip }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (i: number) => {
    if (submitted) return;
    setSelected(i);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    onAnswer(selected === question.correctAnswer);
  };

  const getChoiceClass = (i: number) => {
    const base = "choice-card";
    if (!submitted) {
      return `${base}${selected === i ? " choice-card--selected" : ""}`;
    }
    let cls = `${base} choice-card--disabled`;
    if (i === question.correctAnswer) cls += " choice-card--correct";
    else if (i === selected) cls += " choice-card--wrong";
    return cls;
  };

  return (
    <div>
      <div className="question-header">
        <span className="question-counter">Q {index + 1} / {total}</span>
        {question.category && <span className="badge">{question.category}</span>}
        {question.source === "lecture" && <span className="badge badge--lecture">LECTURE</span>}
      </div>

      <div className="question-box">
        {question.question.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < question.question.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>

      {question.choices.map((choice, i) => (
        <div
          key={i}
          className={getChoiceClass(i)}
          onClick={() => handleSelect(i)}
          role="button"
          tabIndex={submitted ? -1 : 0}
          aria-label={`Choice ${LETTERS[i]}: ${choice}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSelect(i);
            }
          }}
        >
          <span className="choice-letter">{LETTERS[i]}</span>
          <span className="choice-text">{choice}</span>
        </div>
      ))}

      {submitted && selected !== null && selected !== question.correctAnswer && (
        <div className="explanation-card explanation-card--wrong">
          <h4 className="wrong-label">Why your answer is wrong</h4>
          <p>{question.wrongExplanations[selected]}</p>
          <h4 className="correct-label" style={{ marginTop: "1rem" }}>Correct Answer: {LETTERS[question.correctAnswer]}</h4>
          <p>{question.explanation}</p>
        </div>
      )}

      {submitted && selected === question.correctAnswer && (
        <div className="explanation-card">
          <h4 className="correct-label">Correct!</h4>
          <p>{question.explanation}</p>
        </div>
      )}

      {!submitted && (
        <div className="btn-row">
          <button className="btn btn--outline" onClick={onSkip}>SKIP</button>
          <button
            className="btn btn--primary"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            SUBMIT
          </button>
        </div>
      )}

      {submitted && (
        <div className="btn-row">
          <button className="btn btn--primary" onClick={onSkip}>
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}
