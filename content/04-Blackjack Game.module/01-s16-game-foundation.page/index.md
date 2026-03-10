---
module: 4
name: 'Session 16: Game Foundation — Card and Deck Classes'
position: 1
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 16.1
---

# Session 16: Game Foundation — Card and Deck Classes

## Learning Outcomes

By the end of this session, you will be able to:
- Design a `Card` class that models a playing card.
- Build a `Deck` class that manages 52 cards.
- Implement the Fisher-Yates shuffle algorithm.
- Write a `deal()` method that removes and returns a card from the deck.

---

## Introduction (5 minutes)

You have learned classes, encapsulation, containers, and inheritance. Now you will put all of that together to build a real card game: **Blackjack**.

You will build the game step by step over the next five sessions:
- **S16:** Card and Deck classes (today)
- **S17:** Hand class + Blackjack scoring
- **S18:** Game class + basic rules
- **S19:** Browser UI — showing cards and handling buttons
- **S20:** Tying everything together into a playable game

Today you build the foundation: the data model for a standard 52-card deck.

---

## Reading: Designing the Card Class (20 minutes)

### What does a card need to know?

A playing card has two pieces of information:
- Its **rank**: Ace, 2, 3, … 10, Jack, Queen, King
- Its **suit**: Hearts, Diamonds, Clubs, Spades

```js
class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  get rank() { return this._rank; }
  get suit() { return this._suit; }

  toString() {
    return `${this._rank} of ${this._suit}`;
  }
}

const card = new Card('Ace', 'Spades');
console.log(card.toString()); // "Ace of Spades"
```

### Card values in Blackjack

In Blackjack, cards have numeric values:
- Number cards (2–10): face value
- Jack, Queen, King: 10
- Ace: 1 or 11 (you'll handle this in Session 17)

A `getValue()` method converts rank to a number:

```js
getValue() {
  if (this._rank === 'Ace') return 11;    // treat as 11 for now
  if (['Jack', 'Queen', 'King'].includes(this._rank)) return 10;
  return parseInt(this._rank);            // '2'→2, '7'→7, etc.
}
```

---

## Reading: Building the Deck Class (25 minutes)

### Creating all 52 cards

A standard deck has 13 ranks × 4 suits = 52 cards. You can generate them with nested loops:

```js
class Deck {
  constructor() {
    this._cards = [];
    this._build();
  }

  _build() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
                   'Jack', 'Queen', 'King', 'Ace'];

    for (const suit of suits) {
      for (const rank of ranks) {
        this._cards.push(new Card(rank, suit));
      }
    }
  }

  get size() { return this._cards.length; }
}

const deck = new Deck();
console.log(deck.size); // 52
```

### The Fisher-Yates Shuffle

A simple but important algorithm. It works backwards through the array, swapping each element with a random earlier element:

```js
shuffle() {
  for (let i = this._cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
  }
}
```

The line `[a, b] = [b, a]` is array destructuring — a clean way to swap two variables without a temporary.

### The deal() method

Dealing a card removes it from the deck and returns it:

```js
deal() {
  if (this._cards.length === 0) return null;
  return this._cards.pop();
}
```

`pop()` removes and returns the last element. After shuffling, "last" is effectively random.

---

## Putting It Together

```js
const deck = new Deck();
deck.shuffle();

const card1 = deck.deal();
const card2 = deck.deal();

console.log(card1.toString()); // random card
console.log(card2.toString()); // another random card
console.log(deck.size);        // 50
```

---

## Practice Problems (15 minutes)

1. Create a `Deck`, shuffle it, and deal 5 cards. Log each card with `toString()`.
2. After dealing 5 cards, what is `deck.size`?
3. What does `deck.deal()` return if the deck is empty? (Check with your code.)
4. Write a loop that deals and logs all 52 cards without calling `toString()` — just log the object itself. What does the browser console show?

---

## Supplemental: The Unicode Playing Card Symbols (optional)

You can display card suits with Unicode symbols instead of words:

```js
getSuitSymbol() {
  const symbols = {
    'Hearts': '♥',
    'Diamonds': '♦',
    'Clubs': '♣',
    'Spades': '♠'
  };
  return symbols[this._suit];
}
```

This is optional for now but you may find it useful in Session 19 when you build the UI.

### Supplemental Exercise

Add an `isRed()` method to `Card` that returns `true` for Hearts and Diamonds. Then write a loop that deals the whole deck and counts how many red cards there are. (Should always be 26.)
