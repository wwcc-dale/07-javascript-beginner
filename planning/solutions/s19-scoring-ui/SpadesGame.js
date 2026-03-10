// SpadesGame.js — Session 19: Scoring Added

import { Deck } from '../s16-card-deck/Deck.js';

export class SpadesGame {
  constructor(players) {
    this.players = players;
    this.deck = new Deck();
    this.teamScores = [0, 0];
    this.teamBags = [0, 0];
    this.currentTrick = [];
    this.spadesBroken = false;
    this.roundNumber = 0;
    this.leadSuit = null;
    this.gameOver = false;
    this.winScore = 500;
  }

  startRound() {
    this.roundNumber++;
    this.spadesBroken = false;
    this.currentTrick = [];
    this.leadSuit = null;
    for (const player of this.players) player.resetForRound();
    this.deck.reset();
    this.deck.shuffle();
    for (let i = 0; i < 13; i++) {
      for (const player of this.players) player.receiveCard(this.deck.draw());
    }
  }

  getValidCards(player) {
    const hand = player.hand;
    if (this.currentTrick.length === 0) {
      const nonSpades = hand.filter(c => c.getSuit() !== "Spades");
      return (this.spadesBroken || nonSpades.length === 0) ? hand : nonSpades;
    }
    const followers = hand.filter(c => c.getSuit() === this.leadSuit);
    return followers.length > 0 ? followers : hand;
  }

  playCard(player, card) {
    if (this.currentTrick.length === 0) this.leadSuit = card.getSuit();
    if (card.getSuit() === "Spades") this.spadesBroken = true;
    this.currentTrick.push({ player, card });
  }

  isTrickComplete() {
    return this.currentTrick.length === this.players.length;
  }

  determineTrickWinner() {
    let best = this.currentTrick[0];
    for (const play of this.currentTrick) {
      const bCard = best.card;
      const cCard = play.card;
      const bSpade = bCard.getSuit() === "Spades";
      const cSpade = cCard.getSuit() === "Spades";
      if (cSpade && !bSpade) { best = play; }
      else if (!bSpade && !cSpade &&
               cCard.getSuit() === bCard.getSuit() &&
               cCard.getValue() > bCard.getValue()) { best = play; }
      else if (bSpade && cSpade && cCard.getValue() > bCard.getValue()) { best = play; }
    }
    return best.player;
  }

  clearTrick() {
    this.currentTrick = [];
    this.leadSuit = null;
  }

  // Score a completed round
  scoreRound() {
    for (let team = 0; team < 2; team++) {
      const p1 = this.players[team];
      const p2 = this.players[team + 2];

      // Handle nil bids
      let nilBonus = 0;
      for (const p of [p1, p2]) {
        if (p.isNil) {
          nilBonus += p.tricksWon === 0 ? 100 : -100;
        }
      }

      // Team bid excludes nil bidders
      const teamBid = (p1.isNil ? 0 : p1.bid) + (p2.isNil ? 0 : p2.bid);
      const teamTricks = (p1.isNil ? 0 : p1.tricksWon) + (p2.isNil ? 0 : p2.tricksWon);

      let roundScore = nilBonus;
      if (teamBid > 0) {
        if (teamTricks >= teamBid) {
          roundScore += teamBid * 10;
          const overtricks = teamTricks - teamBid;
          roundScore += overtricks;
          this.teamBags[team] += overtricks;
          if (this.teamBags[team] >= 10) {
            roundScore -= 100;
            this.teamBags[team] -= 10;
          }
        } else {
          roundScore -= teamBid * 10; // set
        }
      }

      this.teamScores[team] += roundScore;
    }

    if (this.teamScores[0] >= this.winScore || this.teamScores[1] >= this.winScore) {
      this.gameOver = true;
    }
  }

  getLeadingTeam() {
    if (this.teamScores[0] > this.teamScores[1]) return 0;
    if (this.teamScores[1] > this.teamScores[0]) return 1;
    return -1; // tie
  }
}
