---
name: "Session 13: CSS Manipulation with JavaScript"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-5"
---

# Session 13: CSS Manipulation with JavaScript

## Learning Outcomes

- Modify element styles directly with `element.style`
- Use `classList.add()`, `.remove()`, `.toggle()`, `.contains()` to manage CSS classes
- Save and load user preferences with `localStorage`
- Create dynamic themes that persist across page reloads

---

## Introduction (5 minutes)

You can change content and structure. Now learn to change **styling** with JavaScript—making interactive visual effects.

---

## Reading: Styling with JavaScript (35 minutes)

### Inline Styles

```js
const box = document.querySelector('.box');
box.style.backgroundColor = 'blue';
box.style.fontSize = '20px';
box.style.display = 'none';  // Hide
```

### CSS Classes (Better Approach)

```css
/* In CSS file */
.highlight {
  background-color: yellow;
  font-weight: bold;
}

.hidden {
  display: none;
}
```

```js
const element = document.querySelector('p');

// Add class
element.classList.add('highlight');

// Remove class
element.classList.remove('hidden');

// Toggle class
element.classList.toggle('highlight');

// Check if has class
if (element.classList.contains('highlight')) {
  console.log('Has highlight class');
}
```

### `localStorage` — Remembering Settings Across Page Loads

Normally, when the user refreshes the page, all your JavaScript variables reset to their starting values. `localStorage` solves this by letting you save data in the browser that persists across page loads.

```js
// Save a value
localStorage.setItem('username', 'Alex');
localStorage.setItem('darkMode', 'true');   // only strings are stored

// Read it back
const name = localStorage.getItem('username');    // "Alex"
const dark = localStorage.getItem('darkMode');    // "true" (always a string)

// Delete one key
localStorage.removeItem('username');

// Delete everything
localStorage.clear();
```

**Important:** `localStorage` only stores **strings**. To save a boolean:

```js
localStorage.setItem('darkMode', 'true');   // save as string "true"
const isDark = localStorage.getItem('darkMode') === 'true';  // compare to restore boolean
```

To save a number:

```js
localStorage.setItem('score', String(42));
const score = Number(localStorage.getItem('score'));  // convert back
```

`localStorage.getItem()` returns `null` if the key doesn't exist yet — useful for setting a default:

```js
const theme = localStorage.getItem('theme') || 'light';  // default to 'light'
```

### Real Example: Theme Switcher

```html
<button id="themeBtn">Toggle Dark Mode</button>
<div id="content">Page content</div>
```

```css
body.dark-mode {
  background-color: #333;
  color: white;
}

body.dark-mode #content {
  background-color: #222;
}
```

```js
const btn = document.querySelector('#themeBtn');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  document.body.classList.add('dark-mode');
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});
```

### Real Example: Interactive Card

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
  <button class="expand-btn">Expand</button>
</div>
```

```css
.card {
  width: 200px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card.expanded {
  width: 400px;
}
```

```js
const card = document.querySelector('.card');
const btn = document.querySelector('.expand-btn');

btn.addEventListener('click', () => {
  card.classList.toggle('expanded');
  btn.textContent = card.classList.contains('expanded') ? 'Collapse' : 'Expand';
});
```

---

## Video Tutorial: Styling with JavaScript (20 minutes)

Watch: `assets/videos/13-css-manipulation.mp4`

---

## Assignment (60–90 minutes)

Open **"Session 13: Dynamic Styling and Themes"**.

Build interactive UI with classList and dynamic styling.
