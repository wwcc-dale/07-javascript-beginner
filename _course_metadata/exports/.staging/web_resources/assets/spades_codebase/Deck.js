class Deck {
  constructor() {
    this.cards = [];
    this.buildDeck();
  }

  buildDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    // Fisher-Yates shuffle
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }

  cardsLeft() {
    return this.cards.length;
  }

  reset() {
    this.cards = [];
    this.buildDeck();
    this.shuffle();
  }
}
