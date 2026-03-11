import { useState, useMemo } from "react";
import type { MatchingGroup } from "../types";
import { shuffle } from "../utils/storage";

interface Props {
  group: MatchingGroup;
  onComplete: (mistakes: number) => void;
}

export default function MatchingBoard({ group, onComplete }: Props) {
  const shuffledDefinitions = useMemo(() => shuffle(group.pairs.map((p) => p.definition)), [group]);

  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [selectedDef, setSelectedDef] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [matchedDefs, setMatchedDefs] = useState<Set<number>>(new Set());
  const [wrongTerm, setWrongTerm] = useState<number | null>(null);
  const [wrongDef, setWrongDef] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const handleTermClick = (i: number) => {
    if (matched.has(group.pairs[i].term)) return;
    setSelectedTerm(i);
    setWrongTerm(null);
    setWrongDef(null);

    if (selectedDef !== null) {
      tryMatch(i, selectedDef);
    }
  };

  const handleDefClick = (i: number) => {
    if (matchedDefs.has(i)) return;
    setSelectedDef(i);
    setWrongTerm(null);
    setWrongDef(null);

    if (selectedTerm !== null) {
      tryMatch(selectedTerm, i);
    }
  };

  const tryMatch = (termIdx: number, defIdx: number) => {
    const term = group.pairs[termIdx];
    const def = shuffledDefinitions[defIdx];

    if (term.definition === def) {
      const newMatched = new Set(matched);
      newMatched.add(term.term);
      setMatched(newMatched);
      const newMatchedDefs = new Set(matchedDefs);
      newMatchedDefs.add(defIdx);
      setMatchedDefs(newMatchedDefs);
      setSelectedTerm(null);
      setSelectedDef(null);

      if (newMatched.size === group.pairs.length) {
        setTimeout(() => onComplete(mistakes), 500);
      }
    } else {
      setMistakes((m) => m + 1);
      setWrongTerm(termIdx);
      setWrongDef(defIdx);
      setTimeout(() => {
        setWrongTerm(null);
        setWrongDef(null);
        setSelectedTerm(null);
        setSelectedDef(null);
      }, 800);
    }
  };

  const getTermClass = (i: number) => {
    const term = group.pairs[i].term;
    if (matched.has(term)) return "matching-item matching-item--matched";
    if (wrongTerm === i) return "matching-item matching-item--wrong";
    if (selectedTerm === i) return "matching-item matching-item--selected";
    return "matching-item";
  };

  const getDefClass = (i: number) => {
    if (matchedDefs.has(i)) return "matching-item matching-item--matched";
    if (wrongDef === i) return "matching-item matching-item--wrong";
    if (selectedDef === i) return "matching-item matching-item--selected";
    return "matching-item";
  };

  return (
    <div>
      <div className="question-header">
        <span className="question-counter">
          {matched.size} / {group.pairs.length} matched
        </span>
        <span className="badge">{group.title}</span>
        {mistakes > 0 && (
          <span style={{ color: "var(--wrong)", fontSize: "0.85rem", marginLeft: "auto" }}>
            {mistakes} mistake{mistakes !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div className="matching-container">
        <div className="matching-column">
          <h3>Terms</h3>
          {group.pairs.map((pair, i) => (
            <div
              key={i}
              className={getTermClass(i)}
              onClick={() => handleTermClick(i)}
              role="button"
              tabIndex={matched.has(pair.term) ? -1 : 0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleTermClick(i); } }}
            >
              {pair.term}
            </div>
          ))}
        </div>
        <div className="matching-column">
          <h3>Definitions</h3>
          {shuffledDefinitions.map((def, i) => (
            <div
              key={i}
              className={getDefClass(i)}
              onClick={() => handleDefClick(i)}
              role="button"
              tabIndex={matchedDefs.has(i) ? -1 : 0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleDefClick(i); } }}
            >
              {def}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
