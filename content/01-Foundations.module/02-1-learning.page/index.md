---
name: "Session 2: Functions and Reusable Code"
published: true
related_outcomes:
  - "CLO-1"
---

# Session 2: Functions and Reusable Code

## Learning Outcomes

By the end of this session, you will be able to:
- Write functions that accept parameters and return values.
- Understand why functions reduce code repetition.
- Call functions with different inputs and use their outputs.
- Apply functions to solve real-world problems.

---

## Introduction (5 minutes)

Imagine you have code that calculates a student's grade from a score. Right now, you'd copy and paste that same code over and over for each student. Functions let you write that code once and reuse it anywhere. Today you'll learn how to build and use functions to make your code cleaner and more powerful.

---

## Reading: Functions Basics (35 minutes)

### What Is a Function?

A function is a reusable block of code that does a specific job. You write it once, then call it as many times as you need.

**Real-world analogy:** A recipe is a function. You write it down once, then follow those instructions whenever you want to make the dish.

### Simple Function (No Parameters, No Return)

```js
function greetStudent() {
  console.log("Welcome to class!");
}

// Call the function:
greetStudent();
greetStudent();  // Can call it multiple times
```

Output:
```
Welcome to class!
Welcome to class!
```

### Function with Parameters

Parameters are inputs. They let you pass information into a function.

```js
function greetByName(name) {
  console.log("Hello, " + name + "!");
}

greetByName("Alex");     // Hello, Alex!
greetByName("Jordan");   // Hello, Jordan!
greetByName("Casey");    // Hello, Casey!
```

### Function with Return Value

A return value is the output. The function sends back a result for you to use.

```js
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = addNumbers(5, 3);
console.log(result);  // 8
console.log(addNumbers(10, 20));  // 30
```

### Example: Checking if Someone Passed

Remember Challenge 1 from Session 1? Let's turn it into a function:

```js
function didStudentPass(score, passingScore) {
  if (score >= passingScore) {
    return true;
  } else {
    return false;
  }
}

// Use it with different students:
let alex_passed = didStudentPass(85, 70);    // true
let jordan_passed = didStudentPass(65, 70);  // false
let casey_passed = didStudentPass(92, 70);   // true

console.log("Alex passed:", alex_passed);
console.log("Jordan passed:", jordan_passed);
console.log("Casey passed:", casey_passed);
```

### Why Use Functions?

1. **DRY Principle** – Don't Repeat Yourself. Write once, use many times.
2. **Easier to fix** – If you find a bug, fix it in one place, not everywhere.
3. **Clear code** – Functions with good names make your code easier to understand.
4. **Reusable** – Use the same function in multiple programs.

---

## Video Tutorial: Writing and Using Functions (20 minutes)

Watch: `assets/videos/02-functions.mp4`

This video covers:
- How to declare a function.
- How to use parameters.
- How to return values.
- Real examples with different inputs.
- Common mistakes and how to avoid them.

Pause and type out each example yourself.

---

## Supplemental Practice: Real-World Scenarios (25 minutes)

### Scenario 1: Calculate Average Score

```js
function calculateAverage(score1, score2, score3) {
  let total = score1 + score2 + score3;
  let average = total / 3;
  return average;
}

let studentAverage = calculateAverage(85, 92, 78);
console.log("Average:", studentAverage);  // 85
```

Try with different scores.

### Scenario 2: Calculate Discount Price

```js
function applyDiscount(originalPrice, discountPercent) {
  let discountAmount = originalPrice * (discountPercent / 100);
  let finalPrice = originalPrice - discountAmount;
  return finalPrice;
}

console.log(applyDiscount(50, 10));   // 45 (10% off $50)
console.log(applyDiscount(100, 20));  // 80 (20% off $100)
```

### Scenario 3: Convert Hours to Minutes

```js
function hoursToMinutes(hours) {
  return hours * 60;
}

console.log(hoursToMinutes(1));   // 60
console.log(hoursToMinutes(2.5)); // 150
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 2 Practice Quiz** in Canvas.

Focus on:
- When to use parameters
- Understanding return values
- Reading function code and predicting output
- Why functions are useful

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 2: Building Functions for Everyday Tasks"**.

You will:
- Write functions with parameters and return values.
- Practice calling functions with different inputs.
- Solve problems by combining functions.

The assignment includes three difficulty levels with stretch and advanced challenges.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Functions are reusable code blocks** that accept inputs (parameters) and produce outputs (return values).
- **Parameters** let you pass different data into a function.
- **Return values** let functions send results back to you.
- **Functions make code cleaner and easier to maintain.**

### How This Connects to Your Learning

In the next session, you'll learn about **arrays**, which are lists of data. Functions and arrays work together powerfully—you'll often write functions that process arrays of information.

### Questions?

If you're confused about any part:
- Re-read the examples and try changing them.
- Ask your instructor for help.
- Don't move on until this feels solid—functions are fundamental.

Next session: **Arrays and Collections**
