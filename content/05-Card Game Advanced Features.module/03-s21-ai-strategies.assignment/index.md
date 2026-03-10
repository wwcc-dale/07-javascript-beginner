---
allowed_extensions:
- js
- html
- zip
assignment_type: online
module: 5
name: 'Session 21: Improving the AIPlayer'
points: 20
position: 3
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 21.3
submission_types:
- online_upload
---

# Session 21: Improving the AIPlayer

Upgrade `AIPlayer.js` with card tracking, goal-aware strategy, and a decision tree for card selection.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing `AIPlayer.js` and `test.html`

---

## Level 1 – Core (15 pts)

### Challenge 1: Card Tracking with a Set

Add a `seenCards` property to `AIPlayer`:
- Initialize it as an empty `Set` in the constructor
- Add a `recordCard(card)` method that adds `card.toString()` to the set
- Add a `hasSeenCard(card)` method that returns `true` if the card has been recorded
- Override `resetForRound()` to call `super.resetForRound()` and also reset `seenCards` to a new empty Set

Verify in `test.html`:
```js
const ai = new AIPlayer('West');
ai.recordCard(new Card('Spades', 'A'));
console.log('Ace of Spades seen:', ai.hasSeenCard(new Card('Spades', 'A')));  // true
console.log('King of Spades seen:', ai.hasSeenCard(new Card('Spades', 'K'))); // false
ai.resetForRound();
console.log('After reset:', ai.seenCards.size);  // 0
```

### Challenge 2: Goal-Aware Card Decision

Update `getCardDecision(validCards, trick)` to check the current goal state:

- If `this.bid === 0` (nil): always return the lowest card in `validCards`
- If `this.tricksWon >= this.bid` (already made bid): return the lowest card (avoid bags)
- If the trick is empty (leading): return the lowest non-spade; if only spades, return the lowest spade
- Otherwise: try to win with the cheapest winning card; if no winner, return the lowest card

Verify in `test.html`:
```js
const ai = new AIPlayer('West');
ai.bid = 2;
ai.tricksWon = 2;  // Already made bid

const options = [new Card('Spades', 'A'), new Card('Clubs', '3')];
const choice = ai.getCardDecision(options, []);
console.log('Should dump lowest:', choice.toString());  // '3 of Clubs'
```

### Challenge 3: Test Page

Write `test.html` that loads all game files and runs tests covering:
- Card tracking: `recordCard` + `hasSeenCard` + reset
- Goal-aware strategy: bid already met → dumps lowest
- Nil strategy: always returns lowest
- Leading strategy: prefers non-spade when options exist

---

## Level 2 – Stretch (3 pts)

### Challenge 4: Improved Bid Estimation

Upgrade `getBidDecision(hand)` to produce a more nuanced estimate:

Instead of a simple 4-tier formula, count separately:
- High spades (Q or better: getValue() >= 12) — strong trump winners
- Low spades (below Q) — likely tricks only if high spades are gone
- Off-suit aces (getValue() === 14, not Spades) — very likely to win a trick
- Off-suit kings — likely to win if their ace has been played (use `seenCards`)

Combine these into a bid of 0–5. Write tests showing that:
- A hand with 2 high spades + 1 ace bids at least 3
- A hand with 0 spades and no face cards bids 1

### Challenge 5: Integration Test

Call `game.startRound()` and run an automated game (using AI for all 4 players) that plays all 13 tricks with the upgraded `getCardDecision`. Log each play and verify no errors occur.

---

## Level 3 – Advanced (2 pts)

### Challenge 6: Anti-Bag Strategy

After `tricksWon >= bid`, the AI should prefer to **lose** tricks on purpose. Extend the goal-aware strategy:
- When dumping (made bid): sort valid cards by value ascending and return the lowest
- When the AI leads and has already made its bid: prefer leading a suit where it is likely to lose (use `seenCards` to check if high cards in that suit are still out)

Write a test that verifies an AI that has made its bid plays its lowest card when any card would win the trick.