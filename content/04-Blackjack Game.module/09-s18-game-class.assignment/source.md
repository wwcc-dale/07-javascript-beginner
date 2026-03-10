# Session 18: BlackjackGame Class

Build the `BlackjackGame` class that coordinates `Deck` and `Hand` objects.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `18-assignment.js`

Copy your `Card`, `Deck`, and `Hand` classes from Sessions 16–17 into the top of this file.

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Constructor and State
```js
// TODO: Create a BlackjackGame class with:
// - Constructor:
//   - Creates a Deck, shuffles it, stores in this._deck
//   - Creates two Hands: this._player, this._dealer
//   - Sets this._state = 'idle'
// - Getter state: returns _state
// - Getters playerTotal, dealerTotal: return the respective hand totals
// - Getters playerCards, dealerCards: return copies of the card arrays
//   (use spread: return [...this._player.cards])

// Test:
// const game = new BlackjackGame();
// console.log(game.state); // 'idle'
```

### Challenge 2: startRound()
```js
// TODO: Add to BlackjackGame:
// - Method startRound():
//   1. Clear both hands
//   2. Set state to 'playing'
//   3. If deck has fewer than 15 cards, create and shuffle a new deck
//   4. Deal in this order: player, dealer, player, dealer
//   5. If player has Blackjack, set state to 'over'

// Test:
// const game = new BlackjackGame();
// game.startRound();
// console.log(game.state);        // 'playing' (or 'over' if blackjack)
// console.log(game.playerCards.length); // 2
// console.log(game.dealerCards.length); // 2
// console.log(game.playerTotal); // some number between 4 and 21
```

### Challenge 3: playerHit() and playerStand()
```js
// TODO: Add to BlackjackGame:
// - Method playerHit():
//   - Guard: if state !== 'playing', return immediately
//   - Deal one card to player
//   - If player busts, set state to 'over'
//
// - Method playerStand():
//   - Guard: if state !== 'playing', return immediately
//   - Set state to 'dealerPlaying'
//   - Run the dealer turn (see Challenge 4)

// Test:
// const game = new BlackjackGame();
// game.startRound();
// if (game.state === 'playing') {
//   game.playerHit();
//   console.log('After hit:', game.playerTotal);
//   if (!game._player.isBust()) {
//     game.playerStand();
//   }
//   console.log('State:', game.state); // 'over'
// }
```

### Challenge 4: _runDealerTurn() and getResult()
```js
// TODO: Add to BlackjackGame:
// - Private method _runDealerTurn():
//   - While dealer total < 17: deal a card to dealer
//   - Set state to 'over'
//
// - Method getResult():
//   - Should only be called when state === 'over'
//   - Determine the outcome:
//     - 'player_bust'  — player total > 21
//     - 'dealer_bust'  — dealer total > 21 (only if player didn't bust)
//     - 'blackjack'    — player has blackjack and dealer does not
//     - 'player_wins'  — player total > dealer total
//     - 'dealer_wins'  — dealer total > player total
//     - 'push'         — totals are equal
//   - Return an object: { outcome, playerTotal, dealerTotal,
//                         playerHand: [...], dealerHand: [...] }
//     where playerHand and dealerHand are arrays of card toString() strings

// Test:
// const game = new BlackjackGame();
// game.startRound();
// while (game.state === 'playing') {
//   if (game.playerTotal < 17) {
//     game.playerHit();
//   } else {
//     game.playerStand();
//   }
// }
// const result = game.getResult();
// console.log(result.outcome);
// console.log('Player:', result.playerTotal, result.playerHand);
// console.log('Dealer:', result.dealerTotal, result.dealerHand);
```

---

## Level 2 – Stretch (3 points)

### Challenge 5: Play 10 Rounds
```js
// TODO: Write a function playRounds(numRounds) that:
// - Creates one BlackjackGame
// - Plays numRounds rounds with this strategy:
//   - If playerTotal <= 15, hit
//   - Otherwise, stand
// - Counts wins, losses, pushes, and blackjacks
// - Returns an object: { wins, losses, pushes, blackjacks }
// - Logs a summary at the end

// Test:
// const stats = playRounds(10);
// console.log(stats);
```

### Challenge 6: Can the player stand on their first card?
```js
// TODO: Test this scenario:
// 1. Call startRound()
// 2. Immediately call playerStand() (no hits)
// 3. Call getResult()
// 4. Log the outcome
// Does the game handle this correctly?
// Repeat 5 times and note the distribution of outcomes.
```

---

## Level 3 – Advanced (2 points)

### Challenge 7: Soft hand detection
```js
// TODO: Add to Hand:
// - Method isSoft(): returns true if the hand's total uses an Ace as 11
//   (i.e., the total without adjustment would be > 21, but the hand is not bust)
//   Hint: calculate the "hard total" (all Aces = 1) and compare to getTotal()
//   If getTotal() > hardTotal, one or more Aces are counted as 11 → soft hand.

// TODO: Use isSoft() in BlackjackGame to implement "soft 17" dealer rule:
//   The dealer must hit on a soft 17 (Ace + 6) even though total = 17.
//   Change _runDealerTurn() to: hit while total < 17 OR (total === 17 AND isSoft())

// Test:
// const h = new Hand();
// h.addCard(new Card('Ace', 'Spades'));
// h.addCard(new Card('6', 'Hearts'));
// console.log(h.getTotal()); // 17
// console.log(h.isSoft());   // true
```
