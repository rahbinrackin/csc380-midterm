import { useState, useEffect } from "react";
import type { Section } from "../types";
import {
  getWrongAnswers,
  getRunHistory,
  saveRunRecord,
  getConsecutivePerfectRuns,
  isLectureModeEnabled,
  setLectureMode,
  clearAllData,
} from "../utils/storage";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import ReviewMode from "./ReviewMode";
import Results from "./Results";

export default function App() {
  const [view, setView] = useState<Section>("home");
  const [resultData, setResultData] = useState({ section: "", score: 0, total: 0 });
  const [showMasteryModal, setShowMasteryModal] = useState(false);
  const [lectureEnabled, setLectureEnabled] = useState(isLectureModeEnabled());

  const wrongAnswers = getWrongAnswers();
  const runHistory = getRunHistory();
  const perfectStreak = getConsecutivePerfectRuns();

  useEffect(() => {
    setLectureEnabled(isLectureModeEnabled());
  }, [view]);

  const handleSectionComplete = (section: string, score: number, total: number) => {
    saveRunRecord({
      runNumber: runHistory.length + 1,
      section,
      score,
      totalQuestions: total,
      timestamp: Date.now(),
    });

    setResultData({ section, score, total });
    setView("results");

    if (score === total && getConsecutivePerfectRuns() >= 2 && !isLectureModeEnabled()) {
      setTimeout(() => setShowMasteryModal(true), 1000);
    }
  };

  const handleEnableLecture = () => {
    setLectureMode(true);
    setLectureEnabled(true);
    setShowMasteryModal(false);
  };

  const handleToggleLecture = () => {
    const next = !lectureEnabled;
    setLectureMode(next);
    setLectureEnabled(next);
  };

  const handleReset = () => {
    if (window.confirm("This will clear all progress, wrong answers, and run history. Are you sure?")) {
      clearAllData();
      setLectureEnabled(false);
      setView("home");
    }
  };

  const sectionScores = (sectionName: string) => {
    const runs = runHistory.filter((r) => r.section === sectionName);
    if (runs.length === 0) return null;
    const last = runs[runs.length - 1];
    return Math.round((last.score / last.totalQuestions) * 100);
  };

  if (view === "sectionA") {
    return (
      <SectionA
        onComplete={(score, total) => handleSectionComplete("Section A", score, total)}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "sectionB") {
    return (
      <SectionB
        key={Date.now()}
        onComplete={(score, total) => handleSectionComplete("Section B", score, total)}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "sectionC") {
    return (
      <SectionC
        key={Date.now()}
        onComplete={(score, total) => handleSectionComplete("Section C", score, total)}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "sectionD") {
    return (
      <SectionD
        key={Date.now()}
        onComplete={(score, total) => handleSectionComplete("Section D", score, total)}
        onBack={() => setView("home")}
      />
    );
  }

  if (view === "review") {
    return <ReviewMode onBack={() => setView("home")} />;
  }

  if (view === "results") {
    return (
      <Results
        section={resultData.section}
        score={resultData.score}
        total={resultData.total}
        onHome={() => setView("home")}
      />
    );
  }

  return (
    <div>
      <h1 className="home-title">CSC 380 Midterm Study</h1>
      <p className="home-subtitle">
        Computer Security — {runHistory.length} run{runHistory.length !== 1 ? "s" : ""} completed
        {perfectStreak > 0 && ` • ${perfectStreak} perfect in a row`}
      </p>

      {wrongAnswers.length > 0 && (
        <button className="review-btn" onClick={() => setView("review")}>
          Review Mistakes ({wrongAnswers.length} question{wrongAnswers.length !== 1 ? "s" : ""})
        </button>
      )}

      <div className="section-grid">
        <div className="section-card" onClick={() => setView("sectionA")}>
          <div className="section-label">Section A</div>
          <h3>Match Term to Definition</h3>
          <p>Malware, social engineering, threat actors</p>
          {sectionScores("Section A") !== null && (
            <div className="progress-bar-bg">
              <div
                className={`progress-bar-fill${sectionScores("Section A") === 100 ? " progress-bar-fill--correct" : ""}`}
                style={{ width: `${sectionScores("Section A")}%` }}
              />
            </div>
          )}
        </div>

        <div className="section-card" onClick={() => setView("sectionB")}>
          <div className="section-label">Section B</div>
          <h3>Multiple Choice</h3>
          <p>~40 questions from the question bank</p>
          {sectionScores("Section B") !== null && (
            <div className="progress-bar-bg">
              <div
                className={`progress-bar-fill${sectionScores("Section B") === 100 ? " progress-bar-fill--correct" : ""}`}
                style={{ width: `${sectionScores("Section B")}%` }}
              />
            </div>
          )}
        </div>

        <div className="section-card" onClick={() => setView("sectionC")}>
          <div className="section-label">Section C</div>
          <h3>Diagram Identification</h3>
          <p>Name the attack and prevention method</p>
          {sectionScores("Section C") !== null && (
            <div className="progress-bar-bg">
              <div
                className={`progress-bar-fill${sectionScores("Section C") === 100 ? " progress-bar-fill--correct" : ""}`}
                style={{ width: `${sectionScores("Section C")}%` }}
              />
            </div>
          )}
        </div>

        <div className="section-card" onClick={() => setView("sectionD")}>
          <div className="section-label">Section D</div>
          <h3>Buffer Overflow</h3>
          <p>Stack, heap, defenses, scenarios</p>
          {sectionScores("Section D") !== null && (
            <div className="progress-bar-bg">
              <div
                className={`progress-bar-fill${sectionScores("Section D") === 100 ? " progress-bar-fill--correct" : ""}`}
                style={{ width: `${sectionScores("Section D")}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {lectureEnabled && (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="badge badge--lecture" style={{ cursor: "pointer" }} onClick={handleToggleLecture}>
            LECTURE MODE ON — Click to disable
          </span>
        </div>
      )}

      <button className="reset-btn" onClick={handleReset} style={{ display: "block", margin: "1rem auto 0" }}>
        Reset All Progress
      </button>

      {showMasteryModal && (
        <div className="modal-overlay" onClick={() => setShowMasteryModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>You're on fire!</h2>
            <p>
              You've scored 100% on the last {perfectStreak} runs. You might be memorizing the answers
              rather than learning the concepts. Want to add some challenge questions from your lecture slides
              to keep things fresh?
            </p>
            <div className="btn-row" style={{ justifyContent: "flex-end" }}>
              <button className="btn btn--outline" onClick={() => setShowMasteryModal(false)}>
                No thanks
              </button>
              <button className="btn btn--primary" onClick={handleEnableLecture}>
                Enable Lecture Questions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
