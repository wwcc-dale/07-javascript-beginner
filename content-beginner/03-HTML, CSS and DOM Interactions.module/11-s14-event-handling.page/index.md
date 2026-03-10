---
module: 3
name: 'Session 14: Event Handling and Interactivity'
position: 10
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 14.1
---

# Session 14: Event Handling and Interactivity

## Learning Outcomes

- Attach event listeners to DOM elements with `addEventListener`.
- Handle common events: `click`, `input`, `change`, `submit`, `keydown`.
- Use the event object: `event.target`, `event.key`, `event.preventDefault()`, `event.stopPropagation()`.
- Read user input from `<input>`, `<textarea>`, and `<select>` elements using `.value`.
- Apply event delegation to handle clicks on dynamically created elements.
- Build fully interactive web applications.

---

## Introduction (5 minutes)

Your pages are now dynamic with DOM manipulation and styling. The final piece is **interactivity**—responding to user actions like clicks and input.

---

## Reading: Event Handling (35 minutes)

### Basic Event Listener

```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button was clicked!');
});
```

### Common Events

```js
// Click events
element.addEventListener('click', (event) => {});

// Input events
input.addEventListener('input', (event) => {});
input.addEventListener('change', (event) => {});

// Form events
form.addEventListener('submit', (event) => {});

// Keyboard events
document.addEventListener('keydown', (event) => {});
document.addEventListener('keyup', (event) => {});

// Mouse events
element.addEventListener('mouseover', (event) => {});
element.addEventListener('mouseout', (event) => {});
element.addEventListener('mousemove', (event) => {});
```

### The Event Object

```js
button.addEventListener('click', (event) => {
  console.log(event.target);        // Which element was clicked
  console.log(event.type);          // "click"
  console.log(event.clientX);       // Mouse X position
  console.log(event.key);           // Key pressed (if keyboard event)
});
```

### Real Example: Feedback Form

```html
<form id="feedbackForm">
  <input id="subjectInput" type="text" placeholder="Subject">
  <select id="categorySelect">
    <option value="">Select category</option>
    <option value="bug">Bug Report</option>
    <option value="feature">Feature Request</option>
    <option value="other">Other</option>
  </select>
  <button type="submit">Send Feedback</button>
  <div id="confirmation"></div>
</form>
```

```js
const form = document.querySelector('#feedbackForm');
const subjectInput = document.querySelector('#subjectInput');
const categorySelect = document.querySelector('#categorySelect');
const confirmation = document.querySelector('#confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();  // Stop page reload

  const subject = subjectInput.value;
  const category = categorySelect.value;

  if (subject && category) {
    confirmation.textContent = `Thanks! Your "${category}" feedback has been received.`;
    form.reset();  // Clear form
  }
});
```

### Real Example: Rating Widget

```html
<div class="rating">
  <h2 id="stars">★★★☆☆</h2>
  <p id="ratingValue">3 / 5</p>
  <button id="rateUp">▲ Better</button>
  <button id="rateDown">▼ Worse</button>
</div>
```

```js
let rating = 3;
const starsDisplay = document.querySelector('#stars');
const ratingValue = document.querySelector('#ratingValue');
const rateUpBtn = document.querySelector('#rateUp');
const rateDownBtn = document.querySelector('#rateDown');

function updateDisplay() {
  const filled = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  starsDisplay.textContent = filled + empty;
  ratingValue.textContent = `${rating} / 5`;
}

rateUpBtn.addEventListener('click', () => {
  if (rating < 5) { rating++; updateDisplay(); }
});

rateDownBtn.addEventListener('click', () => {
  if (rating > 1) { rating--; updateDisplay(); }
});
```

### Event Delegation

Handle events on many elements efficiently by attaching one listener to a parent:

```js
const gallery = document.querySelector('#photoGallery');

gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log('Removing:', event.target.textContent);
    event.target.parentElement.remove();
  }
});
```

This is more efficient than attaching a listener to every button individually, and it works for elements added to the gallery later.

### Reading Form Element Values

All interactive form elements expose a `.value` property. The behavior is the same regardless of the element type:

**Text input and textarea:**

```js
const textInput = document.querySelector('#nameInput');   // <input type="text">
const textarea = document.querySelector('#bio');           // <textarea>

console.log(textInput.value);  // whatever the user typed
console.log(textarea.value);   // multi-line text content
```

**Select (dropdown):**

```js
const dropdown = document.querySelector('#colorSelect');  // <select>

console.log(dropdown.value);  // the value of the currently selected <option>
```

```html
<select id="colorSelect">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
```

```js
const select = document.querySelector('#colorSelect');

select.addEventListener('change', () => {
  const chosen = select.value;   // "red", "blue", or "green"
  document.body.style.backgroundColor = chosen;
});
```

Listen for `'change'` on selects (fires when selection changes), or `'input'` for live updates on text fields.

### `event.preventDefault()` and `event.stopPropagation()`

You've seen `preventDefault()` — it stops the browser's default behavior (e.g., form submission reloading the page).

`stopPropagation()` stops the event from **bubbling up** to parent elements.

**Event bubbling:** When you click an element, the click event fires on that element first, then propagates (bubbles) up through every ancestor element to the document root.

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
```

```js
document.querySelector('#outer').addEventListener('click', () => {
  console.log('Outer clicked');
});

document.querySelector('#inner').addEventListener('click', (event) => {
  console.log('Inner clicked');
  event.stopPropagation();  // prevents "Outer clicked" from also firing
});
```

Without `stopPropagation()`, clicking the button logs both "Inner clicked" and "Outer clicked". With it, only "Inner clicked" logs.

**When to use it:** When you have a clickable container but also clickable children inside it and you don't want both handlers to fire.

---

## Video Tutorial: Event Handling (20 minutes)

Watch: `assets/videos/14-events.mp4`

This video covers:
- `addEventListener` with common events
- The event object: `target`, `key`, `clientX/Y`, `preventDefault()`
- Event bubbling and `stopPropagation()`
- Form element values: `input.value`, `textarea.value`, `select.value`
- Event delegation

---

## Assignment (60–90 minutes)

Open **"Session 14: Building Interactive Applications"**.

Build fully interactive apps with event handling.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`addEventListener(event, callback)`** attaches a handler that runs when the event fires.
- **Common events:** `click`, `input`, `change`, `submit`, `keydown`, `mouseover`
- **`event.preventDefault()`** — stops default browser behavior (e.g., form reload)
- **`event.stopPropagation()`** — stops the event from bubbling to parent elements
- **`event.target`** — the element that triggered the event
- **`.value`** — reads the current text from `<input>`, `<textarea>`, or `<select>` elements
- **Event delegation** — attach one listener to a parent; check `event.target` to know which child fired it

### How This Connects

Session 15 reviews everything from Module 3 in preparation for the midterm. Module 4 immediately applies all of these DOM and event skills to building the card game interface.

Next session: **Midterm Review**