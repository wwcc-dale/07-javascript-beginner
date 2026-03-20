---
module: 5
name: 'Session 25: Final Project Review and Submission'
position: 13
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-3
- CLO-4
- CLO-5
session: 25.1
---

[lead]This is it — the final session of the course. You've built a complete Blackjack game with OOP design, a betting system, persistent data, polished CSS, and modular code organization, and today you review it against a professional checklist, write a README, squash any last bugs, and submit. Take a moment to appreciate how far you've come: from `let score = 0` all the way to a fully playable browser game. That's real software development.

# Session 25: Final Project Review and Submission

## Learning Outcomes

By the end of this session, you will be able to:
- Evaluate your own project against a professional checklist.
- Write a clear README that explains what your project does and how to use it.
- Identify and fix last-minute bugs using DevTools.
- Describe your project confidently in a short written reflection.

---

## Introduction (5 minutes)

This is the final session of the course. Today you polish and submit your complete Blackjack game.

Your goal is a game that:
- Works correctly with no console errors
- Looks polished and professional
- Has clear documentation in a README

Take this session seriously — your Final Project submission represents everything you have learned over 25 sessions.

---

## Reading: What Makes a Good Final Project (20 minutes)

### The three pillars of a good project

1. **Correctness** — The game works. All rules are implemented correctly. No crashes.
2. **Polish** — The UI is clear, styled, and enjoyable to use.
3. **Documentation** — Someone else can understand what it does and how to use it.

### Correctness checklist

Before you submit, play through at least 5 complete rounds and verify:

- [ ] Dealing gives 2 cards to player and 2 to dealer
- [ ] Dealer's second card is hidden during the player's turn
- [ ] Hit adds a card and updates the total correctly
- [ ] Ace adjusts from 11 to 1 when needed to avoid a bust
- [ ] Bust is detected correctly (total > 21 with no adjustable Aces)
- [ ] Blackjack (2-card 21) is detected and pays 3:2
- [ ] Dealer auto-plays to 17 or more
- [ ] All 6 outcomes are handled: player_wins, dealer_wins, player_bust, dealer_bust, blackjack, push
- [ ] Betting works: valid bets deducted, correct payouts
- [ ] Chip balance is correct after wins, losses, and pushes
- [ ] Game over triggers when chips reach 0
- [ ] Console shows no errors

### Polish checklist

- [ ] Green felt background
- [ ] Cards styled clearly (suit symbol, rank, red for Hearts/Diamonds)
- [ ] Dealer's face-down card shows `?` during player turn
- [ ] Result message is visible and clearly communicates the outcome
- [ ] Win/loss counter displayed
- [ ] Buttons are disabled when not usable
- [ ] Theme toggle works and persists across reloads (if implemented)

---

## Reading: Writing a README (15 minutes)

A README is a text file that explains your project to someone who has never seen it.

**What to include:**

```markdown
# Blackjack

A browser-based Blackjack game built with vanilla JavaScript.

## Features

### Mandatory
- Standard Blackjack rules (hit/stand, ace adjustment, dealer stands on 17)
- Betting system (place a bet before each round)
- Win/loss/tie counter
- Chip balance tracking with game-over on bankruptcy

### Advanced (choose any you implemented)
- Dark/light theme toggle with localStorage persistence
- Card deal animation
- Win announcement animation
- Game stats tracking across sessions
- ES6 module structure

## How to Play

1. Open `index.html` in a browser (use Live Server for module support)
2. Enter a bet amount and click Deal
3. Click Hit to take another card or Stand to let the dealer play
4. Results and chip balance update after each round

## Technical Notes

- Written in plain JavaScript with no frameworks
- CSS custom properties for theming
- Optional: ES6 modules — run via VS Code Live Server or `python -m http.server`

## One Challenge I Solved

I had trouble with the ace adjustment algorithm. At first, I only subtracted 10 once, which
didn't handle hands with multiple aces. Using a while loop fixed it: subtract 10 for each
Ace counted as 11, one at a time, until the total is 21 or under.
```

Keep your README honest — describe what you actually built, not what you wished you built.

---

## Reading: Last-Minute Debugging (10 minutes)

### The most common final bugs

| Bug | How to find it |
|-----|---------------|
| Cards not rendering | Check `renderHand()` container ID matches HTML |
| Ace total wrong | Trace `getTotal()` with `console.log` inside the while loop |
| Dealer plays before player stands | Check `playerStand()` calls `_runDealerTurn()` |
| Chips wrong after win | Verify `win()` adds `bet * 2`, not just `bet` |
| console error on reload | Usually a localStorage parse failure — add try/catch |

### Testing edge cases

Before submitting, trigger each of these at least once:
1. Blackjack on deal (Ace + face card)
2. Bust on hit (go over 21)
3. Dealer bust (let dealer draw until over 21)
4. Push (same total as dealer)
5. Going bankrupt (lose all chips)
6. Ace adjusting from 11 to 1 (e.g., Ace + 8 + 6 = 15, not 25)

---

## Wrapping Up the Course (10 minutes)

You have come a long way. In 25 sessions you have learned:

**JavaScript foundations** — variables, conditionals, functions, arrays, loops, algorithms

**Object-Oriented Programming** — classes, encapsulation, containers, inheritance

**Browser development** — DOM selection and manipulation, event listeners, CSS styling

**A real application** — Card and Deck, Hand with ace logic, BlackjackGame with rules, betting system, localStorage persistence, CSS polish, ES6 modules

These skills are the foundation of everything else in web development. Whether you continue to React, Node.js, TypeScript, or game development, everything you learned here applies.

---

## Supplemental: Ideas for Going Further (optional)

If you want to keep building after submission, here are ideas:

- **Split** — let the player split matching cards into two hands
- **Double down** — double the bet and take exactly one more card
- **Insurance** — when dealer shows Ace, offer an insurance bet
- **Multiple hands** — allow the player to play multiple hands at once
- **Card counting visualizer** — show the running count using the Hi-Lo system
- **Leaderboard** — store top 10 scores in localStorage

None of these are required. They are here to spark ideas.

---

#### Helpful Resources

| [light] | |
|----------|-------------|
| [JavaScript Guide — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | The full JavaScript reference guide — a great resource to revisit any topic from the course |
| [Web APIs — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API) | Comprehensive index of browser APIs including DOM, localStorage, events, and fetch |
| [Writing a README — GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) | Guidelines for writing a clear, helpful README for your project |
| [JavaScript debugging in the browser — MDN Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript) | How to use browser DevTools to find and fix errors in your final project |
