# Session 24 Quiz – ES6 Modules and Code Organization

Test your understanding of ES6 modules, import/export syntax, and project organization.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s24-modularization.bank

## Q1

Why must modules be served via an HTTP server rather than opened as `file://`?

- [ ] HTTP servers are faster than the file system
- [x] Browsers block module imports from `file://` URLs due to security (CORS) restrictions
- [ ] `import` statements only work when connected to the internet
- [ ] ES6 modules require a Node.js runtime

> **Correct.** Browsers apply CORS restrictions to `file://` URLs. An HTTP server (even localhost) satisfies the requirement.

---

## Q2

```js
// Card.js
export class Card { ... }
```
```js
// game.js
import { Card } from './Card.js';
```

What does the `{}` in the import statement indicate?

- [ ] An object literal is being imported
- [x] A named export is being imported — the name must match exactly
- [ ] A default export is being imported
- [ ] The import is optional (only imported if needed)

> **Correct.** Curly braces indicate a named export/import. The name inside `{}` must match the exported name exactly.

---

## Q3

Which file is the correct entry point referenced in a `<script type="module">` tag?

- [ ] `Card.js` — the most fundamental class
- [ ] `index.html` — the main HTML file
- [x] `main.js` — the file that wires everything together
- [ ] `style.css` — the styles file

> **Correct.** The entry point is typically `main.js` (or `app.js`). It imports everything else; no other file needs to be mentioned in the HTML.

---

## Q4

What is the correct way to import a default export?

```js
// helpers.js
export default function delay(ms) { ... }
```

- [ ] `import { delay } from './helpers.js';`
- [x] `import delay from './helpers.js';`
- [ ] `import * from './helpers.js';`
- [ ] `import default delay from './helpers.js';`

> **Correct.** Default exports are imported without curly braces, and you can give them any name.

---

## Q5

```js
// BlackjackGame.js
import { Card } from '../classes/Card.js';
```

The file `Card.js` is in the `src/classes/` folder, and `BlackjackGame.js` is in `src/game/`. Is this import path correct?

- [x] Yes — `../classes/Card.js` goes up one folder then into `classes/`
- [ ] No — the path should be `./classes/Card.js`
- [ ] No — the `.js` extension should not be included
- [ ] No — it should start with `/src/classes/Card.js`

> **Correct.** `..` goes up one level (from `game/` to `src/`), then `classes/Card.js` goes into the right folder.

---

## Q6

A project has `Hand.js` importing from `Deck.js`, and `Deck.js` importing from `Hand.js`. What is this called?

- [ ] A bidirectional export
- [x] A circular dependency
- [ ] A shared import
- [ ] A mutual module

> **Correct.** Circular dependencies can cause unexpected behaviour because neither module can fully initialize before the other. Fix by passing instances as arguments instead of importing the class.

---

## Q7

You add `type="module"` to a script tag. How does the browser load `Card.js` if `main.js` imports it?

- [ ] The browser fetches all `.js` files in the same folder automatically
- [x] The browser reads `main.js`'s import statement and fetches `Card.js` automatically
- [ ] You must add a second `<script type="module">` tag for `Card.js`
- [ ] `Card.js` is not loaded — you must bundle them first

> **Correct.** The browser follows import statements recursively, fetching each file as it's referenced. Only the entry point needs a `<script>` tag.

---

## Q8

What is wrong with this import?

```js
import { Hand } from 'Hand.js';
```

- [ ] `Hand` should be in lowercase
- [x] The path must start with `./` — `'Hand.js'` is treated as a package name, not a relative path
- [ ] `.js` extension is not required
- [ ] Named imports must use `* as`

> **Correct.** In browsers, module paths must be relative (`./Hand.js`) or absolute (`/src/Hand.js`). A bare name like `'Hand.js'` works in Node.js but not in browsers.

---

## Q9

Which principle best describes why each class should be in its own file?

- [ ] File size limits in browsers
- [x] Single responsibility — each file has one clear purpose, making it easier to find and modify code
- [ ] JavaScript runs faster when code is split across files
- [ ] ES6 modules require one class per file

> **Correct.** Single responsibility is a design principle. One class per file makes the codebase easier to navigate and understand.

---

## Q10

After refactoring to modules, you open `index.html` in the browser and see no errors, but the game doesn't start. What should you check first?

- [ ] Whether `style.css` has any syntax errors
- [x] Whether `main.js` actually creates the game instance and calls the start function
- [ ] Whether `type="module"` is spelled correctly
- [ ] Whether all files are exported

> **Correct.** Modules are isolated — code doesn't execute globally unless `main.js` explicitly starts it. Check that `main.js` creates the game object and attaches event listeners.

---

## Q11

```js
// src/utils/helpers.js
export function delay(ms) { ... }
export function formatChips(n) { ... }
```

How do you import both functions in `main.js`?

- [x] `import { delay, formatChips } from './utils/helpers.js';`
- [ ] `import delay, formatChips from './utils/helpers.js';`
- [ ] `import { delay } and { formatChips } from './utils/helpers.js';`
- [ ] `import * from './utils/helpers.js';`

> **Correct.** Multiple named exports from the same file are imported with a single `import { a, b }` statement.

---

## Q12

`export default` and named `export` differ in how you import them. Which statement is true?

- [ ] Default exports must use `{ }` when imported; named exports don't
- [ ] You can have multiple default exports per file
- [x] Named exports use `{ }` when imported; default exports don't
- [ ] Default exports can only be functions, not classes

> **Correct.** Named: `import { Card } from '...'`. Default: `import Card from '...'` (no braces, any name). Each file can have at most one default export.

---

:::end
