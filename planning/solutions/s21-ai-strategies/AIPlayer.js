// AIPlayer.js — Session 21: Improved AI Strategies

import { Player } from '../s17-player-game/Player.js';

export class AIPlayer extends Player {
  constructor(name) {
    super(name);
    this.seenCards = new Set();
  }

  recordCard(card) {
    this.seenCards.add(card.toString());
  }

  hasSeenCard(card) {
    return this.seenCards.has(card.toString());
  }

  resetForRound() {
    super.resetForRound();
    this.seenCards = new Set();
  }

  // Improved bid: count winners based on suit strength
  getBidDecision() {
    let bid = 0;
    const suitCounts = {};

    for (const card of this.hand) {
      const suit = card.getSuit();
      suitCounts[suit] = (suitCounts[suit] || 0) + 1;

      if (suit === "Spades") {
        if (card.getValue() >= 12) bid++;         // Q, K, A of spades — strong
        else if (card.getValue() >= 10) bid += 0.5; // 10, J spades — decent
      } else {
        if (card.getValue() === 14) bid++;         // Ace of any suit
        else if (card.getValue() === 13 && suitCounts[suit] <= 2) bid++; // Guarded K
      }
    }

    return Math.max(1, Math.min(Math.round(bid), 13));
  }

  // Goal-aware card selection
  getCardDecision(validCards) {
    if (!this.bid) return validCards[0];

    // Nil strategy: always play lowest card
    if (this.isNil) {
      return validCards.reduce((low, c) => c.getValue() < low.getValue() ? c : low);
    }

    // If bid made: dump losers (lowest non-spade first)
    const tricksMade = this.tricksWon;
    if (tricksMade >= this.bid) {
      const nonSpades = validCards.filter(c => c.getSuit() !== "Spades");
      const pool = nonSpades.length > 0 ? nonSpades : validCards;
      return pool.reduce((low, c) => c.getValue() < low.getValue() ? c : low);
    }

    // Still need tricks: play highest card to try to win
    // Prefer non-spade leads when possible
    const nonSpades = validCards.filter(c => c.getSuit() !== "Spades");
    const pool = nonSpades.length > 0 ? nonSpades : validCards;
    return pool.reduce((high, c) => c.getValue() > high.getValue() ? c : high);
  }
}
