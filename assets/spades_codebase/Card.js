class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }

  getValue() {
    const values = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
      'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return values[this.rank] || parseInt(this.rank);
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }

  equals(other) {
    return this.suit === other.suit && this.rank === other.rank;
  }
}
