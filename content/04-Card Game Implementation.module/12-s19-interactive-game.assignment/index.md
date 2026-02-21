---
name: "Session 19: Scoring and GameBoard"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
  - "CLO-5"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
  - "html"
  - "zip"
---

# Session 19: Scoring and GameBoard

Add end-of-round scoring to `SpadesGame.js`, then build `GameBoard.js` — the class that connects the game engine to the browser DOM using Promises.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing `SpadesGame.js` (with scoring methods), `GameBoard.js`, and `test.html`

---

## Level 1 – Core (15 pts)

### Challenge 1: `scoreRound()`

Add this method to `SpadesGame`. It calculates and applies scores for both teams after 13 tricks are played:

- For each team, loop over its players:
  - If a player bid **0** (nil): add +100 if they took 0 tricks, or −100 if they took any. Their tricks do **not** count toward the team's contract total.
  - Otherwise: add `player.bid` to `teamBid` and `player.tricksWon` to `teamTricks`.
- If `teamTricks >= teamBid` (made the bid):
  - `roundScore = teamBid * 10 + (teamTricks - teamBid)`
  - Add overtricks to `team.bags`
  - Use a `while` loop: while `team.bags >= 10`, subtract 100 from `roundScore` and subtract 10 from `team.bags`
- If failed (set): `roundScore = -(teamBid * 10)`
- Add nil bonus/penalty to `roundScore`, then add to `team.score`
- Return an array of result objects for logging

### Challenge 2: `isGameOver()`, `isTied()`, `getWinner()`

Add these three methods to `SpadesGame`:

```js
isGameOver(targetScore = 500) {
  return this.teams.some(t => t.score >= targetScore || t.score <= -200);
}

isTied(targetScore = 500) {
  return this.teams.every(t => t.score >= targetScore);
}

getWinner() {
  return this.teams[0].score > this.teams[1].score ? this.teams[0] : this.teams[1];
}
```

### Challenge 3: `GameBoard` — Core Display Methods

Create `GameBoard.js` with these methods:

- `constructor()` — calls `buildBidButtons()`
- `buildBidButtons()` — creates buttons 0–13 inside `#bid-buttons`; bid 0 shows text "Nil"
- `createCardElement(card)` — returns a `div.card.{suit}` with `dataset.suit`, `dataset.rank`, and three spans: `.card-corner.top-left`, `.card-center`, `.card-corner.bottom-right`
- `updatePlayerHand(hand, validCards, interactive = false)` — clears `#player-hand` and renders each card; if `interactive`, add class `playable` or `disabled` based on `validCards`
- `getSuitSymbol(suit)` — returns `♠`, `♥`, `♦`, or `♣`

### Challenge 4: `GameBoard` — Promise-Based Input

Add these two methods to `GameBoard`:

- `getBidFromUser(hand)`:
  - Calls `this.updatePlayerHand(hand, [])` to display the hand
  - Shows `#bidding-area` by removing the `hidden` class
  - Returns a Promise that resolves with the bid number when the user clicks a `.bid-btn`
  - Hides `#bidding-area` and removes the click listener before resolving

- `getCardFromUser(hand, validCards)`:
  - Calls `this.updatePlayerHand(hand, validCards, true)` to highlight valid cards
  - Sets `#play-hint` text to a prompt
  - Returns a Promise that resolves with the clicked Card object
  - Ignores clicks on `.disabled` cards
  - Removes the click listener before resolving

---

## Level 2 – Stretch (3 pts)

### Challenge 5: Remaining Display Methods

Add these display helpers to `GameBoard`:

```js
showCardInTrick(playerIndex, player, card)  // Put card in #trick-card-{i}
showTrickWinner(playerName)                 // Set text in #trick-winner-msg
clearTrick()                                // Clear all trick slots and winner msg
setTrickNumber(num)                         // Set #trick-number text to "{num} / 13"
updateScoreboard(teams)                     // Update #team0-score, #team1-score, etc.
updateBidInfo(players, teams)               // Update #team0-bids, #team1-bids
setStatus(message)                          // Set #game-status text
log(message)                               // Append entry to #log-content, scroll to bottom
```

### Challenge 6: Score Verification

Write a test in `test.html` that manually sets bids and tricks, calls `scoreRound()`, and verifies the score calculation:

```js
// Scenario: Team 0 bid 5, took 7 (2 bags), starting with 8 bags already
const game = new SpadesGame([...]);
game.startRound();
game.teams[0].bags = 8;
players[0].bid = 3; players[0].tricksWon = 4;
players[2].bid = 2; players[2].tricksWon = 3;
// Expected: 50 + 2 bags = 52, bags go from 8→10, trigger penalty: -100
// Net: 52 - 100 = -48, bags reset to 0
const results = game.scoreRound();
console.log('Score:', results[0].roundScore);  // -48
console.log('Bags after:', game.teams[0].bags);  // 0
```

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Full Nil Bid Test

Simulate a round where one player goes nil and succeeds, and verify that their tricks are excluded from the team contract:

```js
game.startRound();
// Partner goes nil (bid=0) and takes 0 tricks
players[2].bid = 0; players[2].tricksWon = 0;
// You bid 4 and take 4 (made exactly)
players[0].bid = 4; players[0].tricksWon = 4;
// Opponents bid 5 combined and take 9 (set)
players[1].bid = 3; players[1].tricksWon = 4;
players[3].bid = 2; players[3].tricksWon = 5;

const r = game.scoreRound();
console.log('Your team:', r[0].teamBid, r[0].teamTricks, r[0].roundScore);
// teamBid=4, teamTricks=4 (partner's 0 excluded), roundScore=40 + 100 nil = 140
console.log('Opponents:', r[1].teamBid, r[1].teamTricks, r[1].roundScore);
// teamBid=5, teamTricks=9 → set → -50
```
