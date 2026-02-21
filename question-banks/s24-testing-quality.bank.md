---
bank_name: "Session 24: Testing, Debugging, and Code Quality"
---

1. What does this test? `function testCardValue() { const card = new Card('Hearts', 'A'); console.assert(card.getNumericValue() === 14, 'Ace should be 14'); }`
*a) Tests that Ace card has numeric value of 14
b) Creates card only
c) Always passes
d) Error thrown

1. Fix this test: `function testDeck() { const deck = new Deck(); console.assert(deck.cards.length === 52); }`
*a) Add message: `console.assert(deck.cards.length === 52, 'Deck should have 52 cards');`
b) Test is perfect
c) Remove assertion
d) Cannot test

1. What's the result? `function divide(a, b) { return a / b; } console.log(divide(10, 0));`
*a) Infinity (division by zero returns Infinity)
b) Error thrown
c) 0
d) NaN

1. Complete test suite: `function runTests() { console.log('Running tests...'); testCardCreation(); testDeckShuffle(); ____; console.log('Tests complete'); }`
*a) More test function calls like `testPlayerScore();`
b) `return;`
c) Nothing needed
d) `break;`

1. Fix debugging: `function playRound() { const card1 = player1.playCard(); const card2 = player2.playCard(); const winner = compareCards(card1, card2); updateScore(winner); }`
*a) Add logging: `console.log('Round:', {card1, card2, winner});` or use debugger statement
b) Code is perfect
c) Remove all calls
d) Cannot debug

1. What does this do? `function validateInput(value) { if (typeof value !== 'number') throw new TypeError('Value must be number'); if (value < 0) throw new RangeError('Value must be positive'); return true; }`
*a) Validates input is number and positive, throws specific errors
b) Always returns true
c) Only checks type
d) Does nothing

1. Fix code smell: `function doStuff(x) { if (x > 10) { return true; } else { return false; } }`
*a) `function isGreaterThanTen(x) { return x > 10; }` (better name, simpler logic)
b) Code is perfect
c) Add more conditions
d) Cannot simplify

1. What's logged? `const arr = [1, 2, 3]; arr.forEach((n, i) => { console.log(i); });`
*a) 0, 1, 2 (array indices)
b) 1, 2, 3
c) undefined
d) Error thrown

1. Complete: `function testWithMock() { const mockDeck = { cards: [], drawCard: () => ____ }; const game = new Game(mockDeck); }`
*a) `new Card('Hearts', 'A')` (return mock card)
b) `null`
c) `undefined`
d) `{}`

1. Fix performance: `function updateAllCards() { for (let i = 0; i < 52; i++) { document.querySelector('.card').style.color = 'red'; } }`
*a) `const cards = document.querySelectorAll('.card'); cards.forEach(card => card.style.color = 'red');` (select once)
b) Code is optimal
c) Use getElementById
d) Cannot optimize

1. What does this catch? `try { JSON.parse(localStorage.getItem('data')); } catch (e) { console.error('Parse error:', e.message); }`
*a) Catches JSON parsing errors (malformed JSON)
b) Catches all errors
c) Nothing
d) Only null errors

1. Fix magic numbers: `function getDeckSize() { return 52; } function getSuitCount() { return 4; }`
*a) `const DECK_SIZE = 52; const SUIT_COUNT = 4;` (use constants at top)
b) Code is perfect
c) Use variables inside functions
d) Cannot use constants

1. What's the issue? `function processCards(cards) { cards.forEach(card => { setTimeout(() => animateCard(card), 0); }); }`
*a) All animations start nearly simultaneously with 0ms delay, use i * delay for sequence
b) Nothing wrong
c) Cannot use setTimeout
d) Should use setInterval

1. Complete coverage: `function testGame() { const game = new Game(); game.start(); ____; }`
*a) Add assertions: `console.assert(game.round === 1); console.assert(game.player1 !== null);`
b) Test is complete
c) `return;`
d) Nothing needed

1. Fix documentation: `function calc(a, b) { return a + b; }`
*a) Add JSDoc: `/** @param {number} a @param {number} b @returns {number} */ function add(a, b) { return a + b; }`
b) Code is perfect
c) Add comments inside
d) Cannot document

1. What does this prevent? `function getCard(deck) { if (!deck || !deck.cards || deck.cards.length === 0) throw new Error('Invalid deck'); return deck.cards[0]; }`
*a) Prevents accessing cards on null/empty deck (defensive programming)
b) Nothing
c) Only checks null
d) Always throws error
