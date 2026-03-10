---
module: 4
name: 'Session 19: Accumulation, Conditional Scoring, and Promise-Based Input'
position: 10
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 19.1
---

# Session 19: Accumulation, Conditional Scoring, and Promise-Based Input

## Learning Outcomes

By the end of this session, you will be able to:
- Accumulate results across a collection of objects using a loop
- Apply bonus/penalty logic that adds to a running total
- Use `while` to handle a threshold that may trigger multiple times
- Return a Promise from a function that waits for a DOM event
- Explain why Promises let async game loops wait for user clicks

---

## Introduction (5 minutes)

Two skills come together today: **scoring** (collecting results and applying rules to produce a number) and **Promise-based user input** (making a function "pause" until the user does something in the browser).

These look very different on the surface, but both share the same structure: a process that waits, gathers, and returns a result.

---

## Reading: Scoring and Promises (35 minutes)

### Accumulation Loops

An **accumulation loop** collects a total from a collection:

```js
const employees = [
  { name: 'Alice',   salary: 80000, department: 'Engineering' },
  { name: 'Bob',     salary: 60000, department: 'Marketing'   },
  { name: 'Carol',   salary: 90000, department: 'Engineering' },
  { name: 'Dave',    salary: 55000, department: 'Marketing'   }
];

// Total payroll for Engineering
let total = 0;
let count = 0;
for (const emp of employees) {
  if (emp.department === 'Engineering') {
    total += emp.salary;
    count++;
  }
}
console.log(`Engineering payroll: $${total}, ${count} staff`);
```

The pattern is always the same: initialize counters to zero before the loop, conditionally add to them inside the loop, use the final values after.

---

### Conditional Bonuses and Penalties

Many scoring systems have special cases layered on top of the base calculation:

```js
function calculateGrade(student) {
  let grade = student.examScore;  // Base grade from exam

  // Attendance bonus/penalty
  if (student.attendanceRate >= 0.95) {
    grade += 5;   // Bonus: perfect attendance
  } else if (student.attendanceRate < 0.75) {
    grade -= 10;  // Penalty: poor attendance
  }

  // Extra credit (only adds if they completed extra work)
  if (student.extraCredit) {
    grade += student.extraCredit;
  }

  // Cap at 100
  return Math.min(grade, 100);
}
```

The pattern: start with the base value, then apply each special rule as an adjustment. The order of adjustments can matter — bonus before cap behaves differently than cap before bonus.

---

### `while` for Threshold-Based Penalties

Some rules trigger every time an accumulator crosses a threshold — possibly multiple times in one scoring calculation. Use `while` (not `if`) for this:

```js
function applyOverageCharges(account) {
  // Each time messages exceed 1000, charge $5 and subtract 1000
  while (account.messageSurplus >= 1000) {
    account.balance -= 5;
    account.messageSurplus -= 1000;
  }
}

const account = { balance: 100, messageSurplus: 2750 };
applyOverageCharges(account);
console.log(account.balance);          // 85  (charged 3 times: 2750→1750→750)
console.log(account.messageSurplus);   // 750
```

Using `if` instead of `while` would only catch the first threshold crossing. `while` keeps firing until the surplus is below 1000.

---

### What is a Promise?

A **Promise** represents a value that will be available in the future. You create one with `new Promise((resolve, reject) => { ... })`:

```js
// A Promise that resolves after 2 seconds
const timer = new Promise(resolve => {
  setTimeout(resolve, 2000);
});

timer.then(() => console.log('2 seconds passed'));
```

`resolve(value)` is called when the result is ready. Whatever you pass to `resolve` becomes the value of the Promise.

---

### Waiting for a User Click with a Promise

The key insight: you can create a Promise that only resolves when the user does something in the DOM. This turns an event listener into a one-time awaitable value:

```js
function waitForButtonClick(buttonId) {
  return new Promise(resolve => {
    const button = document.getElementById(buttonId);

    const handler = (event) => {
      button.removeEventListener('click', handler);  // Clean up — only fire once
      resolve(event.target.textContent);             // Resolve with the button's text
    };

    button.addEventListener('click', handler);
    // The Promise is now "pending" — it will resolve only when the user clicks
  });
}

// Usage with async/await:
async function confirmAction() {
  const choice = await waitForButtonClick('confirm-btn');
  console.log('User clicked:', choice);
  // Everything here waits until the button is clicked
}
```

The Promise stays **pending** until the handler runs. When the user clicks, `resolve()` is called, and any code `await`-ing the Promise resumes.

---

### Why This Pattern Matters for Game Loops

Without Promises, you can't write sequential-looking code that waits for user input. Compare:

**Without Promises (callback hell):**
```js
function runQuiz() {
  showAnswerOptions();
  answerButton.addEventListener('click', function(e) {
    const answer = e.target.dataset.value;
    hideAnswerOptions();
    processAnswer(answer);  // Must nest the next step
  });
}
```

**With Promises + async/await:**
```js
async function runQuiz() {
  showAnswerOptions();
  const answer = await waitForAnswerClick();   // Pauses here
  hideAnswerOptions();
  await processAnswer(answer);                 // Then continues here
}
```

The second version reads top-to-bottom like synchronous code, even though it's waiting for asynchronous user input at each `await`.

---

### Attaching Data to DOM Elements with `dataset`

When many similar elements can be clicked (like buttons or items in a list), `dataset` attributes let the click handler identify which one was clicked without complex logic:

```js
// Create buttons dynamically
const options = ['Small', 'Medium', 'Large'];
options.forEach(size => {
  const btn = document.createElement('button');
  btn.textContent = size;
  btn.dataset.size = size;       // Attach data to the element
  btn.dataset.price = size === 'Large' ? 5 : size === 'Medium' ? 3 : 1;
  container.appendChild(btn);
});

// Single handler for all buttons
container.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  console.log('Size:', btn.dataset.size);    // 'Large'
  console.log('Price:', btn.dataset.price);  // '5'
});
```

`dataset.size` reads the `data-size` attribute. `e.target.closest('button')` handles clicks on child elements inside the button. This avoids maintaining a parallel index or closure variable.

---

## Video Tutorial: Scoring and Promises (20 minutes)

Watch: `assets/videos/19-scoring-promises.mp4`

Covers:
- Building an accumulation loop from scratch
- `while` vs. `if` for threshold-based penalties
- Creating a Promise that resolves on a click
- `e.target.closest()` and `dataset` attributes

---

## Supplemental Practice (25 minutes)

### Exercise 1: Payroll with Special Rules

Given an array of employees with `{ name, salary, hoursOvertime, isManager }`:
- Base total = sum of all salaries
- Overtime bonus: +$50 per overtime hour per employee
- Manager bonus: +5% of their salary
- Return an object `{ totalPayroll, bonusesPaid }`

### Exercise 2: Threshold Penalty with `while`

Write a function `applyLateCharges(account)` where:
- `account.daysLate` accumulates
- Every 30 days late adds a $25 charge and decrements `daysLate` by 30
- Test with `daysLate = 95` (should charge 3 times: $75, leaving daysLate at 5)

### Exercise 3: Click Promise

Create an HTML page with three color buttons (Red, Green, Blue). Write a function `waitForColorChoice()` that returns a Promise resolving with the text of whichever button is clicked first. Use `async/await` to log "You chose: [color]" after the click.

### Exercise 4: dataset Identification

Create 5 product buttons dynamically using a `forEach` loop. Each button should have `data-id`, `data-name`, and `data-price` attributes. Add a single click listener to the container that logs all three attributes when any button is clicked.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 19 Practice Quiz** in Canvas.

Focus on:
- The accumulation loop pattern (initialize → accumulate → use)
- Why `while` is required when a threshold may trigger more than once
- What it means for a Promise to be "pending" vs. "resolved"
- Why removing the event listener inside the handler prevents it from firing again

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 19: Scoring and GameBoard"**.

You will apply accumulation and Promise-based input to complete Spades scoring and build the `GameBoard` class.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Accumulation loops** initialize to zero, accumulate conditionally inside the loop, and use the result after
- **`while` for thresholds** handles the case where a rule fires multiple times in one calculation
- **Promises** represent a future value; `resolve(value)` delivers it; `await` pauses until it arrives
- **`dataset` attributes** attach identifying data to DOM elements for use in event handlers
- **Removing the listener** inside the handler makes a Promise-based listener fire exactly once

### How This Connects to the Assignment

The assignment asks you to implement Spades scoring (accumulation with special rules and threshold penalties) and `GameBoard` methods that return Promises resolving on bid and card clicks.

Next session: **Session 20 — Async/Await and Orchestrating a Multi-Step Process**