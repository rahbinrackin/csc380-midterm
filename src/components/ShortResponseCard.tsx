import { useState } from "react";
import type { ShortResponseQuestion } from "../types";

interface Props {
  question: ShortResponseQuestion;
  index: number;
  total: number;
  onGrade: (correct: boolean) => void;
  onNext: () => void;
}

export default function ShortResponseCard({ question, index, total, onGrade, onNext }: Props) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [graded, setGraded] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleGrade = (gotIt: boolean) => {
    setGraded(true);
    onGrade(gotIt);
  };

  return (
    <div>
      <div className="question-header">
        <span className="question-counter">Q {index + 1} / {total}</span>
        {question.category && <span className="badge">{question.category}</span>}
        <span className="badge" style={{ borderColor: "var(--warning)", color: "var(--warning)" }}>
          SHORT RESPONSE
        </span>
      </div>

      <div className="question-box">
        {question.question.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < question.question.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Your Answer
      </div>
      <textarea
        className="input-field short-response-textarea"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={revealed}
        rows={6}
      />

      {!revealed && (
        <div className="btn-row">
          <button className="btn btn--outline" onClick={onNext}>SKIP</button>
          <button className="btn btn--primary" onClick={handleReveal}>
            REVEAL ANSWER
          </button>
        </div>
      )}

      {revealed && (
        <div className="explanation-card" style={{ borderLeftColor: "var(--accent)" }}>
          <h4 style={{ color: "var(--accent)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
            Model Answer
          </h4>
          <div className="short-response-model">
            {question.modelAnswer.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < question.modelAnswer.split("\n").length - 1 && <br />}
              </span>
            ))}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h4 style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
              Key Points to Include
            </h4>
            <ul className="key-points-list">
              {question.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {revealed && !graded && (
        <div style={{ marginTop: "1.25rem" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem", textAlign: "center" }}>
            How did you do? Compare your answer to the model answer above.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <button className="btn btn--wrong" onClick={() => handleGrade(false)}>
              MISSED IT
            </button>
            <button className="btn btn--correct" onClick={() => handleGrade(true)}>
              GOT IT
            </button>
          </div>
        </div>
      )}

      {graded && (
        <div className="btn-row" style={{ justifyContent: "center", marginTop: "1rem" }}>
          <button className="btn btn--primary" onClick={onNext}>NEXT</button>
        </div>
      )}
    </div>
  );
}
