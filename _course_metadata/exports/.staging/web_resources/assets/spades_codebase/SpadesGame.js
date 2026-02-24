class SpadesGame {
  constructor(players) {
    // Seating: You(0, South) | West(1) | Partner(2, North) | East(3)
    // Team 0: players 0 & 2 (You + Partner)
    // Team 1: players 1 & 3 (West + East)
    this.players = players;
    this.teams = [
      { name: 'You & Partner', players: [players[0], players[2]], score: 0, bags: 0 },
      { name: 'Opponents',     players: [players[1], players[3]], score: 0, bags: 0 }
    ];
    this.deck = new Deck();
    this.roundNumber = 0;
    this.dealerIndex = 3; // Player left of dealer bids/leads first
    this.spadesBroken = false;
    this.currentTrick = []; // Array of { player, card }
    this.trickLeaderIndex = 0;
  }

  startRound() {
    this.roundNumber++;
    this.dealerIndex = (this.dealerIndex + 1) % 4;
    this.trickLeaderIndex = (this.dealerIndex + 1) % 4;
    this.spadesBroken = false;
    this.currentTrick = [];
    this.players.forEach(p => p.resetForRound());

    this.deck.reset();
    // Deal 13 cards to each player in rotation
    for (let i = 0; i < 13; i++) {
      for (let p of this.players) {
        p.addCard(this.deck.draw());
      }
    }
    // Sort each hand: Spades first, then by suit, then by rank descending
    this.players.forEach(p => this.sortHand(p.hand));
  }

  sortHand(hand) {
    const suitOrder = { 'Spades': 4, 'Hearts': 3, 'Diamonds': 2, 'Clubs': 1 };
    hand.sort((a, b) => {
      const suitDiff = suitOrder[b.getSuit()] - suitOrder[a.getSuit()];
      if (suitDiff !== 0) return suitDiff;
      return b.getValue() - a.getValue();
    });
  }

  // Returns which cards the player is allowed to play given current trick state
  getValidCards(player) {
    const hand = player.hand;
    if (this.currentTrick.length === 0) {
      // Player is leading the trick
      if (!this.spadesBroken) {
        const nonSpades = hand.filter(c => c.getSuit() !== 'Spades');
        // Can only lead spades if they have nothing else
        return nonSpades.length > 0 ? nonSpades : hand;
      }
      return hand;
    }
    // Player must follow the led suit if possible
    const ledSuit = this.currentTrick[0].card.getSuit();
    const sameSuit = hand.filter(c => c.getSuit() === ledSuit);
    return sameSuit.length > 0 ? sameSuit : hand;
  }

  playCard(player, card) {
    const played = player.playCard(card);
    if (!played) return false;
    if (played.getSuit() === 'Spades') this.spadesBroken = true;
    this.currentTrick.push({ player, card: played });
    return true;
  }

  isTrickComplete() {
    return this.currentTrick.length === 4;
  }

  determineTrickWinner() {
    const ledSuit = this.currentTrick[0].card.getSuit();
    let winning = this.currentTrick[0];
    for (let i = 1; i < this.currentTrick.length; i++) {
      const entry = this.currentTrick[i];
      const card = entry.card;
      const best = winning.card;
      if (card.getSuit() === 'Spades' && best.getSuit() !== 'Spades') {
        winning = entry;
      } else if (card.getSuit() === best.getSuit() && card.getValue() > best.getValue()) {
        winning = entry;
      }
    }
    return winning.player;
  }

  clearTrick() {
    this.currentTrick = [];
  }

  // Calculate scores after 13 tricks and add to team totals
  scoreRound() {
    const results = [];
    for (let t = 0; t < 2; t++) {
      const team = this.teams[t];
      let teamBid = 0;
      let teamTricks = 0;
      let nilBonus = 0;

      for (const player of team.players) {
        if (player.bid === 0) {
          // Nil bid: +100 if took 0 tricks, -100 if took any.
          // The nil player's tricks do NOT count toward the team's contract —
          // they only contribute the nil bonus or penalty.
          if (player.tricksWon === 0) {
            nilBonus += 100;
          } else {
            nilBonus -= 100;
          }
        } else {
          teamBid += player.bid;
          teamTricks += player.tricksWon;
        }
      }

      let roundScore;
      let overtricks = 0;
      if (teamTricks >= teamBid) {
        // Made the bid
        overtricks = teamTricks - teamBid;
        roundScore = teamBid * 10 + overtricks;
        team.bags += overtricks;
        // Use while: a team can roll past 20 bags in a single hand
        while (team.bags >= 10) {
          roundScore -= 100; // Bag penalty: -100 per 10 accumulated bags
          team.bags -= 10;
        }
      } else {
        // Set: lose bid * 10 points
        roundScore = -(teamBid * 10);
      }

      roundScore += nilBonus;
      team.score += roundScore;

      results.push({ team, teamBid, teamTricks, overtricks, roundScore, nilBonus });
    }
    return results;
  }

  getTeamOf(player) {
    return this.teams.find(t => t.players.includes(player));
  }

  isGameOver(targetScore = 500) {
    return this.teams.some(t => t.score >= targetScore || t.score <= -200);
  }

  // Returns true when the end condition is met but scores are tied (both >= target).
  // Per the rules: "If there is a tie, then all players participate in one more round."
  isTied(targetScore = 500) {
    return this.teams.every(t => t.score >= targetScore);
  }

  getWinner() {
    return this.teams[0].score > this.teams[1].score ? this.teams[0] : this.teams[1];
  }
}
