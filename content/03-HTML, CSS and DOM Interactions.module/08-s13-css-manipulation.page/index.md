---
module: 3
name: 'Session 13: CSS Manipulation with JavaScript'
position: 7
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 13.1
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
localStorage.setItem('volume', '75');        // only strings are stored

// Read it back
const name = localStorage.getItem('username');    // "Alex"
const vol = localStorage.getItem('volume');       // "75" (always a string)

// Delete one key
localStorage.removeItem('username');

// Delete everything
localStorage.clear();
```

**Important:** `localStorage` only stores **strings**. To save a boolean:

```js
localStorage.setItem('soundEnabled', 'true');   // save as string "true"
const soundOn = localStorage.getItem('soundEnabled') === 'true';  // compare to restore boolean
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

### Real Example: Large Text Toggle

```html
<button id="sizeBtn">Toggle Large Text</button>
<div id="content">Page content</div>
```

```css
body.large-text {
  font-size: 20px;
  line-height: 1.8;
}
```

```js
const btn = document.querySelector('#sizeBtn');
const savedSize = localStorage.getItem('textSize') || 'normal';

if (savedSize === 'large') {
  document.body.classList.add('large-text');
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('large-text');
  const isLarge = document.body.classList.contains('large-text');
  localStorage.setItem('textSize', isLarge ? 'large' : 'normal');
});
```

### Real Example: Read More Panel

```html
<div class="panel">
  <h3>Article Title</h3>
  <p class="preview">Short preview of the article...</p>
  <p class="full-text hidden">This is the full article text with all the details.</p>
  <button class="read-btn">Read More</button>
</div>
```

```css
.hidden {
  display: none;
}
```

```js
const panel = document.querySelector('.panel');
const btn = document.querySelector('.read-btn');
const fullText = panel.querySelector('.full-text');

btn.addEventListener('click', () => {
  fullText.classList.toggle('hidden');
  btn.textContent = fullText.classList.contains('hidden') ? 'Read More' : 'Read Less';
});
```

---

## Video Tutorial: Styling with JavaScript (20 minutes)

Watch: `assets/videos/13-css-manipulation.mp4`

---

## Assignment (60–90 minutes)

Open **"Session 13: Dynamic Styling and Themes"**.

Build interactive UI with classList and dynamic styling.

---

- accordion: Helpful Resources
- [Element.classList — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  - Add, remove, toggle, and check CSS classes on an element
- [HTMLElement.style — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
  - Apply inline styles directly from JavaScript
- [Window.localStorage — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  - Store key-value string data that persists across browser sessions
- [Using the Web Storage API — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
  - How to use localStorage and sessionStorage, including JSON serialization