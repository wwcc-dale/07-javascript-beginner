// GameRunner.js — Session 20 Example Solution

export class GameRunner {
  constructor(game, board, humanPlayerIndex = 0) {
    this.game = game;
    this.board = board;
    this.humanIdx = humanPlayerIndex;
    this.running = false;
  }

  isHuman(player) {
    return this.game.players.indexOf(player) === this.humanIdx;
  }

  async collectBid(player) {
    if (this.isHuman(player)) {
      const bid = await this.board.getBidFromUser(player.name, player.hand.length);
      player.setBid(bid);
    } else {
      const bid = player.getBidDecision();
      player.setBid(bid);
    }
  }

  async playTrick(leadIndex) {
    for (let i = 0; i < this.game.players.length; i++) {
      const playerIdx = (leadIndex + i) % this.game.players.length;
      const player = this.game.players[playerIdx];
      const validCards = this.game.getValidCards(player);

      let card;
      if (this.isHuman(player)) {
        card = await this.board.getCardFromUser(player, validCards);
      } else {
        // Small delay for AI so player can see the card being played
        await new Promise(r => setTimeout(r, 600));
        card = player.getCardDecision(validCards);
      }

      player.playCard(card);
      this.game.playCard(player, card);
      this.board.showPlayedCard(player.name, card);
    }

    const winner = this.game.determineTrickWinner();
    winner.recordTrickWon();
    this.board.showTrickWinner(winner.name);
    this.game.clearTrick();

    return this.game.players.indexOf(winner);
  }

  async playRound() {
    this.game.startRound();
    this.board.updateScoreboard(this.game.teamScores, this.game.teamBags);

    // Bidding phase
    for (const player of this.game.players) {
      await this.collectBid(player);
    }
    this.board.showBids(this.game.players);

    // Trick-play phase — 13 tricks
    let leadIndex = 0; // player 0 leads first trick
    for (let trick = 0; trick < 13; trick++) {
      leadIndex = await this.playTrick(leadIndex);
    }

    this.game.scoreRound();
    this.board.updateScoreboard(this.game.teamScores, this.game.teamBags);
  }

  async run() {
    this.running = true;
    while (this.running && !this.game.gameOver) {
      await this.playRound();
      if (this.game.gameOver) {
        const winner = this.game.getLeadingTeam();
        this.board.showGameOver(winner);
        this.running = false;
      }
    }
  }

  stop() {
    this.running = false;
  }
}
