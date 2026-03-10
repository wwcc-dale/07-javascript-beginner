---
allowed_extensions:
- js
- html
- zip
assignment_type: online
module: 5
name: 'Session 22: Persistence and Stats'
points: 20
position: 5
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 22.2
submission_types:
- online_upload
---

# Session 22: Persistence and Stats

Add a statistics tracker to your Spades game that persists across page reloads using localStorage.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing all game files including `GameStats.js`

---

## Level 1 – Core (15 pts)

### Challenge 1: `GameStats` Class

Create `GameStats.js` with a class that:

- `constructor()` — calls `load()` and assigns the result to `this.data`
- `load()` — reads `spades_stats` from localStorage; if missing or corrupted, returns `defaults()`
- `defaults()` — returns `{ gamesPlayed: 0, gamesWon: 0, roundsPlayed: 0, bestRoundScore: 0 }`
- `save()` — writes `this.data` to localStorage under `spades_stats` as a JSON string
- `recordGameResult(won)` — increments `gamesPlayed`; if `won`, increments `gamesWon`; then calls `save()`
- `recordRound(roundScore)` — increments `roundsPlayed`; updates `bestRoundScore` if `roundScore` is higher; then calls `save()`
- `getWinRate()` — returns wins/games as a percentage string (e.g., `"67%"`); returns `"N/A"` if no games played
- `reset()` — resets `this.data` to `defaults()`, calls `save()`

### Challenge 2: Load on Startup

Add `GameStats` to `app.js`. Create an instance and display the current stats in a `#stats-display` element when the game loads:

- Total games played
- Win rate
- Rounds played
- Best single-round score

### Challenge 3: Record Results

In `GameRunner` (or `app.js`), call `stats.recordGameResult(won)` when the game ends, and `stats.recordRound(roundScore)` after each round's scoring. Verify that:
- Playing one game, reloading, and playing another shows `gamesPlayed: 2`
- The best round score persists across reloads

### Challenge 4: Persistence Verification

In `test.html`, verify the round-trip:

```js
const stats = new GameStats();
stats.reset();

stats.recordGameResult(true);
stats.recordRound(120);

// Simulate reload by reading directly from localStorage
const raw = localStorage.getItem('spades_stats');
const restored = JSON.parse(raw);
console.log('Games played persisted:', restored.gamesPlayed === 1);  // true
console.log('Best score persisted:', restored.bestRoundScore === 120);  // true
```

---

## Level 2 – Stretch (3 pts)

### Challenge 5: Player Name Setting

Add a player name input to `index.html`. Store the name in localStorage under `spades_playerName`. Load it on startup and use it as the human player's name in `SpadesGame`:

```js
const savedName = localStorage.getItem('spades_playerName') || 'You';
const players = [new Player(savedName, false), ...];
```

### Challenge 6: Stats Display Panel

Add a collapsible stats panel to `index.html` that shows:
- Games played / won / win rate
- Rounds played
- Best single-round score
- A "Reset Stats" button that calls `stats.reset()` after a confirmation prompt

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Data Versioning

Add a `version` field to the saved stats object. Define `STATS_VERSION = 1`. When loading:
- If the stored version doesn't match `STATS_VERSION`, discard the old data and start fresh
- Log a message explaining why the data was cleared

Test by manually saving a v0 object to localStorage and verifying the app doesn't crash on load.