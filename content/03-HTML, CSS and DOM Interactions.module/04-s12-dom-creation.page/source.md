# Session 12: DOM Manipulation and Event Basics

## Learning Outcomes

By the end of this session, you will be able to:
- Create new DOM elements with `createElement` and add them to the page.
- Remove elements with `.remove()`.
- Attach a click listener to a button with `addEventListener`.
- Read a user's text input using the `.value` property.
- Use template literals to build strings from variables.
- Work with dates and timestamps using the `Date` object.

---

## Introduction (5 minutes)

Last session you selected and modified existing elements. Today you'll go further — creating entirely new elements, removing them, and responding to user clicks. This is the foundation of every interactive web app: buttons that do things, inputs that capture text, and a page that updates dynamically.

---

## Reading: Creating and Managing Elements (20 minutes)

### Creating Elements

```js
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hello, new element!';
newParagraph.className = 'highlight';

// Add to page
document.body.appendChild(newParagraph);
```

### Adding Elements

**appendChild (add at end):**
```js
const container = document.querySelector('#app');
const newDiv = document.createElement('div');
newDiv.textContent = 'New content';
container.appendChild(newDiv);
```

**insertBefore (add before specific element):**
```js
const container = document.querySelector('#app');
const firstChild = container.querySelector('p');
const newDiv = document.createElement('div');
container.insertBefore(newDiv, firstChild);
```

### Removing Elements

```js
const element = document.querySelector('#oldItem');
element.remove();

// Or via the parent:
element.parentElement.removeChild(element);
```

---

## Reading: Responding to User Actions (25 minutes)

### `addEventListener` — Reacting to Clicks

Every DOM element can listen for user actions. The most common is a click:

```js
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
  console.log('The button was clicked!');
});
```

**Breaking it down:**
- `button.addEventListener(...)` — attach a listener to this element
- `'click'` — the event type to listen for
- `() => { ... }` — the **callback**: the code that runs when the event fires

The callback runs every time the user clicks the button. Nothing happens until they do.

**Example: toggle a message**

```js
const toggleBtn = document.querySelector('#toggleBtn');
const message = document.querySelector('#message');
let visible = true;

toggleBtn.addEventListener('click', () => {
  if (visible) {
    message.style.display = 'none';
    toggleBtn.textContent = 'Show';
  } else {
    message.style.display = 'block';
    toggleBtn.textContent = 'Hide';
  }
  visible = !visible;
});
```

### Reading Text Input with `.value`

Every `<input>` element has a `.value` property that holds whatever the user has typed.

```html
<input id="nameInput" type="text" placeholder="Enter your name">
<button id="greetBtn">Greet</button>
<p id="output"></p>
```

```js
const nameInput = document.querySelector('#nameInput');
const greetBtn = document.querySelector('#greetBtn');
const output = document.querySelector('#output');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value;   // read what the user typed
  output.textContent = 'Hello, ' + name + '!';
  nameInput.value = '';           // clear the input after reading
});
```

**Key points:**
- `.value` is a string — always
- Read it inside the callback so you get the current typed text
- Set `.value = ''` to clear the field

### Template Literals — Cleaner String Building

Instead of concatenating strings with `+`, template literals use backticks and `${}` to embed values directly:

```js
const name = 'Alex';
const score = 92;

// Old way — concatenation
console.log('Student ' + name + ' scored ' + score + ' points.');

// Template literal — cleaner
console.log(`Student ${name} scored ${score} points.`);
```

Use backticks (`` ` ``) not quotes. Put any expression inside `${}`.

```js
const greetBtn = document.querySelector('#greetBtn');
const output = document.querySelector('#output');

greetBtn.addEventListener('click', () => {
  const name = document.querySelector('#nameInput').value;
  output.textContent = `Hello, ${name}! Welcome aboard.`;
});
```

### Putting It Together: Button That Creates Elements

```html
<input id="quoteInput" placeholder="Enter a quote">
<button id="addQuoteBtn">Add</button>
<ul id="quoteBoard"></ul>
```

```js
const quoteInput = document.querySelector('#quoteInput');
const addQuoteBtn = document.querySelector('#addQuoteBtn');
const quoteBoard = document.querySelector('#quoteBoard');

addQuoteBtn.addEventListener('click', () => {
  const text = quoteInput.value;
  if (text === '') return;   // do nothing on empty input

  const li = document.createElement('li');
  li.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    li.remove();   // each remove button removes its own li
  });

  li.appendChild(removeBtn);
  quoteBoard.appendChild(li);
  quoteInput.value = '';   // clear after adding
});
```

This is the **core pattern** for interactive list apps: read input → create element → append → clear.

---

## Reading: Working with Dates (10 minutes)

### The `Date` Object

JavaScript has a built-in `Date` object for working with dates and times. Create one with `new Date()`:

```js
const now = new Date();
console.log(now);  // Wed Feb 19 2026 10:34:00 ...
```

### Formatting Dates as Readable Strings

```js
const now = new Date();

// Locale-aware formatting
console.log(now.toLocaleDateString());   // "2/19/2026"
console.log(now.toLocaleTimeString());   // "10:34:00 AM"
console.log(now.toLocaleString());       // "2/19/2026, 10:34:00 AM"
```

**Real-world use: timestamped activity log**

```js
const activityInput = document.querySelector('#activityInput');
const logBtn = document.querySelector('#logBtn');
const activityLog = document.querySelector('#activityLog');

logBtn.addEventListener('click', () => {
  const note = activityInput.value;
  if (note === '') return;

  const timestamp = new Date().toLocaleString();   // current time as string

  const li = document.createElement('li');
  li.textContent = `${note}  —  ${timestamp}`;

  activityLog.appendChild(li);
  activityInput.value = '';
});
```

---

## Video Tutorial: DOM Creation and Event Basics (20 minutes)

Watch: `assets/videos/12-dom-creation.mp4`

This video covers:
- `createElement`, `appendChild`, `.remove()`
- `addEventListener('click', callback)`
- Reading `.value` from an input
- Template literals
- Building the add/delete pattern

---

## Supplemental Practice (25 minutes)

### Practice 1: Click Counter

```html
<h2 id="count">0</h2>
<button id="btn">Click me</button>
```

```js
let count = 0;
const countDisplay = document.querySelector('#count');

document.querySelector('#btn').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
```

### Practice 2: Name Display

```html
<input id="nameInput" placeholder="Your name">
<button id="btn">Show</button>
<p id="output"></p>
```

```js
document.querySelector('#btn').addEventListener('click', () => {
  const name = document.querySelector('#nameInput').value;
  document.querySelector('#output').textContent = `Hello, ${name}!`;
});
```

### Practice 3: Timestamped Log

```html
<button id="logBtn">Log event</button>
<ul id="log"></ul>
```

```js
document.querySelector('#logBtn').addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Event at ${new Date().toLocaleTimeString()}`;
  document.querySelector('#log').appendChild(li);
});
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 12 Practice Quiz** in Canvas.

Focus on:
- `createElement`, `appendChild`, `.remove()`
- `addEventListener('click', callback)` syntax and purpose
- Reading user input with `.value`
- Template literal syntax (backticks, `${}`)
- Building elements dynamically from input

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 12: Building Dynamic Content"**.

Build interactive content that creates and removes elements using event listeners and input values.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`document.createElement(tag)`** creates a new element; **`parent.appendChild(el)`** adds it to the page.
- **`element.remove()`** removes an element from the DOM.
- **`addEventListener('click', () => {})`** runs code when a user clicks.
- **`input.value`** is a string containing whatever the user typed; set it to `''` to clear.
- **Template literals** (`` `Hello, ${name}!` ``) are cleaner than string concatenation.
- **`new Date().toLocaleString()`** gives a human-readable timestamp.

### How This Connects

Next session you'll control visual styling dynamically using `classList`. The session after that (Session 14) goes deep on the full range of events — form submission, keyboard events, mouse position, and more.

Next session: **CSS Manipulation with JavaScript**
