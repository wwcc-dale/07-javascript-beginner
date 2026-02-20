# Card Game Project - Starter Files Guide
## INSTRUCTOR VERSION - Implementation Details & Answers

---

## 📋 File Distribution Model

### ✅ Publish to Students (via Canvas)
- `session-16-starter.html` - As is (contains only structure, styles, DOM hooks)
- `session-16-game.js` - As is (contains only TODOs and helper functions)
- `STARTER-README-STUDENT.md` - Student guide (this file redacted to remove solutions)

### 🔒 Keep Instructor-Only
- This document (`STARTER-README-INSTRUCTOR.md`)
- Reference implementations (complete `game.js`, complete modularized code)
- Grading rubrics with solution exemplars
- Test cases and validation scripts

---

## 🎯 Session 16: Card and Deck Classes - Full Implementation

### Card Class - Complete Reference Implementation

```javascript
class Card {
    constructor(suit, rank) {
        this.suit = suit;  // 'hearts', 'diamonds', 'clubs', 'spades'
        this.rank = rank;  // 'A', '2'-'10', 'J', 'Q', 'K'
    }
    
    describe() {
        return `${this.rank} of ${this.suit}`;
    }
}
```

**Key Points:**
- Constructor takes exactly 2 parameters
- Properties are accessed as `this.suit` and `this.rank`
- `describe()` returns string in format "A of hearts"
- Test: `new Card('hearts', 'A').describe()` → `"A of hearts"`

### Deck Class - Complete Reference Implementation

```javascript
class Deck {
    constructor() {
        this.cards = [];
        this.reset();
    }
    
    reset() {
        this.cards = [];
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }
    
    shuffle() {
        // Fisher-Yates algorithm for random permutation
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    deal() {
        if (this.cards.length === 0) {
            return null;  // Or throw error: throw new Error('No cards left');
        }
        return this.cards.pop();  // Remove and return top card
    }
    
    count() {
        return this.cards.length;
    }
}
```

**Key Teaching Points:**

1. **Constructor calls reset()**
   - Avoids code duplication
   - Makes deck reusable

2. **Nested loops for card creation**
   - Outer loop: suits
   - Inner loop: ranks
   - Total: 4 × 13 = 52 cards

3. **Shuffle algorithm**
   - Fisher-Yates: starting from end, swap with random earlier position
   - Ensures uniform random permutation
   - Time: O(n), Space: O(1)

4. **Deal method**
   - Uses `pop()` to get last card (simplest)
   - Alternative: `shift()` to get first card
   - Students may do either; both work

5. **Error handling**
   - Can silently return null when deck empty
   - Or throw error and let game handle it
   - Students should test both cases

---

## 🧪 Testing Strategy for Session 16

### Acceptance Criteria

Students' code should pass these tests (in console):

```javascript
// Test 1: Card class exists and works
const card = new Card('hearts', 'A');
console.assert(card.suit === 'hearts', 'Card suit should be "hearts"');
console.assert(card.rank === 'A', 'Card rank should be "A"');
console.assert(card.describe() === 'A of hearts', 'describe() should return "A of hearts"');

// Test 2: Deck creates 52 cards
const deck = new Deck();
console.assert(deck.count() === 52, 'New deck should have 52 cards');

// Test 3: Deal removes cards
const dealtCard = deck.deal();
console.assert(deck.count() === 51, 'After deal, should have 51 cards');
console.assert(dealtCard instanceof Card, 'Dealt card should be a Card object');

// Test 4: Shuffle works
const deck2 = new Deck();
const beforeShuffle = deck2.cards.map(c => c.describe());
deck2.shuffle();
const afterShuffle = deck2.cards.map(c => c.describe());
console.assert(beforeShuffle !== afterShuffle, 'Shuffle should change card order');

// Test 5: Reset works
const deck3 = new Deck();
deck3.deal();
deck3.deal();
deck3.reset();
console.assert(deck3.count() === 52, 'After reset, should have 52 cards again');
```

### Common Student Mistakes & How to Address

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Missing `this.` | `Uncaught ReferenceError: suit is not defined` | Remind them properties belong to the object |
| Constructor doesn't call reset() | Code repeated, confusing | Show DRY principle (Don't Repeat Yourself) |
| Shuffle doesn't randomize | Cards in same order | Explain Fisher-Yates algorithm |
| deal() doesn't remove card | count() never decreases | Use .pop() or .shift() |
| Wrong deck size | count() returns 50, 51, or 54 | Count: 4 suits × 13 ranks = 52 |

---

## 📚 Session 17-23: Expansion Blueprint

### Session 17: Player Class

**Reference implementation:**
```javascript
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    
    addCard(card) {
        this.hand.push(card);
    }
    
    removeCard(index) {
        return this.hand.splice(index, 1)[0];
    }
    
    getHandSize() {
        return this.hand.length;
    }
    
    clearHand() {
        this.hand = [];
    }
}
```

### Session 18: Game Class

**Manages state, turn order, scoring**

### Session 19: Event handling

**Card clicks, animations, UI updates**

### Session 20: Polish
**Error handling, edge cases, testing**

### Session 21: AIPlayer extends Player

**Decision-making logic, strategy levels**

### Session 22: LocalStorage
**Save/load, statistics, persistence**

### Session 23: Advanced UI
**Settings menu, themes, leaderboard**

---

## 🔍 Grading Session 16

### Rubric Alignment (out of 10 points)

**Code Structure (3 pts)**
- [ ] Card class properly defined (1 pt)
  - Has constructor with suit and rank parameters
  - Has describe() method
- [ ] Deck class properly defined (1 pt)
  - Has constructor that creates 52 cards
  - Has shuffle(), deal(), reset(), count() methods
- [ ] Code is well-organized and readable (1 pt)
  - Consistent indentation
  - Clear variable names

**Functionality (5 pts)**
- [ ] Card class works correctly (1 pt)
  - describe() returns correct format
  - Properties accessible via this.suit, this.rank
- [ ] Deck creates 52 cards (1 pt)
  - All 4 suits present
  - All 13 ranks per suit
- [ ] Shuffle randomizes (1 pt)
  - Works with Fisher-Yates or similar algorithm
- [ ] Deal removes and returns cards (1 pt)
  - pop() or shift() used correctly
  - Card count decreases
- [ ] Reset restores full deck (1 pt)
  - Works after multiple deals

**Testing (2 pts)**
- [ ] Student tested their code (1 pt)
  - Used console.assert or manual testing
  - Checked edge cases (empty deck, etc.)
- [ ] No console errors (1 pt)
  - Clean console output
  - Proper error handling (or no errors)

---

## 🎓 Pedagogical Notes for Instructor

### Why This Sequence?

1. **Card class first** - Simplest: just data + one method
2. **Deck class second** - Uses Card, teaches loops and algorithms
3. **Player class (S17)** - Uses Deck, introduces ownership
4. **Game class (S18)** - Brings it all together, state management

### Common Struggles

**Problem: Students hardcode the deck**
```javascript
// ❌ Don't let them do this:
const deck = [
    new Card('hearts', 'A'),
    new Card('hearts', '2'),
    // ... 50 more lines
];
```
**Solution:** Have them loop through suits and ranks

**Problem: Students use global array for deck**
```javascript
// ❌ Wrong - not encapsulated
let allCards = [];  // Global!

function createDeck() {
    // ... add to allCards
}
```
**Solution:** Emphasize Deck class owns its cards

**Problem: Shuffle broken (doesn't randomize)**
```javascript
// ❌ Wrong - doesn't randomize
shuffle() {
    this.cards.reverse();  // Just reverses!
}
```
**Solution:** Teach Fisher-Yates or Math.random() properly

---

## 🧑‍💻 Code Review Checklist

When reviewing student Session 16 code:

- [ ] Card constructor sets this.suit and this.rank correctly
- [ ] Card.describe() returns format like "A of hearts"
- [ ] Deck constructor calls reset() (or duplicate creates all cards)
- [ ] reset() creates exactly 52 cards with all suits/ranks
- [ ] shuffle() randomizes (test: shuffle twice, get different orders)
- [ ] deal() removes and returns card from this.cards
- [ ] deal() called 52 times leaves count() at 0
- [ ] count() returns length of this.cards
- [ ] No console errors
- [ ] Code is readable (proper indentation, variable names)

---

## 🚀 Next Session Prep (Session 17)

Before they start Player class:

1. Have students test their Deck thoroughly
2. Ask them to "create 2 empty Deck instances - why might we want multiple decks?"
3. Introduce Player: "Now we need to track who owns the cards"
4. Show pattern: Deck contains Cards, Player contains Cards (from Deck)

---

## 📁 File Organization Notes

### For Course Structure:

**Session 16 folder:**
```
16-Card-Deck.module/
├── 16-1-lecture.page/
│   └── index.md              (lecture content)
├── 16-2-quiz.quiz/
│   └── index.md              (check understanding)
├── 16-3-starter-files.file/
│   └── index.md              (metadata)
│   ├── session-16-starter.html
│   └── session-16-game.js
└── 16-4-assignment.assignment/
    └── index.md              (download starters, submit game.js)
```

**Instructor-only folder (not in Canvas):**
```
instructor-resources/
├── session-16/
│   ├── reference-solution.html
│   ├── reference-game.js
│   ├── test-cases.js
│   └── grading-notes.md
├── session-17-24/
│   └── [similar structure]
└── final-project/
    ├── reference-modular/
    │   └── src/
    │       ├── classes/
    │       └── ...
    └── grading-rubric-with-exemplars.md
```

---

## ✅ Deployment Checklist

Before Publishing to Students:

- [ ] `session-16-starter.html` - Verify opens in browser with no errors
- [ ] `session-16-game.js` - Verify all class stubs are commented out (// class Card)
- [ ] `session-16-game.js` - Verify helper functions are complete and working
- [ ] `STARTER-README-STUDENT.md` - Read for any solution hints
- [ ] Test: Can student follow steps without seeing answer?
- [ ] Test: Can student Google and find enough info without copying?
- [ ] Verify quiz questions don't give away implementation details

---

**This document is for instructor reference only. Do not share with students.**