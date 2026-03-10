// AIPlayer.js — Session 17 Example Solution

import { Player } from './Player.js';

export class AIPlayer extends Player {
  constructor(name) {
    super(name);
  }

  // Basic bid: count high cards and spades
  getBidDecision() {
    let bid = 0;
    for (const card of this.hand) {
      if (card.getValue() >= 12) bid++;        // Q, K, A
      else if (card.getSuit() === "Spades" && card.getValue() >= 10) bid++;
    }
    return Math.max(1, Math.min(bid, 13));
  }

  // Basic play: first valid card from hand
  getCardDecision(validCards) {
    return validCards[0];
  }
}
