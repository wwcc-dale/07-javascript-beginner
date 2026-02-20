---
bank_name: "Session 21: Advanced Game Features - AI Strategies"
---

1. What does this AI do? `class RandomAI { chooseCard(hand) { return hand[Math.floor(Math.random() * hand.length)]; } }`
*a) Randomly selects a card from hand
b) Always picks first card
c) Error thrown
d) Picks highest card

1. Fix this: `class GreedyAI { chooseCard(hand) { return Math.max(...hand); } }`
*a) `return hand.reduce((max, card) => card.value > max.value ? card : max);` (compare card objects, not primitives)
b) Code is correct
c) Use Math.min instead
d) Cannot compare cards

1. What's the result? `const values = ['2', '3', 'A', 'K']; const highest = values.reduce((max, val) => val > max ? val : max); console.log(highest);`
*a) 'K' (string comparison, not numeric)
b) 'A'
c) '3'
d) Error thrown

1. Complete strategy: `class ConservativeAI { chooseCard(hand) { return hand.reduce((min, card) => ____); } }`
*a) `card.getNumericValue() < min.getNumericValue() ? card : min`
b) `card > min ? card : min`
c) `min`
d) `card`

1. Fix card value: `function getCardValue(card) { const values = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 }; return values[card.value]; }`
*a) `return values[card.value] || parseInt(card.value);` (handle numeric cards)
b) Code is correct
c) Return 0
d) Cannot get value

1. What does this do? `class SmartAI { constructor() { this.opponentHistory = []; } chooseCard(hand, opponentCard) { this.opponentHistory.push(opponentCard); return this.selectBestCard(hand); } }`
*a) Tracks opponent's cards to make informed decisions
b) Only stores cards
c) Error thrown
d) Picks random card

1. Fix comparison: `if (card1.value > card2.value) return card1;`
*a) `if (getNumericValue(card1) > getNumericValue(card2)) return card1;` (compare numeric values)
b) Code is correct
c) Use === instead
d) Cannot compare

1. What's logged? `const hand = [cardA, cardK, card2]; hand.sort((a, b) => getNumericValue(b) - getNumericValue(a)); console.log(hand[0].value);`
*a) Value of highest card (descending sort)
b) '2'
c) 'A'
d) Error thrown

1. Complete: `class AdaptiveAI { chooseCard(hand, gameState) { if (gameState.score < gameState.opponentScore) { return ____; } else { return this.playConservative(hand); } }`
*a) `this.playAggressive(hand)` (play high when behind)
b) `hand[0]`
c) `null`
d) `this.playConservative(hand)`

1. Fix strategy: `class AI { selectCard(hand) { return hand.filter(c => c.value === 'A')[0]; } }`
*a) Add fallback: `return hand.filter(c => c.value === 'A')[0] || hand[0];` (if no Ace, pick first)
b) Code is correct
c) Remove filter
d) Cannot select

1. What's the purpose? `function simulateOutcome(myCard, opponentRange) { let wins = 0; opponentRange.forEach(oppCard => { if (myCard.value > oppCard.value) wins++; }); return wins / opponentRange.length; }`
*a) Calculates win probability of myCard against possible opponent cards
b) Counts wins only
c) Always returns 0
d) Error thrown

1. Fix logic: `class AI { shouldPlayHigh(hand, gameState) { return gameState.round > 20; } }`
*a) Add more conditions: `return gameState.round > 20 && gameState.score < gameState.opponentScore;` (play high when behind late game)
b) Code is perfect
c) Return false always
d) Cannot determine

1. What does this return? `function getBestCard(hand, strategy) { return hand.sort((a, b) => strategy === 'high' ? b.value - a.value : a.value - b.value)[0]; }`
*a) Highest card if 'high' strategy, lowest if not
b) Always highest
c) Always lowest
d) Error thrown

1. Complete: `class PredictiveAI { chooseCard(hand, history) { const avgOpponentValue = history.reduce((sum, card) => sum + ____, 0) / history.length; return this.selectCounter(hand, avgOpponentValue); } }`
*a) `getNumericValue(card)` or `card.numericValue`
b) `card`
c) `1`
d) `card.value`

1. Fix difficulty: `class AI { constructor(difficulty) { this.difficulty = difficulty; } chooseCard(hand) { return hand[0]; } }`
*a) `chooseCard(hand) { return this.difficulty === 'easy' ? this.randomCard(hand) : this.difficulty === 'hard' ? this.bestCard(hand) : this.mediumCard(hand); }`
b) Code is complete
c) Remove difficulty
d) Cannot implement

1. What's wrong? `function compareCards(card1, card2) { return card1 > card2 ? card1 : card2; }`
*a) Cannot directly compare card objects, need to compare their numeric values
b) Code is perfect
c) Use >= instead
d) Return boolean
