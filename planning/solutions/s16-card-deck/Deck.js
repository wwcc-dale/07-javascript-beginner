// Deck.js — Session 16 Example Solution

import { Card } from './Card.js';

const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const RANKS = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

export class Deck {
  constructor() {
    this.cards = [];
    this.buildDeck();
  }

  buildDeck() {
    this.cards = [];
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  // Fisher-Yates shuffle
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop() || null;
  }

  cardsLeft() {
    return this.cards.length;
  }

  reset() {
    this.buildDeck();
  }

  // Level 2: Count by suit
  countBySuit() {
    const counts = {};
    for (const card of this.cards) {
      counts[card.suit] = (counts[card.suit] || 0) + 1;
    }
    return counts;
  }
}
