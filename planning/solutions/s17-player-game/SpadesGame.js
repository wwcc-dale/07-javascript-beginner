// SpadesGame.js — Session 17 Example Solution

import { Deck } from '../s16-card-deck/Deck.js';

export class SpadesGame {
  constructor(players) {
    // players: array of 4 Player/AIPlayer instances
    // Team 0: players[0] & players[2]
    // Team 1: players[1] & players[3]
    this.players = players;
    this.deck = new Deck();
    this.teamScores = [0, 0];
    this.teamBags = [0, 0];
    this.currentTrick = [];
    this.spadesBroken = false;
    this.roundNumber = 0;
  }

  startRound() {
    this.roundNumber++;
    this.spadesBroken = false;
    this.currentTrick = [];

    for (const player of this.players) {
      player.resetForRound();
    }

    this.deck.reset();
    this.deck.shuffle();

    // Deal 13 cards to each player
    for (let i = 0; i < 13; i++) {
      for (const player of this.players) {
        player.receiveCard(this.deck.draw());
      }
    }
  }
}
