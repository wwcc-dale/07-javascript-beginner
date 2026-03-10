---
allowed_attempts: 3
indent: 1
module: 4
name: Session 17 Quiz – Hand Class and Blackjack Scoring
position: 5
published: false
question_groups:
- bank: s17-hand-scoring.bank
  pick: 12
  points_per_question: 1
quiz_type: practice_quiz
session: 17.2
show_correct_answers: true
shuffle_answers: true
time_limit: 15
---

# Session 17 Quiz – Hand Class and Blackjack Scoring

Test your understanding of the Hand class, the ace-adjustment algorithm, and basic Blackjack rules.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s17-hand-scoring.bank

## Q1

A hand contains: **Ace, King**. What does `getTotal()` return?

- [ ] `12`
- [ ] `22`
- [x] `21`
- [ ] `1`

> **Correct.** Ace = 11, King = 10. Total = 21. No adjustment needed.

---

## Q2

A hand contains: **Ace, 8, 6**. What does `getTotal()` return?

- [x] `15`
- [ ] `25`
- [ ] `5`
- [ ] `11`

> **Correct.** 11 + 8 + 6 = 25. Over 21 with 1 Ace: subtract 10 → 15.

---

## Q3

A hand contains: **Ace, Ace, 9**. What does `getTotal()` return?

- [ ] `31`
- [ ] `11`
- [x] `21`
- [ ] `19`

> **Correct.** 11+11+9 = 31. Over 21, subtract 10 → 21. No longer over 21, stop. Total = 21.

---

## Q4

What is `isBlackjack()` designed to detect?

- [ ] Any hand totalling 21
- [x] A 2-card hand totalling exactly 21
- [ ] Any hand that beats the dealer
- [ ] A hand with an Ace and a face card regardless of card count

> **Correct.** Blackjack is specifically a 2-card hand of 21. Three cards that total 21 is not a blackjack.

---

## Q5

```js
while (total > 21 && aces > 0) {
  total -= 10;
  aces--;
}
```

Why does this loop decrement `aces` each iteration?

- [ ] To count how many aces were removed from the hand
- [x] To track how many aces are still counted as 11 (available to reduce)
- [ ] Because `aces` needs to reach 0 for the loop to end
- [ ] To prevent infinite loops caused by negative totals

> **Correct.** Each iteration converts one Ace from 11 to 1 (by subtracting 10). Decrementing `aces` tracks that this Ace can no longer be adjusted again.

---

## Q6

When does the dealer stop hitting?

- [ ] When the dealer has 5 cards
- [ ] When the dealer's total equals the player's total
- [x] When the dealer's total is 17 or more
- [ ] The dealer never hits — they only have the initial 2 cards

> **Correct.** The standard Blackjack rule is "stand on 17": the dealer hits until reaching 17, then stops.

---

## Q7

A hand contains: **Ace, Ace, Ace, King**. What does `getTotal()` return?

- [ ] `43`
- [ ] `23`
- [x] `13`
- [ ] `33`

> **Correct.** 11+11+11+10 = 43. Subtract 10 → 33. Subtract 10 → 23. Subtract 10 → 13. Three aces adjusted. Total = 13.

---

## Q8

```js
isBust() {
  return this.getTotal() > 21;
}
```

What does `isBust()` return for a hand of **10, 5, 9**?

- [x] `true`
- [ ] `false`
- [ ] `24`
- [ ] `null`

> **Correct.** 10+5+9 = 24 > 21, so `isBust()` returns `true`.

---

## Q9

Why does `addCard(card)` use `push()` rather than assigning directly?

- [ ] Because classes require `push()` for all property changes
- [ ] `push()` shuffles the array before adding
- [x] `push()` appends to the end of the existing array without replacing it
- [ ] `push()` validates that the card is a `Card` instance first

> **Correct.** `this._cards.push(card)` adds the card to the array. Direct assignment (`this._cards = card`) would replace the array with a single card.

---

## Q10

A player has a total of 21 with 3 cards. The `isBlackjack()` method returns:

- [x] `false`
- [ ] `true`
- [ ] It depends on which cards are in the hand
- [ ] `null`

> **Correct.** `isBlackjack()` requires exactly 2 cards. Three cards totalling 21 is not a blackjack.

---

## Q11

What is the lowest possible total for a freshly dealt 2-card hand (without aces)?

- [ ] `2`
- [ ] `3`
- [x] `4`
- [ ] `10`

> **Correct.** The lowest non-Ace cards are 2 and 2. 2 + 2 = 4.

---

## Q12

The dealer has: **6, 7** (total 13). The player already busted. Does the dealer still hit?

- [ ] No — the player busted so the round ends immediately
- [ ] No — the dealer always stops at 13 or above
- [x] No — the player's bust ends the round before the dealer plays
- [ ] Yes — the dealer must always play out their hand

> **Correct.** In Blackjack, if the player busts, the dealer wins immediately without playing. The dealer's hand is only played when the player stands.

---

:::end
