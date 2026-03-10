# Session 22: Local Storage and Game Persistence

## Learning Outcomes

- Use browser Local Storage to persist data
- Save and load game state
- Track player statistics across sessions
- Implement game history
- Handle data serialization

---

## Reading: Data Persistence (35 minutes)

### Local Storage Basics

```js
// Save data
localStorage.setItem('key', JSON.stringify(data));

// Load data
const data = JSON.parse(localStorage.getItem('key'));

// Remove data
localStorage.removeItem('key');

// Clear all
localStorage.clear();
```

### Saving Game Statistics

```js
class GameStats {
  constructor() {
    this.load();
  }
  
  load() {
    const saved = localStorage.getItem('cardGameStats');
    if (saved) {
      const data = JSON.parse(saved);
      this.gamesPlayed = data.gamesPlayed || 0;
      this.gamesWon = data.gamesWon || 0;
      this.gamesLost = data.gamesLost || 0;
      this.gamesTied = data.gamesTied || 0;
      this.totalScore = data.totalScore || 0;
    } else {
      this.gamesPlayed = 0;
      this.gamesWon = 0;
      this.gamesLost = 0;
      this.gamesTied = 0;
      this.totalScore = 0;
    }
  }
  
  save() {
    localStorage.setItem('cardGameStats', JSON.stringify({
      gamesPlayed: this.gamesPlayed,
      gamesWon: this.gamesWon,
      gamesLost: this.gamesLost,
      gamesTied: this.gamesTied,
      totalScore: this.totalScore
    }));
  }
  
  recordGame(winner, playerScore, computerScore) {
    this.gamesPlayed++;
    this.totalScore += playerScore;
    
    if (winner === 'player') this.gamesWon++;
    else if (winner === 'computer') this.gamesLost++;
    else this.gamesTied++;
    
    this.save();
  }
  
  getWinRate() {
    if (this.gamesPlayed === 0) return 0;
    return (this.gamesWon / this.gamesPlayed * 100).toFixed(2);
  }
}
```

### Game History

```js
class GameHistory {
  constructor() {
    this.load();
  }
  
  load() {
    const saved = localStorage.getItem('cardGameHistory');
    this.games = saved ? JSON.parse(saved) : [];
  }
  
  save() {
    localStorage.setItem('cardGameHistory', JSON.stringify(this.games));
  }
  
  addGame(gameRecord) {
    this.games.push({
      date: new Date().toISOString(),
      winner: gameRecord.winner,
      playerScore: gameRecord.playerScore,
      computerScore: gameRecord.computerScore,
      rounds: gameRecord.rounds,
      difficulty: gameRecord.difficulty
    });
    
    // Keep only last 50 games
    if (this.games.length > 50) {
      this.games.shift();
    }
    
    this.save();
  }
  
  getRecentGames(count = 10) {
    return this.games.slice(-count).reverse();
  }
}
```

### Displaying Statistics

```js
function displayStats() {
  const stats = new GameStats();
  const html = `
    <div id="stats-panel">
      <h3>Your Statistics</h3>
      <p>Games Played: ${stats.gamesPlayed}</p>
      <p>Won: ${stats.gamesWon} | Lost: ${stats.gamesLost} | Tied: ${stats.gamesTied}</p>
      <p>Win Rate: ${stats.getWinRate()}%</p>
      <p>Total Score: ${stats.totalScore}</p>
      <button onclick="clearStats()">Reset Stats</button>
    </div>
  `;
  document.querySelector('#stats-container').innerHTML = html;
}

function clearStats() {
  if (confirm('Clear all statistics?')) {
    localStorage.removeItem('cardGameStats');
    localStorage.removeItem('cardGameHistory');
    displayStats();
  }
}
```

---

## Assignment: Implement Data Persistence

Save statistics, game history, player preferences to Local Storage.
