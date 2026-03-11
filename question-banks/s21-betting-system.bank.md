---
bank_name: "Session 21: Betting System"
---

1. A player has 500 chips and places a bet of 200. They win a regular round (1:1 payout). How many chips do they have after `win()`?
a) `500`
b) `600`
*c) `700`
d) `900`

1. A player has 500 chips and places a bet of 200. They win with Blackjack (3:2 payout). How many chips do they have?
a) `700`
*b) `800`
c) `750`
d) `500`

1. Why does `placeBet()` deduct chips immediately, rather than waiting until the round ends?
a) It makes the code simpler
*b) It prevents the player from spending chips they don't have mid-round
c) JavaScript requires deduction before an `if` statement
d) The wallet needs `currentBet` to be 0 during the round

1. A player bets 100 chips but only has 50. What does `placeBet(100)` return?
a) `true` — the wallet goes into negative balance
*b) `false` — the bet is rejected
c) `null`
d) It throws a RangeError

1. After a push (tie), how does the wallet change?
a) The player loses half the bet
b) The player receives double the bet
*c) The bet is returned — chips go back to what they were before betting
d) Nothing happens — chips and bet stay the same

1. `isBankrupt()` returns `true` when:
a) `_chips < 100`
b) `_currentBet > _chips`
*c) `_chips === 0` and `_currentBet === 0`
d) The player has lost 3 rounds in a row

1. Why might `startRound(betAmount)` return `false`?
a) The deck ran out of cards
b) The previous round wasn't finished
*c) `wallet.placeBet(betAmount)` returned false (invalid or unaffordable bet)
d) The game is already in state `'playing'`

1. Why is `Math.floor()` used for the Blackjack payout?
```js
const payout = isBlackjack
  ? this._currentBet + Math.floor(this._currentBet * 1.5)
  : this._currentBet * 2;
```
a) To avoid floating-point overflow
b) Blackjack winnings are always rounded up
*c) 1.5× may produce a fraction of a chip — floor rounds down to whole chips
d) `Math.floor` is required in ternary expressions

1. The `wallet` getter on `BlackjackGame` returns the `Wallet` object. Why expose it as a getter rather than a direct property?
a) Getters are faster than direct property access
*b) It gives the UI read access to balance and bet without letting external code replace the wallet object
c) JavaScript requires getters for objects stored inside classes
d) No reason — it's purely a style choice with no practical difference

1. The player enters a bet of `0`. What should `placeBet(0)` return?
*a) `false` — 0 is not a valid bet
b) `true` — 0 is a valid bet (they're just watching)
c) It throws a TypeError
d) `null`
