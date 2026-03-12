import { useState, useMemo } from "react";
import { diagramQuestions } from "../data/diagramData";
import type { DiagramQuestion } from "../types";
import { shuffle, recordWrongAnswer } from "../utils/storage";

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

export default function SectionC({ onComplete, onBack }: Props) {
  const questions = useMemo(() => shuffle([...diagramQuestions]), []);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [attackInput, setAttackInput] = useState("");
  const [preventionInput, setPreventionInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const current: DiagramQuestion = questions[currentIdx];

  const normalize = (s: string) => s.toLowerCase().trim();

  const isAttackCorrect = () => {
    const input = normalize(attackInput);
    if (!input) return false;
    return current.acceptableNames.some((name) => input.includes(normalize(name)));
  };

  const isPreventionCorrect = () => {
    const input = normalize(preventionInput);
    if (!input) return false;
    return current.acceptablePreventions.some((p) => input.includes(normalize(p)));
  };

  const handleSubmit = () => {
    if (!attackInput.trim() || !preventionInput.trim()) return;
    setSubmitted(true);
    const attackOk = isAttackCorrect();
    const prevOk = isPreventionCorrect();
    if (attackOk && prevOk) {
      setScore((s) => s + 1);
    } else {
      recordWrongAnswer(current.id, "sectionC");
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      onComplete(score, questions.length);
    } else {
      setCurrentIdx(currentIdx + 1);
      setAttackInput("");
      setPreventionInput("");
      setSubmitted(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label">Section C</div>
          <h2 style={{ fontSize: "1.3rem" }}>Diagram Identification</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      <div className="question-header">
        <span className="question-counter">Q {currentIdx + 1} / {questions.length}</span>
        <span className="badge">ATTACK DIAGRAMS</span>
      </div>

      <div className="question-box">
        Look at the diagram below. Identify the type of attack and provide a prevention method.
      </div>

      <img
        src={current.imageUrl}
        alt="Attack diagram"
        className="diagram-image"
        style={{ display: "block", margin: "0 auto 1.5rem" }}
      />

      <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Attack Name
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="e.g., Man-in-the-Middle"
        value={attackInput}
        onChange={(e) => setAttackInput(e.target.value)}
        disabled={submitted}
        style={submitted ? {
          borderColor: isAttackCorrect() ? "var(--correct)" : "var(--wrong)",
        } : {}}
      />

      <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Prevention Method
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="e.g., Use encryption, VPN"
        value={preventionInput}
        onChange={(e) => setPreventionInput(e.target.value)}
        disabled={submitted}
        style={submitted ? {
          borderColor: isPreventionCorrect() ? "var(--correct)" : "var(--wrong)",
        } : {}}
      />

      {submitted && (
        <div className={`explanation-card${(!isAttackCorrect() || !isPreventionCorrect()) ? " explanation-card--wrong" : ""}`}>
          {!isAttackCorrect() && (
            <>
              <h4 className="wrong-label">Attack Name</h4>
              <p>The correct answer is: <strong>{current.attackName}</strong></p>
            </>
          )}
          {isAttackCorrect() && (
            <h4 className="correct-label">Attack Name - Correct!</h4>
          )}
          {!isPreventionCorrect() && (
            <>
              <h4 className="wrong-label" style={{ marginTop: "0.75rem" }}>Prevention</h4>
              <p>A good prevention is: <strong>{current.prevention}</strong></p>
            </>
          )}
          {isPreventionCorrect() && (
            <h4 className="correct-label" style={{ marginTop: "0.75rem" }}>Prevention - Correct!</h4>
          )}
          <p style={{ marginTop: "0.75rem" }}>{current.explanation}</p>
        </div>
      )}

      {!submitted && (
        <div className="btn-row">
          <button className="btn btn--outline" onClick={handleNext}>SKIP</button>
          <button
            className="btn btn--primary"
            onClick={handleSubmit}
            disabled={!attackInput.trim() || !preventionInput.trim()}
          >
            SUBMIT
          </button>
        </div>
      )}

      {submitted && (
        <div className="btn-row">
          <button className="btn btn--primary" onClick={handleNext}>NEXT</button>
        </div>
      )}
    </div>
  );
}
