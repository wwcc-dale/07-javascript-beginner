---
name: "Session 24 Assignment: Modularize Your Card Game"
duedate: +7 days
points: 50
submissiontypes: online_upload
allowedextensions: [".zip"]
published: true
---

# Session 24 Assignment: Modularize Your Card Game

## 📋 Overview

Take your working card game from Sessions 16-23 (currently in a single `game.js` file) and refactor it into a professional modular structure using ES6 modules.

**What you'll submit:** A `.zip` file containing your modularized card game project.

---

## 🎯 Learning Outcomes

This assignment assesses your ability to:

- Organize JavaScript code into logical, reusable modules
- Use ES6 `import` and `export` syntax correctly
- Structure a project using professional folder organization
- Debug module loading and CORS issues
- Maintain functionality while refactoring code

---

## 📦 Requirements

### 1. Project Structure (10 points)

Create the following folder structure:

```
card-game-modular/
├── index.html
└── src/
    ├── classes/
    │   ├── Card.js
    │   ├── Deck.js
    │   ├── Player.js
    │   └── [AIPlayer.js if you have AI]
    ├── utils/
    │   ├── constants.js
    │   └── helpers.js
    ├── ui/
    │   └── GameUI.js (or similar)
    └── main.js
```

**Requirements:**
- Folders named exactly as shown above
- All JavaScript files in the `src/` folder (not root)
- `main.js` is the entry point
- `index.html` uses `<script type="module" src="src/main.js"></script>`

### 2. Module Exports (10 points)

Each module file must properly export its contents:

**Classes** (Card, Deck, Player, etc.):
```javascript
// Named export
export class Card { /* ... */ }

// OR Default export (choose one pattern)
export default class Card { /* ... */ }
```

**Constants** (`utils/constants.js`):
```javascript
export const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
export const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// ... any other constants you use
```

**Helper Functions** (`utils/helpers.js`):
```javascript
export function getSuitSymbol(suit) { /* ... */ }
export function createCardElement(card) { /* ... */ }
// ... other helpers
```

### 3. Module Imports (10 points)

Use correct import syntax in files that depend on other modules:

**Example - `Deck.js` imports `Card` and constants:**
```javascript
import { Card } from './Card.js';
import { SUITS, RANKS } from '../utils/constants.js';

export class Deck {
  // ... uses Card, SUITS, RANKS
}
```

**Requirements:**
- All imports use relative paths (`./` or `../`)
- All import paths include `.js` extension
- No circular dependencies (A imports B, B imports A)
- Imports are at the top of each file

### 4. Functionality (15 points)

Your modularized game must work exactly like your Session 16-23 version:

- **Deck operations:** Create deck, shuffle, deal, reset
- **Player management:** Track player hands, add/remove cards
- **UI updates:** Display cards, show status messages
- **Game logic:** All features from your original game work
- **Event handling:** Buttons and clicks still functional

**Test thoroughly:**
- Create new game
- Shuffle deck
- Deal cards
- Play a round
- All features from Sessions 16-23

### 5. Code Quality (5 points)

- **One class per file** - Don't put multiple classes in one file
- **Descriptive file names** - Match class names (Card.js contains Card class)
- **Consistent formatting** - Proper indentation and spacing
- **No console errors** - Check browser DevTools (F12 → Console)
- **Comments** - Brief comment at top of each file explaining its purpose

---

## 🚀 Submission Instructions

### Step 1: Verify Your Code Works

1. **Run a local development server** (choose one):
   - VS Code: Right-click `index.html` → "Open with Live Server"
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server -p 8000`

2. **Open in browser:** `http://localhost:8000` (or your server's URL)

3. **Test all features:**
   - Create new game
   - Shuffle deck
   - Deal cards to players
   - Play through a round
   - Check all Session 16-23 features work

4. **Check console for errors:**
   - Press F12 → Console tab
   - Should see NO red error messages
   - Module loading messages are OK

### Step 2: Create ZIP File

**Include:**
- `index.html`
- `src/` folder with all JavaScript files
- `README.md` (optional but recommended - explain your structure)

**DO NOT include:**
- `node_modules/`
- `.git/`
- Server files (`.vscode/`, etc.)
- Your instructor-only reference files

**Naming:** `LastName_FirstName_Session24.zip`

### Step 3: Submit

1. Go to Canvas → Session 24 Assignment
2. Upload your `.zip` file
3. Add a comment with:
   - Confirmation that you tested locally
   - Any issues you encountered and how you solved them
   - (Optional) Features you're proud of

---

## ✅ Grading Checklist

Before submitting, verify:

- [ ] Folder structure matches requirements exactly
- [ ] All classes are exported (using `export`)
- [ ] All dependencies are imported (using `import`)
- [ ] Import paths use `./` or `../` and include `.js`
- [ ] `index.html` uses `<script type="module">`
- [ ] Tested on local server (not `file://`)
- [ ] All original features work
- [ ] No console errors
- [ ] One class per file
- [ ] Files properly named
- [ ] Created `.zip` with correct contents
- [ ] `.zip` file named correctly

---

## 🐛 Common Issues and Fixes

### Error: "CORS policy blocked"
**Fix:** Must use local server, not `file://` protocol

### Error: "Module not found"  
**Fix:** Check import paths - use `./` for same folder, `../` for parent

### Error: "Unexpected token 'export'"
**Fix:** `<script>` tag must have `type="module"`

### Game doesn't work after refactoring
**Fix:** 
1. Check ALL imports are correct
2. Verify ALL exports are present
3. Check console for specific error messages
4. Test one module at a time

### Can't find where to put code
**Fix:**
- Classes → `src/classes/`
- Constants (SUITS, RANKS) → `src/utils/constants.js`
- Helpers (getSuitSymbol) → `src/utils/helpers.js`
- DOM/UI code → `src/ui/GameUI.js`
- Initialization → `src/main.js`

---

## 💡 Tips for Success

1. **Start small** - Move one class at a time, test after each move
2. **Keep original** - Make a copy before refactoring
3. **Test frequently** - Don't move everything then test
4. **Use console.log** - Verify imports loaded: `console.log('Card loaded:', Card);`
5. **Check DevTools** - Network tab shows which files loaded
6. **Read error messages** - They usually tell you exactly what's wrong

---

## 📚 Resources

- Session 24 Lecture Notes
- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- JavaScript Quick Reference (Resources module)
- Office hours: [Your instructor's office hours]

---

## ❓ Getting Help

**If stuck:**

1. Check console errors (F12 → Console)
2. Review Session 24 lecture examples
3. Post in class discussion forum with:
   - What you're trying to do
   - Error message (if any)
   - Code snippet showing the issue
4. Attend office hours

---

**Good luck modularizing your card game! This is a key skill for professional development.** 🚀