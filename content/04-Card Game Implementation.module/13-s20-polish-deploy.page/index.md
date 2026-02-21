---
name: "Session 20: Async/Await and Orchestrating Multi-Step Processes"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
  - "CLO-5"
---

# Session 20: Async/Await and Orchestrating Multi-Step Processes

## Learning Outcomes

By the end of this session, you will be able to:
- Declare and call `async` functions using `await`
- Chain multiple `async` operations into a sequential process
- Use `while` to drive a loop that ends on a condition, not a count
- `await` a time delay to create pauses in an async sequence
- Explain why `async/await` code reads like synchronous code but does not block the browser

---

## Introduction (5 minutes)

You have all the pieces: scoring, rules, a UI that returns Promises. What is missing is the **orchestrator** — the code that says "first deal, then bid, then play 13 tricks, then score, then check if the game is over, then repeat."

That orchestrator must:
- Wait for human input (asynchronous)
- Wait for AI delays (asynchronous)
- Still read like a simple top-to-bottom sequence

`async/await` makes this possible.

---

## Reading: Async/Await and Orchestration (35 minutes)

### `async` Functions and `await`

Any function declared `async` automatically returns a Promise. Inside it, `await` pauses execution until another Promise resolves:

```js
async function loadUserData(userId) {
  const user    = await fetchUser(userId);       // Pause until user is loaded
  const orders  = await fetchOrders(user.id);   // Then pause until orders are loaded
  const profile = await buildProfile(user, orders);
  return profile;  // The async function's Promise resolves with this value
}
```

From the caller's perspective, `await loadUserData(42)` pauses the caller until `loadUserData` finishes — just like synchronous code. But the browser's event loop is not blocked; other events (clicks, timers) can still fire.

---

### Orchestrating a Sequence

The classic pattern for an orchestrator is a `while` loop that runs a unit of work, then checks a completion condition:

```js
async function runWorkflow(steps) {
  let stepIndex = 0;

  while (stepIndex < steps.length) {
    const step = steps[stepIndex];

    await executeStep(step);         // Wait for this step to finish

    if (step.requiresApproval) {
      const approved = await waitForManagerApproval(step);
      if (!approved) {
        await notifyRejection(step);
        break;                       // Exit on rejection
      }
    }

    stepIndex++;
    await delay(500);                // Brief pause between steps
  }

  await finalizeWorkflow();
}
```

This reads exactly like a synchronous process — but every `await` is a true pause that allows the browser to breathe.

---

### Condition-Based vs. Count-Based Loops

A `for` loop is appropriate when you know the number of iterations in advance. Use `while` when the loop ends on a **condition** that may not be predictable:

```js
// Count-based: always runs exactly 13 times
for (let i = 0; i < 13; i++) {
  await processItem(items[i]);
}

// Condition-based: runs until score threshold is reached
while (!isGameOver(state)) {
  await playRound(state);
  await delay(1500);  // Pause between rounds
}
```

A condition-based loop also naturally handles **extra iterations** — for example, if both teams hit the target on the same round, you continue rather than stopping. `continue` goes back to the condition check; `break` exits immediately.

---

### Creating Delays with `setTimeout`

`await delay(ms)` is a standard pattern for inserting a timed pause in an async sequence:

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessageSequence(messages) {
  for (const msg of messages) {
    displayMessage(msg);
    await delay(2000);  // Wait 2 seconds before showing the next message
    clearMessage();
  }
}
```

`setTimeout` fires after `ms` milliseconds and calls `resolve`, which allows the `await` to complete and execution to continue.

---

### Mixing Human Input and Automated Steps

The orchestrator pattern shines when some steps are human-driven and others are automated:

```js
async function runApprovalProcess(items) {
  for (const item of items) {
    if (item.requiresHumanReview) {
      displayItemForReview(item);
      const decision = await waitForHumanDecision();  // Pauses for user
      item.approved = decision === 'approve';
    } else {
      await delay(300);  // Simulate automated processing
      item.approved = autoApprove(item);
    }

    logDecision(item);
  }
}
```

The loop iterates at the same pace regardless of whether each step is human or automated. Human steps block until clicked; automated steps unblock after a timer.

---

### Script Load Order

In a multi-file browser project (without a module bundler), the order of `<script>` tags determines what is available when. Each file can only use names defined by scripts loaded before it:

```html
<!-- Correct order: dependencies first -->
<script src="models/User.js"></script>       <!-- No dependencies -->
<script src="services/Auth.js"></script>     <!-- Uses User -->
<script src="controllers/App.js"></script>   <!-- Uses Auth -->
<script src="main.js"></script>              <!-- Uses everything -->
```

A `ReferenceError: ClassName is not defined` in the console usually means a script tried to use a class before its file was loaded. Fix it by moving that `<script>` tag earlier.

---

## Video Tutorial: Async/Await Orchestration (20 minutes)

Watch: `assets/videos/20-async-await-orchestration.mp4`

Covers:
- Tracing `async`/`await` execution step by step
- `while` loop with `break` and `continue`
- The `delay()` helper and `setTimeout`
- Script load order in a multi-file project

---

## Supplemental Practice (25 minutes)

### Exercise 1: Trace Async Execution

Given this code, write out the order in which the console logs appear, including the approximate time in milliseconds when each fires:

```js
async function workflow() {
  console.log('A');
  await delay(1000);
  console.log('B');
  await delay(500);
  console.log('C');
}

console.log('start');
workflow();
console.log('end');
```

### Exercise 2: Condition-Based Loop

Write an `async` function `drainQueue(queue, processItem)` that calls `await processItem(queue.shift())` in a loop until `queue.length === 0`. After each item, `await delay(200)`. Test it with an array of 5 items.

### Exercise 3: Human vs. Automated Steps

Create an array of 5 tasks where tasks 2 and 4 require human confirmation (a button click). Write an `async` orchestrator that processes each task: automated tasks delay 500ms and auto-complete; human tasks wait for a button click. Log the task name and result for each.

### Exercise 4: Script Load Order

Open a browser and create three files: `A.js` (defines `class A {}`), `B.js` (creates `new A()`), and `index.html`. Load `B.js` before `A.js`. Observe the error. Then fix the load order and verify it works.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 20 Practice Quiz** in Canvas.

Focus on:
- What `async` means (the function returns a Promise implicitly)
- What `await` does (pauses the current async function until the Promise resolves)
- When to use `while` instead of `for` for a loop
- How script load order causes `ReferenceError` and how to fix it

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 20: GameRunner and Full Integration"**.

You will apply these async/await patterns to build `GameRunner.js`, write `app.js`, and assemble the full Spades game in `index.html`.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`async`** functions return Promises; **`await`** pauses until a Promise resolves
- **While loops with conditions** run until an end state is reached, with `break`/`continue` for special cases
- **`delay(ms)`** creates a timed pause without blocking the browser
- **Human and automated steps** can be mixed in the same `async` loop — both use `await`
- **Script load order** is the dependency management system for browser JavaScript

### How This Connects to the Assignment

The assignment asks you to build `GameRunner` — an async orchestrator that drives deal, bid, play, score, and check-for-winner across unlimited rounds. Everything you practiced today applies directly.

Next session: **Session 21 — AI Strategy and Decision Trees**
