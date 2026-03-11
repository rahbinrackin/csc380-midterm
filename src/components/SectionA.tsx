import { useState } from "react";
import { matchingGroups } from "../data/matchingData";
import MatchingBoard from "./MatchingBoard";

interface Props {
  onComplete: (score: number, total: number) => void;
  onBack: () => void;
}

export default function SectionA({ onComplete, onBack }: Props) {
  const [groupIdx, setGroupIdx] = useState(0);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [totalPairs, setTotalPairs] = useState(0);

  const handleGroupComplete = (mistakes: number) => {
    const pairs = matchingGroups[groupIdx].pairs.length;
    const newTotal = totalPairs + pairs;
    const newMistakes = totalMistakes + mistakes;

    if (groupIdx < matchingGroups.length - 1) {
      setTotalPairs(newTotal);
      setTotalMistakes(newMistakes);
      setGroupIdx(groupIdx + 1);
    } else {
      const score = newTotal - newMistakes;
      onComplete(Math.max(0, score), newTotal);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <div className="section-label">Section A</div>
          <h2 style={{ fontSize: "1.3rem" }}>Match Term to Definition</h2>
        </div>
        <button className="btn btn--outline" onClick={onBack}>EXIT</button>
      </div>

      <div style={{ marginBottom: "1rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
        Group {groupIdx + 1} of {matchingGroups.length}
      </div>

      <MatchingBoard
        key={groupIdx}
        group={matchingGroups[groupIdx]}
        onComplete={handleGroupComplete}
      />
    </div>
  );
}
