// SpadesGame.js — Session 18: Spades Rules Added

import { Deck } from '../s16-card-deck/Deck.js';

export class SpadesGame {
  constructor(players) {
    this.players = players;
    this.deck = new Deck();
    this.teamScores = [0, 0];
    this.teamBags = [0, 0];
    this.currentTrick = [];   // [{player, card}, ...]
    this.spadesBroken = false;
    this.roundNumber = 0;
    this.leadSuit = null;
  }

  startRound() {
    this.roundNumber++;
    this.spadesBroken = false;
    this.currentTrick = [];
    this.leadSuit = null;

    for (const player of this.players) {
      player.resetForRound();
    }

    this.deck.reset();
    this.deck.shuffle();

    for (let i = 0; i < 13; i++) {
      for (const player of this.players) {
        player.receiveCard(this.deck.draw());
      }
    }
  }

  // Return cards a player may legally play
  getValidCards(player) {
    const hand = player.hand;
    if (this.currentTrick.length === 0) {
      // Leading: can't lead spades until broken (unless spades is all they have)
      const nonSpades = hand.filter(c => c.getSuit() !== "Spades");
      return (this.spadesBroken || nonSpades.length === 0) ? hand : nonSpades;
    }

    // Following: must follow lead suit if possible
    const followers = hand.filter(c => c.getSuit() === this.leadSuit);
    return followers.length > 0 ? followers : hand;
  }

  // Register a card played to the current trick
  playCard(player, card) {
    if (this.currentTrick.length === 0) {
      this.leadSuit = card.getSuit();
    }
    if (card.getSuit() === "Spades") {
      this.spadesBroken = true;
    }
    this.currentTrick.push({ player, card });
  }

  isTrickComplete() {
    return this.currentTrick.length === this.players.length;
  }

  // Return the player who won the trick
  determineTrickWinner() {
    let best = this.currentTrick[0];

    for (const play of this.currentTrick) {
      const bCard = best.card;
      const cCard = play.card;

      const bIsSpade = bCard.getSuit() === "Spades";
      const cIsSpade = cCard.getSuit() === "Spades";

      if (cIsSpade && !bIsSpade) {
        // Spade beats non-spade
        best = play;
      } else if (bIsSpade && !cIsSpade) {
        // Keep best (spade already winning)
      } else if (cCard.getSuit() === bCard.getSuit() && cCard.getValue() > bCard.getValue()) {
        best = play;
      }
      // Different non-spade suits: first-played card (lead suit) wins over off-suit
    }

    return best.player;
  }

  clearTrick() {
    this.currentTrick = [];
    this.leadSuit = null;
  }
}
