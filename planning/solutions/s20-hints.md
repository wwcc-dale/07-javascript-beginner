# Session 20 Hints — GameRunner and Full Integration

## GameRunner structure
- `run()` is the outer loop: `while (!game.gameOver) { await this.playRound(); }`
- `playRound()` calls `startRound()`, runs bidding for all 4 players, then runs 13 tricks.
- `playTrick(leadIndex)` loops 4 players, always starting from `leadIndex`, using modulo:
  `(leadIndex + i) % 4`

## collectBid(player)
- Check if this player is the human; if so, `await board.getBidFromUser(...)`.
- For AI players, call `player.getBidDecision()` directly — no await needed, but you can
  `await delay(300)` to give a brief visual pause before the AI "announces" its bid.

## playTrick(leadIndex)
- After all 4 cards are played, call `game.determineTrickWinner()` to find the winner.
- Call `winner.recordTrickWon()` and `game.clearTrick()`.
- Return the winner's **index** in `game.players` — this becomes `leadIndex` for the next trick.

## AI card delay
- Give AI players a brief delay (`await delay(600)`) before playing so the human can
  see what the AI played before the game moves on.

## index.html script order
- If you're using `<script>` tags (not ES6 modules), load files in dependency order:
  Card and Deck first, then Player and AIPlayer, then SpadesGame, then GameBoard, then GameRunner, then app.js last.
- If using `type="module"`, only one script tag is needed — the entry point handles the rest.

## Common bugs
- Forgetting to `await` an async method means the game continues before it finishes.
- Make sure `game.gameOver` is set inside `scoreRound()` and that your `run()` loop checks it.
