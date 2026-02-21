---
bank_name: "Session 22: Local Storage and Game Persistence"
---

1. What does this do? `localStorage.setItem('gameData', JSON.stringify(game));`
*a) Saves game object as JSON string in browser localStorage
b) Saves game object directly
c) Error thrown
d) Nothing happens

1. Fix this: `const savedGame = localStorage.getItem('gameData'); game = savedGame;`
*a) `const savedGame = localStorage.getItem('gameData'); game = JSON.parse(savedGame);` (parse JSON string)
b) Code is correct
c) Use sessionStorage
d) Cannot retrieve

1. What's the result? `localStorage.setItem('score', 100); const score = localStorage.getItem('score'); console.log(typeof score);`
*a) 'string' (localStorage stores everything as strings)
b) 'number'
c) 'object'
d) undefined

1. Fix type: `const highScore = localStorage.getItem('highScore'); if (score > highScore) { localStorage.setItem('highScore', score); }`
*a) `const highScore = parseInt(localStorage.getItem('highScore')) || 0;` (convert string to number)
b) Code is correct
c) Use parseFloat
d) Cannot compare

1. What happens? `localStorage.setItem('user', { name: 'Alice' });`
*a) Stores "[object Object]" string (object toString'd, not useful)
b) Stores object correctly
c) Error thrown
d) Nothing stored

1. Complete: `function saveGame(game) { const data = { score: game.score, round: game.round, timestamp: ____ }; localStorage.setItem('save', JSON.stringify(data)); }`
*a) `Date.now()` or `new Date().toISOString()`
b) `Date()`
c) `time`
d) Not needed

1. Fix error handling: `const data = JSON.parse(localStorage.getItem('gameData')); game.load(data);`
*a) `try { const data = JSON.parse(localStorage.getItem('gameData')); if (data) game.load(data); } catch (e) { console.error('Load failed', e); }`
b) Code is correct
c) Remove JSON.parse
d) Cannot handle errors

1. What's logged? `localStorage.setItem('count', '5'); localStorage.setItem('count', '10'); console.log(localStorage.getItem('count'));`
*a) '10' (overwrites previous value)
b) '5'
c) '5,10'
d) Error thrown

1. Fix storage check: `if (localStorage.getItem('savedGame')) { loadGame(); }`
*a) `const saved = localStorage.getItem('savedGame'); if (saved && saved !== 'null') { loadGame(); }`
b) Code is perfect
c) Remove check
d) Cannot check

1. What does this do? `localStorage.removeItem('gameData'); localStorage.clear();`
*a) Removes 'gameData' key, then removes all localStorage data
b) Only removes 'gameData'
c) Only clears all
d) Does nothing

1. Complete: `function loadGameState() { const data = localStorage.getItem('game'); if (!data) return ____; return JSON.parse(data); }`
*a) `null` or `{}` or `{ score: 0, round: 1 }` (default value)
b) `data`
c) `undefined`
d) `false`

1. Fix serialization: `class Game { constructor() { this.deck = new Deck(); } save() { localStorage.setItem('game', JSON.stringify(this)); } }`
*a) Exclude non-serializable: `save() { localStorage.setItem('game', JSON.stringify({ score: this.score, round: this.round })); }`
b) Code is perfect
c) Remove JSON.stringify
d) Cannot save classes

1. What's the result? `localStorage.setItem('players', JSON.stringify(['Alice', 'Bob'])); const players = localStorage.getItem('players'); console.log(players[0]);`
*a) '[' (first character of JSON string)
b) 'Alice'
c) undefined
d) Error thrown

1. Fix history: `function addToHistory(game) { const history = localStorage.getItem('history'); history.push(game); localStorage.setItem('history', JSON.stringify(history)); }`
*a) `const history = JSON.parse(localStorage.getItem('history')) || []; history.push(game); localStorage.setItem('history', JSON.stringify(history));`
b) Code is correct
c) Remove push
d) Cannot add to history

1. What's the issue? `localStorage.setItem('largeData', JSON.stringify(hugArray));` (5MB+ data)
*a) May exceed localStorage quota (typically 5-10MB), need to handle QuotaExceededError
b) No issue
c) Always works
d) localStorage unlimited

1. Complete: `function getStats() { const stats = localStorage.getItem('stats'); return stats ? ____ : { wins: 0, losses: 0 }; }`
*a) `JSON.parse(stats)`
b) `stats`
c) `stats.parse()`
d) `new Stats(stats)`
