class AIPlayer extends Player {
  constructor(name) {
    super(name, true);
  }

  getBidDecision(hand) {
    const spadesCount = hand.filter(c => c.getSuit() === 'Spades').length;
    const highCards = hand.filter(c => c.getValue() >= 11).length;
    const strength = spadesCount + highCards;
    if (strength >= 8) return 4;
    if (strength >= 6) return 3;
    if (strength >= 4) return 2;
    return 1;
  }

  getCardDecision(validCards, trick) {
    // If bidding nil, always dump the lowest card to avoid taking tricks
    if (this.bid === 0) {
      return this.findLowestCard(validCards);
    }

    if (trick.length === 0) {
      // Leading: play the lowest non-spade to preserve trump
      const nonSpades = validCards.filter(c => c.getSuit() !== 'Spades');
      const pool = nonSpades.length > 0 ? nonSpades : validCards;
      return this.findLowestCard(pool);
    }

    // Try to win with the cheapest card that beats current trick leader
    const winningCard = this.findCheapestWinningCard(validCards, trick);
    if (winningCard) return winningCard;

    // Can't win — dump the lowest card
    return this.findLowestCard(validCards);
  }

  findCheapestWinningCard(validCards, trick) {
    const winners = validCards.filter(card => this.canWin(card, trick));
    if (winners.length === 0) return null;
    return winners.reduce((cheapest, card) =>
      card.getValue() < cheapest.getValue() ? card : cheapest
    );
  }

  canWin(card, trick) {
    // Find the current best card in the trick
    let best = trick[0];
    for (let i = 1; i < trick.length; i++) {
      const t = trick[i];
      if (t.getSuit() === 'Spades' && best.getSuit() !== 'Spades') best = t;
      else if (t.getSuit() === best.getSuit() && t.getValue() > best.getValue()) best = t;
    }
    // Check if our card beats it
    if (card.getSuit() === 'Spades' && best.getSuit() !== 'Spades') return true;
    if (card.getSuit() === best.getSuit() && card.getValue() > best.getValue()) return true;
    return false;
  }

  findLowestCard(cards) {
    return cards.reduce((lowest, card) =>
      card.getValue() < lowest.getValue() ? card : lowest
    );
  }
}
