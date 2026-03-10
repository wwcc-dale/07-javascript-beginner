# Session 16 Quiz – Card and Deck Classes

Test your understanding of the Card and Deck classes and the Fisher-Yates shuffle.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s16-card-deck.bank

## Q1

How many cards are in a standard deck?

- [ ] 48
- [x] 52
- [ ] 54
- [ ] 40

> **Correct.** 13 ranks × 4 suits = 52 cards.

---

## Q2

```js
class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }
  toString() { return `${this._rank} of ${this._suit}`; }
}
const c = new Card('King', 'Hearts');
```

What does `c.toString()` return?

- [ ] `"King Hearts"`
- [x] `"King of Hearts"`
- [ ] `"Hearts of King"`
- [ ] `"card"`

> **Correct.** The template literal includes `" of "` between rank and suit.

---

## Q3

In the Fisher-Yates shuffle, what does this line do?
```js
[this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
```

- [ ] Creates a new array from two existing arrays
- [ ] Removes one element and inserts it elsewhere
- [x] Swaps two elements in the array without a temporary variable
- [ ] Sorts the two elements in ascending order

> **Correct.** Array destructuring on the left side allows a clean two-value swap.

---

## Q4

```js
getValue() {
  if (this._rank === 'Ace') return 11;
  if (['Jack', 'Queen', 'King'].includes(this._rank)) return 10;
  return parseInt(this._rank);
}
```

What does `new Card('Queen', 'Clubs').getValue()` return?

- [ ] `0`
- [ ] `12`
- [x] `10`
- [ ] `NaN`

> **Correct.** Queen is a face card, so it returns 10.

---

## Q5

Why does `deal()` use `pop()` instead of `shift()`?

- [ ] `pop()` returns a random element; `shift()` always returns the first
- [x] `pop()` removes from the end in O(1); `shift()` removes from the start and is slower on large arrays
- [ ] `shift()` doesn't work on arrays inside classes
- [ ] There is no difference — either would work equally well

> **Correct.** `pop()` is O(1) because no elements need to be re-indexed. `shift()` is O(n) because every remaining element moves one position.

---

## Q6

After creating `new Deck()` and calling `shuffle()`, then `deal()` twice, what is `deck.size`?

- [ ] 52
- [ ] 54
- [x] 50
- [ ] 48

> **Correct.** 52 − 2 = 50 cards remain after dealing two.

---

## Q7

The `_build()` method uses nested `for...of` loops. Why?

- [ ] `for...of` is faster than `for` loops for arrays
- [x] One loop for suits and one for ranks generates all 52 combinations
- [ ] Nested loops are required when working with classes
- [ ] `for...of` is the only loop that can push to an array

> **Correct.** For each of 4 suits, you loop through 13 ranks — 4 × 13 = 52 cards.

---

## Q8

```js
deal() {
  if (this._cards.length === 0) return null;
  return this._cards.pop();
}
```

What does `deal()` return when the deck is empty?

- [ ] `undefined`
- [ ] `0`
- [x] `null`
- [ ] It throws a RangeError

> **Correct.** The guard clause explicitly returns `null` when there are no cards left.

---

## Q9

What value does `new Card('7', 'Diamonds').getValue()` return?

- [x] `7`
- [ ] `70`
- [ ] `NaN`
- [ ] `"7"`

> **Correct.** `parseInt('7')` returns the number 7.

---

## Q10

Why should `_build()` be a separate private method instead of being written directly in the constructor?

- [ ] It runs faster as a separate method
- [ ] The constructor can only contain assignment statements
- [x] It keeps the constructor short and makes the build logic easier to read and test in isolation
- [ ] Methods starting with `_` are called automatically before the constructor

> **Correct.** Separating build logic into `_build()` is a single-responsibility pattern — the constructor just sets up the object; `_build()` handles the detail.

---

## Q11

After shuffling, is the order of cards predictable?

- [ ] Yes — `Math.random()` uses a fixed seed
- [x] No — `Math.random()` produces a different sequence each time
- [ ] Yes — cards are always in reverse alphabetical order after shuffling
- [ ] No — but only the first card is random; the rest stay in order

> **Correct.** `Math.random()` returns a different float on each call, making the shuffle unpredictable.

---

## Q12

What does `parseInt('Jack')` return?

- [ ] `11`
- [ ] `10`
- [ ] `0`
- [x] `NaN`

> **Correct.** `parseInt` tries to parse a leading number. 'Jack' has no leading digits, so it returns `NaN`. This is why face cards must be handled before calling `parseInt`.

---

:::end
