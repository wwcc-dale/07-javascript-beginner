class App {
  constructor() {
    this.board = new GameBoard();
    this.runner = null;
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById('start-game').addEventListener('click', () => {
      this.startNewGame();
    });

    document.getElementById('clear-log').addEventListener('click', () => {
      this.board.clearLog();
    });
  }

  startNewGame() {
    // Stop any running game
    if (this.runner) this.runner.stop();

    // Seating: You (South), West, Partner (North), East
    // Teams: You + Partner vs West + East
    const players = [
      new Player('You', false),
      new AIPlayer('West'),
      new AIPlayer('Partner'),
      new AIPlayer('East')
    ];

    const game = new SpadesGame(players);
    this.runner = new GameRunner(game, this.board);

    // Reset UI
    this.board.clearLog();
    this.board.clearTrick();
    this.board.updatePlayerHand([], []);
    this.board.setStatus('Starting new game...');
    this.board.updateScoreboard(game.teams);

    // Name the team score slots
    document.getElementById('team0-name').textContent = game.teams[0].name;
    document.getElementById('team1-name').textContent = game.teams[1].name;

    this.runner.run().catch(err => {
      console.error('Game error:', err);
      this.board.setStatus('An error occurred. Click "New Game" to restart.');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
