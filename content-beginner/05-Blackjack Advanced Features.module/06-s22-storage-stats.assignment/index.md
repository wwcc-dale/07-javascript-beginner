---
allowed_extensions:
- js
- html
- zip
assignment_type: online
module: 5
name: 'Session 22: Persistence and Stats'
points: 20
position: 6
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 22.3
submission_types:
- online_upload
---

# Session 22: Persistence and Stats

Add a statistics tracker to your Blackjack game that persists across page reloads using localStorage.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing all game files including `stats.js`

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: GameStats Class
```js
// TODO: Create GameStats.js with a class that:
// - constructor(): calls _load() and assigns result to this.data
// - _load(): reads 'bj_stats' from localStorage; returns _defaults() if missing or corrupted
// - _defaults(): returns {
//     gamesPlayed: 0,
//     gamesWon: 0,
//     bestChips: 0,
//     biggestWin: 0
//   }
// - _save(): writes this.data to localStorage under 'bj_stats' as JSON
// - recordGameResult(won, finalChips):
//     increments gamesPlayed
//     if won, increments gamesWon
//     if finalChips > bestChips, updates bestChips
//     calls _save()
// - recordWin(amount):
//     if amount > biggestWin, updates biggestWin
//     calls _save()
// - getWinRate():
//     returns wins/games as a percentage string e.g. "67%"
//     returns "N/A" if gamesPlayed === 0
// - reset():
//     sets this.data to _defaults(), calls _save()

// Test:
// const stats = new GameStats();
// stats.reset();
// stats.recordGameResult(true, 1500);
// stats.recordWin(400);
// console.log(stats.data.gamesPlayed); // 1
// console.log(stats.data.gamesWon);    // 1
// console.log(stats.data.bestChips);   // 1500
// console.log(stats.data.biggestWin);  // 400
// console.log(stats.getWinRate());     // "100%"
```

### Challenge 2: Load and Display on Startup
```js
// TODO: In ui.js or a new stats-display.js:
// - Create a GameStats instance when the page loads
// - Display these values in dedicated HTML elements:
//   - Games played
//   - Win rate
//   - Best chip total ever
//   - Biggest single win
// Add the necessary HTML elements (e.g., <div id="stats-panel">)
```

### Challenge 3: Record Results
```js
// TODO: In endRound(), after displaying the outcome:
// - Determine if the player won (outcomes: player_wins, dealer_bust, blackjack)
// - Call stats.recordGameResult(won, game.wallet.chips)
// - If the player won, also call stats.recordWin(amount won this round)
//   Hint: amount won = result.chips - chipsBeforeRound
//   You'll need to store chipsBeforeRound before calling startRound()
// - Re-render the stats display

// Verify: play one game, reload the page, play another — stats should accumulate
```

### Challenge 4: Persistence Verification
```js
// TODO: In your browser console (NOT in submitted code), verify:
// 1. Play a game and win
// 2. Open DevTools → Application → Local Storage
// 3. Find the 'bj_stats' key and read the values
// 4. Reload the page
// 5. Verify the stats panel still shows the same numbers
// Note in a comment: what you saw in DevTools and whether persistence worked
```

---

## Level 2 – Stretch (3 points)

### Challenge 5: Player Name
Add a text input for the player's name. Save it under `'bj_playerName'`. Load it on startup and display it as a greeting: "Welcome back, [name]!". Default to "Player" if not set.

### Challenge 6: Stats Panel with Reset
Add a collapsible stats section (`<details><summary>Stats</summary>...`). Include a "Reset Stats" button that:
- Shows a confirmation prompt: `confirm("Reset all stats?")`
- If confirmed, calls `stats.reset()` and re-renders the panel

---

## Level 3 – Advanced (2 points)

### Challenge 7: Data Versioning
Add a `version` field to the saved stats. Define `STATS_VERSION = 1` at the top of `stats.js`. In `_load()`, after parsing the JSON:
- If the stored data has no `version` or `version !== STATS_VERSION`, discard it
- Log a message: `"Old stats format found, starting fresh"`
- Return `_defaults()`

Test: manually type old data into DevTools localStorage and verify the app loads cleanly without crashing.
