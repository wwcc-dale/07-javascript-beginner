---
name: "Session 25: Final Project — Complete Spades Game"
assignment_type: "online"
points: 100
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
  - "CLO-3"
  - "CLO-4"
  - "CLO-5"
submission_types:
  - "online_upload"
allowed_extensions:
  - "zip"
---

# Session 25: Final Project — Complete Spades Game

Submit a complete, polished, fully playable Spades game demonstrating mastery of the JavaScript skills taught in this course.

**Time:** Open-ended | **Points:** 100 | **Submit:** ZIP of your complete project

---

## Mandatory Features (60 pts)

### Core Game — Must Work End-to-End (40 pts)

Your game must be fully playable from opening `index.html` to seeing a game-over message. The following must work correctly:

- All 4 players receive exactly 13 cards per round, with no duplicates
- Human player sees their hand sorted by suit and rank
- AI players bid automatically; human player clicks a bid button
- Spades cannot be led until broken; follow-suit is enforced
- Trick winner is determined correctly (highest spade; or highest of led suit)
- Rounds score correctly: made bids, sets, nil bids, overtricks, bag penalties
- Game ends at 500 points or −200 points; ties result in an extra round
- Winning team is announced at the end

### User Interface (20 pts)

- Valid cards are visually highlighted; invalid cards are not clickable
- The trick table shows the current trick as cards are played
- The trick winner is announced before the next trick begins
- Bids and tricks-won are visible for all 4 players throughout each round
- Scores update after each round
- Game-over screen shows the winning team and final scores

---

## Advanced Features — Choose at Least 2 (20 pts)

Each implemented feature earns up to 10 points:

**AI Improvement (10 pts)**
- `AIPlayer` tracks played cards using a `Set`
- Goal-aware strategy: once bid is made, AI avoids winning more tricks
- Improved bidding estimation

**localStorage Stats (10 pts)**
- `GameStats` class persists across page reloads
- Tracks and displays: games played, win rate, best round score
- Stats survive page refresh

**Light/Dark Theme (10 pts)**
- CSS custom properties used throughout `style.css`
- Theme toggle button switches between light and dark
- Theme preference persists via localStorage

**CSS Animations (10 pts)**
- Cards animate in when dealt
- Trick winner announcement has an entrance animation
- Playable cards lift on hover using CSS transitions

**ES6 Modules (10 pts)**
- All files use `export`/`import` correctly
- Professional folder structure (`src/classes/`, `src/game/`, `src/ui/`)
- Single `<script type="module">` entry point in `index.html`

---

## Code Quality and Documentation (20 pts)

### Code Quality (10 pts)

- No JavaScript errors in the browser console during normal play
- Each class has a single clear responsibility
- Variable and method names clearly describe their purpose
- No dead code (unused variables, functions, or commented-out blocks)

### Documentation: `README.md` (10 pts)

Your submission must include a `README.md` containing:

1. **Project title and brief description** (2–3 sentences)
2. **How to open and play** — step-by-step, starting from opening the file
3. **File/class list** — one sentence per file explaining its responsibility
4. **Advanced features implemented** — list which you chose and describe briefly
5. **Challenges and solutions** — one paragraph on the hardest part and how you solved it

---

## Submission

Before submitting:
- [ ] Game plays correctly start to finish without errors
- [ ] All scoring rules verified (use the testing checklist from Session 25 reading)
- [ ] At least 2 advanced features implemented and working
- [ ] `README.md` complete
- [ ] No `console.error` during normal play

Create a ZIP file of your entire project folder and submit to Canvas.

---

## Evaluation Rubric

| Category | Points | What We Look For |
|----------|--------|-----------------|
| Core game works end-to-end | 40 | Playable from deal through game-over; all rules correct |
| User interface | 20 | Correct highlighting, trick display, score updates |
| Advanced features (2+) | 20 | Features work correctly and add value |
| Code quality | 10 | No errors, clear names, single-responsibility classes |
| README.md | 10 | Complete, accurate, and well-written |
| **Total** | **100** | |
