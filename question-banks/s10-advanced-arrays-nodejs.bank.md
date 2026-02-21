---
bank_name: "Session 10: Advanced Arrays and Node.js"
---

1. What does `.filter()` return?
*a) A new array containing only elements where the callback returns true
b) The first element that matches
c) The index of the first match
d) It modifies the original array

1. What does this produce?
```js
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);
```
*a) [2, 4]
b) [1, 3, 5]
c) [1, 2, 3, 4, 5]
d) 2

1. What does `.map()` return?
a) The first element matching a condition
*b) A new array where each element is the result of the callback
c) A boolean
d) It modifies the original array

1. What does this produce?
```js
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.1);
console.log(withTax[0]);
```
*a) 11
b) 10
c) 1.1
d) [11, 22, 33]

1. What is the difference between `.find()` and `.filter()`?
*a) .find() returns the first matching element; .filter() returns all matches
b) .filter() is faster
c) .find() returns an index; .filter() returns elements
d) They are identical

1. What does `.findIndex()` return when no match is found?
a) null
b) undefined
*c) -1
d) 0

1. What does this produce?
```js
const users = [{id: 1, name: "Alex"}, {id: 2, name: "Jordan"}];
const user = users.find(u => u.id === 2);
console.log(user.name);
```
*a) "Jordan"
b) "Alex"
c) undefined
d) 2

1. What is wrong with sorting numbers without a comparator?
```js
[10, 9, 2, 100].sort()
```
*a) Sorts as strings: [10, 100, 2, 9] — wrong numeric order
b) Sorts correctly
c) Throws an error
d) Returns the original array

1. Which comparator sorts numbers in ascending order?
*a) `(a, b) => a - b`
b) `(a, b) => b - a`
c) `(a, b) => a + b`
d) `(a, b) => 1`

1. What does `[...arr]` create?
*a) A shallow copy of the array
b) A reference to the same array
c) A deep clone
d) An empty array

1. Why spread before sorting?
```js
const sorted = [...original].sort((a, b) => a - b);
```
*a) .sort() mutates in place; spread preserves the original
b) It makes sorting faster
c) .sort() requires an array copy to work
d) No real reason

1. What does this chain produce?
```js
const students = [
  {name: "Alex", grade: 85},
  {name: "Jordan", grade: 55},
  {name: "Casey", grade: 92}
];
const result = students
  .filter(s => s.grade >= 70)
  .map(s => s.name);
console.log(result);
```
*a) ["Alex", "Casey"]
b) ["Alex", "Jordan", "Casey"]
c) [85, 92]
d) ["Jordan"]

1. What does the spread operator do when applied to objects?
```js
const base = {name: "Alex", score: 85};
const updated = {...base, score: 92};
```
*a) Creates a new object with all base properties, overriding score with 92
b) Modifies base directly
c) Concatenates objects
d) Throws an error

1. What does `.slice(0, 3)` return?
*a) A new array of the first 3 elements
b) Removes the first 3 elements
c) Returns element at index 3
d) Returns the last 3 elements

1. What is method chaining?
a) Calling the same method multiple times
*b) Calling methods in sequence where each returns an array for the next to act on
c) Using a loop inside a method
d) A special syntax for arrays only

1. What does this return?
```js
const items = ["b", "a", "c"];
const sorted = [...items].sort();
console.log(items[0]);
```
*a) "b" (original unchanged)
b) "a" (sorted array used)
c) "c"
d) undefined

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
