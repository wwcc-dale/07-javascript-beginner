# Session 11: JavaScript and the DOM

## Learning Outcomes

By the end of this session, you will be able to:
- Select DOM elements using querySelector and related methods.
- Read and modify element content and attributes.
- Understand the relationship between JavaScript and HTML.
- Dynamically update web pages using JavaScript.

---

## Introduction (5 minutes)

You've built solid JavaScript skills. Now you'll apply them to the browser—manipulating web pages dynamically. The **DOM** (Document Object Model) is the interface between JavaScript and HTML. Today you'll learn to select elements and change them.

---

## Reading: Selecting and Modifying Elements (35 minutes)

### What Is the DOM?

The DOM is a tree structure representing your HTML. JavaScript can access and modify it.

```
Document
├── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── button
```

### Selecting Elements

**querySelector (single element):**
```js
const heading = document.querySelector('h1');
const button = document.querySelector('#myButton');
const firstBox = document.querySelector('.box');
```

**querySelectorAll (multiple elements):**
```js
const boxes = document.querySelectorAll('.box');
const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < boxes.length; i++) {
  console.log(boxes[i]);
}
```

**getElementById, getElementsByClassName (older methods):**
```js
const header = document.getElementById('header');
const items = document.getElementsByClassName('item');
```

### Reading Content

**textContent (just text):**
```js
const h1 = document.querySelector('h1');
console.log(h1.textContent);  // The text inside
```

**innerHTML (HTML and text):**
```js
const box = document.querySelector('.box');
console.log(box.innerHTML);  // <p>Hello</p><span>World</span>
```

### Modifying Content

```js
const h1 = document.querySelector('h1');
h1.textContent = 'New Title';  // Change text

const box = document.querySelector('.box');
box.innerHTML = '<p>New content</p>';  // Change HTML
```

### Working with Attributes

```js
const link = document.querySelector('a');

// Read attribute
console.log(link.getAttribute('href'));

// Set attribute
link.setAttribute('href', 'https://example.com');

// Direct property access
const image = document.querySelector('img');
image.src = 'new-image.jpg';
image.alt = 'A new image';
```

### Real Example: Dynamic Todo List

**HTML:**
```html
<div id="app">
  <h1>Todos</h1>
  <ul id="todoList"></ul>
</div>
```

**JavaScript:**
```js
const todoList = document.querySelector('#todoList');

const todos = ['Buy milk', 'Study JavaScript', 'Exercise'];

for (let i = 0; i < todos.length; i++) {
  let li = document.createElement('li');
  li.textContent = todos[i];
  todoList.appendChild(li);
}
```

### Common Properties

```js
const element = document.querySelector('p');

element.textContent = 'Change text';
element.innerHTML = '<strong>Bold text</strong>';
element.className = 'highlight';
element.id = 'mainParagraph';
element.style.color = 'red';
element.style.fontSize = '20px';
```

---

## Video Tutorial: Selecting and Modifying DOM Elements (20 minutes)

Watch: `assets/videos/11-dom-basics.mp4`

Covers:
- querySelector and querySelectorAll
- textContent vs innerHTML
- Modifying attributes
- Creating elements
- Real examples

---

## Supplemental Practice (25 minutes)

### Exercise 1: Select and Modify
```html
<h1>Hello World</h1>
<p class="intro">Welcome</p>
<button id="myBtn">Click me</button>
```

```js
// Select and modify
const heading = document.querySelector('h1');
heading.textContent = 'Welcome to JavaScript';

const intro = document.querySelector('.intro');
intro.innerHTML = '<em>You are welcome!</em>';

const btn = document.querySelector('#myBtn');
btn.textContent = 'Click Me!';
```

### Exercise 2: List Builder

```html
<div id="app">
  <h2>My List</h2>
  <ul id="list"></ul>
</div>
```

```js
const list = document.querySelector('#list');
const items = ['JavaScript', 'HTML', 'CSS', 'Web Design'];

for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  list.appendChild(li);
}
```

### Exercise 4: Building a Table Dynamically

`createElement` works for any HTML tag — including table elements. The pattern is the same: create, set content, append.

```html
<div id="app">
  <table id="scoreTable"></table>
</div>
```

```js
const students = [
  { name: 'Alex', score: 88 },
  { name: 'Jordan', score: 72 },
  { name: 'Casey', score: 95 }
];

const table = document.querySelector('#scoreTable');

// Create and add the header row
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const th1 = document.createElement('th');
th1.textContent = 'Name';
const th2 = document.createElement('th');
th2.textContent = 'Score';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

// Create and add the data rows
const tbody = document.createElement('tbody');

for (const student of students) {
  const row = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = student.name;

  const tdScore = document.createElement('td');
  tdScore.textContent = student.score;

  row.appendChild(tdName);
  row.appendChild(tdScore);
  tbody.appendChild(row);
}

table.appendChild(tbody);
```

**The pattern is always:** `createElement` → set content → `appendChild` to parent. It works identically for `table`, `thead`, `tbody`, `tr`, `td`, `th`, `div`, `li`, `p`, or any other HTML tag.

### Exercise 3: Update User Profile

```html
<div class="profile">
  <h2 id="name"></h2>
  <p id="email"></p>
  <p id="status"></p>
</div>
```

```js
const user = {
  name: 'Alex',
  email: 'alex@example.com',
  online: true
};

document.querySelector('#name').textContent = user.name;
document.querySelector('#email').textContent = user.email;
document.querySelector('#status').textContent = user.online ? 'Online' : 'Offline';
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 11 Practice Quiz** in Canvas.

Focus on:
- Selecting elements with querySelector
- Modifying textContent and innerHTML
- Reading and setting attributes
- Understanding the DOM

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 11: Selecting and Manipulating DOM Elements"**.

You will:
- Select elements from a page
- Modify their content
- Create and add new elements
- Build dynamic page updates

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **The DOM** is how JavaScript accesses HTML.
- **querySelector** selects elements with CSS selectors.
- **textContent** changes text; **innerHTML** changes HTML.
- **Attributes** can be read and modified.
- **JavaScript can dynamically update web pages.**

### How This Connects

Next session, you'll learn to modify **CSS with JavaScript**—making dynamic styling changes.

Next session: **DOM Manipulation and Creation**
