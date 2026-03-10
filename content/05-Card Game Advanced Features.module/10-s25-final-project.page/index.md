---
module: 5
name: 'Session 25: Final Project — Spades'
position: 10
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-3
- CLO-4
- CLO-5
session: 25.1
---

# Session 25: Final Project — Spades

## Learning Outcomes

By the end of this session, you will be able to:
- Assemble all course skills into one complete, working application
- Verify a multi-class system end-to-end through systematic testing
- Write clear documentation that explains your architecture and design decisions
- Reflect on the skills demonstrated across the course

---

## Introduction (5 minutes)

This session has no new technical content. Instead, you review what you have built across sessions 16–24 and prepare it for final submission.

Your Spades game is a non-trivial piece of software:

- **7+ classes** each with a single clear responsibility
- **OOP with inheritance** — `AIPlayer extends Player`
- **Async orchestration** — `GameRunner` drives the game loop with `await`
- **Promise-based UI** — `GameBoard` turns clicks into awaitable values
- **Complex scoring rules** — bids, bags, nil bonuses, penalties
- **Optional advanced features** — smarter AI, localStorage persistence, theming, ES6 modules

The final assignment asks you to submit a polished, fully playable version of the game.

---

## Review: The Architecture (30 minutes)

### How the Pieces Fit Together

```
app.js
  └── Creates: Player, AIPlayer×3, SpadesGame, GameBoard, GameRunner
        └── GameRunner.run()
              ├── SpadesGame.startRound()         → deals + sorts hands
              ├── GameRunner.collectBid()          → AI: instant; Human: Promise
              │     └── GameBoard.getBidFromUser() → waits for click
              ├── GameRunner.playTrick() × 13
              │     ├── SpadesGame.getValidCards() → enforces follow-suit / spades-breaking
              │     ├── Player.getCardDecision()   → AI strategy (AIPlayer only)
              │     ├── GameBoard.getCardFromUser() → waits for click (human only)
              │     ├── SpadesGame.playCard()      → removes from hand, sets spadesBroken
              │     └── SpadesGame.determineTrickWinner() → trump/led-suit logic
              ├── SpadesGame.scoreRound()          → bids, overtricks, nil, bag penalty
              └── SpadesGame.isGameOver()          → ≥ 500 pts or ≤ -200 pts
                    └── isTied()                  → extra round if both teams at ≥ 500
```

### Key Design Decisions

**Why a separate `GameRunner`?**
`SpadesGame` manages state and rules — it has no idea how to display anything or wait for a click. `GameBoard` manages display and user input — it has no idea what the game rules are. `GameRunner` is the glue: it calls the right methods in the right order. This separation makes each class independently testable.

**Why return Promises from `GameBoard`?**
`GameRunner` is written top-to-bottom as sequential code. Without Promises (and `await`), the only way to pause for user input is callback nesting — which makes the logic very hard to follow. Returning a Promise lets `GameRunner` write `const card = await board.getCardFromUser(...)` and have it feel like a normal synchronous return value.

**Why does nil bid scoring exclude the player's tricks from teamTricks?**
If a nil player's tricks counted toward the team contract, a successful nil bid would *help* the partner — but the nil rule specifically says the nil player takes no tricks independently. Their tricks only affect the nil bonus/penalty, not the contract math.

---

## Testing Checklist

Before submitting, verify each of these:

**Dealing and Setup**
- [ ] Each of 4 players receives exactly 13 cards per round
- [ ] All 52 cards are dealt with no duplicates (verify with a `Set`)
- [ ] Dealer rotation advances each round
- [ ] Hands are sorted (Spades first, then suit, then high-to-low within suit)

**Bidding**
- [ ] Human player sees bid buttons (0–13) and can click one
- [ ] AI players bid automatically with a brief delay
- [ ] All 4 bids are recorded before play begins

**Playing**
- [ ] Valid cards are highlighted; invalid cards are not clickable
- [ ] Spades cannot be led until broken (unless player has only spades)
- [ ] Player must follow led suit if they have it
- [ ] Spades break when a spade is played for the first time

**Trick Winning**
- [ ] A spade always beats a non-spade
- [ ] Highest spade wins when multiple spades are played
- [ ] Highest card of led suit wins when no spades played
- [ ] Winner leads the next trick

**Scoring**
- [ ] Made bid: team earns `bid × 10 + overtricks`
- [ ] Set (failed bid): team loses `bid × 10`
- [ ] Nil bid made (0 tricks): +100
- [ ] Nil bid failed (1+ tricks): −100; nil player's tricks excluded from team contract
- [ ] Every 10 bags: −100 penalty (fires multiple times if needed)

**Game End**
- [ ] Game ends when a team reaches 500+ or goes below −200
- [ ] If both teams reach 500 on the same round: one extra round is played
- [ ] Winning team is correctly identified and displayed

---

## Documentation Requirements

Your submission must include a brief `README.md` with:

**1. Project Overview** (2–3 sentences)
What is the game and what does the project demonstrate?

**2. How to Play**
Step-by-step from opening the file to winning a game

**3. Architecture**
A list of each JS file and its single responsibility (1 sentence each)

**4. Advanced Features Implemented**
List which of the following you added (required: at least 2):
- Improved AIPlayer (card tracking, goal-aware strategy)
- localStorage statistics persistence
- Light/dark theme toggle
- CSS card animations
- ES6 module structure

**5. Known Limitations**
Any bugs, edge cases, or incomplete features — be honest

---

## Video Tutorial: Final Project Prep (20 minutes)

Watch: `assets/videos/25-final-project-prep.mp4`

Covers:
- Walking through the testing checklist live
- How to write a good README for a JavaScript project
- Common last-minute bugs (script load order, nil scoring, spades-breaking edge cases)

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 25 Final Review Quiz** in Canvas.

This quiz covers material from all sessions — use it to identify any gaps before your final submission.

---

## Hands-On Assignment (open-ended)

Open **"Session 25: Final Project"** in Canvas.

Submit a polished, fully playable Spades game. Full rubric is in the assignment.

---

## Wrap-Up

### What You Built

Over 10 sessions you built a complete, playable, four-player Spades card game entirely in browser-based JavaScript. You used:

- **Classes and constructors** — Card, Deck, Player, SpadesGame
- **Inheritance** — AIPlayer extends Player
- **Array methods** — `filter`, `findIndex`, `splice`, `sort`, `map`, `flatMap`, `reduce`
- **Async/await** — GameRunner orchestrates human input and AI delays
- **Promises** — GameBoard returns awaitable values from click events
- **Complex conditional logic** — Spades rules, scoring, game-over checks
- **Optional: localStorage** — persistence across page loads
- **Optional: CSS custom properties** — theming and animation
- **Optional: ES6 modules** — professional code organization

Every concept from the first two modules of this course appeared in the game code. That is what culminating projects are for.