---
name: "Session 1: Comparing Scores and Totals"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-1"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
  - "txt"
  - "zip"
---

# Session 1: Comparing Scores and Totals

## Overview

In this assignment you will practice using variables and `if / else` statements in simple, everyday scenarios.  
You will work with quiz scores, shopping totals, and other values, just like a real program would.

**Time Estimate:** 60–90 minutes  
**Points:** 20  
**Submit:** Your completed `01-assignment.js` file

---

## Getting Started

1. Open the starter file: `01-starter.js`.
2. Save a copy as `01-assignment.js`.
3. Follow the instructions for each challenge.
4. Run your file and check the console output.
5. If you finish Level 1 early, try Levels 2 and 3.

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Quiz Pass Check (15 points)

Create variables and check if a student passed a quiz.

```js
// TODO: Create a const variable called passingScore and set it to 70.

// TODO: Create a let variable called myScore and set it to any number you choose.

// TODO: Write an if / else statement:
// If myScore is greater than or equal to passingScore, print "You passed!".
// Otherwise, print "Keep practicing.".

```

Expected outputs (examples):
- If `myScore` is 85 → `You passed!`
- If `myScore` is 60 → `Keep practicing.`

---

### Challenge 2: Free Shipping

```js
// TODO: Create a const variable called freeShippingLimit and set it to 35.

// TODO: Create a let variable called cartTotal and set it to any number you choose.

// TODO: Write an if / else statement:
// If cartTotal is greater than or equal to freeShippingLimit,
//   print "You get free shipping!".
// Otherwise, print "Shipping fees apply.".

```

Try at least two different values for `cartTotal` and check the output.

---

### Challenge 3: Homework Status

```js
// TODO: Create a let variable called homeworkDone and set it to either true or false.

// TODO: Write an if / else statement:
// If homeworkDone is true, print "Nice work. You're ready for tomorrow.".
// Otherwise, print "You still need to finish your homework.".

```

Change `homeworkDone` from `false` to `true` and see how the output changes.

---

### Challenge 4: Grade Label

Write code that prints a grade label based on a score:

```js
// TODO: Create a let variable called grade and set it to a number.

// TODO: Write an if / else if / else chain:
// If grade is 90 or higher, print "A".
// Else if grade is 80 or higher, print "B".
// Else if grade is 70 or higher, print "C".
// Otherwise, print "Needs improvement".
```

Test with different values for `grade` (for example: 95, 83, 72, 60).

---

## Level 2 – Stretch Tasks (3 points)

### Challenge 5: Best of Two Quizzes (10 points)

You want to keep the better of two quiz scores.

```js
const quiz1 = 78;
const quiz2 = 92;

// TODO: Write code that compares quiz1 and quiz2.
// Print "Quiz 1 is higher", "Quiz 2 is higher", or "They are the same"
// based on the values.
```

---

### Challenge 6: Study Time Suggestion (10 points)

```js
let hoursStudied = 3;

// TODO: Write an if / else chain that:
// - Prints "Great job studying!" if hoursStudied is 5 or more.
// - Prints "Good start, keep going." if it is between 2 and 4 (inclusive).
// - Prints "Try to study more tomorrow." if it is less than 2.
```

Try changing `hoursStudied` to 1, 3, and 6 and observe the messages.

---

## Level 3 – Advanced Challenge (2 points)

### Challenge 7: Budget Helper

Write code (from scratch) that:

1. Creates a `const` variable called `budget` with any number you like.
2. Creates three `const` variables: `item1`, `item2`, and `item3` with prices.
3. Calculates the total cost of the three items using `let total`.
4. Uses an `if / else` statement to:
   - Print `"You are within your budget."` if `total` is less than or equal to `budget`.
   - Print `"This is over your budget by X."` if `total` is greater than `budget`, where `X` is the extra amount.

Example output:

```
Budget: 50
Total: 62
This is over your budget by 12.
```

---

## Testing Your Work

Before you submit, check:

- Does your file run without errors?
- Do all Level 1 challenges print the expected messages?
- Have you tried changing values (like scores and totals) to see different branches?
- Did you keep `const` for values that should not change and `let` for values that do?

---

## Submission Checklist

- [ ] File is named `01-assignment.js`.
- [ ] All Level 1 challenges are complete.
- [ ] Code runs without syntax errors.
- [ ] Output matches the instructions.
- [ ] You attempted Level 2 or 3 if you had time.

---

## Getting Help

If you get stuck:

- Re-read the examples from the session page.
- Use `console.log` to print out variable values and see what is happening.
- Change one thing at a time and test again.
- Ask your instructor for help when something does not make sense.

Remember, struggling with new ideas is normal. Every programmer has been where you are now.

---

## How This Prepares You

These simple "life" scenarios (scores, homework, shopping, budgets) use the same skills you will need later for building interactive programs and games.  
Once you are comfortable with these basics, it will be much easier to apply them to more complex projects.
