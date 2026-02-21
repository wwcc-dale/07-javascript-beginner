---
bank_name: "Session 18: Game State and UI Foundation"
---

1. What does this render? `function renderCard(card) { return `<div class="card">${card.value} of ${card.suit}</div>`; }`
*a) HTML string for displaying a card
b) Card object
c) Error thrown
d) Nothing

1. Fix this: `document.getElementById('score').textContent = player.score;` (score is undefined)
*a) Check if player and player.score exist before accessing
b) Code is correct
c) Use innerHTML instead
d) Cannot display score

1. What does this do? `function updateUI() { document.getElementById('player1-score').textContent = game.player1.score; }`
*a) Updates player1's score display in DOM
b) Returns score
c) Creates new element
d) Error thrown

1. What's the result? `const gameState = { round: 1, isGameOver: false }; gameState.round++; console.log(gameState.round);`
*a) 2
b) 1
c) "11"
d) Error thrown

1. Fix card display: `function renderHand(hand) { return hand.map(card => `<div>${card}</div>`).join(''); }`
*a) `return hand.map(card => `<div>${card.value} of ${card.suit}</div>`).join('');` (access card properties)
b) Code is correct
c) Use forEach instead
d) Cannot render hand

1. What happens? `class Game { constructor() { this.round = 0; } startNewRound() { this.round++; this.updateDisplay(); } }`
*a) Increments round and calls updateDisplay method
b) Only increments round
c) Error thrown
d) Nothing happens

1. What's wrong? `document.querySelector('.score').textContent = score;` (multiple .score elements)
*a) querySelector only updates first match, use querySelectorAll + forEach for all
b) Nothing wrong
c) Use getElementById
d) Cannot update multiple

1. Complete: `function displayWinner(winner) { const messageEl = document.getElementById('message'); messageEl.textContent = ____; }`
*a) `${winner} wins!` or similar message
b) `winner`
c) `'Winner'`
d) `messageEl`

1. What's the result? `const cards = [card1, card2, card3]; const html = cards.map(c => renderCard(c)).join(''); document.getElementById('hand').innerHTML = html;`
*a) Displays all 3 cards in #hand element
b) Only displays first card
c) Error thrown
d) Nothing displayed

1. Fix this: `function updateScores() { document.getElementById('p1-score').textContent = player1.score; document.getElementById('p2-score').textContent = player2.score; updateScores(); }`
*a) Remove recursive call `updateScores();` (causes infinite loop)
b) Code is correct
c) Add return statement
d) Cannot update both scores

1. What does this return? `function getGameStatus() { return this.isGameOver ? 'Game Over' : `Round ${this.round}`; }`
*a) 'Game Over' if game over, otherwise current round number
b) Always 'Game Over'
c) Always round number
d) Error thrown

1. What's logged? `const container = document.createElement('div'); container.innerHTML = '<p>Score: 10</p>'; console.log(container.textContent);`
*a) "Score: 10" (text content without HTML tags)
b) "<p>Score: 10</p>"
c) undefined
d) Error thrown

1. Fix display: `function showCard(card) { document.getElementById('card-area').appendChild(card); }`
*a) Create DOM element first: `const el = document.createElement('div'); el.textContent = card.toString(); document.getElementById('card-area').appendChild(el);`
b) Code is correct
c) Use innerHTML instead
d) Cannot append cards

1. What happens? `const gameUI = { updateScore(player) { document.querySelector(`#${player.name}-score`).textContent = player.score; } };`
*a) Creates object with updateScore method to update player score display
b) Syntax error
c) Cannot use template literals
d) Nothing happens

1. Complete: `class Game { constructor() { this.ui = { scoreBoard: document.getElementById('scores'), message: document.getElementById('message') }; } displayMessage(text) { ____; } }`
*a) `this.ui.message.textContent = text;`
b) `document.textContent = text;`
c) `this.message = text;`
d) `console.log(text);`

1. What's the issue? `function render() { const hand = game.player.hand; hand.forEach(card => { document.body.innerHTML += renderCard(card); }); }`
*a) += with innerHTML is inefficient and resets event listeners, build string first or use appendChild
b) Nothing wrong
c) Use textContent instead
d) Cannot use forEach
