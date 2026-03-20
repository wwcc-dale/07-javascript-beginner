---
indent: 2
allowed_extensions:
- js
assignment_type: online
module: 4
name: 'Session 17: Hand Class and Blackjack Scoring'
points: 20
position: 6
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 17.3
submission_types:
- online_upload
---

# Session 17: Hand Class and Blackjack Scoring

Build the `Hand` class with Blackjack scoring rules, including ace adjustment.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `17-assignment.js`

> alert: warning
>
> Copy your `Card` and `Deck` classes from Session 16 into the top of this file before starting the challenges below.

---

## Level 1 – Core Tasks [15 pts](#pill:accent)

### Challenge 1: Hand Constructor and addCard
```js
// TODO: Create a Hand class with:
// - Constructor: creates empty _cards array
// - Method addCard(card): pushes a Card object onto _cards
// - Getter cards: returns _cards
// - Getter size: returns _cards.length

// Test:
// const h = new Hand();
// const deck = new Deck();
// deck.shuffle();
// h.addCard(deck.deal());
// h.addCard(deck.deal());
// console.log(h.size); // 2
```

### Challenge 2: getTotal() with Ace Adjustment
```js
// TODO: Add to Hand:
// - Method getTotal(): calculates the Blackjack value of the hand
//   Algorithm:
//   1. Sum all card values (Ace = 11, face cards = 10, numbers = face value)
//   2. Count how many Aces are in the hand
//   3. While total > 21 AND there are Aces counted as 11:
//      subtract 10 from total, decrement ace count
//   4. Return final total

// Test these totals manually:
// Ace + King → 21 (no adjustment)
// Ace + 8 + 6 → 15 (one adjustment: 25 → 15)
// Ace + Ace + 9 → 21 (one adjustment: 31 → 21)
// Ace + Ace + Ace + King → 13 (three adjustments: 43 → 33 → 23 → 13)

// const h = new Hand();
// h.addCard(new Card('Ace', 'Spades'));
// h.addCard(new Card('King', 'Hearts'));
// console.log(h.getTotal()); // 21
```

### Challenge 3: isBust() and isBlackjack()
```js
// TODO: Add to Hand:
// - Method isBust(): returns true if getTotal() > 21
// - Method isBlackjack(): returns true if size === 2 AND getTotal() === 21

// Test:
// const bust = new Hand();
// bust.addCard(new Card('King', 'Hearts'));
// bust.addCard(new Card('Queen', 'Diamonds'));
// bust.addCard(new Card('5', 'Clubs'));
// console.log(bust.isBust());      // true
// console.log(bust.isBlackjack()); // false

// const bj = new Hand();
// bj.addCard(new Card('Ace', 'Spades'));
// bj.addCard(new Card('Jack', 'Clubs'));
// console.log(bj.isBlackjack()); // true
// console.log(bj.isBust());      // false
```

### Challenge 4: clear() and toString()
```js
// TODO: Add to Hand:
// - Method clear(): empties the _cards array (reset for a new round)
// - Method toString(): returns a string representation:
//   "[card1, card2, ...] = [total]"
//   Example: "[Ace of Spades, King of Hearts] = 21"

// Test:
// const h = new Hand();
// h.addCard(new Card('Ace', 'Spades'));
// h.addCard(new Card('King', 'Hearts'));
// console.log(h.toString()); // "[Ace of Spades, King of Hearts] = 21"
// h.clear();
// console.log(h.size); // 0
```

---

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: Dealer hidden card simulation
```js
// TODO: Add to Hand:
// - Method getVisibleCards(): returns all cards except the last one
//   (simulates the dealer's face-down card)
// - Method getVisibleTotal(): calculates total using only visible cards
//   Hint: create a temporary Hand, add visible cards, call getTotal()

// Test:
// const dealer = new Hand();
// dealer.addCard(new Card('7', 'Hearts'));
// dealer.addCard(new Card('King', 'Clubs')); // face down
// console.log(dealer.getVisibleTotal()); // 7
// console.log(dealer.getTotal());        // 17
```

### Challenge 6: Simulate a round
```js
// TODO: Write a function simulateRound() that:
// 1. Creates a shuffled Deck
// 2. Creates two Hands: player and dealer
// 3. Deals 2 cards to each (alternating: player, dealer, player, dealer)
// 4. Logs both hands using toString()
// 5. If either has blackjack, log "BLACKJACK! [player/dealer] wins"
// 6. Otherwise logs "Player: [total], Dealer shows: [visibleTotal]"
// Call simulateRound() three times.
```

---

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Dealer auto-play
```js
// TODO: Write a function dealerAutoPlay(dealerHand, deck) that:
// - Keeps dealing cards to dealerHand until getTotal() >= 17
// - Returns the final total
// - Logs each card dealt: "Dealer draws: [card]"

// Test:
// const deck = new Deck();
// deck.shuffle();
// const dealer = new Hand();
// dealer.addCard(new Card('5', 'Hearts'));
// dealer.addCard(new Card('7', 'Clubs')); // total 12 — must hit
// const finalTotal = dealerAutoPlay(dealer, deck);
// console.log('Dealer final total:', finalTotal);
// // Should be 17 or more
```

---

## Before Submitting

- checklist: Before Submitting
- File named `17-assignment.js`
- Card and Deck classes copied from Session 16
- `Hand.getTotal()` handles ace adjustment correctly (adjusts 11→1 to avoid bust)
- `isBust()` and `isBlackjack()` return correct results
- `clear()` resets hand and `toString()` formats output correctly
- Code runs without errors
- Attempted Level 2 or 3 if time allowed
