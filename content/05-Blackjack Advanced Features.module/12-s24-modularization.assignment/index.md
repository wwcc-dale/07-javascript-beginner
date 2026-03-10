---
allowed_extensions:
- html
- js
- css
- zip
assignment_type: online
module: 5
name: 'Session 24: Modularize the Blackjack Game'
points: 20
position: 12
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 24.3
submission_types:
- online_upload
---

# Session 24: Modularize the Blackjack Game

Refactor your Blackjack game from `<script>` tags to ES6 modules with a professional folder structure.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP of your reorganized game folder

Start from your Session 23 project.

---

## Target Folder Structure

```
blackjack/
├── index.html          ← one <script type="module"> tag pointing to main.js
├── style.css
└── src/
    ├── classes/
    │   ├── Card.js
    │   ├── Deck.js
    │   ├── Hand.js
    │   └── Wallet.js
    ├── game/
    │   └── BlackjackGame.js
    ├── ui/
    │   └── ui.js
    ├── stats/
    │   └── GameStats.js
    └── main.js
```

---

## Level 1 – Core Tasks (15 points)

### Task 1: Move classes to individual files
Move each class into its own file in the correct folder:
- `Card` → `src/classes/Card.js`
- `Deck` → `src/classes/Deck.js`
- `Hand` → `src/classes/Hand.js`
- `Wallet` → `src/classes/Wallet.js`
- `BlackjackGame` → `src/game/BlackjackGame.js`
- `GameStats` → `src/stats/GameStats.js`

Add `export` before each class definition.

### Task 2: Add imports to each file
Each file must import what it needs:
```js
// Deck.js
import { Card } from './Card.js';
export class Deck { ... }

// Hand.js
import { Card } from './Card.js';
export class Hand { ... }

// BlackjackGame.js
import { Deck } from '../classes/Deck.js';
import { Hand } from '../classes/Hand.js';
import { Wallet } from '../classes/Wallet.js';
export class BlackjackGame { ... }
```

### Task 3: Move UI code to src/ui/ui.js
Move all DOM event handlers and rendering functions to `src/ui/ui.js`.
Add `import { BlackjackGame } from '../game/BlackjackGame.js';` at the top.
Add `import { GameStats } from '../stats/GameStats.js';` if using stats.

### Task 4: Create main.js and update index.html
Create `src/main.js`:
```js
// main.js — entry point
import './ui/ui.js';  // imports ui.js which starts the game
```

Update `index.html` to use a single script tag:
```html
<script type="module" src="src/main.js"></script>
```

Remove all old `<script src="...">` tags.

Run the game via VS Code Live Server. Fix any import path errors in the console.

---

## Level 2 – Stretch (3 points)

### Task 5: Utility helpers file
Create `src/utils/helpers.js` with named exports:
```js
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatChips(amount) {
  return `$${amount.toLocaleString()}`;
}
```
Import and use `formatChips` in `ui.js` to display the chip count.

### Task 6: Barrel export (index.js)
Create `src/classes/index.js`:
```js
export { Card }   from './Card.js';
export { Deck }   from './Deck.js';
export { Hand }   from './Hand.js';
export { Wallet } from './Wallet.js';
```
Update `BlackjackGame.js` to import from `'../classes/index.js'` instead of individual files.

---

## Level 3 – Advanced (2 points)

### Task 7: Verify your work
After the refactor, your browser console must show **zero errors**. In a comment at the top of `main.js`, list:
1. The order in which JavaScript loads your modules (you can find this in the Network tab of DevTools)
2. Any circular dependency you found and how you resolved it (or "none found")
3. One advantage of the modular structure you noticed while refactoring
