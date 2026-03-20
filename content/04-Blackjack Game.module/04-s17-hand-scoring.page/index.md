---
module: 4
name: 'Session 17: The Hand Class and Blackjack Scoring'
position: 4
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 17.1
---

[lead]You have a shuffled deck and a way to deal cards — now you need somewhere for those cards to go. This session builds the `Hand` class, which holds a player's or dealer's cards and calculates their total value. The trickiest part is the Ace: it can count as 1 or 11 depending on the situation, and implementing that logic correctly is one of the most satisfying algorithmic puzzles in this course.

# Session 17: The Hand Class and Blackjack Scoring

## Learning Outcomes

By the end of this session, you will be able to:
- Build a `Hand` class that holds cards and calculates a total.
- Implement the Blackjack ace-adjustment algorithm.
- Detect bust (total > 21) and blackjack (21 on first two cards) conditions.
- Describe the dealer's forced hit-until-17 strategy.

---

## Introduction (5 minutes)

You have a `Card` and a `Deck`. The next piece is a **Hand** — the cards a player is currently holding. A hand needs to:
1. Accept cards dealt to it.
2. Calculate its total value.
3. Handle the Ace's special rule (1 or 11).

The ace rule is the most interesting algorithm in Blackjack. Let's learn it.

---

## Reading: The Hand Class (20 minutes)

### Basic structure

```js
class Hand {
  constructor() {
    this._cards = [];
  }

  addCard(card) {
    this._cards.push(card);
  }

  get cards() { return this._cards; }
  get size()  { return this._cards.length; }
}
```

### The ace-adjustment algorithm

Every Ace starts as 11. If the total exceeds 21 and there are Aces counted as 11, we "downgrade" one Ace to 1 (subtract 10) and try again.

```js
getTotal() {
  let total = 0;
  let aces = 0;

  for (const card of this._cards) {
    total += card.getValue();   // Ace contributes 11 here
    if (card.rank === 'Ace') aces++;
  }

  // Adjust aces from 11 → 1 as needed
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
}
```

Walk through an example:
- Hand: Ace + King → 11 + 10 = 21. Under 21, no adjustment. Total = **21**.
- Hand: Ace + 8 + 6 → 11 + 8 + 6 = 25. Over 21, one Ace. Subtract 10 → **15**.
- Hand: Ace + Ace + 9 → 11 + 11 + 9 = 31. Over 21, two Aces. Subtract 10 → 21. Under 21, stop. Total = **21**.
- Hand: Ace + Ace + Ace + King → 11+11+11+10 = 43. Subtract 10→33, subtract 10→23, subtract 10→13. Total = **13**.

---

## Reading: isBust() and isBlackjack() (10 minutes)

```js
isBust() {
  return this.getTotal() > 21;
}

isBlackjack() {
  // Blackjack = exactly 21 with only 2 cards
  return this._cards.length === 2 && this.getTotal() === 21;
}
```

Note: a "blackjack" is specifically an Ace + a 10-value card on the initial deal. Three cards that add to 21 is a 21, not a blackjack.

---

## Reading: The Dealer's Strategy (10 minutes)

In Blackjack, the dealer follows a fixed rule — no choices needed:
- If the dealer's total is **16 or less**, they must hit (take another card).
- If the dealer's total is **17 or more**, they must stand (stop).

This is called "stand on 17". You will implement this with a simple loop:

```js
// Inside the game class:
while (dealer.getTotal() < 17) {
  dealer.addCard(deck.deal());
}
```

The dealer never "decides" — the rule is automatic. This is different from the player who chooses to hit or stand.

---

## Worked Example: A Complete Round of Logic

```js
const deck = new Deck();
deck.shuffle();

const playerHand = new Hand();
const dealerHand = new Hand();

// Initial deal: 2 cards each
playerHand.addCard(deck.deal());
dealerHand.addCard(deck.deal());
playerHand.addCard(deck.deal());
dealerHand.addCard(deck.deal());

console.log('Player:', playerHand.getTotal()); // e.g. 17
console.log('Dealer:', dealerHand.getTotal()); // e.g. 10 (one face-down)

// Player hits once
playerHand.addCard(deck.deal());
if (playerHand.isBust()) {
  console.log('Player busts!');
}
```

---

## Practice Problems (15 minutes)

1. Create a `Hand`, add an Ace and a King. What does `getTotal()` return?
2. Add a 5 to that hand. Now what does `getTotal()` return?
3. Create a hand with two Aces and a 9. Trace through the algorithm step by step.
4. What is the highest possible Blackjack hand (not using `isBlackjack`)? What is the lowest starting total for a 2-card hand?

---

## Supplemental: toString() for a Hand

A useful method for testing:

```js
toString() {
  const labels = this._cards.map(c => c.toString()).join(', ');
  return `[${labels}] = ${this.getTotal()}`;
}
```

Example output: `[Ace of Spades, King of Hearts] = 21`

### Supplemental Exercise

Add a `getVisibleTotal()` method to `Hand` that only adds the values of `_cards[0]` through `_cards[length-2]` — in other words, it hides the last card. (This simulates the dealer's face-down card.) Log the visible total and the true total for a 3-card dealer hand.

---

#### Helpful Resources

| [light] | |
|----------|-------------|
| [Array.prototype.map() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | Transform an array of cards into an array of values or strings |
| [while statement — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) | The while loop used to keep downgrading Aces until the total is valid |
| [Array.prototype.join() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | Combine an array of card strings into a single display string |
| [for...of — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) | Cleanly iterate over each card in the hand when calculating the total |
