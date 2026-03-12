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
  const isMulti = !!question.multiSelect && !!question.correctAnswers;
  const requiredCount = question.multiSelect ?? 1;

  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelected, setMultiSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (i: number) => {
    if (submitted) return;

    if (isMulti) {
      setMultiSelected((prev) => {
        const next = new Set(prev);
        if (next.has(i)) {
          next.delete(i);
        } else if (next.size < requiredCount) {
          next.add(i);
        }
        return next;
      });
    } else {
      setSelected(i);
    }
  };

  const isCorrectMulti = () => {
    if (!question.correctAnswers) return false;
    const correct = new Set(question.correctAnswers);
    if (multiSelected.size !== correct.size) return false;
    for (const v of multiSelected) {
      if (!correct.has(v)) return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (isMulti) {
      if (multiSelected.size !== requiredCount) return;
      setSubmitted(true);
      onAnswer(isCorrectMulti());
    } else {
      if (selected === null) return;
      setSubmitted(true);
      onAnswer(selected === question.correctAnswer);
    }
  };

  const getChoiceClass = (i: number) => {
    const base = "choice-card";

    if (!submitted) {
      if (isMulti) {
        return `${base}${multiSelected.has(i) ? " choice-card--selected" : ""}`;
      }
      return `${base}${selected === i ? " choice-card--selected" : ""}`;
    }

    let cls = `${base} choice-card--disabled`;

    if (isMulti) {
      const correct = new Set(question.correctAnswers);
      if (correct.has(i)) cls += " choice-card--correct";
      else if (multiSelected.has(i)) cls += " choice-card--wrong";
    } else {
      if (i === question.correctAnswer) cls += " choice-card--correct";
      else if (i === selected) cls += " choice-card--wrong";
    }

    return cls;
  };

  const isAnswerCorrect = isMulti
    ? isCorrectMulti()
    : selected === question.correctAnswer;

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

      {isMulti && !submitted && (
        <div style={{ fontSize: "0.85rem", color: "var(--accent)", marginBottom: "0.75rem", fontWeight: 500 }}>
          Select {requiredCount} — {multiSelected.size} of {requiredCount} chosen
        </div>
      )}

      {question.choices.map((choice, i) => (
        <div
          key={i}
          className={getChoiceClass(i)}
          onClick={() => handleSelect(i)}
          role="button"
          tabIndex={submitted ? -1 : 0}
          aria-label={`Choice ${LETTERS[i]}: ${choice}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelect(i);
            }
          }}
        >
          <span className="choice-letter">{LETTERS[i]}</span>
          <span className="choice-text">{choice}</span>
        </div>
      ))}

      {submitted && !isAnswerCorrect && (
        <div className="explanation-card explanation-card--wrong">
          {isMulti ? (
            <>
              <h4 className="wrong-label">Incorrect selection</h4>
              <p>
                The correct answers are:{" "}
                <strong>
                  {question.correctAnswers!.map((idx) => `${LETTERS[idx]}. ${question.choices[idx]}`).join("; ")}
                </strong>
              </p>
              {[...multiSelected].filter((s) => !question.correctAnswers!.includes(s)).map((wrongIdx) => (
                question.wrongExplanations[wrongIdx] && (
                  <p key={wrongIdx} style={{ marginTop: "0.5rem" }}>
                    <strong>{LETTERS[wrongIdx]}:</strong> {question.wrongExplanations[wrongIdx]}
                  </p>
                )
              ))}
            </>
          ) : (
            <>
              <h4 className="wrong-label">Why your answer is wrong</h4>
              <p>{question.wrongExplanations[selected!]}</p>
              <h4 className="correct-label" style={{ marginTop: "1rem" }}>
                Correct Answer: {LETTERS[question.correctAnswer]}
              </h4>
            </>
          )}
          <p style={{ marginTop: "0.75rem" }}>{question.explanation}</p>
        </div>
      )}

      {submitted && isAnswerCorrect && (
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
            disabled={isMulti ? multiSelected.size !== requiredCount : selected === null}
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
