---
name: "Session 17: Player, AIPlayer, and Dealing"
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

# Session 17: Player, AIPlayer, and Dealing

Build `Player.js` and `AIPlayer.js` from scratch, then add the constructor and dealing logic to `SpadesGame.js`.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing `Player.js`, `AIPlayer.js`, `SpadesGame.js` (partial), and `test.html`

---

## Level 1 – Core (15 pts)

### Challenge 1: Player Class

Create `Player.js` with a class that has:

- `constructor(name, isAI = false)` — stores `name`, `isAI`, and initializes:
  - `hand = []` — array of Card objects
  - `score = 0` — cumulative score across all rounds
  - `bags = 0` — accumulated overtricks (bags)
  - `bid = null` — set during bidding each round
  - `tricksWon = 0` — reset each round
- `addCard(card)` — pushes a card onto `hand`
- `playCard(card)` — finds the card using `equals()`, removes and returns it; returns `null` if not found
- `setBid(bid)` — sets `this.bid`
- `incrementTricks()` — increments `this.tricksWon`
- `resetForRound()` — resets `hand`, `bid`, and `tricksWon` (does NOT reset score or bags)

### Challenge 2: AIPlayer Subclass

Create `AIPlayer.js` with a class that `extends Player`:

- `constructor(name)` — calls `super(name, true)` to set `isAI = true`
- `getBidDecision(hand)` — estimates tricks based on hand strength:
  - Count spades in hand
  - Count high cards (Jack or higher, i.e., `getValue() >= 11`)
  - Add them: if strength ≥ 8 bid 4; ≥ 6 bid 3; ≥ 4 bid 2; else bid 1
- `getCardDecision(validCards, trick)` — returns the card to play:
  - If `this.bid === 0` (nil): return the lowest card
  - If leading (trick is empty): play the lowest non-spade; if only spades, play the lowest spade
  - Otherwise: try `findCheapestWinningCard`; if no winner, return the lowest card
- `findCheapestWinningCard(validCards, trick)` — filters to cards that `canWin`, returns the one with the lowest value; returns `null` if none
- `canWin(card, trick)` — returns true if `card` beats the current best card in `trick`
- `findLowestCard(cards)` — returns the card with the minimum `getValue()`

### Challenge 3: SpadesGame Setup

Copy the `SpadesGame` class skeleton below into `SpadesGame.js`. Implement the `constructor` and `startRound()` using what you learned in the reading:

```js
class SpadesGame {
  constructor(players) {
    // players[0] = You (South), players[1] = West,
    // players[2] = Partner (North), players[3] = East
    // Team 0: players[0] + players[2]
    // Team 1: players[1] + players[3]
    this.players = players;
    this.teams = [
      { name: 'You & Partner', players: [players[0], players[2]], score: 0, bags: 0 },
      { name: 'Opponents',     players: [players[1], players[3]], score: 0, bags: 0 }
    ];
    // TODO: create a Deck, set roundNumber=0, dealerIndex=3,
    //       spadesBroken=false, currentTrick=[], trickLeaderIndex=0
  }

  startRound() {
    // TODO: increment roundNumber, advance dealerIndex (mod 4),
    //       set trickLeaderIndex = (dealerIndex + 1) % 4,
    //       reset spadesBroken and currentTrick,
    //       call resetForRound() on all players,
    //       call deck.reset(), deal 13 cards to each player in rotation,
    //       sort each player's hand
  }

  sortHand(hand) {
    const suitOrder = { 'Spades': 4, 'Hearts': 3, 'Diamonds': 2, 'Clubs': 1 };
    hand.sort((a, b) => {
      const suitDiff = suitOrder[b.getSuit()] - suitOrder[a.getSuit()];
      if (suitDiff !== 0) return suitDiff;
      return b.getValue() - a.getValue();
    });
  }
}
```

### Challenge 4: Test Page

Create `test.html` that loads `Card.js`, `Deck.js`, `Player.js`, `AIPlayer.js`, and `SpadesGame.js` and runs these checks in the console:

```js
const players = [
  new Player('You', false),
  new AIPlayer('West'),
  new AIPlayer('Partner'),
  new AIPlayer('East')
];

const game = new SpadesGame(players);
game.startRound();

// Each player gets 13 cards
players.forEach(p => console.log(`${p.name}: ${p.hand.length} cards`));

// All 52 cards dealt with no duplicates
const allCards = players.flatMap(p => p.hand.map(c => c.toString()));
console.log('Unique:', new Set(allCards).size === 52);  // true

// AI bid decisions
players.filter(p => p.isAI).forEach(p => {
  console.log(`${p.name} bids: ${p.getBidDecision(p.hand)}`);
});
```

---

## Level 2 – Stretch (3 pts)

### Challenge 5: Play a Card

Verify `playCard()` removes the correct card:

```js
game.startRound();
const you = players[0];
const cardToPlay = you.hand[0];
const played = you.playCard(cardToPlay);
console.log('Played:', played.toString());
console.log('Hand size after play:', you.hand.length);  // 12
console.log('Card removed from hand:', !you.hand.some(c => c.equals(played)));  // true
```

### Challenge 6: Multiple Rounds

Call `startRound()` twice and confirm hands are fully reset:

```js
game.startRound();
game.startRound();
players.forEach(p => console.log(`${p.name}: ${p.hand.length} cards`));  // All 13
console.log('Round number:', game.roundNumber);  // 2
```

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Team Lookup

Write a `teamOf(game, player)` function and verify it returns the correct team for all four players:

```js
function teamOf(game, player) {
  return game.teams.find(t => t.players.includes(player));
}

console.log(teamOf(game, players[0]).name);  // 'You & Partner'
console.log(teamOf(game, players[1]).name);  // 'Opponents'
console.log(teamOf(game, players[2]).name);  // 'You & Partner'
console.log(teamOf(game, players[3]).name);  // 'Opponents'
```
