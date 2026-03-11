---
bank_name: "Session 17: Hand Class and Blackjack Scoring"
---

1. A hand contains: Ace, King. What does `getTotal()` return?
a) `12`
b) `22`
*c) `21`
d) `1`

1. A hand contains: Ace, 8, 6. What does `getTotal()` return?
*a) `15`
b) `25`
c) `5`
d) `11`

1. A hand contains: Ace, Ace, 9. What does `getTotal()` return?
a) `31`
b) `11`
*c) `21`
d) `19`

1. What is `isBlackjack()` designed to detect?
a) Any hand totalling 21
*b) A 2-card hand totalling exactly 21
c) Any hand that beats the dealer
d) A hand with an Ace and a face card regardless of card count

1. Why does this loop decrement `aces` each iteration?
```js
while (total > 21 && aces > 0) {
  total -= 10;
  aces--;
}
```
a) To count how many aces were removed from the hand
*b) To track how many aces are still counted as 11 (available to reduce)
c) Because `aces` needs to reach 0 for the loop to end
d) To prevent infinite loops caused by negative totals

1. When does the dealer stop hitting?
a) When the dealer has 5 cards
b) When the dealer's total equals the player's total
*c) When the dealer's total is 17 or more
d) The dealer never hits — they only have the initial 2 cards

1. A hand contains: Ace, Ace, Ace, King. What does `getTotal()` return?
a) `43`
b) `23`
*c) `13`
d) `33`

1. What does `isBust()` return for a hand of 10, 5, 9?
```js
isBust() {
  return this.getTotal() > 21;
}
```
*a) `true`
b) `false`
c) `24`
d) `null`

1. Why does `addCard(card)` use `push()` rather than assigning directly?
a) Because classes require `push()` for all property changes
b) `push()` shuffles the array before adding
*c) `push()` appends to the end of the existing array without replacing it
d) `push()` validates that the card is a `Card` instance first

1. A player has a total of 21 with 3 cards. The `isBlackjack()` method returns:
*a) `false`
b) `true`
c) It depends on which cards are in the hand
d) `null`

1. What is the lowest possible total for a freshly dealt 2-card hand (without aces)?
a) `2`
b) `3`
*c) `4`
d) `10`

1. The dealer has: 6, 7 (total 13). The player already busted. Does the dealer still hit?
a) No — the player busted so the round ends immediately
b) No — the dealer always stops at 13 or above
*c) No — the player's bust ends the round before the dealer plays
d) Yes — the dealer must always play out their hand
