# Session 22 Hints — Persistence and Stats

## GameStats class

### Loading from localStorage
- Always load in the constructor so stats are available immediately.
- If the key doesn't exist, `localStorage.getItem(key)` returns `null` — use a default object.
- Wrap `JSON.parse()` in a try/catch: corrupted data should silently fall back to defaults.

### Saving
- Call `_save()` at the end of every method that modifies data — don't wait until game over.
- `JSON.stringify(this._data)` converts the object to a string for storage.
- `JSON.parse(localStorage.getItem(key))` converts it back.

### recordGameResult()
- Increment `gamesPlayed` every time.
- Increment `gamesWon` only when `playerWon === true`.
- Update `highScore` only if the new score is higher than the stored one.
- Push to history and trim to the last 20 entries.

### getWinRate()
- Guard against division by zero: if `gamesPlayed === 0`, return 0.
- `((gamesWon / gamesPlayed) * 100).toFixed(1)` gives one decimal place.

## Integrating into the game
- Create the `GameStats` instance in `app.js` and pass it into `GameRunner`.
- Call `stats.recordRound(...)` at the end of each round (after `scoreRound()`).
- Call `stats.recordGameResult(...)` when `game.gameOver` becomes true.

## Stats display panel (Level 2)
- Load and display on page load: read `stats.getSummary()` and write each field to a DOM element.
- A "Reset Stats" button calls `stats.reset()` and re-renders the panel.
