---
allowed_attempts: 3
indent: 1
module: 5
name: Session 21 Quiz – Betting System
position: 2
published: false
question_groups:
- bank: s21-betting-system.bank
  pick: 10
  points_per_question: 1
quiz_type: practice_quiz
session: 21.2
show_correct_answers: true
shuffle_answers: true
time_limit: 12
---

# Session 21 Quiz – Betting System

Test your understanding of the Wallet class and Blackjack payout rules.

10 questions · 12 minutes · 3 attempts · 10 points

---

:::bank s21-betting-system.bank

## Q1

A player has 500 chips and places a bet of 200. They win a regular round. How many chips do they have after `win()`?

- [ ] `500`
- [ ] `700`
- [x] `700`
- [ ] `900`

> **Correct.** 500 − 200 = 300 chips after betting. Winning 1:1 returns 200 × 2 = 400. 300 + 400 = 700.

---

## Q2

A player has 500 chips and places a bet of 200. They win with Blackjack (3:2 payout). How many chips do they have?

- [ ] `700`
- [x] `800`
- [ ] `750`
- [ ] `500`

> **Correct.** 500 − 200 = 300 after betting. Blackjack payout: 200 + floor(200 × 1.5) = 200 + 300 = 500. 300 + 500 = 800.

---

## Q3

Why does `placeBet()` deduct chips immediately, rather than waiting until the round ends?

- [ ] It makes the code simpler
- [x] It prevents the player from spending chips they don't have mid-round
- [ ] JavaScript requires deduction before an `if` statement
- [ ] The wallet needs `currentBet` to be 0 during the round

> **Correct.** Deducting at bet time means you always know the chips reflect reality. If the bet were deducted at round end, the balance would appear inflated during the round.

---

## Q4

A player bets 100 chips but only has 50. What does `placeBet(100)` return?

- [ ] `true` — the wallet goes into negative balance
- [x] `false` — the bet is rejected
- [ ] `null`
- [ ] It throws a RangeError

> **Correct.** `if (amount > this._chips) return false;` prevents over-betting.

---

## Q5

After a push (tie), how does the wallet change?

- [ ] The player loses half the bet
- [ ] The player receives double the bet
- [x] The bet is returned — chips go back to what they were before betting
- [ ] Nothing happens — chips and bet stay the same

> **Correct.** A push returns the original bet. The player neither wins nor loses chips.

---

## Q6

`isBankrupt()` returns `true` when:

- [ ] `_chips < 100`
- [ ] `_currentBet > _chips`
- [x] `_chips === 0` and `_currentBet === 0`
- [ ] The player has lost 3 rounds in a row

> **Correct.** Bankruptcy means the player has no chips and no active bet. If they have an active bet and 0 chips, they still have chips in play.

---

## Q7

Why might `startRound(betAmount)` return `false`?

- [ ] The deck ran out of cards
- [ ] The previous round wasn't finished
- [x] `wallet.placeBet(betAmount)` returned false (invalid or unaffordable bet)
- [ ] The game is already in state `'playing'`

> **Correct.** `startRound()` returns false when the wallet rejects the bet — the round does not begin.

---

## Q8

```js
const payout = isBlackjack
  ? this._currentBet + Math.floor(this._currentBet * 1.5)
  : this._currentBet * 2;
```

Why is `Math.floor()` used for the Blackjack payout?

- [ ] To avoid floating-point overflow
- [ ] Blackjack winnings are always rounded up
- [x] 1.5× may produce a fraction of a chip — floor rounds down to whole chips
- [ ] `Math.floor` is required in ternary expressions

> **Correct.** If the bet is an odd number (e.g., 25), 25 × 1.5 = 37.5. `Math.floor(37.5)` = 37, giving whole chips.

---

## Q9

The `wallet` getter on `BlackjackGame` returns the `Wallet` object. Why expose it as a getter rather than a direct property?

- [ ] Getters are faster than direct property access
- [x] It gives the UI read access to balance and bet without letting external code replace the wallet object
- [ ] JavaScript requires getters for objects stored inside classes
- [ ] No reason — it's purely a style choice with no practical difference

> **Correct.** A getter returns the reference but doesn't allow `game.wallet = anotherWallet`. Direct property access (`this.wallet`) would allow external code to overwrite it.

---

## Q10

The player enters a bet of `0`. What should `placeBet(0)` return?

- [x] `false` — 0 is not a valid bet
- [ ] `true` — 0 is a valid bet (they're just watching)
- [ ] It throws a TypeError
- [ ] `null`

> **Correct.** `if (amount <= 0) return false;` rejects zero and negative bets.

---

:::end
