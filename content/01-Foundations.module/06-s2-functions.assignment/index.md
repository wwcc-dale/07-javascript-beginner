---
allowed_extensions:
- js
- txt
- zip
assignment_type: online
module: 1
name: 'Session 2: Building Functions for Everyday Tasks'
points: 20
position: 6
published: true
related_outcomes:
- CLO-1
session: 2.3
submission_types:
- online_upload
---

# Session 2: Building Functions for Everyday Tasks

## Overview

In this assignment you will write functions to solve real-world problems. You'll practice writing functions with parameters, return values, and calling them with different inputs.

**Time Estimate:** 60–90 minutes  
**Points:** 20  
**Submit:** Your completed `02-assignment.js` file

---

## Getting Started

- buttons
- Download Starter File | 02-starter.zip | primary | download

- steps
- Open the starter file
- Save as `02-assignment.js`
- Complete each challenge by writing functions
- Test by calling each function with different values
- Check the console output against expected results

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Simple Greeting Function

Write a function that takes a name and returns a greeting.

```js
// TODO: Write a function called greetStudent that:
// - Takes one parameter: name
// - Returns a string like "Hello, [name]!"
// Test it by calling: greetStudent("Alex")
// Expected output: "Hello, Alex!"

```

---

### Challenge 2: Calculate Average Score

Write a function that calculates the average of three scores.

```js
// TODO: Write a function called calculateAverage that:
// - Takes three parameters: score1, score2, score3
// - Calculates the average
// - Returns the average as a number
// Test it: calculateAverage(85, 90, 95)
// Expected output: 90

```

---

### Challenge 3: Apply Discount

Write a function that calculates the final price after applying a discount.

```js
// TODO: Write a function called applyDiscount that:
// - Takes two parameters: originalPrice and discountPercent
// - Calculates the discount amount
// - Returns the final price (original - discount)
// Test it: applyDiscount(100, 20)
// Expected output: 80 (20% off)

```

---

### Challenge 4: Check if Passing Grade

Write a function that checks if a score is a passing grade.

```js
// TODO: Write a function called isPassing that:
// - Takes two parameters: score and passingScore
// - Returns true if score >= passingScore, false otherwise
// Test it:
//   isPassing(85, 70) should return true
//   isPassing(60, 70) should return false

```

---

## Level 2 – Stretch Tasks (3 points)

### Challenge 5: Convert Time

Write a function that converts hours to minutes.

```js
function hoursToMinutes(hours) {
  // TODO: Complete this function
  // Return the number of minutes
  // Example: hoursToMinutes(1.5) should return 90
}
```

---

### Challenge 6: Find Maximum

Write a function that returns the larger of two numbers.

```js
function findMax(num1, num2) {
  // TODO: Complete this function
  // Return whichever number is larger
  // Example: findMax(25, 30) should return 30
}
```

---

## Level 3 – Advanced Challenge (2 points)

### Challenge 7: Multiple Operations

Write a function that:
1. Takes three parameters: name, score1, score2
2. Calculates the average of the two scores
3. Checks if the average is a passing grade (70 or higher)
4. Returns a message like: "[name] has an average of X. Status: Passing" or "Not passing"

**Hint:** You can use your functions from Challenge 2 and Challenge 4 inside this new function!

Example output:
```
Alex has an average of 87.5. Status: Passing
Jordan has an average of 65. Status: Not passing
```

---

## Testing Your Work

Before submitting:
- Run each function with the test values shown
- Verify the output matches expectations
- Try at least one additional value for each function
- Make sure all syntax is correct (no errors in console)

---

## Submission Checklist

- checklist: Submission Checklist
- File named `02-assignment.js`
- All Level 1 functions are complete and working
- Code runs without errors
- Functions return correct values
- Attempted Level 2 or 3 if time allowed

---

## Getting Help

- Look at the examples from the learning page
- Test functions one at a time
- Use `console.log` to check what your function is returning
- Ask your instructor if you're stuck

---

## Key Concepts

- accordion: Key Concepts
- Parameters
  - The inputs to a function
- Return Value
  - The output from a function
- Calling a Function
  - Using it with specific arguments
- Reusability
  - Writing it once, using it many times