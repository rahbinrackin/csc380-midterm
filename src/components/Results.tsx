interface Props {
  section: string;
  score: number;
  total: number;
  onHome: () => void;
}

export default function Results({ section, score, total, onHome }: Props) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const isPerfect = score === total;

  return (
    <div className="results-section">
      <div className="section-label" style={{ marginBottom: "1rem" }}>{section} Complete</div>

      <div className="results-score" style={{ color: isPerfect ? "var(--correct)" : "var(--accent)" }}>
        {pct}%
      </div>
      <div className="results-label">
        {score} / {total} correct
      </div>

      {isPerfect && (
        <p style={{ color: "var(--correct)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
          Perfect score! Great job.
        </p>
      )}

      {!isPerfect && pct >= 80 && (
        <p style={{ color: "var(--accent)", marginBottom: "1.5rem" }}>
          Good work! Review your mistakes to keep improving.
        </p>
      )}

      {!isPerfect && pct < 80 && (
        <p style={{ color: "var(--warning)", marginBottom: "1.5rem" }}>
          Keep studying. Use the Review Mistakes mode to focus on what you got wrong.
        </p>
      )}

      <button className="btn btn--primary" onClick={onHome}>
        Back to Home
      </button>
    </div>
  );
}
