// Player.js — Session 17 Example Solution

export class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
    this.bags = 0;
    this.bid = null;
    this.tricksWon = 0;
    this.isNil = false;
  }

  receiveCard(card) {
    this.hand.push(card);
  }

  playCard(card) {
    const idx = this.hand.findIndex(c => c.equals(card));
    if (idx === -1) return null;
    this.hand.splice(idx, 1);
    return card;
  }

  setBid(bid) {
    this.bid = bid;
    this.isNil = (bid === 0);
  }

  recordTrickWon() {
    this.tricksWon++;
  }

  resetForRound() {
    this.hand = [];
    this.bid = null;
    this.tricksWon = 0;
    this.isNil = false;
  }
}
