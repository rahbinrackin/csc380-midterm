import { useState, useMemo } from "react";
import { bufferOverflowQuestions } from "../data/bufferOverflow";
import { lectureQuestions } from "../data/lectureQuestions";
import { shortResponseQuestions } from "../data/shortResponse";
import type { MCQuestion, ShortResponseQuestion } from "../types";
import { shuffle, isLectureModeEnabled, recordWrongAnswer } from "../utils/storage";
import QuestionCard from "./QuestionCard";
import ShortResponseCard from "./ShortResponseCard";

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

type DMode = "pick" | "all" | "mc" | "sr";

type QueueItem =
  | { type: "mc"; question: MCQuestion }
  | { type: "sr"; question: ShortResponseQuestion; dividerLabel?: string };

function buildQueue(mode: "all" | "mc" | "sr"): QueueItem[] {
  const items: QueueItem[] = [];

  if (mode === "all" || mode === "mc") {
    let mcQs: MCQuestion[] = shuffle([...bufferOverflowQuestions]);
    if (isLectureModeEnabled()) {
      const lecBO = lectureQuestions.filter((q) => q.category === "BUFFER OVERFLOW");
      mcQs = [...mcQs, ...shuffle(lecBO).slice(0, 2)];
    }
    mcQs.forEach((q) => items.push({ type: "mc", question: q }));
  }

  if (mode === "all" || mode === "sr") {
    const examSR = shortResponseQuestions.filter((q) => q.group === "exam");
    const extraSR = shortResponseQuestions.filter((q) => q.group === "extra");

    examSR.forEach((q, i) =>
      items.push({
        type: "sr",
        question: q,
        dividerLabel: i === 0 && mode === "all" ? "Exam Questions — Short Response" : undefined,
      })
    );

    extraSR.forEach((q, i) =>
      items.push({
        type: "sr",
        question: q,
        dividerLabel: i === 0 ? "Extra Practice — Short Response" : undefined,
      })
    );
  }

  return items;
}

export default function SectionD({ onComplete, onBack }: Props) {
  const [mode, setMode] = useState<DMode>("pick");

  const queue = useMemo(() => {
    if (mode === "pick") return [];
    return buildQueue(mode);
  }, [mode]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  if (mode === "pick") {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <div className="section-label">Section D</div>
            <h2 style={{ fontSize: "1.3rem" }}>Buffer Overflow</h2>
          </div>
          <button className="btn btn--outline" onClick={onBack}>EXIT</button>
        </div>

        <div className="question-box">
          What would you like to practice?
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
          <button className="section-card" style={{ textAlign: "left" }} onClick={() => setMode("all")}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>All Questions</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              MC questions + Short Response (exam &amp; extra)
            </p>
          </button>

          <button className="section-card" style={{ textAlign: "left" }} onClick={() => setMode("mc")}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Multiple Choice Only</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {bufferOverflowQuestions.length} buffer overflow MC questions
            </p>
          </button>

          <button className="section-card" style={{ textAlign: "left" }} onClick={() => setMode("sr")}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Short Response Only</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {shortResponseQuestions.length} short answer questions (exam + extra practice)
            </p>
          </button>
        </div>
      </div>
    );
  }

  const totalQuestions = queue.length;
  const current = queue[currentIdx];

  const handleMCAnswer = (correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
    } else {
      const q = current as { type: "mc"; question: MCQuestion };
      recordWrongAnswer(q.question.id, "sectionD");
    }
  };

  const handleSRGrade = (gotIt: boolean) => {
    if (gotIt) {
      setScore((s) => s + 1);
    } else {
      const q = current as { type: "sr"; question: ShortResponseQuestion };
      recordWrongAnswer(q.question.id, "sectionD");
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= totalQuestions) {
      onComplete(score, totalQuestions);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const modeLabel = mode === "mc" ? "Multiple Choice" : mode === "sr" ? "Short Response" : "All Questions";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label">Section D</div>
          <h2 style={{ fontSize: "1.3rem" }}>Buffer Overflow — {modeLabel}</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      {current.type === "sr" && (current as { type: "sr"; question: ShortResponseQuestion; dividerLabel?: string }).dividerLabel && (
        <div className="section-divider">
          <span>{(current as { type: "sr"; question: ShortResponseQuestion; dividerLabel?: string }).dividerLabel}</span>
        </div>
      )}

      {current.type === "mc" && (
        <QuestionCard
          key={current.question.id}
          question={current.question}
          index={currentIdx}
          total={totalQuestions}
          onAnswer={handleMCAnswer}
          onSkip={handleNext}
        />
      )}

      {current.type === "sr" && (
        <ShortResponseCard
          key={current.question.id}
          question={current.question}
          index={currentIdx}
          total={totalQuestions}
          onGrade={handleSRGrade}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
