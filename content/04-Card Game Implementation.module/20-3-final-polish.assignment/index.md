---
name: "Session 20: GameRunner and Full Integration"
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
  - "html"
  - "css"
  - "js"
  - "zip"
---

# Session 20: GameRunner and Full Integration

Build `GameRunner.js`, write `app.js`, and assemble a complete, playable Spades game in `index.html`.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing all JS files, `index.html`, and `style.css`

---

## Level 1 – Core (15 pts)

### Challenge 1: `GameRunner` Constructor and `delay()`

Create `GameRunner.js` with:

- `constructor(game, board)` — stores `this.game`, `this.board`, and `this.running = false`
- `delay(ms)` — returns `new Promise(resolve => setTimeout(resolve, ms))`
- `stop()` — sets `this.running = false`

### Challenge 2: `async collectBid(player)`

Add this method to `GameRunner`:

- If `player.isAI`: call `player.getBidDecision(player.hand)`, await `delay(400)`, return the bid
- If human: update status via `board.setStatus(...)`, return `await board.getBidFromUser(player.hand)`

### Challenge 3: `async playTrick()`

Add this method to `GameRunner`. For each of the 4 players (starting from `this.game.trickLeaderIndex`):

1. Get valid cards from `this.game.getValidCards(player)`
2. If AI: update status, await `delay(600)`, call `player.getCardDecision(validCards, trickCards)`
3. If human: update status, await `board.getCardFromUser(player.hand, validCards)`
4. Call `this.game.playCard(player, card)`
5. Call `board.showCardInTrick(playerIndex, player, card)` and `board.updatePlayerHand(...)`
6. Log the play

After all 4 plays:
- Call `this.game.determineTrickWinner()` and `winner.incrementTricks()`
- Show the winner via `board.showTrickWinner(winner.name)`
- Update bid info, log the result
- Set `this.game.trickLeaderIndex` to the winner's index
- Call `this.game.clearTrick()`

### Challenge 4: `async playRound()` and `async run()`

Implement `playRound()` to:
1. Call `this.game.startRound()` and update the board
2. Run the bidding loop (4 players from `trickLeaderIndex`)
3. Run 13 trick loops using `await this.playTrick()`; after each trick, `await delay(900)` then `board.clearTrick()`
4. Call `this.game.scoreRound()` and log the results

Implement `run()` with:
- `while (this.running)` loop calling `await this.playRound()`
- After each round, check `this.game.isGameOver(500)`:
  - If `isTied(500)`: log a tie message, `await delay(1500)`, and `continue`
  - Otherwise: display the winner, log final scores, and `break`
- `await delay(1500)` between rounds

### Challenge 5: `app.js` and `index.html`

Write `app.js` that:
1. Creates the four players: `Player('You', false)`, `AIPlayer('West')`, `AIPlayer('Partner')`, `AIPlayer('East')`
2. Creates `SpadesGame`, `GameBoard`, and `GameRunner`
3. Calls `runner.run()`

Write `index.html` that:
- Links to `style.css`
- Has all required DOM elements: `#game-status`, `#player-hand`, `#bidding-area`, `#bid-buttons`, `#bid-hand-summary`, `#play-hint`, `#trick-winner-msg`, `#trick-number`, `#log-content`, plus trick card slots (`#trick-card-0` through `#trick-card-3`), team scoreboard elements
- Loads scripts in dependency order: `Card.js` → `Deck.js` → `Player.js` → `AIPlayer.js` → `SpadesGame.js` → `GameBoard.js` → `GameRunner.js` → `app.js`

---

## Level 2 – Stretch (3 pts)

### Challenge 6: Compass Layout

Arrange the four player positions in a compass layout (Partner at top, West left, East right, You at bottom) using CSS `flexbox` or `grid`. The trick area should be in the center with card slots for each player direction.

### Challenge 7: Stop Button

Add a "Stop Game" button to `index.html` and wire it in `app.js`:

```js
document.getElementById('stop-btn').addEventListener('click', () => {
  runner.stop();
  board.setStatus('Game stopped by user.');
});
```

---

## Level 3 – Advanced (2 pts)

### Challenge 8: Complete Playable Game

The game must be fully playable from start to finish:

- Each round deals, bids, and plays 13 tricks
- Human player sees their hand, highlighted valid cards, and clicks to play
- AI players play automatically with brief delays
- Scores update after each round
- Game ends correctly at 500 points (with tie-break support)
- No JavaScript errors in the browser console during normal play
- Reloading the page starts a fresh game

**Testing checklist:**
- Each player receives exactly 13 cards per round
- Human bid buttons appear and resolve correctly
- Valid cards are highlighted; invalid cards are unclickable
- Trick winner is shown before the next trick starts
- Scores accumulate correctly across multiple rounds
- Game-over message appears with the winning team name
