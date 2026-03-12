import { useState, useMemo } from "react";
import { multipleChoiceQuestions } from "../data/multipleChoice";
import { bufferOverflowQuestions } from "../data/bufferOverflow";
import { lectureQuestions } from "../data/lectureQuestions";
import { diagramQuestions } from "../data/diagramData";
import { shortResponseQuestions } from "../data/shortResponse";
import type { MCQuestion, DiagramQuestion, ShortResponseQuestion } from "../types";
import { getWrongAnswers, decrementWrongAnswer } from "../utils/storage";
import QuestionCard from "./QuestionCard";
import ShortResponseCard from "./ShortResponseCard";

interface Props {
  onBack: () => void;
}

type ReviewItem =
  | { type: "mc"; question: MCQuestion }
  | { type: "diagram"; question: DiagramQuestion }
  | { type: "sr"; question: ShortResponseQuestion };

export default function ReviewMode({ onBack }: Props) {
  const reviewItems = useMemo(() => {
    const wrongRecords = getWrongAnswers();
    if (wrongRecords.length === 0) return [];

    wrongRecords.sort((a, b) => b.wrongCount - a.wrongCount);

    const allMC: MCQuestion[] = [
      ...multipleChoiceQuestions,
      ...bufferOverflowQuestions,
      ...lectureQuestions,
    ];

    const items: ReviewItem[] = [];
    for (const record of wrongRecords) {
      const mc = allMC.find((q) => q.id === record.questionId);
      if (mc) { items.push({ type: "mc", question: mc }); continue; }

      const diag = diagramQuestions.find((q) => q.id === record.questionId);
      if (diag) { items.push({ type: "diagram", question: diag }); continue; }

      const sr = shortResponseQuestions.find((q) => q.id === record.questionId);
      if (sr) { items.push({ type: "sr", question: sr }); continue; }
    }
    return items;
  }, []);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Diagram-specific state
  const [attackInput, setAttackInput] = useState("");
  const [preventionInput, setPreventionInput] = useState("");
  const [diagramSubmitted, setDiagramSubmitted] = useState(false);

  if (reviewItems.length === 0) {
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
    const pct = reviewItems.length > 0 ? Math.round((score / reviewItems.length) * 100) : 0;
    return (
      <div className="results-section">
        <div className="section-label" style={{ marginBottom: "1rem" }}>Review Complete</div>
        <div className="results-score">{pct}%</div>
        <div className="results-label">{score} / {reviewItems.length} correct</div>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
          Questions you got right have been decremented from your mistake pool.
        </p>
        <button className="btn btn--primary" onClick={onBack}>Back to Home</button>
      </div>
    );
  }

  const current = reviewItems[currentIdx];

  const handleNext = () => {
    if (currentIdx + 1 >= reviewItems.length) {
      setFinished(true);
    } else {
      setCurrentIdx(currentIdx + 1);
      setAttackInput("");
      setPreventionInput("");
      setDiagramSubmitted(false);
    }
  };

  const handleMCAnswer = (correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
      decrementWrongAnswer(current.question.id);
    }
  };

  const handleSRGrade = (gotIt: boolean) => {
    if (gotIt) {
      setScore((s) => s + 1);
      decrementWrongAnswer(current.question.id);
    }
  };

  const normalize = (s: string) => s.toLowerCase().trim();

  const isDiagramAttackCorrect = () => {
    if (current.type !== "diagram") return false;
    const q = current.question;
    const input = normalize(attackInput);
    if (!input) return false;
    return q.acceptableNames.some((name) => input.includes(normalize(name)));
  };

  const isDiagramPreventionCorrect = () => {
    if (current.type !== "diagram") return false;
    const q = current.question;
    const input = normalize(preventionInput);
    if (!input) return false;
    return q.acceptablePreventions.some((p) => input.includes(normalize(p)));
  };

  const handleDiagramSubmit = () => {
    if (!attackInput.trim() || !preventionInput.trim()) return;
    setDiagramSubmitted(true);
    if (isDiagramAttackCorrect() && isDiagramPreventionCorrect()) {
      setScore((s) => s + 1);
      decrementWrongAnswer(current.question.id);
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

      {current.type === "mc" && (
        <QuestionCard
          key={current.question.id + "-review"}
          question={current.question}
          index={currentIdx}
          total={reviewItems.length}
          onAnswer={handleMCAnswer}
          onSkip={handleNext}
        />
      )}

      {current.type === "sr" && (
        <ShortResponseCard
          key={current.question.id + "-review"}
          question={current.question}
          index={currentIdx}
          total={reviewItems.length}
          onGrade={handleSRGrade}
          onNext={handleNext}
        />
      )}

      {current.type === "diagram" && (() => {
        const q = current.question;
        return (
          <div>
            <div className="question-header">
              <span className="question-counter">Q {currentIdx + 1} / {reviewItems.length}</span>
              <span className="badge">ATTACK DIAGRAMS</span>
            </div>

            <div className="question-box">
              Look at the diagram below. Identify the type of attack and provide a prevention method.
            </div>

            <img
              src={q.imageUrl}
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
              disabled={diagramSubmitted}
              style={diagramSubmitted ? { borderColor: isDiagramAttackCorrect() ? "var(--correct)" : "var(--wrong)" } : {}}
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
              disabled={diagramSubmitted}
              style={diagramSubmitted ? { borderColor: isDiagramPreventionCorrect() ? "var(--correct)" : "var(--wrong)" } : {}}
            />

            {diagramSubmitted && (
              <div className={`explanation-card${(!isDiagramAttackCorrect() || !isDiagramPreventionCorrect()) ? " explanation-card--wrong" : ""}`}>
                {!isDiagramAttackCorrect() && (
                  <>
                    <h4 className="wrong-label">Attack Name</h4>
                    <p>The correct answer is: <strong>{q.attackName}</strong></p>
                  </>
                )}
                {isDiagramAttackCorrect() && (
                  <h4 className="correct-label">Attack Name - Correct!</h4>
                )}
                {!isDiagramPreventionCorrect() && (
                  <>
                    <h4 className="wrong-label" style={{ marginTop: "0.75rem" }}>Prevention</h4>
                    <p>A good prevention is: <strong>{q.prevention}</strong></p>
                  </>
                )}
                {isDiagramPreventionCorrect() && (
                  <h4 className="correct-label" style={{ marginTop: "0.75rem" }}>Prevention - Correct!</h4>
                )}
                <p style={{ marginTop: "0.75rem" }}>{q.explanation}</p>
              </div>
            )}

            {!diagramSubmitted && (
              <div className="btn-row">
                <button className="btn btn--outline" onClick={handleNext}>SKIP</button>
                <button
                  className="btn btn--primary"
                  onClick={handleDiagramSubmit}
                  disabled={!attackInput.trim() || !preventionInput.trim()}
                >
                  SUBMIT
                </button>
              </div>
            )}

            {diagramSubmitted && (
              <div className="btn-row">
                <button className="btn btn--primary" onClick={handleNext}>NEXT</button>
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
}
