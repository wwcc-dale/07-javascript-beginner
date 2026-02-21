---
name: "Session 24: Modularize the Spades Game"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
submission_types:
  - "online_upload"
allowed_extensions:
  - "zip"
---

# Session 24: Modularize the Spades Game

Refactor your Spades game from `<script>` tags to ES6 modules with a professional folder structure.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP of the refactored project

---

## Level 1 – Core (15 pts)

### Challenge 1: Folder Structure

Create this structure for your refactored project:

```
spades/
├── index.html
├── style.css
└── src/
    ├── classes/
    │   ├── Card.js
    │   ├── Deck.js
    │   ├── Player.js
    │   └── AIPlayer.js
    ├── game/
    │   ├── SpadesGame.js
    │   └── GameRunner.js
    ├── ui/
    │   └── GameBoard.js
    └── main.js
```

### Challenge 2: Export Each Class

Add `export` before each class definition in every file. For example:

```js
// src/classes/Card.js
export class Card { /* ... your existing code ... */ }
```

Do this for all 7 class files.

### Challenge 3: Add Imports

Each file that uses another class must import it. For example, `Deck.js` uses `Card`:

```js
// src/classes/Deck.js
import { Card } from './Card.js';

export class Deck { /* ... */ }
```

Map out all dependencies and add the correct imports. (Hint: trace which classes each file instantiates using `new`.)

### Challenge 4: Update `index.html`

Remove all individual `<script src="...">` tags and replace with a single module entry point:

```html
<script type="module" src="src/main.js"></script>
```

Update `src/main.js` to import everything it needs and initialize the game.

### Challenge 5: Verify on a Local Server

Start a local development server (VS Code Live Server, or `python -m http.server 8000`). Open the game and verify:
- No console errors
- The game deals, bids, and plays exactly as before
- All visual elements still work

---

## Level 2 – Stretch (3 pts)

### Challenge 6: `src/utils/helpers.js`

Extract any standalone helper functions from your codebase (e.g., `getSuitSymbol`, any formatting functions) into `src/utils/helpers.js`. Export them and import them where needed. Remove the original definitions.

### Challenge 7: Barrel File

Create `src/classes/index.js` that re-exports all four classes:

```js
export { Card }     from './Card.js';
export { Deck }     from './Deck.js';
export { Player }   from './Player.js';
export { AIPlayer } from './AIPlayer.js';
```

Update `main.js` to import from `'./classes/index.js'` instead of individual files.

---

## Level 3 – Advanced (2 pts)

### Challenge 8: Document Dependencies

In a file `src/DEPENDENCIES.md`, draw the import graph as a text diagram — which files import which. Verify there are no circular imports (A → B → A). If you find any, fix them by passing instances as constructor arguments instead of importing the class.
