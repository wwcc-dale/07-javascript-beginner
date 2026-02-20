---
bank_name: "Session 16: Card Game Foundation - Card and Deck Classes"
---

1. What does this Card class do? `class Card { constructor(suit, value) { this.suit = suit; this.value = value; } }`
*a) Creates card objects with suit and value properties
b) Only stores suit
c) Invalid syntax
d) Creates multiple cards

1. Fix this: `const card = new Card('Hearts'); console.log(card.value);`
*a) `const card = new Card('Hearts', 'A'); console.log(card.value);` (Card needs both suit and value)
b) Code is correct
c) Use lowercase 'card'
d) Cannot create cards

1. What's the result? `const deck = ['A', 'K', 'Q']; deck.push('J'); console.log(deck.length);`
*a) 4 (array now has 4 elements)
b) 3
c) 5
d) Error thrown

1. What does this do? `class Deck { constructor() { this.cards = []; } }`
*a) Creates empty Deck with cards array ready to be filled
b) Creates 52 cards automatically
c) Invalid syntax
d) Error thrown

1. Fix this shuffle: `shuffle() { this.cards.sort(); }`
*a) `shuffle() { this.cards.sort(() => Math.random() - 0.5); }` (need random comparator)
b) Code is correct
c) Use reverse() instead
d) Cannot shuffle

1. What does this return? `class Card { constructor(suit, value) { this.suit = suit; this.value = value; } toString() { return `${this.value} of ${this.suit}`; } }` with `const card = new Card('Spades', 'A'); console.log(card.toString());`
*a) "A of Spades"
b) "[object Object]"
c) Error thrown
d) "Spades A"

1. What's wrong? `const deck = new Deck(); deck.cards.push(new Card('Hearts'));`
*a) Card constructor needs both suit and value parameters
b) Nothing wrong
c) Cannot push to array
d) Deck doesn't have cards property

1. How many cards? `const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; const values = ['2', '3', '4']; const deck = []; suits.forEach(suit => values.forEach(value => deck.push(new Card(suit, value)))); console.log(deck.length);`
*a) 12 (4 suits × 3 values)
b) 7
c) 52
d) Error thrown

1. What does this do? `drawCard() { return this.cards.pop(); }`
*a) Removes and returns last card from deck
b) Returns last card but keeps it in deck
c) Removes first card
d) Error thrown

1. Fix this: `const card1 = new Card('Hearts', 'A'); const card2 = new Card('Hearts', 'A'); if (card1 === card2) { console.log('Same'); }`
*a) `if (card1.suit === card2.suit && card1.value === card2.value)` (compare properties, not objects)
b) Code is correct
c) Use == instead
d) Cannot compare cards

1. What's the result? `class Deck { constructor() { this.cards = this.createDeck(); } createDeck() { return []; } }` with `const deck = new Deck(); console.log(deck.cards);`
*a) [] (empty array)
b) undefined
c) null
d) Error thrown

1. How do you get remaining cards? `class Deck { constructor() { this.cards = []; } getRemainingCards() { return ____; } }`
*a) `this.cards.length`
b) `this.cards.count()`
c) `this.length`
d) `this.cards.size`

1. What does this do? `deal(numCards) { return this.cards.splice(0, numCards); }`
*a) Removes and returns first numCards cards from deck
b) Returns cards but keeps them in deck
c) Removes last numCards cards
d) Error thrown

1. Fix initialization: `class Deck { constructor() { this.cards = []; this.shuffle(); } }`
*a) Nothing wrong if shuffle() method exists (initializes empty deck and shuffles)
b) Cannot call shuffle in constructor
c) cards should not be array
d) Missing createDeck() call

1. What's logged? `const deck = new Deck(); console.log(deck.cards[0] instanceof Card);`
*a) true (if deck.cards[0] is a Card object) or false/error (if deck empty)
b) Always true
c) Always false
d) Syntax error

1. Complete this: `class Card { constructor(suit, value) { this.suit = suit; this.value = value; } getCardValue() { const faceCards = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 }; return faceCards[this.value] || ____; } }`
*a) `parseInt(this.value)` (convert number strings to integers)
b) `this.value`
c) `0`
d) `faceCards[this.value]`
