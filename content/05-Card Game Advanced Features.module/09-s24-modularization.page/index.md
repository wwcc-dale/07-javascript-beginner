---
module: 5
name: 'Session 24: ES6 Modules and Professional Code Organization'
position: 9
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 24
---

# Session 24: ES6 Modules and Professional Code Organization

## Learning Outcomes

By the end of this session, you will be able to:
- Export classes and functions from a module file using `export`
- Import named and default exports from other modules
- Organize a multi-file project into logical folders by responsibility
- Run a local development server to satisfy browser module requirements
- Diagnose and fix common module errors (CORS, path issues, circular dependencies)

---

## Introduction (5 minutes)

Your Spades game currently loads all scripts with sequential `<script>` tags. That works — but as projects grow, it becomes hard to manage. **ES6 modules** solve this with `import` and `export` syntax that makes dependencies explicit and files self-contained.

Professional JavaScript projects always use modules. Today you learn the syntax and how to organize a project to use them well.

---

## Reading: ES6 Modules (35 minutes)

### Why Modules?

A single large file becomes hard to navigate, difficult to test, and impossible for a team to work on simultaneously. Modules give each file a clear, single responsibility and make dependencies explicit:

```
Before: one 800-line game.js
After:
  src/
    classes/Card.js
    classes/Deck.js
    classes/Player.js
    classes/AIPlayer.js
    game/SpadesGame.js
    game/GameRunner.js
    ui/GameBoard.js
    main.js
```

---

### `export` — Making Code Available

Add `export` before any class, function, or variable to make it importable by other files:

```js
// src/classes/Card.js

export class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getSuit() { return this.suit; }
  getRank() { return this.rank; }
  // ... rest of methods
}
```

**Default export** — used when a file has one primary thing to share:

```js
// src/utils/helpers.js
export default function getSuitSymbol(suit) {
  return { Spades: '♠', Hearts: '♥', Diamonds: '♦', Clubs: '♣' }[suit];
}
```

---

### `import` — Using Code from Other Files

```js
// Named import — matches the exported name exactly
import { Card } from './Card.js';
import { Deck } from './Deck.js';

// Default import — any name you choose
import getSuitSymbol from '../utils/helpers.js';

// Import everything as a namespace
import * as Classes from './classes/index.js';
const c = new Classes.Card('Spades', 'A');
```

**Path rules:**
- `./Card.js` — same folder
- `../utils/helpers.js` — one folder up, then into utils
- Always include the `.js` extension
- Paths are relative to the file doing the importing

---

### Project Folder Structure

Organize by **responsibility**, not by file type:

```
spades/
├── index.html
├── style.css
└── src/
    ├── classes/
    │   ├── Card.js         (Card class)
    │   ├── Deck.js         (Deck class — imports Card)
    │   ├── Player.js       (Player class)
    │   └── AIPlayer.js     (AIPlayer — imports Player)
    ├── game/
    │   ├── SpadesGame.js   (imports Player, Deck)
    │   └── GameRunner.js   (imports SpadesGame, GameBoard)
    ├── ui/
    │   └── GameBoard.js    (imports Card)
    └── main.js             (entry point — imports everything)
```

**Guidelines:**
- One class per file, file named after the class
- Imports flow in one direction — avoid circular imports
- `main.js` is the only file that wires everything together

---

### Loading Modules in HTML

Add `type="module"` to the script tag for your entry point. The browser then handles all imports automatically:

```html
<!-- Old way: list all files manually in order -->
<script src="Card.js"></script>
<script src="Deck.js"></script>
<script src="Player.js"></script>
<!-- ... 5 more script tags -->

<!-- New way: just the entry point -->
<script type="module" src="src/main.js"></script>
```

The browser fetches and evaluates all imported files automatically, in dependency order.

---

### Common Errors and Fixes

**CORS error when opening `file://` in the browser:**
```
Access to script blocked by CORS policy
```
Modules cannot be loaded from `file://` — they require an HTTP server. Run a local server:

- **VS Code Live Server** extension: right-click `index.html` → Open with Live Server
- **Python**: `python -m http.server 8000` → open `http://localhost:8000`
- **Node.js**: `npx http-server -p 8000`

**Module not found (404):**
```
GET http://localhost:8000/Card.js 404 Not Found
```
Fix: use correct relative path starting with `./` or `../`:
```js
import { Card } from './classes/Card.js';  // ✅ Correct
import { Card } from 'Card.js';            // ✗ Missing ./
```

**Circular dependency:**
```js
// Player.js imports Deck.js, and Deck.js imports Player.js → circular!
```
Fix: pass instances as method parameters instead of importing the class:
```js
// Player.js — no import of Deck
class Player {
  receiveCard(card) { this.hand.push(card); }
}

// main.js — creates both and connects them
const deck   = new Deck();
const player = new Player('You');
player.receiveCard(deck.draw());
```

---

### Refactoring a Script-Tag Project to Modules

The mechanical steps are straightforward:

1. Add `export` before each class definition
2. Add `import { ClassName } from './path.js'` at the top of each file that uses it
3. Replace all `<script src="...">` tags in HTML with one `<script type="module" src="src/main.js">`
4. Run a local server
5. Fix any CORS or path errors in the console

---

## Video Tutorial: ES6 Modules (20 minutes)

Watch: `assets/videos/24-es6-modules.mp4`

Covers:
- Named vs. default exports
- `import` path syntax and common mistakes
- Setting up VS Code Live Server
- Refactoring a simple two-file project to use modules

---

## Supplemental Practice (25 minutes)

### Exercise 1: Export/Import Round-Trip

Create two files: `math.js` (exports `add`, `subtract`, `multiply` as named exports) and `app.js` (imports all three and logs results). Load `app.js` as a module in a minimal HTML file and verify it works via a local server.

### Exercise 2: Default Export

Create `greeting.js` with a default export function `greet(name)` that returns `"Hello, [name]!"`. Import and use it in `main.js`.

### Exercise 3: Folder Organization

Take the two-file project from Exercise 1 and reorganize it into:
```
src/
  utils/math.js
  utils/greeting.js
  main.js
index.html
```
Update all import paths to use the new structure.

### Exercise 4: Diagnose a Broken Import

Given this import in `game/SpadesGame.js`:
```js
import { Card } from 'classes/Card.js';
```
Identify the error and write the corrected import path. (Hint: the path needs to be relative to `game/SpadesGame.js`'s location.)

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 24 Practice Quiz** in Canvas.

Focus on:
- `export` syntax (named vs. default)
- `import` path syntax (must start with `./` or `../`)
- Why modules require an HTTP server (not `file://`)
- How to identify and resolve circular dependency problems

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 24: Modularize the Spades Game"**.

You will refactor your Spades game from `<script>` tags to ES6 modules and organize the files into a professional folder structure.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`export`** makes a class, function, or variable available to other files
- **`import`** uses relative paths; always include the `.js` extension
- **One class per file** with the file named after the class is the standard convention
- **Modules require an HTTP server** — use VS Code Live Server or Python's `http.server`
- **Circular imports** are solved by passing instances as arguments rather than importing the class

### How This Connects to the Assignment

The assignment asks you to refactor the Spades game into ES6 modules with a proper folder structure. The resulting project will be the codebase you submit for the Session 25 final project.

Next session: **Session 25 — Final Project: Complete Spades Game**