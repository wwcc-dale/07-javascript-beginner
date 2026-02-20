---
bank_name: "Session 10: Node.js, npm, and Module Systems"
---

1. What is Node.js?
*a) A JavaScript runtime for running JS outside the browser
b) A web browser
c) A programming language
d) A CSS framework

1. What is npm?
a) A programming language
*b) Node Package Manager for installing packages
c) A text editor
d) A browser

1. How do you run a JavaScript file with Node.js?
a) Open it in a browser
*b) Use command: node filename.js
c) Double-click the file
d) Use npm run

1. What does `package.json` contain?
a) JavaScript code
*b) Project metadata and dependencies
c) HTML structure
d) CSS styles

1. Which command initializes a new Node.js project?
a) node new
*b) npm init
c) npm start
d) node create

1. How do you install a package with npm?
a) node install packagename
*b) npm install packagename
c) npm get packagename
d) node add packagename

1. How do you export a function named `add` using ES6 module syntax?
a) `module.exports = { add };`
*b) `export function add(a, b) { return a + b; }`
c) `exports.add = add;`
d) `send add;`

1. How do you import the `add` function from `./math.js` using ES6 syntax?
*a) `import { add } from './math.js';`
b) `const { add } = require('./math.js');`
c) `include add from './math.js';`
d) `import add('./math.js');`

1. How do you enable ES6 modules in Node.js?
a) It's automatic
*b) Add "type": "module" to package.json
c) Use a special command
d) Install a package

1. Which is ES6 import syntax?
a) const x = require('./file');
*b) import { x } from './file.js';
c) include './file.js';
d) load './file.js';

1. What's the difference between Node.js and browser JavaScript?
*a) Node.js runs on server/computer, browser JS runs in browser
b) They are the same
c) Node.js is faster
d) Browser JS is newer

1. Where are npm packages stored after installation?
a) package.json
*b) node_modules/ directory
c) npm/ folder
d) In the browser

1. What can Node.js access that browser JavaScript cannot?
a) Variables
*b) File system and operating system
c) Functions
d) Arrays

1. Which is a built-in Node.js module?
a) react
*b) fs (file system)
c) jquery
d) bootstrap

1. What does this do?
```js
import chalk from 'chalk';
console.log(chalk.blue('Hello'));
```
*a) Prints "Hello" in blue color in terminal
b) Creates a blue box
c) Changes background color
d) Causes an error

1. Why use modules?
*a) Organize code into reusable files
b) Make code slower
c) Modules are required
d) To avoid functions

1. What does `fs.writeFileSync('log.txt', 'hello')` do?
*a) Creates (or overwrites) log.txt with the text "hello"
b) Reads log.txt
c) Deletes log.txt
d) Appends to log.txt

1. What second argument is required to get a string back from `fs.readFileSync`?
a) 'binary'
b) 'raw'
*c) 'utf8'
d) No second argument is needed

1. In `process.argv`, where do user-provided arguments start?
a) Index 0
b) Index 1
*c) Index 2
d) Index 3

1. What does this print when run with `node calc.js multiply 4 5`?
```js
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
console.log(a * b);
```
*a) 20
b) "4 5"
c) NaN
d) Error

1. Why must you wrap `process.argv` values with `Number()` before doing arithmetic?
*a) process.argv values are always strings
b) They are already numbers
c) Number() is optional
d) process.argv doesn't exist in Node.js

1. What path prefix is required when importing your own local files?
a) No prefix
b) `~/`
*c) `./`
d) `node:`
