# Card Game Project - Starter Files Guide
## STUDENT VERSION - Use This File

## 📁 File Structure

Your project uses **two files** that work together:

```
card-game/
├── session-16-starter.html    (HTML structure + CSS styles)
└── game.js                     (JavaScript code - YOUR WORK HERE)
```

**Why separate files?**
- ✅ **Separation of concerns** - HTML for structure, JS for logic
- ✅ **Cleaner code** - Easier to read and maintain
- ✅ **Professional practice** - Industry standard
- ✅ **Prepares for modularization** - Later you'll break game.js into multiple files

---

## 🚀 Getting Started

### Step 1: Download Both Files

Download these files to the same folder:
- `session-16-starter.html`
- `game.js`

### Step 2: Open in Code Editor

Open **game.js** in your code editor (VS Code, Sublime, etc.)

### Step 3: Implement Classes

Look for the `TODO` sections in `game.js` and implement:
1. **Card class** - A playing card with a suit and rank
2. **Deck class** - A collection of 52 cards you can shuffle and deal

### Step 4: Test in Browser

1. Open `session-16-starter.html` in your browser
2. Check the console for errors (F12 → Console)
3. Click buttons to test functionality
4. Use the testing code at the bottom of `game.js`

---

## 📚 Sessions 16-23: Building Your Game (Single File)

All your JavaScript code goes in **one `game.js` file** for Sessions 16-23.

### Session 16: Card and Deck Classes
**File:** `game.js`
- ✅ Card class with constructor and describe() method
- ✅ Deck class with shuffle(), deal(), reset(), count() methods
- ✅ Helper functions provided (you don't have to write these)

### Session 17: Player and Hand Management
**Add to `game.js`:**
- Player class to represent each player in the game
- Methods to manage a player's cards

### Session 18: Game State and Rules
**Add to `game.js`:**
- Game class to manage the overall game state
- Logic for determining winners and scoring

### Session 19: Event Handling and Interactions
**Add to `game.js`:**
- Click handlers for cards
- Visual feedback when cards are played
- Animations for dealing and playing

### Session 20: Polish and Testing
**Add to `game.js`:**
- Error handling
- Edge cases
- Verify everything works correctly

### Session 21: AI Strategy
**Add to `game.js`:**
- Computer player that can make decisions
- Different difficulty levels

### Session 22: Data Persistence
**Add to `game.js`:**
- Save and load game progress
- Track statistics

### Session 23: Advanced Features
**Add to `game.js`:**
- Settings and customization
- Leaderboards
- Game history

---

## 🔄 After Session 23: Code Organization

In a future session, you'll refactor your single large `game.js` file into organized, separate files. This teaches professional practices for managing larger projects.

---

## 📝 HTML File Overview

**`session-16-starter.html` contains:**

### 1. CSS Styles (Built-in)
- Professional design
- Card styling with suit colors
- Responsive layout
- Button styles

### 2. HTML Structure
```html
<div class="container">
    <header>...</header>
    <div class="controls">
        <button id="new-game-btn">New Game</button>
        <button id="deal-btn">Deal Cards</button>
        <button id="shuffle-btn">Shuffle Deck</button>
    </div>
    <div class="game-board">
        <div class="player-area">
            <div id="player1-hand" class="hand"></div>
        </div>
        <div class="player-area">
            <div id="player2-hand" class="hand"></div>
        </div>
    </div>
    <div id="status" class="status">...</div>
</div>
```

### 3. Script Link
```html
<script src="game.js"></script>
```

This links to your external JavaScript file.

---

## 🛠️ JavaScript File (`game.js`) Overview

### Provided for You (DO NOT MODIFY):

#### 1. **Helper Functions**
```javascript
getSuitSymbol(suit)        // Returns the symbol for a suit (♥, ♦, ♣, ♠)
createCardElement(card)    // Creates a visual card element
updateStatus(msg, type)    // Updates the status message
displayHand(id, cards)     // Displays cards in a container
```

#### 2. **Game State Variables**
```javascript
let deck = null;
let player1Hand = [];
let player2Hand = [];
```

#### 3. **Event Listeners** (Already set up)
The HTML buttons are already connected to these functions:
```javascript
newGame()         // Start a new game
dealCards()       // Deal cards to players
shuffleDeck()     // Shuffle the deck
```

### Your Work (TODO sections):

#### 1. **Card Class**

Create a class that represents a single playing card.

**Requirements:**
- Store the suit ('hearts', 'diamonds', 'clubs', 'spades')
- Store the rank ('A', '2' through '10', 'J', 'Q', 'K')
- Have a method that returns a description like "A of hearts"

#### 2. **Deck Class**

Create a class that manages a collection of cards.

**Requirements:**
- Constructor should create all 52 playing cards
- Have a method to shuffle the deck in random order
- Have a method to remove and return the top card
- Have a method to reset to a fresh 52-card deck
- Have a method to count remaining cards

---

## 🐛 Common Issues

### Issue: "Cannot find game.js"
**Solution:** Make sure both files are in the same folder
```
✅ Correct:
   my-folder/
   ├── session-16-starter.html
   └── game.js

❌ Wrong:
   my-folder/
   ├── session-16-starter.html
   └── scripts/
       └── game.js
```

### Issue: "Card is not defined"
**Solution:** Make sure you've defined the Card class in `game.js`

### Issue: Changes not showing in browser
**Solution:** Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### Issue: Console shows errors
**Solution:** 
1. Read the error message carefully
2. Note the line number shown
3. Check that line in `game.js`
4. Common errors:
   - Missing closing brace `}`
   - Typo in variable name
   - Missing `this.` before class properties

---

## 💡 Tips for Success

### 1. **Use the Helper Functions**
These are already written for you - don't rewrite them!

### 2. **Test Incrementally**
- Implement Card class → Test
- Implement Deck class → Test
- Don't wait until everything is done

### 3. **Use Console for Testing**
Uncomment the testing code at the bottom of `game.js`:
```javascript
const testCard = new Card('hearts', 'A');
console.log(testCard.describe());
```

### 4. **Keep HTML Clean**
- Don't modify the HTML file (except for styling if desired)
- All game logic goes in `game.js`

### 5. **Comment Your Code**
```javascript
// Good: Explains WHY you're doing something
// Random order gives each player fair chance

// Bad: Explains WHAT the code does (code already shows this)
// Loop through array
```

### 6. **Follow Naming Conventions**
```javascript
// Classes: PascalCase (first letter uppercase)
class Card { }

// Variables/functions: camelCase (first letter lowercase)
let playerHand = [];
function dealCards() { }

// Constants: UPPER_SNAKE_CASE
const MAX_CARDS = 52;
```

---

## 🎓 What You'll Learn

**By completing Sessions 16-23:**
- ✅ How to structure HTML and JavaScript separately
- ✅ Object-oriented programming with classes
- ✅ How to organize game logic
- ✅ How to connect JavaScript to HTML
- ✅ Debugging and testing your code
- ✅ Professional development practices

---

## 🚀 Ready to Code!

1. Download both files to the same folder
2. Open `game.js` in your editor
3. Find the first TODO section (Card class)
4. Start coding!
5. Test frequently in the browser
6. Have fun! 🃏

---

**Questions?** Check the JavaScript Quick Reference in the Resources module or ask your instructor!