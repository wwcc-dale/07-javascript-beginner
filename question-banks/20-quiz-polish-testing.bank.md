---
bank_name: "Session 20: Polish, Testing, and Deployment"
---

1. Fix this error handling: `function dealCard() { const card = deck.pop(); return card.value; }`
*a) `function dealCard() { const card = deck.pop(); if (!card) throw new Error('Deck empty'); return card.value; }`
b) Code is correct
c) Remove return
d) Cannot handle errors

1. What does this test? `function testCardCreation() { const card = new Card('Hearts', 'A'); console.assert(card.suit === 'Hearts', 'Suit should be Hearts'); }`
*a) Tests if Card constructor correctly sets suit property
b) Creates card only
c) Does nothing
d) Error thrown

1. Fix validation: `function playCard(card) { game.currentCard = card; }`
*a) `function playCard(card) { if (!card) throw new Error('Invalid card'); game.currentCard = card; }`
b) Code is correct
c) Remove assignment
d) Cannot validate

1. What's the result? `try { const card = deck.drawCard(); } catch (error) { console.log('Error:', error.message); } finally { console.log('Done'); }`
*a) Logs error if thrown, always logs 'Done'
b) Only logs error
c) Only logs 'Done'
d) Nothing logged

1. Fix edge case: `function calculateWinner() { return player1.score > player2.score ? player1 : player2; }`
*a) `return player1.score > player2.score ? player1 : (player1.score < player2.score ? player2 : null);` (handle tie)
b) Code is correct
c) Always return player1
d) Cannot handle ties

1. What does this do? `function resetGame() { deck = new Deck(); deck.shuffle(); player1.score = 0; player2.score = 0; round = 1; }`
*a) Resets all game state to initial values
b) Only creates deck
c) Error thrown
d) Nothing happens

1. Fix this test: `function testShuffle() { const deck = new Deck(); const firstCard = deck.cards[0]; deck.shuffle(); console.assert(deck.cards[0] !== firstCard); }`
*a) Test might fail randomly, use better test: check multiple positions or statistical distribution
b) Test is perfect
c) Remove assertion
d) Cannot test shuffle

1. Complete error handler: `function safeGetCard(index) { try { return deck.cards[index]; } catch (error) { ____; } }`
*a) `console.error(error); return null;` or throw error
b) `return error;`
c) Nothing needed
d) `throw error;` only

1. What's logged? `function divide(a, b) { if (b === 0) throw new Error('Division by zero'); return a / b; } try { console.log(divide(10, 0)); } catch (e) { console.log('Error'); }`
*a) "Error" (exception caught)
b) "Infinity"
c) Nothing
d) Uncaught error

1. Fix deployment issue: `const API_URL = 'http://localhost:3000';`
*a) `const API_URL = process.env.API_URL || 'http://localhost:3000';` (use environment variable)
b) Code is correct
c) Use https only
d) Cannot configure

1. What does this validate? `function isValidMove(card) { return card && card.suit && card.value; }`
*a) Checks if card exists and has required properties
b) Always returns true
c) Always returns false
d) Error thrown

1. Fix debugging: `function playRound() { const card1 = player1.playCard(); const card2 = player2.playCard(); compareCards(card1, card2); }`
*a) Add logging: `console.log('Round started', {card1, card2});` or use debugger
b) Code is perfect
c) Remove function calls
d) Cannot debug

1. What's the purpose? `if (typeof window === 'undefined') { module.exports = { Card, Deck, Player }; }`
*a) Exports for Node.js testing while keeping browser compatibility
b) Does nothing
c) Breaks code
d) Only for browser

1. Fix test coverage: `function testDealCards() { const game = new Game(); game.dealCards(); }`
*a) Add assertions: `console.assert(game.player1.hand.length > 0, 'Player 1 should have cards');`
b) Test is complete
c) Remove test
d) Cannot test

1. What does this ensure? `function initGame() { if (!deck || deck.cards.length === 0) { deck = new Deck(); deck.shuffle(); } }`
*a) Creates new shuffled deck only if deck is missing or empty
b) Always creates new deck
c) Never creates deck
d) Error thrown

1. Complete: `function validateGameState() { if (____) throw new Error('Invalid game state'); return true; }`
*a) `!player1 || !player2 || !deck` (check required objects exist)
b) `true`
c) `false`
d) Nothing needed
