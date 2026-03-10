---
allowed_attempts: 3
indent: 1
module: 4
name: Session 18 Quiz – BlackjackGame Class
position: 8
published: false
question_groups:
- bank: s18-game-class.bank
  pick: 12
  points_per_question: 1
quiz_type: practice_quiz
session: 18.2
show_correct_answers: true
shuffle_answers: true
time_limit: 15
---

# Session 18 Quiz – BlackjackGame Class

Test your understanding of the BlackjackGame class, state management, and the separation between game logic and UI.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s18-game-class.bank

## Q1

What does "separation of concerns" mean in the context of `BlackjackGame`?

- [ ] The game class handles both logic and display
- [x] The game class handles logic; a separate UI layer handles display
- [ ] Each method should be in its own file
- [ ] The player and dealer hands must never be compared

> **Correct.** Separation of concerns means the game class knows nothing about how to display cards — that is the UI's job. This makes both parts easier to test and change independently.

---

## Q2

Why does `playerHit()` check `if (this._state !== 'playing') return;`?

- [ ] For performance — skipping the check slows the game down
- [x] To prevent the player from hitting after busting or after standing
- [ ] Because `addCard` fails when called from methods other than the constructor
- [ ] It is just a coding convention with no practical effect

> **Correct.** State guards prevent actions that would only make sense during a specific phase of the game.

---

## Q3

```js
startRound() {
  this._player.clear();
  this._dealer.clear();
  this._state = 'playing';
  ...
}
```

Why does `startRound()` call `clear()` on both hands before dealing?

- [ ] `clear()` shuffles the deck
- [x] It removes cards from the previous round so the new round starts with empty hands
- [ ] Without `clear()`, `addCard` would throw an error
- [ ] It resets the deck to 52 cards

> **Correct.** `clear()` empties the hand array. Without it, cards from the previous round would still be in the hands.

---

## Q4

The outcome value `'push'` means:

- [ ] The player's total is over 21
- [ ] The dealer wins by exactly 1 point
- [ ] The player folded
- [x] Both player and dealer have the same total — a tie

> **Correct.** In Blackjack, a tie is called a "push". The player's bet is returned.

---

## Q5

```js
if (this._deck.size < 15) {
  this._deck = new Deck();
  this._deck.shuffle();
}
```

What does this code do at the start of `startRound()`?

- [ ] It destroys all previously dealt cards from the game
- [x] It creates and shuffles a fresh deck when the current deck is running low
- [ ] It resets the score to zero
- [ ] It prevents the player from busting

> **Correct.** Checking deck size and resetting when low prevents the deck from running out during a round.

---

## Q6

After `playerStand()` is called, which state transition occurs?

- [ ] `'playing'` → `'idle'`
- [x] `'playing'` → `'dealerPlaying'` → `'over'`
- [ ] `'playing'` → `'over'` directly
- [ ] `'playing'` → `'dealerPlaying'`; `'over'` only after a separate call

> **Correct.** `playerStand()` sets state to `'dealerPlaying'`, then immediately calls `_runDealerTurn()` which sets state to `'over'` after the dealer finishes.

---

## Q7

`getResult()` returns a plain object. Why not a class instance?

- [ ] Plain objects are required for Blackjack games
- [ ] Classes cannot be returned from methods
- [x] A plain object is simpler — it just holds data for the UI to read, with no behaviour needed
- [ ] Canvas LMS only accepts plain objects

> **Correct.** A result object is pure data — outcome, totals, card lists. There is no behaviour to encapsulate, so a plain object is the right choice.

---

## Q8

```js
get playerCards() { return [...this._player.cards]; }
```

Why return a copy (`[...array]`) instead of the original array?

- [ ] The spread operator sorts the cards
- [x] It prevents external code from directly modifying the hand by accident
- [ ] `this._player.cards` is a NodeList, not an Array
- [ ] Returning references to private arrays always throws an error

> **Correct.** Returning a copy means outside code can loop over it or display it, but modifying the returned array won't affect the actual hand.

---

## Q9

The game state is `'over'` and you call `playerHit()`. What happens?

- [ ] A card is dealt and the total is updated
- [x] Nothing — the guard returns immediately because state is not `'playing'`
- [ ] An exception is thrown
- [ ] The game resets to `'idle'`

> **Correct.** `if (this._state !== 'playing') return;` exits immediately when state is not `'playing'`.

---

## Q10

Which outcome is returned when both player and dealer have Blackjack?

- [ ] `'blackjack'`
- [ ] `'player_wins'`
- [x] `'push'`
- [ ] `'dealer_wins'`

> **Correct.** The condition `playerBJ && !dealerBJ` must be true for `'blackjack'` outcome. When both have blackjack, neither wins — it falls through to the push comparison.

---

## Q11

After calling `startRound()`, if the player's hand is a Blackjack, what state is the game in?

- [ ] `'playing'`
- [ ] `'dealerPlaying'`
- [x] `'over'`
- [ ] `'idle'`

> **Correct.** The `startRound()` code checks `if (this._player.isBlackjack()) this._state = 'over';` immediately after dealing.

---

## Q12

Why is `_runDealerTurn()` a private method (prefixed with `_`)?

- [ ] Private methods run faster than public ones
- [x] The dealer's auto-play is an internal implementation detail — nothing outside the class needs to call it directly
- [ ] JavaScript prevents calling methods prefixed with `_` from outside the class
- [ ] It is required when a method uses a `while` loop

> **Correct.** The `_` convention signals that `_runDealerTurn` is an internal helper. External code should only call `playerStand()`, which calls `_runDealerTurn()` internally.

---

:::end
