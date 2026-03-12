import { useState } from "react";
import { diagramQuestions } from "../data/diagramData";
import { recordWrongAnswer } from "../utils/storage";

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

interface RowState {
  attack: string;
  prevention: string;
}

export default function SectionC({ onComplete, onBack }: Props) {
  const [rows, setRows] = useState<RowState[]>(
    diagramQuestions.map(() => ({ attack: "", prevention: "" }))
  );
  const [submitted, setSubmitted] = useState(false);

  const normalize = (s: string) => s.toLowerCase().trim();

  const isAttackCorrect = (idx: number) => {
    const input = normalize(rows[idx].attack);
    if (!input) return false;
    return diagramQuestions[idx].acceptableNames.some((name) =>
      input.includes(normalize(name))
    );
  };

  const isPreventionCorrect = (idx: number) => {
    const input = normalize(rows[idx].prevention);
    if (!input) return false;
    return diagramQuestions[idx].acceptablePreventions.some((p) =>
      input.includes(normalize(p))
    );
  };

  const handleChange = (idx: number, field: "attack" | "prevention", value: string) => {
    setRows((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    diagramQuestions.forEach((q, i) => {
      const attackOk = isAttackCorrect(i);
      const prevOk = isPreventionCorrect(i);
      if (attackOk && prevOk) {
        score++;
      } else {
        recordWrongAnswer(q.id, "sectionC");
      }
    });
    onComplete(score, diagramQuestions.length);
  };

  const getRowBorder = (idx: number) => {
    if (!submitted) return {};
    const attackOk = isAttackCorrect(idx);
    const prevOk = isPreventionCorrect(idx);
    if (attackOk && prevOk) return { borderLeft: "3px solid var(--correct)" };
    return { borderLeft: "3px solid var(--wrong)" };
  };

  const page1 = diagramQuestions.filter((q) => q.imageUrl.includes("qbank-06"));
  const page2 = diagramQuestions.filter((q) => q.imageUrl.includes("qbank-07"));
  const page1Count = page1.length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label">Section C</div>
          <h2 style={{ fontSize: "1.3rem" }}>Diagram Identification</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      <div className="question-box">
        <strong>Q30:</strong> Consider the diagrams shown, fill in the best attack description and the corresponding preventions.
      </div>

      {/* Page 1: Diagrams 1-10 */}
      <img
        src="/diagrams/qbank-06.png"
        alt="Diagrams 1 through 10"
        className="diagram-image"
        style={{ display: "block", margin: "0 auto 1.5rem", width: "100%" }}
      />

      <div className="diagram-table">
        {page1.map((q, i) => (
          <div key={q.id} className="diagram-row card" style={{ ...getRowBorder(i), marginBottom: "0.75rem", padding: "0.85rem 1rem" }}>
            <div className="diagram-row-header">
              <span className="diagram-row-num">{i + 1}</span>
              {submitted && (
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: isAttackCorrect(i) && isPreventionCorrect(i) ? "var(--correct)" : "var(--wrong)" }}>
                  {isAttackCorrect(i) && isPreventionCorrect(i) ? "CORRECT" : "INCORRECT"}
                </span>
              )}
            </div>
            <div className="diagram-row-inputs">
              <div className="diagram-input-group">
                <label className="diagram-input-label">Attack Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Phishing"
                  value={rows[i].attack}
                  onChange={(e) => handleChange(i, "attack", e.target.value)}
                  disabled={submitted}
                  style={submitted ? { borderColor: isAttackCorrect(i) ? "var(--correct)" : "var(--wrong)" } : {}}
                />
              </div>
              <div className="diagram-input-group">
                <label className="diagram-input-label">Prevention</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., User awareness training"
                  value={rows[i].prevention}
                  onChange={(e) => handleChange(i, "prevention", e.target.value)}
                  disabled={submitted}
                  style={submitted ? { borderColor: isPreventionCorrect(i) ? "var(--correct)" : "var(--wrong)" } : {}}
                />
              </div>
            </div>
            {submitted && (!isAttackCorrect(i) || !isPreventionCorrect(i)) && (
              <div className="diagram-row-answer">
                {!isAttackCorrect(i) && (
                  <p><span className="wrong-label">Attack:</span> {q.attackName}</p>
                )}
                {!isPreventionCorrect(i) && (
                  <p><span className="wrong-label">Prevention:</span> {q.prevention}</p>
                )}
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.35rem" }}>{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Page 2: Diagrams 11-15 */}
      <img
        src="/diagrams/qbank-07.png"
        alt="Diagrams 11 through 15"
        className="diagram-image"
        style={{ display: "block", margin: "1.5rem auto", width: "100%" }}
      />

      <div className="diagram-table">
        {page2.map((q, j) => {
          const i = page1Count + j;
          return (
            <div key={q.id} className="diagram-row card" style={{ ...getRowBorder(i), marginBottom: "0.75rem", padding: "0.85rem 1rem" }}>
              <div className="diagram-row-header">
                <span className="diagram-row-num">{i + 1}</span>
                {submitted && (
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: isAttackCorrect(i) && isPreventionCorrect(i) ? "var(--correct)" : "var(--wrong)" }}>
                    {isAttackCorrect(i) && isPreventionCorrect(i) ? "CORRECT" : "INCORRECT"}
                  </span>
                )}
              </div>
              <div className="diagram-row-inputs">
                <div className="diagram-input-group">
                  <label className="diagram-input-label">Attack Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g., Phishing"
                    value={rows[i].attack}
                    onChange={(e) => handleChange(i, "attack", e.target.value)}
                    disabled={submitted}
                    style={submitted ? { borderColor: isAttackCorrect(i) ? "var(--correct)" : "var(--wrong)" } : {}}
                  />
                </div>
                <div className="diagram-input-group">
                  <label className="diagram-input-label">Prevention</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g., User awareness training"
                    value={rows[i].prevention}
                    onChange={(e) => handleChange(i, "prevention", e.target.value)}
                    disabled={submitted}
                    style={submitted ? { borderColor: isPreventionCorrect(i) ? "var(--correct)" : "var(--wrong)" } : {}}
                  />
                </div>
              </div>
              {submitted && (!isAttackCorrect(i) || !isPreventionCorrect(i)) && (
                <div className="diagram-row-answer">
                  {!isAttackCorrect(i) && (
                    <p><span className="wrong-label">Attack:</span> {q.attackName}</p>
                  )}
                  {!isPreventionCorrect(i) && (
                    <p><span className="wrong-label">Prevention:</span> {q.prevention}</p>
                  )}
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.35rem" }}>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="btn-row" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <button
            className="btn btn--primary"
            onClick={handleSubmit}
            style={{ padding: "0.75rem 3rem", fontSize: "1rem" }}
          >
            SUBMIT ALL
          </button>
        </div>
      )}

      {submitted && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Your score has been recorded. Return home to see your results.
          </p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "1rem" }}>
            <button className="btn btn--primary" onClick={onBack}>HOME</button>
          </div>
        </div>
      )}
    </div>
  );
}
