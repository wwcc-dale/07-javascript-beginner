---
module: 1
name: 'Session 4: Loops and Iteration'
position: 10
published: true
related_outcomes:
- CLO-1
session: 4.1
---

# Session 4: Loops and Iteration

## Learning Outcomes

By the end of this session, you will be able to:
- Write `for` loops to repeat code a specific number of times.
- Use `while` loops when the number of repetitions isn't known in advance.
- Use `for...of` to cleanly iterate over every element in an array.
- Choose the right loop type for a given situation.
- Use loops to process collections of data.

---

## Introduction (5 minutes)

Imagine you need to print a greeting for 100 students. Copy-pasting the code 100 times would be ridiculous! Loops let you repeat code automatically. Today you'll learn to write loops and use them to process lists of data.

---

## Reading: Loops Basics (35 minutes)

### What Is a Loop?

A loop repeats a block of code multiple times automatically. This saves you from copy-pasting the same code over and over.

**Real-world analogy:** A recipe loop might be "repeat steps 1-3 for each apple in the bag."

### For Loop Syntax

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello!");
}
```

This prints "Hello!" 5 times.

**Breaking it down:**
- `let i = 0` – Start with i = 0
- `i < 5` – Keep looping while i is less than 5
- `i++` – Add 1 to i each loop
- `{...}` – The code that repeats

### Looping Through an Array

```js
const scores = [85, 92, 78, 88];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```

Output:
```
85
92
78
88
```

### Real-World Example: Process Grades

```js
const grades = [92, 85, 78, 90, 88];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 80) {
    console.log("Grade", grades[i], "is passing");
  } else {
    console.log("Grade", grades[i], "is failing");
  }
}
```

Output:
```
Grade 92 is passing
Grade 85 is passing
Grade 78 is failing
Grade 90 is passing
Grade 88 is passing
```

### Loop Variable (i)

The variable `i` (short for "index") tracks which iteration you're on. It starts at 0 and increases by 1 each loop.

```js
for (let i = 0; i < 3; i++) {
  console.log("Iteration", i);  // i changes each loop
}
```

Output:
```
Iteration 0
Iteration 1
Iteration 2
```

### Why Use Loops?

1. **DRY Principle** – Don't repeat code
2. **Scalability** – Works with any size list
3. **Readability** – Clear what's being repeated
4. **Less error-prone** – Write once instead of many times

### The `while` Loop

Use a `while` loop when **you don't know in advance how many times to repeat**. The loop runs as long as a condition stays true.

```js
while (condition) {
  // code to repeat
}
```

**Example: keep asking for a valid age**

```js
let age = -1;

while (age < 0 || age > 120) {
  age = Number(prompt("Enter your age:"));
}

console.log("Valid age:", age);
```

The loop runs again and again until the user enters a sensible number. A `for` loop can't do this cleanly because you don't know how many bad entries the user will make.

**Example: count down**

```js
let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

console.log("Blast off!");
```

Output:
```
5
4
3
2
1
Blast off!
```

> **Warning — infinite loops:** If the condition never becomes false, the loop never stops. Always make sure something inside the loop changes the condition. `count--` above is what saves us.

### The `for...of` Loop

`for...of` is the modern, clean way to visit every element in an array. You don't need an index variable or `.length` — JavaScript handles it.

```js
for (const element of array) {
  // use element
}
```

**Example: print each name**

```js
const names = ["Alex", "Jordan", "Casey"];

for (const name of names) {
  console.log("Hello,", name);
}
```

Output:
```
Hello, Alex
Hello, Jordan
Hello, Casey
```

**Example: sum prices**

```js
const prices = [10, 20, 15, 25];
let total = 0;

for (const price of prices) {
  total += price;
}

console.log("Total:", total);  // 70
```

Compare the two array-loop styles side by side:

```js
const scores = [85, 92, 78];

// Classic for loop (use when you need the index)
for (let i = 0; i < scores.length; i++) {
  console.log("Index", i, ":", scores[i]);
}

// for...of (use when you only need the value)
for (const score of scores) {
  console.log("Score:", score);
}
```

**Rule of thumb:** reach for `for...of` by default when looping over an array. Use a classic `for` loop only when you need the index `i`.

### Which Loop to Use?

| Situation | Loop to Use |
|-----------|-------------|
| Known number of repetitions | `for` |
| Need the index while iterating | `for` |
| Just need each value in an array | `for...of` |
| Repeat until a condition changes | `while` |

---

## Video Tutorial: Loops (20 minutes)

Watch: `assets/videos/04-loops.mp4`

This video covers:
- For loop syntax and structure
- `while` loops for unknown repetition counts
- `for...of` for clean array iteration
- Combining loops with conditionals
- Common mistakes and debugging

Pause and type along with examples.

---

## Supplemental Practice: Real Loops (25 minutes)

### Scenario 1: Print Even Numbers 2–20

```js
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

Try changing the increment to 3 to print every third number instead.

### Scenario 2: Sum All Prices in a List

```js
const prices = [10, 20, 15, 25];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

console.log("Total:", total);  // 70
```

### Scenario 3: Count Warm Days

```js
const temperatures = [28, 35, 22, 41, 19, 38];
let warmDays = 0;

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 32) {
    warmDays++;
  }
}

console.log("Warm days:", warmDays);  // 3
```

### Scenario 3b: Build a New Array Inside a Loop

Sometimes you want to produce a *new* array of transformed values rather than just reading an old one. The pattern is: create an empty array before the loop, then `.push()` into it each iteration.

```js
const prices = [10, 20, 30, 40];
const discounted = [];   // start with an empty array

for (let i = 0; i < prices.length; i++) {
  discounted.push(prices[i] * 0.9);  // 10% off each price
}

console.log(discounted);  // [9, 18, 27, 36]
console.log(prices);      // [10, 20, 30, 40] — original unchanged
```

The same pattern works with `for...of`:

```js
const names = ["alex", "jordan", "casey"];
const upper = [];

for (const name of names) {
  upper.push(name.toUpperCase());
}

console.log(upper);  // ["ALEX", "JORDAN", "CASEY"]
```

This "collect into a new array" pattern shows up constantly. Memorize it.

### Scenario 4: `for...of` — Print Each Product

```js
const products = ["Keyboard", "Mouse", "Monitor"];

for (const product of products) {
  console.log("In stock:", product);
}
```

Try rewriting Scenarios 2 and 3 using `for...of` instead of a classic `for` loop. For example, Scenario 3 with `for...of`:

```js
const temperatures = [28, 35, 22, 41, 19, 38];
let warmDays = 0;

for (const temp of temperatures) {
  if (temp > 32) {
    warmDays++;
  }
}

console.log("Warm days:", warmDays);  // 3
```

### Scenario 5: `while` — Keep Rolling Until Six

```js
let roll = 0;
let attempts = 0;

while (roll !== 6) {
  roll = Math.floor(Math.random() * 6) + 1;
  attempts++;
  console.log("Rolled:", roll);
}

console.log("Got a 6 after", attempts, "rolls!");
```

(Don't worry about `Math.floor` and `Math.random` yet — Session 7 covers them fully.)

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 4 Practice Quiz** in Canvas.

Focus on:
- `for` loop syntax and when to use it
- `while` loops for condition-based repetition
- `for...of` for iterating array values
- Choosing the right loop type for a situation
- Understanding loop conditions and avoiding infinite loops

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 4: Processing Data with Loops"**.

You will:
- Write `for`, `while`, and `for...of` loops
- Choose the right loop for each scenario
- Process arrays with loops
- Combine loops with conditionals
- Solve problems using iteration

The assignment includes three difficulty levels.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`for` loops** repeat a fixed number of times or iterate by index.
- **`while` loops** repeat until a condition becomes false — use when repetition count is unknown.
- **`for...of`** cleanly visits every element in an array without needing an index.
- **Choose your loop:** `for`/`for...of` for collections, `while` for condition-driven repetition.
- **Loops prevent repetition** and make code more scalable.

### How This Connects to Your Learning

Next session (Session 5), you'll learn **algorithms**—sophisticated ways to solve problems by combining loops, conditionals, and functions. Loops are the foundation!

### Questions?

- Experiment with loop conditions to see how they change behavior.
- Try writing loops for different arrays.
- Ask your instructor if something is unclear.

Next session: **Algorithmic Thinking**

---

- accordion: Helpful Resources
- [Loops and iteration — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - Overview of all loop types with examples for each
- [for — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  - Syntax and details of the classic for loop
- [while — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  - How while loops work and when to use them
- [for...of — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  - The modern syntax for iterating over array values directly
- [break and continue — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
  - How to exit a loop early or skip an iteration