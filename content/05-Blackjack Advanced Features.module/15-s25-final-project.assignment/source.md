# Session 25: Final Project — Complete Blackjack Game

Submit your complete, polished Blackjack game.

**Points:** 50 | **Submit:** ZIP of your complete game folder + a README.md

---

## Mandatory Requirements

Your game must include all of the following. Missing any mandatory item caps your grade at 25/50.

### Game Rules (must work correctly)
- [ ] Two cards dealt to player and dealer at the start of each round
- [ ] Dealer's second card hidden during player's turn, revealed at end
- [ ] Hit: deals one card to player; updates total; detects bust
- [ ] Ace adjustment: automatically adjusts from 11 to 1 when needed to avoid bust
- [ ] Stand: dealer auto-plays to 17 or more, then round resolves
- [ ] All 6 outcomes handled correctly: `player_wins`, `dealer_wins`, `player_bust`, `dealer_bust`, `blackjack`, `push`
- [ ] Blackjack detected on 2-card total of 21

### Betting System
- [ ] Player places a bet before each round
- [ ] Invalid/unaffordable bets are rejected with a message
- [ ] Correct payouts: win 1:1, blackjack 3:2, push returns bet
- [ ] Chip balance updates after every round
- [ ] Game ends when chips reach 0

### UI
- [ ] Cards displayed on screen for both player and dealer
- [ ] Player total and dealer total displayed
- [ ] Clear result message after each round
- [ ] Deal, Hit, Stand buttons properly enabled/disabled
- [ ] Win/loss/tie counter displayed

### Code Quality
- [ ] No JavaScript errors in the browser console
- [ ] README.md included (see requirements below)

---

## Advanced Features (choose at least 2)

Implementing at least 2 of the following adds to your score beyond the mandatory 35 points.

| Feature | Points |
|---------|--------|
| Dark/light theme toggle with localStorage persistence | 5 |
| Card deal animation (staggered, smooth) | 3 |
| Win/bust announcement animation (`@keyframes`) | 3 |
| Game stats that persist across reloads (GameStats class, localStorage) | 5 |
| ES6 modules with professional folder structure | 5 |
| Bet quick-pick buttons ($25/$50/$100/$500) | 2 |
| Chip balance colour flash (green/red) | 2 |
| Player name saved to localStorage | 2 |

Maximum score: 50 points (35 mandatory + 15 advanced).

---

## README Requirements

Your `README.md` must include:

1. **Project title and 1–2 sentence description**
2. **Features list** — label each as "Mandatory" or "Advanced"
3. **How to play** — step-by-step instructions (how to bet, hit, stand)
4. **Technical notes** — how to run it (Live Server, Python server, etc.) if modules are used
5. **One challenge** — describe one problem you solved and how you solved it (2–4 sentences)

---

## Grading Rubric

| Category | Criteria | Points |
|----------|----------|--------|
| Game rules | All mandatory rules work correctly | 15 |
| Betting system | Correct bets, payouts, chip tracking, game-over | 10 |
| UI quality | Clear display, correct button states, result messages | 5 |
| Code quality | No console errors, readable code | 5 |
| README | All 5 required sections present, clearly written | 5 |
| Advanced features | 1 point per advanced point earned (up to 15) | 0–15 |

---

## Before Submitting

1. Play at least 5 complete rounds — including one blackjack, one bust, one push if possible.
2. Open DevTools and verify the console shows **no errors**.
3. Test the game over condition by losing all chips.
4. Read your README — does it clearly explain how to play and how to run the game?
5. Zip the entire game folder (not just individual files) and submit.
