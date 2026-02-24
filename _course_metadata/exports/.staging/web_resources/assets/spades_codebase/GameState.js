class GameState {
  constructor(players) {
    this.players = players;
    this.deck = new Deck();
    this.deck.shuffle();
    this.currentPlayerIndex = 0;
    this.roundNumber = 1;
  }

  dealCards(cardsPerPlayer) {
    for (let i = 0; i < cardsPerPlayer; i++) {
      for (let player of this.players) {
        player.addCard(this.deck.draw());
      }
    }
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  advanceTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 4;
  }

  startNewRound() {
    this.roundNumber++;
    this.players.forEach(player => player.resetForNewRound());
    this.deck.reset();
    this.currentPlayerIndex = 0;
  }

  getPlayerByName(name) {
    return this.players.find(p => p.name === name);
  }
}
