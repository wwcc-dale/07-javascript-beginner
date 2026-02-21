---
name: "Session 18: Spades Rules Implementation"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
  - "html"
  - "zip"
---

# Session 18: Spades Rules Implementation

Add the Spades rule methods to `SpadesGame.js`: which cards are valid to play, what happens when a card is played, and who wins the trick.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing `SpadesGame.js` (with new methods) and `test.html`

---

## Level 1 – Core (15 pts)

### Challenge 1: `getValidCards(player)`

Add this method to `SpadesGame`. It returns an array of Card objects that the player is allowed to play given the current trick state:

- If the trick is empty (player is leading):
  - If `spadesBroken` is false, return only non-spade cards; if the player has no non-spades, return all cards
  - If `spadesBroken` is true, return all cards
- If the trick has cards (player is following):
  - Find cards matching the led suit
  - If the player has any, return only those; otherwise return all cards

### Challenge 2: `playCard(player, card)`

Add this method to `SpadesGame`. It:
1. Calls `player.playCard(card)` — which uses `equals()` to remove the card from the hand
2. Returns `false` if the card was not found in the hand
3. Sets `this.spadesBroken = true` if the played card is a spade
4. Pushes `{ player, card: played }` onto `this.currentTrick`
5. Returns `true` on success

### Challenge 3: `determineTrickWinner()`

Add this method to `SpadesGame`. It scans all four `{ player, card }` entries in `currentTrick` and returns the player who played the winning card, using these rules:
- A spade always beats a non-spade
- Between two spades (or two cards of the same non-spade suit), the higher value wins
- Cards of a non-led, non-trump suit never win

### Challenge 4: Test Page

Create `test.html` that loads all your JS files and verifies each method. At minimum, test:

```js
const players = [
  new Player('You', false),
  new AIPlayer('West'),
  new AIPlayer('Partner'),
  new AIPlayer('East')
];
const game = new SpadesGame(players);
game.startRound();

// --- getValidCards: no spades before breaking ---
const you = players[0];
if (you.hand.some(c => c.getSuit() !== 'Spades')) {
  const valid = game.getValidCards(you);
  console.log('No spades in valid before breaking:', !valid.some(c => c.getSuit() === 'Spades'));
}

// --- playCard and spadesBroken ---
const spadeCard = new Card('Spades', '2');
you.hand = [spadeCard];
game.playCard(you, spadeCard);
console.log('Spades broken:', game.spadesBroken);  // true
game.clearTrick();

// --- determineTrickWinner: trump beats led suit ---
game.startRound();
const [p0, p1, p2, p3] = game.players;
p0.hand = [new Card('Hearts', 'A')];
p1.hand = [new Card('Hearts', 'K')];
p2.hand = [new Card('Spades', '3')];
p3.hand = [new Card('Hearts', 'Q')];
game.playCard(p0, p0.hand[0]);
game.playCard(p1, p1.hand[0]);
game.playCard(p2, p2.hand[0]);
game.playCard(p3, p3.hand[0]);
const winner = game.determineTrickWinner();
console.log('Winner:', winner.name);  // 'Partner' — 3 of Spades trumps Ace of Hearts
game.clearTrick();
```

---

## Level 2 – Stretch (3 pts)

### Challenge 5: `isTrickComplete()`

Add a helper method:

```js
isTrickComplete() {
  return this.currentTrick.length === 4;
}
```

Test it by playing 4 cards and confirming it returns `true`.

### Challenge 6: Full 13-Trick Simulation

Write a loop in `test.html` that plays all 13 tricks using AI decisions for all four players and verifies that each player ends with 0 cards:

```js
game.startRound();
// Give all players AI decision capability for testing:
for (let trick = 0; trick < 13; trick++) {
  for (let i = 0; i < 4; i++) {
    const p = game.players[i];
    const valid = game.getValidCards(p);
    // Use the first valid card for simplicity
    game.playCard(p, valid[0]);
  }
  game.determineTrickWinner();
  game.clearTrick();
}
game.players.forEach(p => console.log(`${p.name} hand: ${p.hand.length}`));  // All 0
```

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Verify Follow-Suit Enforcement

Write a test that deals specific cards and confirms that `getValidCards()` correctly restricts choices when following suit:

```js
game.startRound();
const [p0, p1] = game.players;

// Lead with Diamonds
p0.hand = [new Card('Diamonds', 'K')];
game.playCard(p0, p0.hand[0]);

// Player 1 has one Diamond and one Spade — must play Diamond
p1.hand = [new Card('Diamonds', '5'), new Card('Spades', 'A')];
const valid = game.getValidCards(p1);
console.log('Valid count:', valid.length);  // 1
console.log('Must follow:', valid[0].getSuit());  // 'Diamonds'

// Player 1 has NO Diamonds — anything is valid
p1.hand = [new Card('Clubs', '9'), new Card('Spades', 'A')];
const validAll = game.getValidCards(p1);
console.log('No-follow valid count:', validAll.length);  // 2
game.clearTrick();
```
