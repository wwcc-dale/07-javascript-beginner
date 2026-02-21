---
bank_name: "Session 17: Player and Hand Management"
---

1. What does this Player class store? `class Player { constructor(name) { this.name = name; this.hand = []; this.score = 0; } }`
*a) Player name, hand (array of cards), and score
b) Only name
c) Invalid syntax
d) Cannot have multiple properties

1. Fix this: `class Player { constructor(name) { this.name = name; } addCard(card) { this.hand.push(card); } }`
*a) `class Player { constructor(name) { this.name = name; this.hand = []; } addCard(card) { this.hand.push(card); } }` (initialize hand array)
b) Code is correct
c) Remove addCard method
d) Cannot push to hand

1. What's the result? `const player = new Player('Alice'); player.score = 5; player.score++; console.log(player.score);`
*a) 6 (5 + 1)
b) 5
c) "51"
d) Error thrown

1. What does this return? `class Player { constructor(name) { this.name = name; this.hand = []; } getHandSize() { return this.hand.length; } }`
*a) Number of cards in player's hand
b) undefined
c) Always 0
d) Error thrown

1. Fix winner check: `if (player1.score > player2.score) { return player1.name; }`
*a) Nothing wrong (returns player1's name if higher score)
b) Should return player1 object
c) Use >= instead
d) Cannot compare scores

1. What happens? `class Player { constructor(name) { this.name = name; this.hand = []; } clearHand() { this.hand = []; } }`
*a) Empties player's hand by creating new empty array
b) Error thrown
c) Deletes hand property
d) Nothing changes

1. What's wrong? `const player = new Player(); console.log(player.name);`
*a) `const player = new Player('Alice');` (Player constructor requires name parameter)
b) Nothing wrong
c) Use lowercase player
d) Cannot access name

1. How do you add points? `class Player { constructor(name) { this.name = name; this.score = 0; } addPoints(points) { ____ } }`
*a) `this.score += points;`
b) `this.score = points;`
c) `score += points;`
d) `return points;`

1. What's the result? `const player = new Player('Bob'); player.hand.push(new Card('Hearts', 'A')); player.hand.push(new Card('Spades', 'K')); console.log(player.hand.length);`
*a) 2 (two cards added)
b) 1
c) 0
d) Error thrown

1. Fix this: `class Game { constructor() { this.player1 = new Player('Alice'); this.player2 = new Player(); } }`
*a) `this.player2 = new Player('Bob');` (Player needs name parameter)
b) Code is correct
c) Remove player2
d) Cannot create two players

1. What does this do? `resetScore() { this.score = 0; }`
*a) Sets player's score back to 0
b) Deletes score property
c) Error thrown
d) Nothing

1. What's logged? `const player = new Player('Charlie'); console.log(player.hand);`
*a) [] (empty array if hand initialized in constructor)
b) undefined
c) null
d) Error thrown

1. Complete: `class Player { constructor(name) { this.name = name; this.hand = []; this.score = 0; } playCard() { return ____; } }`
*a) `this.hand.shift()` or `this.hand.pop()` (remove and return card from hand)
b) `this.hand[0]`
c) `this.hand`
d) `new Card()`

1. What happens? `const players = [new Player('Alice'), new Player('Bob')]; players.forEach(p => p.score++);`
*a) Increments score for both players
b) Only first player's score increases
c) Error thrown
d) Nothing changes

1. Fix this method: `class Player { constructor(name) { this.name = name; this.hand = []; } hasCards() { return this.hand; } }`
*a) `return this.hand.length > 0;` (return boolean, not array)
b) Code is correct
c) `return this.hand.size > 0;`
d) Cannot check for cards

1. What's the result? `class Game { constructor() { this.players = []; } addPlayer(name) { this.players.push(new Player(name)); } }` with `const game = new Game(); game.addPlayer('Alice'); game.addPlayer('Bob'); console.log(game.players.length);`
*a) 2 (two players added)
b) 1
c) 0
d) Error thrown
