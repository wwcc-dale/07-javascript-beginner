---
module: 5
name: 'Session 24: ES6 Modules and Professional Code Organization'
position: 10
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 24.1
---

# Session 24: ES6 Modules and Professional Code Organization

## Learning Outcomes

By the end of this session, you will be able to:
- Export classes and functions from a module file using `export`.
- Import named and default exports from other modules.
- Organize a multi-file project into logical folders by responsibility.
- Run a local development server to satisfy browser module requirements.
- Diagnose and fix common module errors (CORS, path issues, circular dependencies).

---

## Introduction (5 minutes)

Your Blackjack game currently loads all scripts with sequential `<script>` tags. That works — but as projects grow, it becomes hard to manage. **ES6 modules** solve this with `import` and `export` syntax that makes dependencies explicit and files self-contained.

Professional JavaScript projects always use modules. Today you learn the syntax and how to organize a project to use them well.

---

## Reading: ES6 Modules (35 minutes)

### Why Modules?

A single large file becomes hard to navigate and difficult to maintain. Modules give each file a clear, single responsibility and make dependencies explicit:

```
Before: all code in one file
After:
  src/
    classes/Card.js
    classes/Deck.js
    classes/Hand.js
    classes/Wallet.js
    game/BlackjackGame.js
    ui/ui.js
    ui/stats-display.js
    main.js
```

---

### `export` — Making Code Available

Add `export` before any class, function, or variable to make it importable:

```js
// src/classes/Card.js

export class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  get rank() { return this._rank; }
  get suit() { return this._suit; }
  toString()  { return `${this._rank} of ${this._suit}`; }
}
```

**Default export** — used when a file has one primary thing to share:

```js
// src/utils/helpers.js
export default function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

---

### `import` — Using Code from Other Files

```js
// Named import — matches the exported name exactly
import { Card } from './Card.js';
import { Deck } from './Deck.js';

// Default import — any name you choose
import delay from '../utils/helpers.js';

// Import multiple names from one file
import { Card, Deck } from './card-deck.js';
```

**Path rules:**
- `./Card.js` — same folder
- `../utils/helpers.js` — one folder up, then into utils
- Always include the `.js` extension
- Paths are relative to the importing file

---

### Project Folder Structure

Organize by **responsibility**, not by file type:

```
blackjack/
├── index.html
├── style.css
└── src/
    ├── classes/
    │   ├── Card.js          (Card class)
    │   ├── Deck.js          (Deck — imports Card)
    │   ├── Hand.js          (Hand — imports Card)
    │   └── Wallet.js        (Wallet class)
    ├── game/
    │   └── BlackjackGame.js (imports Deck, Hand, Wallet)
    ├── ui/
    │   ├── ui.js            (imports BlackjackGame)
    │   └── stats-display.js (imports GameStats)
    ├── stats/
    │   └── GameStats.js
    └── main.js              (entry point — imports ui.js)
```

**Guidelines:**
- One class per file, file named after the class
- Imports flow in one direction — avoid circular imports
- `main.js` is the only file that wires everything together

---

### Loading Modules in HTML

Add `type="module"` to the script tag for your entry point:

```html
<!-- Old way: list all files manually in order -->
<script src="card.js"></script>
<script src="deck.js"></script>
<script src="hand.js"></script>
<!-- ... more script tags ... -->

<!-- New way: just the entry point -->
<script type="module" src="src/main.js"></script>
```

The browser fetches and evaluates all imported files automatically.

---

### Common Errors and Fixes

**CORS error when opening `file://` in the browser:**
```
Access to script blocked by CORS policy
```
Modules require an HTTP server. Fix:
- **VS Code Live Server** extension: right-click `index.html` → Open with Live Server
- **Python**: `python -m http.server 8000` → open `http://localhost:8000`

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
// Hand.js imports Deck, and Deck imports Hand → circular!
```
Fix: pass instances as method parameters rather than importing the class.

---

### Refactoring a Script-Tag Project to Modules

1. Add `export` before each class definition
2. Add `import { ClassName } from './path.js'` at the top of each file that uses it
3. Replace all `<script src="...">` tags with one `<script type="module" src="src/main.js">`
4. Run a local server
5. Fix any CORS or path errors in the console

---

## Supplemental Practice (25 minutes)

### Exercise 1: Export/Import Round-Trip

Create two files: `math.js` (exports `add`, `subtract`, `multiply` as named exports) and `app.js` (imports all three and logs results). Load `app.js` as a module and verify it works via a local server.

### Exercise 2: Default Export

Create `helpers.js` with a default export function `formatCurrency(amount)` that returns `"$[amount]"`. Import and use it in `main.js`.

### Exercise 3: Folder Organization

Take the two-file project from Exercise 1 and reorganize into:
```
src/
  utils/math.js
  utils/helpers.js
  main.js
index.html
```
Update all import paths for the new structure.

### Exercise 4: Diagnose a Broken Import

Given this import in `game/BlackjackGame.js`:
```js
import { Card } from 'classes/Card.js';
```
Identify the error and write the corrected import path. (Hint: the path needs to be relative to `game/BlackjackGame.js`'s location.)

---

- accordion: Helpful Resources
- [JavaScript modules — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  - Complete guide to ES6 modules: export, import, named vs default, dynamic imports
- [export — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  - All forms of export: named, default, and re-export
- [import — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  - All forms of import, including aliases and namespace imports
- [script: type="module" — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#type)
  - How to load an ES6 module entry point in an HTML page
- [CORS errors — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors)
  - Why modules require an HTTP server and how to diagnose CORS errors
