// GameStats.js — Session 22: Persistence and Stats

const STORAGE_KEY = "spadesGameStats";

const DEFAULT_STATS = {
  version: 1,
  gamesPlayed: 0,
  gamesWon: 0,
  totalRoundsPlayed: 0,
  totalBagsAccumulated: 0,
  highScore: 0,
  history: []   // last 20 game summaries
};

export class GameStats {
  constructor() {
    this._data = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATS };
      const parsed = JSON.parse(raw);
      // Basic version guard
      if (parsed.version !== DEFAULT_STATS.version) return { ...DEFAULT_STATS };
      return parsed;
    } catch {
      return { ...DEFAULT_STATS };
    }
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
  }

  recordRound(teamScores, teamBags) {
    this._data.totalRoundsPlayed++;
    this._data.totalBagsAccumulated += teamBags[0] + teamBags[1];
    this._save();
  }

  recordGameResult(playerWon, finalScores) {
    this._data.gamesPlayed++;
    if (playerWon) this._data.gamesWon++;
    if (finalScores[0] > this._data.highScore) {
      this._data.highScore = finalScores[0];
    }
    this._data.history.unshift({
      date: new Date().toLocaleDateString(),
      won: playerWon,
      score: finalScores[0],
      opponentScore: finalScores[1]
    });
    // Keep only last 20 entries
    if (this._data.history.length > 20) this._data.history.pop();
    this._save();
  }

  getWinRate() {
    if (this._data.gamesPlayed === 0) return 0;
    return ((this._data.gamesWon / this._data.gamesPlayed) * 100).toFixed(1);
  }

  getSummary() {
    return {
      gamesPlayed: this._data.gamesPlayed,
      gamesWon: this._data.gamesWon,
      winRate: this.getWinRate() + "%",
      highScore: this._data.highScore,
      totalRounds: this._data.totalRoundsPlayed
    };
  }

  reset() {
    this._data = { ...DEFAULT_STATS };
    this._save();
  }
}
