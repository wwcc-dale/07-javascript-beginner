# AI Authoring Context — Zaphod / Canvas Course Construction
<!-- Universal rules. Paste COURSE-CONFIG after this to supply course-specific values. -->

## ROLE
Curriculum author for a self-paced offline lab course (Zaphod/Canvas). Every file must stand alone — no lectures, no internet, no instructor to fill gaps.

## ENVIRONMENT (never vary)
- Offline LAN only — no external URLs in student-facing content
- Self-paced, no lectures — instructor circulates and helps on request
- Rolling enrolment — never assume cohort sync
- Session = 3 hours · Credit = 5 sessions · Course = 25 sessions / 5 credits
- Reading level ≤ 8th grade · Tone: warm, encouraging, never condescending
- published: false on every item until explicitly told otherwise

## COURSE STRUCTURE
Credits 1–5 map to sessions 1–5, 6–10, 11–15, 16–20, 21–25.
Summatives: credit quiz s5/s10/s20 (60 pts, 45 min) · midterm s15 (150 pts, 90 min) · final s25 (150 pts, 120 min) · major project each credit end (100 pts). Default total: 1,080 pts.
Credit 3 uses midterm instead of a credit quiz. Credit 5 uses final instead.

## EVERY SESSION — .page + .quiz + .assignment

Page (.page) — 5 sections: Reading (textbook, verified pages) · Video (LAN location, duration) · Key Concepts (plain explanation, new examples, stands alone) · Practice Quiz (self-check) · Wrap-Up (what learned, next steps, encouragement).

Quiz (.quiz) — ungraded practice: Self-check before assignment, unlimited attempts.

Assignment (.assignment) — paired with rubric.yaml: Hands-on artifact. Requires: Base/Intermediate/Advanced levels · materials list · success criteria · rubric.yaml (extended: 4–6 criteria, 5 levels | presence: 1 criterion, 2 levels).

## STRETCH LEVELS (required on every exercise)
Base: completable using only skills from current + prior sessions. All students must reach this.
Intermediate: one added constraint or complexity layer.
Advanced: significant extension; may preview future skills.

## SCAFFOLDING RULE
Before writing any exercise: list every required skill → confirm each was taught in a prior session → if new this session, teach it in Key Concepts before the exercise asks for it.

## NAMING CONVENTION
Module folders (top of content/):  {NN}-{Title}.module
  00 = Getting Started (always present) · 01–05 = one per credit

Content items inside modules:  {NN}-{sX}-{topic}.{type}
  NN restarts at 01 per module · sX = global session label s0–s25 (never reused) · type = page|assignment|quiz

Standard sequence:
  01-sN-topic.page · 02-sN-topic.quiz · 03-sN-topic.assignment (+ rubric.yaml)
  (repeat pattern for sessions N+1, N+2, N+3)
  NN-sLAST-synthesis.page · NN-sLAST-project.quiz · NN-sLAST-project.assignment (major project + rubric.yaml) · NN-sLAST-credit-0N.quiz (graded, always last)

Special: 01-s0-welcome.page · NN-s15-midterm-exam.quiz · NN-s25-final-exam.quiz
Banks: question-banks/{sX}-{topic}.bank.md

## FRONTMATTER KEYS (abbreviated — full YAML patterns in CONTEXT-AI.md)
No `modules:` (inferred from folder) · No `type:` (inferred from folder extension) · All items: name · published: false
Page: + outcomes · topics
Assignment: + points_possible: 100 · grading_type: points · submission_types · due_at: null · always paired with rubric.yaml
All quizzes need question_groups · bank_id must be a number (use 0 as placeholder) · add a comment naming the target .bank.md file
Practice quiz: quiz_type: practice_quiz · allowed_attempts: -1 · pick: 10
  bank_id: 0  # question-banks/{sX}-{topic}.bank.md — replace after sync
Graded quiz: quiz_type: assignment · points_possible: 60 · time_limit: 45 · pick: 30
  bank_id: 0  # question-banks/{sX}-credit-0{N}-graded.bank.md — replace after sync
Midterm: points_possible: 150 · time_limit: 90 · pick: 50
  bank_id: 0  # question-banks/s15-midterm.bank.md — replace after sync
Final: points_possible: 150 · time_limit: 120 · pick: 60
  bank_id: 0  # question-banks/s25-final.bank.md — replace after sync

## RUBRIC RULES
Every session assignment and every major project has rubric.yaml alongside index.md.
Extended rubrics: 4–6 criteria · 5 levels (Excelling: 5 / Achieving: 4 / Developing: 3 / Beginning: 2 / No Evidence: 0) · points sum to points_possible.
Presence-based rubrics: 1 criterion · 2 levels (Complete: 1 / Incomplete or Missing: 0).
Reward reasoning, not just execution.

## SHARED INCLUDES (every session page ends with both)
{{include:session-footer}}
{{include:completion-checklist}}

## QUESTION BANK SIZING
Session practice: 15 questions → pick 10 · Credit graded: 40 → 30 · Midterm: 60 → 50 · Final: 80 → 60

## HANDOUTS (handouts/ folder — PDF, not Zaphod items)
Create for: labelling worksheets · classification charts · software quick-reference sheets · reference guides · project submission checklist (one per course). Always include instructor answer key.

## GETTING STARTED MODULE
00-Getting Started.module always exists. 01-s0-welcome.page must cover: course structure · required materials · grade breakdown · the 6 session parts · tips for success · how to get help · direction to Credit 1.

## CONTENT QUALITY GATES (check before returning)
- [ ] Every session: .page + .quiz + .assignment (with rubric.yaml)
- [ ] Page: all 5 sections (Reading/Video/Key Concepts/Practice Quiz/Wrap-Up)
- [ ] Page refs verified or [VERIFY] · Assignment: all 3 stretch levels
- [ ] No skill before it's taught · Wrap-up names next assignment/session
- [ ] ≤ 8th grade · No external URLs · Both includes at page end
- [ ] published: false · No modules: or type: · quiz bank_id: 0 with comment

## COURSE-CONFIG (paste after this file each session)
Supply: COURSE_CODE · COURSE_TITLE · CREDIT_TITLES (1–5) · PRIMARY_TEXTBOOK · SECONDARY_TEXTBOOK · COURSE_SOFTWARE · CLOS · VERIFIED_PAGES · GRADING_VARIATIONS (if any)
