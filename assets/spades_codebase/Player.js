class Player {
  constructor(name, isAI = false) {
    this.name = name;
    this.isAI = isAI;
    this.hand = [];
    this.score = 0;
    this.bags = 0;
    this.bid = null;
    this.tricksWon = 0;
  }

  addCard(card) {
    this.hand.push(card);
  }

  playCard(card) {
    const i = this.hand.findIndex(c => c.equals(card));
    if (i !== -1) return this.hand.splice(i, 1)[0];
    return null;
  }

  setBid(bid) {
    this.bid = bid;
  }

  incrementTricks() {
    this.tricksWon++;
  }

  resetForRound() {
    this.hand = [];
    this.bid = null;
    this.tricksWon = 0;
  }
}
