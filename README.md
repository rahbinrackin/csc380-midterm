# CSC 380 Midterm Study App

An interactive study tool for the **CSC 38000 Computer Security** midterm exam. Built with React + TypeScript, deployed on Vercel, and designed to run on both desktop and mobile.

---

## Features

### Four Exam Sections

The app mirrors the exact midterm format:

| Section | Format | Content |
|---------|--------|---------|
| **A** | Match term to definition | Malware types, social engineering attacks, threat actors |
| **B** | Multiple choice | ~40 questions pulled directly from the question bank |
| **C** | Diagram identification | Name the attack and provide a prevention method |
| **D** | Buffer overflow | Concepts, defenses, scenarios, unsafe C functions |

### Learn From Your Mistakes

When you get a question wrong, the app doesn't just tell you the right answer — it explains:

- **Why your answer is wrong** (specific to the choice you picked)
- **Why the correct answer is right** (with cybersecurity reasoning)

### Spaced Repetition

- Every wrong answer is saved and tracked with a **mistake counter**
- The **"Review Mistakes"** mode on the home screen resurfaces questions you've missed, weighted by how often you got them wrong
- Answer them correctly and they fade out of the review pool

### Adaptive Mastery Detection

After **2+ consecutive perfect scores**, the app detects you may be memorizing rather than learning. It offers to mix in supplementary **lecture-derived challenge questions** (tagged with a purple "LECTURE" badge) to keep you sharp. This can be toggled on/off at any time.

### Mobile-First Design

Dark navy theme with cyan accents. Fully responsive — study on your phone, tablet, or desktop.

---

## Tech Stack

- **React 19** + **TypeScript** via Vite
- **CSS** with custom properties (no UI framework)
- **localStorage** for progress persistence
- Deployed on **Vercel**

---

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview
```

---

## Question Sources

- `PRACTICE QUESTIONS.pdf` — 15 practice questions
- `Question Bank.pdf` — 56 questions (multiple choice, diagrams, short answer)
- Lecture slides 1–4 — supplementary material (lower priority, only surfaced after mastery)

All question bank and practice questions are copied **verbatim** from the professor's materials.

---

## Project Structure

```
src/
├── components/
│   ├── App.tsx            # Home screen, routing, mastery modal
│   ├── SectionA.tsx       # Matching term-to-definition
│   ├── SectionB.tsx       # Multiple choice
│   ├── SectionC.tsx       # Diagram identification
│   ├── SectionD.tsx       # Buffer overflow
│   ├── QuestionCard.tsx   # Reusable MC question UI
│   ├── MatchingBoard.tsx  # Click-to-match UI
│   ├── Results.tsx        # Score screen
│   └── ReviewMode.tsx     # Wrong-answer review
├── data/
│   ├── matchingData.ts    # 32 term-definition pairs across 3 groups
│   ├── multipleChoice.ts  # 41 MC questions with explanations
│   ├── diagramData.ts     # 12 attack diagrams with acceptable answers
│   ├── bufferOverflow.ts  # 12 buffer overflow questions
│   └── lectureQuestions.ts# 25 supplementary lecture questions
├── utils/
│   └── storage.ts         # localStorage helpers, shuffle, run tracking
├── types.ts
├── main.tsx
└── index.css              # Dark theme + mobile responsive styles
```
