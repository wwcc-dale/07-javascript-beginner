---
allowed_extensions:
- js
- html
- zip
assignment_type: online
module: 4
name: 'Session 16: Card and Deck Implementation'
points: 20
position: 3
published: true
related_outcomes:
- CLO-1
- CLO-2
session: 16.3
submission_types:
- online_upload
---

# Session 16: Card and Deck Implementation

Build `Card.js` and `Deck.js` — the foundation every other Spades file depends on.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing `Card.js`, `Deck.js`, and `test.html`

---

## Level 1 – Core (15 pts)

### Challenge 1: Card Class

Create `Card.js` with a class that has:

- `constructor(suit, rank)` — stores both as properties
- `getSuit()` — returns the suit string
- `getRank()` — returns the rank string
- `getValue()` — returns the numeric value: `'2'`→2 through `'10'`→10, `'J'`→11, `'Q'`→12, `'K'`→13, `'A'`→14
- `toString()` — returns `"rank of suit"` (e.g., `"A of Spades"`)
- `equals(other)` — returns `true` if both suit and rank match

### Challenge 2: Deck Class

Create `Deck.js` with a class that has:

- `constructor()` — creates the `cards` array and calls `buildDeck()`
- `buildDeck()` — uses nested loops (suits × ranks) to push all 52 cards
  - Suits: `'Hearts'`, `'Diamonds'`, `'Clubs'`, `'Spades'`
  - Ranks: `'2'` through `'10'`, `'J'`, `'Q'`, `'K'`, `'A'`
- `shuffle()` — implements the Fisher-Yates algorithm
- `draw()` — removes and returns the last card in the array
- `cardsLeft()` — returns how many cards remain
- `reset()` — clears the array, calls `buildDeck()`, then `shuffle()`

### Challenge 3: Test Page

Create `test.html` that:
- Creates a `Deck`, logs `cardsLeft()` (should be 52)
- Calls `shuffle()`, draws 4 cards, logs each with `toString()`
- Calls `reset()`, confirms deck is back to 52
- Tests `equals()` with matching and non-matching cards

### Challenge 4: Verify 52 Unique Cards

In your test, confirm every card is unique:

```js
const descriptions = deck.cards.map(c => c.toString());
const unique = new Set(descriptions);
console.log('All unique:', unique.size === 52);  // must be true
```

---

## Level 2 – Stretch (3 pts)

### Challenge 5: Count by Suit

Add a standalone function (not a class method) `countBySuit(deck, suit)` that returns how many cards of that suit remain in the deck. Verify it returns 13 for each suit on a fresh deck.

### Challenge 6: Deal to Four Players

Write code in `test.html` that deals 13 cards to each of four hand arrays, then verifies each hand has exactly 13 cards and the deck is empty.

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Shuffle Quality Test

Write a test that shuffles the deck 100 times and checks that the first card is not always the same. A good shuffle should rarely produce the same result twice.

```js
const firstCards = [];
for (let i = 0; i < 100; i++) {
  deck.reset();
  firstCards.push(deck.cards[0].toString());
}
const unique = new Set(firstCards);
console.log('Unique first cards across 100 shuffles:', unique.size);
// A good shuffle should produce many different results
```