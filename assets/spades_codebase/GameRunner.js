class GameRunner {
  constructor(game, board) {
    this.game = game;
    this.board = board;
    this.running = false;
  }

  async run() {
    this.running = true;
    const TARGET_SCORE = 500;

    while (this.running) {
      await this.playRound();

      if (this.game.isGameOver(TARGET_SCORE)) {
        if (this.game.isTied(TARGET_SCORE)) {
          // Both teams reached 500+ on the same round — play another round
          this.board.log('Scores tied at 500+! Playing an extra round...');
          this.board.setStatus('Tied! Extra round...');
          await this.delay(1500);
          continue;
        }
        const winner = this.game.getWinner();
        this.board.setStatus(`Game Over! ${winner.name} wins!`);
        this.board.log(`=== FINAL SCORES ===`);
        this.game.teams.forEach(t => this.board.log(`${t.name}: ${t.score} pts`));
        this.board.updateScoreboard(this.game.teams);
        break;
      }

      // Brief pause between rounds
      await this.delay(1500);
    }
    this.running = false;
  }

  async playRound() {
    this.game.startRound();
    const round = this.game.roundNumber;
    this.board.log(`--- Round ${round} ---`);
    this.board.updateRoundInfo(round, this.game.teams);
    this.board.updateScoreboard(this.game.teams);
    this.board.updateBidInfo(this.game.players, this.game.teams);
    this.board.updatePlayerHand(this.game.players[0].hand, []);

    // === BIDDING PHASE ===
    this.board.setStatus('Bidding phase');
    this.board.log('Bidding:');

    // Bidding starts with player left of dealer
    for (let i = 0; i < 4; i++) {
      const playerIndex = (this.game.trickLeaderIndex + i) % 4;
      const player = this.game.players[playerIndex];
      const bid = await this.collectBid(player);
      player.setBid(bid);
      this.board.updateBidInfo(this.game.players, this.game.teams);
      this.board.log(`  ${player.name} bids ${bid === 0 ? 'Nil (0)' : bid}`);
    }

    // === PLAYING PHASE ===
    this.board.setStatus('Playing tricks');

    for (let trickNum = 1; trickNum <= 13; trickNum++) {
      this.board.setTrickNumber(trickNum);
      this.board.log(`Trick ${trickNum}:`);
      await this.playTrick();
      await this.delay(900);
      this.board.clearTrick();
    }

    // === SCORING ===
    const results = this.game.scoreRound();
    this.board.updateScoreboard(this.game.teams);
    this.board.log(`Round ${round} results:`);
    results.forEach(r => {
      const sign = r.roundScore >= 0 ? '+' : '';
      const nilNote = r.nilBonus !== 0 ? ` (nil: ${r.nilBonus > 0 ? '+' : ''}${r.nilBonus})` : '';
      this.board.log(`  ${r.team.name}: bid ${r.teamBid}, took ${r.teamTricks} → ${sign}${r.roundScore}${nilNote} (total: ${r.team.score})`);
    });
  }

  async collectBid(player) {
    if (player.isAI) {
      const bid = player.getBidDecision(player.hand);
      await this.delay(400);
      return bid;
    }
    this.board.setStatus('Your turn to bid — how many tricks will you take?');
    return await this.board.getBidFromUser(player.hand);
  }

  async playTrick() {
    const startIndex = this.game.trickLeaderIndex;

    for (let i = 0; i < 4; i++) {
      const playerIndex = (startIndex + i) % 4;
      const player = this.game.players[playerIndex];
      const validCards = this.game.getValidCards(player);

      let card;
      if (player.isAI) {
        this.board.setStatus(`${player.name} is playing...`);
        await this.delay(600);
        const trickCards = this.game.currentTrick.map(e => e.card);
        card = player.getCardDecision(validCards, trickCards);
      } else {
        this.board.setStatus('Your turn — click a highlighted card to play');
        card = await this.board.getCardFromUser(player.hand, validCards);
      }

      this.game.playCard(player, card);
      this.board.showCardInTrick(playerIndex, player, card);
      this.board.updatePlayerHand(this.game.players[0].hand, []);
      this.board.log(`  ${player.name} plays ${card.toString()}`);
    }

    const winner = this.game.determineTrickWinner();
    winner.incrementTricks();
    this.board.showTrickWinner(winner.name);
    this.board.updateBidInfo(this.game.players, this.game.teams);
    this.board.log(`  → ${winner.name} wins (${winner.tricksWon} trick${winner.tricksWon !== 1 ? 's' : ''})`);

    // Winner leads next trick
    this.game.trickLeaderIndex = this.game.players.indexOf(winner);
    this.game.clearTrick();
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.running = false;
  }
}
