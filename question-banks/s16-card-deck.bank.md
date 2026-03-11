---
bank_name: "Session 16: Card and Deck Classes"
---

1. How many cards are in a standard deck?
a) 48
*b) 52
c) 54
d) 40

1. What does `c.toString()` return?
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
a) `"King Hearts"`
*b) `"King of Hearts"`
c) `"Hearts of King"`
d) `"card"`

1. In the Fisher-Yates shuffle, what does this line do?
```js
[this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
```
a) Creates a new array from two existing arrays
b) Removes one element and inserts it elsewhere
*c) Swaps two elements in the array without a temporary variable
d) Sorts the two elements in ascending order

1. What does `new Card('Queen', 'Clubs').getValue()` return?
```js
getValue() {
  if (this._rank === 'Ace') return 11;
  if (['Jack', 'Queen', 'King'].includes(this._rank)) return 10;
  return parseInt(this._rank);
}
```
a) `0`
b) `12`
*c) `10`
d) `NaN`

1. Why does `deal()` use `pop()` instead of `shift()`?
a) `pop()` returns a random element; `shift()` always returns the first
*b) `pop()` removes from the end in O(1); `shift()` removes from the start and is slower on large arrays
c) `shift()` doesn't work on arrays inside classes
d) There is no difference — either would work equally well

1. After creating `new Deck()` and calling `shuffle()`, then `deal()` twice, what is `deck.size`?
a) 52
b) 54
*c) 50
d) 48

1. The `_build()` method uses nested `for...of` loops. Why?
a) `for...of` is faster than `for` loops for arrays
*b) One loop for suits and one for ranks generates all 52 combinations
c) Nested loops are required when working with classes
d) `for...of` is the only loop that can push to an array

1. What does `deal()` return when the deck is empty?
```js
deal() {
  if (this._cards.length === 0) return null;
  return this._cards.pop();
}
```
a) `undefined`
b) `0`
*c) `null`
d) It throws a RangeError

1. What value does `new Card('7', 'Diamonds').getValue()` return?
*a) `7`
b) `70`
c) `NaN`
d) `"7"`

1. Why should `_build()` be a separate private method instead of being written directly in the constructor?
a) It runs faster as a separate method
b) The constructor can only contain assignment statements
*c) It keeps the constructor short and makes the build logic easier to read and test in isolation
d) Methods starting with `_` are called automatically before the constructor

1. After shuffling, is the order of cards predictable?
a) Yes — `Math.random()` uses a fixed seed
*b) No — `Math.random()` produces a different sequence each time
c) Yes — cards are always in reverse alphabetical order after shuffling
d) No — but only the first card is random; the rest stay in order

1. What does `parseInt('Jack')` return?
a) `11`
b) `10`
c) `0`
*d) `NaN`
