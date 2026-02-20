---
name: "Session 10: Advanced Array Methods and Node.js Modules"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-3"
  - "CLO-4"
  - "CLO-5"
---

# Session 10: Advanced Array Methods and Node.js Modules

## Learning Outcomes

By the end of this session, you will be able to:
- Use `.filter()` to keep only elements matching a condition.
- Use `.map()` to transform every element into a new value.
- Use `.find()` and `.findIndex()` to locate specific elements.
- Sort arrays with `.sort()` using a comparator function.
- Copy arrays non-destructively with the spread operator `[...arr]`.
- Chain multiple array methods together.
- Transform complex data structures using combinations of these methods.
- Set up a Node.js project with npm.
- Export and import code using ES6 module syntax.
- Read and write files with Node.js's `fs` module.
- Read command-line arguments with `process.argv`.
- Install and use a third-party npm package.

---

## Introduction (5 minutes)

This session has two parts. The first half covers powerful array methods — `.filter()`, `.map()`, `.find()`, `.sort()` — that make data processing expressive and concise (quiz topic). The second half introduces Node.js and modules: how to split JavaScript across files, share code between them, and run programs from the command line with access to the file system (assignment topic).

---

## Reading: Higher-Order Array Methods (40 minutes)

### What Makes These Methods "Higher-Order"?

Each method accepts a **callback function** — a function you write that the method calls once per element. The method provides the element; your function decides what to do with it.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});
```

In practice, callbacks are almost always written as **arrow functions** — a shorter syntax:

```js
// Regular function
function double(x) { return x * 2; }

// Arrow function equivalent
const double = (x) => x * 2;

// Single parameter — parentheses optional
const double = x => x * 2;

// With a body (curly braces) when you need multiple lines
const double = x => {
  const result = x * 2;
  return result;
};
```

You'll see arrow functions constantly in the examples below.

---

### `.filter()` — Keep Matching Elements

`.filter()` returns a **new array** containing only elements where your callback returns `true`.

```
original array → [callback tests each] → new array with matches only
```

```js
const prices = [5, 12, 3, 29, 8, 45];

const affordable = prices.filter(price => price < 10);
console.log(affordable);  // [5, 3, 8]
```

The original array is **not changed**. `.filter()` always produces a new array.

**Example: filter an array of objects**

```js
const students = [
  { name: "Alex", grade: 85 },
  { name: "Jordan", grade: 62 },
  { name: "Casey", grade: 91 },
  { name: "Morgan", grade: 55 }
];

const passing = students.filter(student => student.grade >= 70);
console.log(passing);
// [{ name: "Alex", grade: 85 }, { name: "Casey", grade: 91 }]
```

**Example: remove an item by value**

```js
const tasks = ["email", "report", "meeting", "email"];

const withoutEmail = tasks.filter(task => task !== "email");
console.log(withoutEmail);  // ["report", "meeting"]
```

---

### `.map()` — Transform Every Element

`.map()` returns a **new array** where every element has been transformed by your callback.

```
original array → [callback transforms each] → new array of results
```

```js
const prices = [10, 20, 30];

const withTax = prices.map(price => price * 1.08);
console.log(withTax);  // [10.8, 21.6, 32.4]
```

The original array is **not changed**.

**Example: extract a property from each object**

```js
const students = [
  { name: "Alex", grade: 85 },
  { name: "Jordan", grade: 92 },
  { name: "Casey", grade: 78 }
];

const names = students.map(student => student.name);
console.log(names);  // ["Alex", "Jordan", "Casey"]

const grades = students.map(student => student.grade);
console.log(grades);  // [85, 92, 78]
```

**Example: add a computed property to each object**

```js
const products = [
  { name: "Keyboard", price: 79 },
  { name: "Mouse", price: 29 },
  { name: "Monitor", price: 299 }
];

const withSale = products.map(product => ({
  name: product.name,
  price: product.price,
  salePrice: Math.round(product.price * 0.9)
}));

console.log(withSale[0]);  // { name: "Keyboard", price: 79, salePrice: 71 }
```

---

### `.find()` and `.findIndex()` — Locate Elements

`.find()` returns the **first element** where the callback returns `true`. Returns `undefined` if nothing matches.

```js
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Jordan" },
  { id: 3, name: "Casey" }
];

const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Jordan" }

const missing = users.find(u => u.id === 99);
console.log(missing);  // undefined
```

`.findIndex()` returns the **index** of the first match, or `-1` if not found. Useful when you need to remove or replace an item:

```js
const tasks = ["email", "report", "meeting"];

const idx = tasks.findIndex(task => task === "report");
console.log(idx);  // 1

// Remove that item using splice
if (idx !== -1) {
  tasks.splice(idx, 1);
}
console.log(tasks);  // ["email", "meeting"]
```

---

### `.sort()` — Sort Arrays

`.sort()` sorts an array **in place** (modifies the original) and also returns it.

**Default sort — alphabetical (dangerous for numbers):**

```js
const letters = ["banana", "apple", "cherry"];
letters.sort();
console.log(letters);  // ["apple", "banana", "cherry"]

const nums = [10, 9, 2, 100];
nums.sort();            // BAD — sorts as strings!
console.log(nums);      // [10, 100, 2, 9]  ← wrong!
```

**Numeric sort — use a comparator function:**

The comparator receives two elements (`a` and `b`). Return:
- **negative** → `a` comes first
- **positive** → `b` comes first
- **zero** → order doesn't matter

```js
const scores = [10, 9, 2, 100, 45];

// Ascending (low to high)
scores.sort((a, b) => a - b);
console.log(scores);  // [2, 9, 10, 45, 100]

// Descending (high to low)
scores.sort((a, b) => b - a);
console.log(scores);  // [100, 45, 10, 9, 2]
```

**Sort objects by a property:**

```js
const students = [
  { name: "Casey", grade: 78 },
  { name: "Alex", grade: 92 },
  { name: "Jordan", grade: 85 }
];

// Sort by grade descending
students.sort((a, b) => b.grade - a.grade);
console.log(students[0].name);  // "Alex" (highest grade)
```

**Sort by string property:**

```js
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students.map(s => s.name));  // ["Alex", "Casey", "Jordan"]
```

---

### Spread Operator — Copy Arrays

The spread operator (`...`) expands an array's elements. Use it to make a **shallow copy** of an array before sorting or modifying, so the original stays intact:

```js
const original = [3, 1, 4, 1, 5];
const sorted = [...original].sort((a, b) => a - b);

console.log(original);  // [3, 1, 4, 1, 5]  — unchanged
console.log(sorted);    // [1, 1, 3, 4, 5]
```

**Combine two arrays:**

```js
const front = [1, 2, 3];
const back = [4, 5, 6];
const combined = [...front, ...back];
console.log(combined);  // [1, 2, 3, 4, 5, 6]
```

**Add an element without mutating:**

```js
const items = ["a", "b", "c"];
const withD = [...items, "d"];
console.log(items);   // ["a", "b", "c"]  — unchanged
console.log(withD);   // ["a", "b", "c", "d"]
```

**Spread with objects (`Object.assign` alternative):**

```js
const base = { name: "Alex", grade: 85 };
const updated = { ...base, grade: 92 };  // override grade
console.log(updated);  // { name: "Alex", grade: 92 }
console.log(base);     // { name: "Alex", grade: 85 }  — unchanged
```

---

### Method Chaining

Because `.filter()` and `.map()` return new arrays, you can chain them together:

```js
const students = [
  { name: "Alex", grade: 85 },
  { name: "Jordan", grade: 62 },
  { name: "Casey", grade: 91 },
  { name: "Morgan", grade: 55 }
];

// Get names of passing students, sorted alphabetically
const result = students
  .filter(s => s.grade >= 70)      // keep passing students
  .sort((a, b) => a.name.localeCompare(b.name))  // sort by name
  .map(s => s.name);               // extract just the name

console.log(result);  // ["Alex", "Casey"]
```

Read chained methods top-to-bottom like a pipeline: filter → sort → map.

**Example: top 3 products by price**

```js
const products = [
  { name: "Keyboard", price: 79 },
  { name: "Mouse", price: 29 },
  { name: "Monitor", price: 299 },
  { name: "Webcam", price: 89 },
  { name: "Headset", price: 149 }
];

const top3 = [...products]
  .sort((a, b) => b.price - a.price)   // most expensive first
  .slice(0, 3)                          // take first 3
  .map(p => p.name);                   // extract names

console.log(top3);  // ["Monitor", "Headset", "Webcam"]
```

---

### Nested Array and Object Access

When arrays contain objects (or objects contain arrays), you chain the accesses:

```js
const library = {
  name: "City Library",
  books: [
    { title: "Dune", genre: "sci-fi", available: true },
    { title: "1984", genre: "dystopia", available: false },
    { title: "Foundation", genre: "sci-fi", available: true }
  ]
};

// Available sci-fi books
const availableSciFi = library.books
  .filter(book => book.genre === "sci-fi" && book.available)
  .map(book => book.title);

console.log(availableSciFi);  // ["Dune", "Foundation"]
```

---

## Video Tutorial: Advanced Array Methods (20 minutes)

Watch: `assets/videos/10-advanced-arrays.mp4`

This video covers:
- Arrow function syntax as callbacks
- `.filter()`, `.map()`, `.find()`, `.findIndex()`
- `.sort()` with comparator functions
- Spread operator for copying
- Chaining methods together

Pause and type each example.

---

## Supplemental Practice (25 minutes)

### Practice 1: Filter and Map

```js
const inventory = [
  { item: "Pen", qty: 5, price: 1.50 },
  { item: "Notebook", qty: 0, price: 3.99 },
  { item: "Stapler", qty: 12, price: 8.99 },
  { item: "Tape", qty: 0, price: 2.49 }
];

// 1. Get only in-stock items (qty > 0)
const inStock = inventory.filter(i => i.qty > 0);
console.log(inStock.length);  // 2

// 2. Get the names of all items
const names = inventory.map(i => i.item);
console.log(names);  // ["Pen", "Notebook", "Stapler", "Tape"]

// 3. Get names of in-stock items only (chain it)
const inStockNames = inventory
  .filter(i => i.qty > 0)
  .map(i => i.item);
console.log(inStockNames);  // ["Pen", "Stapler"]
```

### Practice 2: Find and Sort

```js
const roster = [
  { id: 101, name: "Alex", score: 88 },
  { id: 102, name: "Jordan", score: 72 },
  { id: 103, name: "Casey", score: 95 }
];

// Find player 102
const player = roster.find(p => p.id === 102);
console.log(player.name);  // "Jordan"

// Sort by score descending
const ranked = [...roster].sort((a, b) => b.score - a.score);
console.log(ranked[0].name);  // "Casey"
```

### Practice 3: Spread

```js
const hand = ["Ace", "King", "3"];

// Add a card without mutating
const newHand = [...hand, "7"];
console.log(hand);     // ["Ace", "King", "3"]
console.log(newHand);  // ["Ace", "King", "3", "7"]

// Copy and sort without mutating
const sorted = [...hand].sort();
console.log(hand);    // ["Ace", "King", "3"]  — still original order
console.log(sorted);  // ["3", "Ace", "King"]
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 10 Practice Quiz** in Canvas.

Focus on:
- What `.filter()` returns and when to use it
- What `.map()` returns and when to use it
- Difference between `.find()` (element) and `.findIndex()` (position)
- `.sort()` with a comparator — ascending vs. descending
- Spread operator for copying arrays and objects
- Reading and writing method chains

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 10: Advanced Array Techniques"**.

You will:
- Use `.filter()`, `.map()`, `.find()`, `.findIndex()` to process data
- Sort arrays of objects by different properties
- Use spread to copy without mutating
- Chain methods to solve multi-step data problems

---

---

## Reading: Node.js and Modules (35 minutes)

### What Is Node.js?

So far you've run JavaScript in a browser. **Node.js** is a runtime that lets you run JavaScript on your computer — outside any browser. This unlocks:
- Reading and writing files
- Building command-line tools
- Running servers
- Using thousands of community packages (npm)

### Setting Up a Node.js Project

Every Node.js project starts with a **package.json** file that describes the project and its dependencies.

```bash
# Create a new folder and initialize a project
mkdir my-project
cd my-project
npm init -y        # creates package.json with default values
```

To use modern ES6 module syntax (`import`/`export`), add one line to `package.json`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module"
}
```

`"type": "module"` tells Node.js to treat `.js` files as ES6 modules.

To run a file:

```bash
node app.js
```

### ES6 Modules — Export and Import

Modules let you split your code across multiple files. One file **exports** things; another **imports** them.

**Exporting from a file (`math.js`):**

```js
// Named exports — export multiple things
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;
```

**Importing in another file (`app.js`):**

```js
// Named imports — must use the exact exported name
import { add, multiply, PI } from './math.js';

console.log(add(3, 4));       // 7
console.log(multiply(2, 5));  // 10
console.log(PI);              // 3.14159
```

**Exporting a class:**

```js
// Student.js
export class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  isPassing() {
    return this.grade >= 70;
  }
}
```

```js
// classroom.js
import { Student } from './Student.js';

const s1 = new Student("Alex", 85);
console.log(s1.isPassing());  // true
```

> **Important:** When importing from your own files, always include `./` at the start of the path and `.js` at the end. `'./math.js'` not `'math'`.

### Installing and Using npm Packages

npm (Node Package Manager) gives you access to hundreds of thousands of open-source packages. Install one with:

```bash
npm install chalk
```

This downloads the package into a `node_modules` folder and records it in `package.json`.

Use it in your code:

```js
// colored.js
import chalk from 'chalk';

console.log(chalk.green('Success!'));
console.log(chalk.red('Error!'));
console.log(chalk.blue('Info'));
```

Run it:

```bash
node colored.js
```

### The `fs` Module — Reading and Writing Files

Node.js has a built-in `fs` (file system) module. Import it like any other module:

```js
import fs from 'fs';
```

**Write to a file:**

```js
import fs from 'fs';

fs.writeFileSync('output.txt', 'Hello from Node.js!');
console.log('File written.');
```

`writeFileSync` creates the file if it doesn't exist, or overwrites it if it does.

**Read from a file:**

```js
import fs from 'fs';

const content = fs.readFileSync('output.txt', 'utf8');
console.log(content);  // "Hello from Node.js!"
```

The `'utf8'` argument tells Node to return the content as a string (rather than raw bytes).

**Full example:**

```js
import fs from 'fs';

// Write a list of students to a file
const students = ["Alex", "Jordan", "Casey"];
const text = students.join('\n');       // one name per line
fs.writeFileSync('students.txt', text);

// Read it back
const data = fs.readFileSync('students.txt', 'utf8');
const lines = data.split('\n');
console.log('Students:', lines);        // ["Alex", "Jordan", "Casey"]
```

### Command-Line Arguments with `process.argv`

`process.argv` is an array of strings that Node.js fills with the command-line arguments when you run a script.

```bash
node calculator.js add 5 3
```

Inside `calculator.js`:

```js
console.log(process.argv);
// [
//   '/path/to/node',   // [0] — the node executable
//   '/path/calculator.js', // [1] — the script path
//   'add',            // [2] — first user argument
//   '5',              // [3] — second user argument
//   '3'               // [4] — third user argument
// ]
```

Your arguments always start at index `2`. A complete example:

```js
// calculator.js
const operation = process.argv[2];   // "add"
const a = Number(process.argv[3]);   // 5
const b = Number(process.argv[4]);   // 3

if (operation === 'add') {
  console.log(a + b);          // 8
} else if (operation === 'subtract') {
  console.log(a - b);
} else if (operation === 'multiply') {
  console.log(a * b);
} else if (operation === 'divide') {
  console.log(a / b);
} else {
  console.log('Unknown operation. Use: add, subtract, multiply, divide');
}
```

Run:
```bash
node calculator.js add 5 3      # 8
node calculator.js multiply 4 7 # 28
```

Note: `process.argv` values are always **strings** — use `Number()` to convert them before doing arithmetic.

---

## Video Tutorial: Node.js and Modules (20 minutes)

Watch: `assets/videos/10-nodejs-modules.mp4`

This video covers:
- Setting up a Node.js project with `npm init`
- ES6 `export` and `import` syntax
- Installing and using an npm package
- Reading and writing files with `fs`
- Reading command-line arguments with `process.argv`

Pause and follow along in your own project folder.

---

## Supplemental Practice: Node.js

### Practice 1: Your First Module

Create `greeting.js`:
```js
export function greet(name) {
  return `Hello, ${name}!`;
}

export const defaultName = "World";
```

Create `main.js`:
```js
import { greet, defaultName } from './greeting.js';

console.log(greet("Alex"));         // "Hello, Alex!"
console.log(greet(defaultName));    // "Hello, World!"
```

Run: `node main.js`

### Practice 2: File Round-Trip

```js
import fs from 'fs';

const scores = [88, 92, 75, 61, 95];
fs.writeFileSync('scores.txt', scores.join(','));

const raw = fs.readFileSync('scores.txt', 'utf8');
const loaded = raw.split(',').map(Number);
console.log(loaded);  // [88, 92, 75, 61, 95]
```

### Practice 3: CLI Echo

```js
// echo.js
const message = process.argv.slice(2).join(' ');
console.log('You said:', message);
```

```bash
node echo.js hello world    # "You said: hello world"
```

---

## Wrap-Up (10 minutes)

### Key Takeaways

**Advanced Array Methods:**
- **`.filter(fn)`** — returns a new array of elements where `fn` returns `true`
- **`.map(fn)`** — returns a new array where each element is transformed by `fn`
- **`.find(fn)`** — returns the first matching element (or `undefined`)
- **`.findIndex(fn)`** — returns the index of the first match (or `-1`)
- **`.sort((a, b) => a - b)`** — sorts numerically ascending; `b - a` for descending
- **`[...arr]`** — spread makes a shallow copy; safe to sort/modify without affecting the original
- **Chaining** — because these methods return arrays, you can chain them like a pipeline

**Node.js and Modules:**
- **`npm init -y`** creates `package.json`; add `"type": "module"` for ES6 imports
- **`export function foo()`** makes `foo` available to other files
- **`import { foo } from './file.js'`** brings it in — always include `./` and `.js`
- **`npm install pkg`** downloads a package; import it like `import pkg from 'pkg'`
- **`fs.writeFileSync`** / **`fs.readFileSync`** write and read files
- **`process.argv`** gives you the command-line arguments starting at index 2

### How This Connects to Your Learning

The card game in Module 4 uses array methods constantly: `.filter()` to find playable cards, `.find()` to locate a card in a hand, `.sort()` to rank cards, `.map()` to display card data. The Node.js skills open the door to building real command-line tools and, eventually, servers.

### Questions?

- Try chaining three array methods on a dataset you create.
- Experiment with creating two `.js` files that share a class via `export`/`import`.
- Ask your instructor if anything is unclear.

Next: **Module 4 — Card Game Implementation**
