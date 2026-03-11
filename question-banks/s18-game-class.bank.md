---
bank_name: "Session 18: BlackjackGame Class"
---

1. What does "separation of concerns" mean in the context of `BlackjackGame`?
a) The game class handles both logic and display
*b) The game class handles logic; a separate UI layer handles display
c) Each method should be in its own file
d) The player and dealer hands must never be compared

1. Why does `playerHit()` check `if (this._state !== 'playing') return;`?
a) For performance — skipping the check slows the game down
*b) To prevent the player from hitting after busting or after standing
c) Because `addCard` fails when called from methods other than the constructor
d) It is just a coding convention with no practical effect

1. Why does `startRound()` call `clear()` on both hands before dealing?
```js
startRound() {
  this._player.clear();
  this._dealer.clear();
  this._state = 'playing';
}
```
a) `clear()` shuffles the deck
*b) It removes cards from the previous round so the new round starts with empty hands
c) Without `clear()`, `addCard` would throw an error
d) It resets the deck to 52 cards

1. The outcome value `'push'` means:
a) The player's total is over 21
b) The dealer wins by exactly 1 point
c) The player folded
*d) Both player and dealer have the same total — a tie

1. What does this code do at the start of `startRound()`?
```js
if (this._deck.size < 15) {
  this._deck = new Deck();
  this._deck.shuffle();
}
```
a) It destroys all previously dealt cards from the game
*b) It creates and shuffles a fresh deck when the current deck is running low
c) It resets the score to zero
d) It prevents the player from busting

1. After `playerStand()` is called, which state transition occurs?
a) `'playing'` → `'idle'`
*b) `'playing'` → `'dealerPlaying'` → `'over'`
c) `'playing'` → `'over'` directly
d) `'playing'` → `'dealerPlaying'`; `'over'` only after a separate call

1. `getResult()` returns a plain object. Why not a class instance?
a) Plain objects are required for Blackjack games
b) Classes cannot be returned from methods
*c) A plain object is simpler — it just holds data for the UI to read, with no behaviour needed
d) Canvas LMS only accepts plain objects

1. Why return a copy (`[...array]`) instead of the original array?
```js
get playerCards() { return [...this._player.cards]; }
```
a) The spread operator sorts the cards
*b) It prevents external code from directly modifying the hand by accident
c) `this._player.cards` is a NodeList, not an Array
d) Returning references to private arrays always throws an error

1. The game state is `'over'` and you call `playerHit()`. What happens?
a) A card is dealt and the total is updated
*b) Nothing — the guard returns immediately because state is not `'playing'`
c) An exception is thrown
d) The game resets to `'idle'`

1. Which outcome is returned when both player and dealer have Blackjack?
a) `'blackjack'`
b) `'player_wins'`
*c) `'push'`
d) `'dealer_wins'`

1. After calling `startRound()`, if the player's hand is a Blackjack, what state is the game in?
a) `'playing'`
b) `'dealerPlaying'`
*c) `'over'`
d) `'idle'`

1. Why is `_runDealerTurn()` a private method (prefixed with `_`)?
a) Private methods run faster than public ones
*b) The dealer's auto-play is an internal implementation detail — nothing outside the class needs to call it directly
c) JavaScript prevents calling methods prefixed with `_` from outside the class
d) It is required when a method uses a `while` loop
