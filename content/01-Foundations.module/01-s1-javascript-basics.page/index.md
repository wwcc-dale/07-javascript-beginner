---
module: 1
name: 'Session 1: JavaScript Fundamentals'
position: 1
published: true
related_outcomes:
- CLO-1
session: 1.1
---

# Session 1: JavaScript Fundamentals

## Learning Outcomes

By the end of this session, you will be able to:
- Use variables to store simple information (like scores and prices).
- Write conditional statements to compare values.
- Explain the difference between `let` and `const`.
- Use `console.log` to display program output.

---

## Introduction (5 minutes)

In this course you will learn JavaScript by building small programs step by step.  
Today you will start with the most basic building blocks: variables and decisions. These skills will power everything else you do later, including building full games and web apps.

---

## Reading: Variables and Conditionals (30 minutes)

### What Are Variables?

Variables are like labeled boxes that hold information.

Examples:
- A box for a quiz score.
- A box for a username.
- A box for whether homework is finished.

```js
let quizScore = 0;           // A number that can change
const studentName = "Alex";  // Text that stays the same
let isLoggedIn = false;      // True or false value
```

Use:
- `let` when the value might change.
- `const` when the value should not change.

### Data Types

We will use three main types:

1. **Numbers** – for scores, counts, prices.
   ```js
   let score = 85;
   let price = 12.99;
   ```

2. **Strings** – for text.
   ```js
   let courseName = "Intro to JavaScript";
   let statusMessage = "Great job!";
   ```

3. **Booleans** – for true/false.
   ```js
   let passedQuiz = true;
   let needsHelp = false;
   ```

### Conditionals: Making Decisions

Programs often need to choose what to do.

```js
let temperature = 28;

if (temperature >= 30) {
  console.log("Stay hydrated — it's very hot outside!");
} else {
  console.log("Nice weather today, enjoy your day.");
}
```

Common comparison operators:
- `===` equal to
- `!==` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

### Everyday Example: Discount Check

```js
const total = 45;
const discountLimit = 50;

if (total >= discountLimit) {
  console.log("You get a discount!");
} else {
  console.log("Add more items to unlock a discount.");
}
```

---

## Video Tutorial: JavaScript Basics (20 minutes)

Watch: `assets/videos/01-javascript-basics.mp4`

This video shows:
- How to run simple JavaScript.
- How to create variables with `let` and `const`.
- How to write `if / else` statements.
- How to use `console.log` to see what your code is doing.

Pause the video and copy each example into your own file. Change the values and see how the output changes.

---

## Supplemental Practice: Simple Scenarios (25 minutes)

### Scenario 1: Speed Check

```js
const speedLimit = 65;
let vehicleSpeed = 80;

if (vehicleSpeed > speedLimit) {
  console.log("Slow down — you are over the speed limit.");
} else {
  console.log("Speed looks good.");
}
```

Try changing `vehicleSpeed` to 50. What happens?

### Scenario 2: Membership Check

```js
const minAge = 18;
let visitorAge = 15;

if (visitorAge >= minAge) {
  console.log("Access granted. Welcome!");
} else {
  console.log("Sorry, you must be 18 or older.");
}
```

Practice: change `visitorAge` to 21. Predict the message before you run it.

### Scenario 3: Battery Alert

```js
let batteryLow = true;

if (batteryLow === true) {
  console.log("Plug in your device — battery is low.");
} else {
  console.log("Battery level is fine.");
}
```

Shorter version:

```js
if (batteryLow) {
  console.log("Plug in soon.");
} else {
  console.log("Battery is fine.");
}
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 1 Practice Quiz** in Canvas.

- Ungraded.
- Unlimited attempts.
- Use it to see which ideas you should review.
- Aim for at least 80% before moving on.

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 1: Comparing Scores and Totals"**.  
You will:

- Create variables for scores and totals.
- Write `if / else` statements to make decisions.
- Practice reading and writing simple JavaScript.

The assignment includes:
- Level 1: Core tasks everyone should complete.
- Level 2: Stretch tasks for extra challenge.
- Level 3: Advanced challenge if you finish early.

---

## Wrap-Up (10 minutes)

Today you learned how to:

- Store information with variables.
- Represent numbers, text, and true/false values.
- Make your code choose different paths with `if / else`.

These skills are the foundation for everything else in this course.  
Later, you will use the same ideas to build more complex programs and, eventually, an interactive game.

If any part of today's work felt confusing:
- Re-read the examples.
- Try changing values and see what happens.
- Ask your instructor for help. They are here to support you.

Next session, you will learn **functions**, which let you bundle code into reusable tools you can call whenever you need them.

---

- accordion: Helpful Resources
- [let — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - Declares a block-scoped variable that can be reassigned
- [const — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - Declares a block-scoped constant that cannot be reassigned
- [if...else — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  - Full reference for conditional statements, including if/else if/else chains
- [Comparison operators — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
  - Covers `===`, `!==`, `<`, `>`, `<=`, `>=` and how they work
- [JavaScript data types and data structures — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  - Overview of all primitive types: number, string, boolean, null, undefined