---
bank_name: "Session 24: ES6 Modules and Code Organization"
---

1. Why must modules be served via an HTTP server rather than opened as `file://`?
a) HTTP servers are faster than the file system
*b) Browsers block module imports from `file://` URLs due to security (CORS) restrictions
c) `import` statements only work when connected to the internet
d) ES6 modules require a Node.js runtime

1. What does the `{}` in the import statement indicate?
```js
// Card.js
export class Card { }

// game.js
import { Card } from './Card.js';
```
a) An object literal is being imported
*b) A named export is being imported — the name must match exactly
c) A default export is being imported
d) The import is optional (only imported if needed)

1. Which file is the correct entry point referenced in a `<script type="module">` tag?
a) `Card.js` — the most fundamental class
b) `index.html` — the main HTML file
*c) `main.js` — the file that wires everything together
d) `style.css` — the styles file

1. What is the correct way to import a default export?
```js
// helpers.js
export default function delay(ms) { }
```
a) `import { delay } from './helpers.js';`
*b) `import delay from './helpers.js';`
c) `import * from './helpers.js';`
d) `import default delay from './helpers.js';`

1. The file `Card.js` is in the `src/classes/` folder, and `BlackjackGame.js` is in `src/game/`. Is this import path correct?
```js
import { Card } from '../classes/Card.js';
```
*a) Yes — `../classes/Card.js` goes up one folder then into `classes/`
b) No — the path should be `./classes/Card.js`
c) No — the `.js` extension should not be included
d) No — it should start with `/src/classes/Card.js`

1. A project has `Hand.js` importing from `Deck.js`, and `Deck.js` importing from `Hand.js`. What is this called?
a) A bidirectional export
*b) A circular dependency
c) A shared import
d) A mutual module

1. You add `type="module"` to a script tag. How does the browser load `Card.js` if `main.js` imports it?
a) The browser fetches all `.js` files in the same folder automatically
*b) The browser reads `main.js`'s import statement and fetches `Card.js` automatically
c) You must add a second `<script type="module">` tag for `Card.js`
d) `Card.js` is not loaded — you must bundle them first

1. What is wrong with this import?
```js
import { Hand } from 'Hand.js';
```
a) `Hand` should be in lowercase
*b) The path must start with `./` — `'Hand.js'` is treated as a package name, not a relative path
c) `.js` extension is not required
d) Named imports must use `* as`

1. Which principle best describes why each class should be in its own file?
a) File size limits in browsers
*b) Single responsibility — each file has one clear purpose, making it easier to find and modify code
c) JavaScript runs faster when code is split across files
d) ES6 modules require one class per file

1. After refactoring to modules, you open `index.html` in the browser and see no errors, but the game doesn't start. What should you check first?
a) Whether `style.css` has any syntax errors
*b) Whether `main.js` actually creates the game instance and calls the start function
c) Whether `type="module"` is spelled correctly
d) Whether all files are exported

1. How do you import both functions in `main.js`?
```js
// src/utils/helpers.js
export function delay(ms) { }
export function formatChips(n) { }
```
*a) `import { delay, formatChips } from './utils/helpers.js';`
b) `import delay, formatChips from './utils/helpers.js';`
c) `import { delay } and { formatChips } from './utils/helpers.js';`
d) `import * from './utils/helpers.js';`

1. `export default` and named `export` differ in how you import them. Which statement is true?
a) Default exports must use `{ }` when imported; named exports don't
b) You can have multiple default exports per file
*c) Named exports use `{ }` when imported; default exports don't
d) Default exports can only be functions, not classes
