---
name: "Session 1: JavaScript Fundamentals"
published: true
related_outcomes:
  - "CLO-1"
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
let homeworkDone = false;    // True or false value
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
let score = 85;

if (score >= 70) {
  console.log("You passed!");
} else {
  console.log("Keep practicing.");
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

### Scenario 1: Passing a Quiz

```js
const passingScore = 70;
let myScore = 92;

if (myScore >= passingScore) {
  console.log("You passed the quiz!");
} else {
  console.log("Try the quiz again.");
}
```

Try changing `myScore` to 60. What happens?

### Scenario 2: Free Shipping

```js
const freeShippingLimit = 35;
let cartTotal = 30;

if (cartTotal >= freeShippingLimit) {
  console.log("You get free shipping!");
} else {
  console.log("Shipping fees apply.");
}
```

Practice: change `cartTotal` to 40. Predict the message before you run it.

### Scenario 3: Check Homework Status

```js
let homeworkDone = false;

if (homeworkDone === true) {
  console.log("Nice work. You're ready for tomorrow.");
} else {
  console.log("You still need to finish your homework.");
}
```

Shorter version:

```js
if (homeworkDone) {
  console.log("Nice work.");
} else {
  console.log("Keep going.");
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
