---
module: 5
name: 'Session 24: Testing, Debugging, and Code Quality'
position: 19
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-3
- CLO-5
---

# Session 24: Testing, Debugging, and Code Quality

## Learning Outcomes

- Write unit tests for game classes
- Debug using browser dev tools
- Refactor code for maintainability
- Document code with comments and JSDoc
- Ensure code quality standards

---

## Reading: Testing and Quality (35 minutes)

### Unit Testing Pattern

```js
// Simple test framework
class TestRunner {
  constructor(name) {
    this.name = name;
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }
  
  test(description, fn) {
    this.tests.push({ description, fn });
  }
  
  run() {
    console.log(`\n=== ${this.name} ===`);
    this.tests.forEach(test => {
      try {
        test.fn();
        console.log(`✓ ${test.description}`);
        this.passed++;
      } catch (error) {
        console.error(`✗ ${test.description}`);
        console.error(`  ${error.message}`);
        this.failed++;
      }
    });
    console.log(`\nPassed: ${this.passed}/${this.tests.length}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}
```

### Testing Card Class

```js
const cardTests = new TestRunner('Card Tests');

cardTests.test('Card constructor sets properties', () => {
  const card = new Card('Hearts', 'K');
  assert(card.suit === 'Hearts', 'Suit should be Hearts');
  assert(card.rank === 'K', 'Rank should be K');
  assert(card.value === 13, 'King value should be 13');
  assert(card.color === 'red', 'Hearts should be red');
});

cardTests.test('Card.compare works correctly', () => {
  const card1 = new Card('Hearts', 'K');
  const card2 = new Card('Spades', '5');
  assert(card1.compare(card2) > 0, 'K should beat 5');
});

cardTests.test('Ace has highest value', () => {
  const ace = new Card('Hearts', 'A');
  const king = new Card('Spades', 'K');
  assert(ace.value > king.value, 'Ace should have higher value than King');
});

cardTests.run();
```

### Testing Deck Class

```js
const deckTests = new TestRunner('Deck Tests');

deckTests.test('Deck initializes with 52 cards', () => {
  const deck = new Deck();
  assert(deck.cardsRemaining() === 52, 'Should have 52 cards');
});

deckTests.test('Draw removes card from deck', () => {
  const deck = new Deck();
  const card = deck.draw();
  assert(card !== null, 'Should draw a card');
  assert(deck.cardsRemaining() === 51, 'Should have 51 cards left');
});

deckTests.test('Empty deck returns null', () => {
  const deck = new Deck();
  for (let i = 0; i < 52; i++) {
    deck.draw();
  }
  const card = deck.draw();
  assert(card === null, 'Empty deck should return null');
});

deckTests.test('Shuffle randomizes order', () => {
  const deck1 = new Deck();
  const original = deck1.cards.map(c => c.toString()).join(',');
  
  const deck2 = new Deck();
  deck2.shuffle();
  const shuffled = deck2.cards.map(c => c.toString()).join(',');
  
  assert(original !== shuffled, 'Shuffled deck should differ from original');
});

deckTests.run();
```

### JSDoc Comments

```js
/**
 * Represents a playing card
 * @class Card
 * @param {string} suit - The suit (Hearts, Diamonds, Clubs, Spades)
 * @param {string} rank - The rank (A, 2-10, J, Q, K)
 */
class Card {
  constructor(suit, rank) {
    /** @type {string} */
    this.suit = suit;
    /** @type {string} */
    this.rank = rank;
    /** @type {number} */
    this.value = this.calculateValue();
    /** @type {string} */
    this.color = this.calculateColor();
  }
  
  /**
   * Compares this card to another card
   * @param {Card} otherCard - Card to compare against
   * @returns {number} 1 if greater, -1 if less, 0 if equal
   */
  compare(otherCard) {
    if (this.value > otherCard.value) return 1;
    if (this.value < otherCard.value) return -1;
    return 0;
  }
}
```

### Debugging with Console

```js
// Logging helper
function log(label, data) {
  console.log(`[${label}]`, data);
}

// Debug game state
function debugGameState(game) {
  log('Player Hand', game.player.getHand().map(c => c.toString()));
  log('Computer Hand', game.computer.getHand().map(c => c.toString()));
  log('Player Score', game.player.score);
  log('Computer Score', game.computer.score);
  log('Game Over', game.gameOver);
}
```

---

## Assignment: Add Tests and Documentation

Write comprehensive unit tests, add JSDoc comments, ensure code quality.