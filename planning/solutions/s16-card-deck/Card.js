// Card.js — Session 16 Example Solution

export class Card {
  constructor(suit, rank) {
    this.suit = suit;   // "Spades", "Hearts", "Diamonds", "Clubs"
    this.rank = rank;   // "2"–"10", "J", "Q", "K", "A"
  }

  getSuit()  { return this.suit; }
  getRank()  { return this.rank; }

  getValue() {
    const faceValues = { "J": 11, "Q": 12, "K": 13, "A": 14 };
    return faceValues[this.rank] || parseInt(this.rank);
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }

  equals(other) {
    return this.suit === other.suit && this.rank === other.rank;
  }
}
