# Session 10 Hints — Building with Node.js and Modules

## Setup
- Add `"type": "module"` to `package.json` before writing any `import`/`export`.
  Without it, Node.js treats files as CommonJS and `import` will error.

## Challenge 1: Math Module
- Each function needs the `export` keyword: `export function add(a, b) { ... }`
- In `app.js`, import using curly braces and the exact function names:
  `import { add, subtract } from './math.js';`
- Include the `.js` extension in the import path — Node.js requires it in ES module mode.

## Challenge 2: Student Module
- `export class Student { ... }` in `Student.js`
- `import { Student } from './Student.js';` in `classroom.js`

## Challenge 3: chalk
- After `npm install chalk`, chalk v5+ is ESM-only, so `import` works fine.
  `import chalk from 'chalk';` then `console.log(chalk.red('Hello'));`

## Challenge 4: File System
- `import { readFileSync, writeFileSync } from 'fs';`
- `writeFileSync('output.txt', 'Hello from Node.js!');`
- `const contents = readFileSync('output.txt', 'utf8');`

## Challenge 5: utils.js (Level 2)
- `capitalize`: uppercase the first character, lowercase the rest.
- `isPalindrome`: strip non-alphanumeric characters and compare to its reverse.

## Challenge 7: CLI Calculator (Level 3)
- `process.argv` is an array. Index 0 is `node`, index 1 is the script path.
  Your inputs start at index 2: `const [,, op, a, b] = process.argv;`
- Convert strings to numbers: `parseFloat(a)`
- Use a `switch` statement on the operation string.
