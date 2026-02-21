---
bank_name: "Session 12: CSS Styling and DOM Creation"
---

1. What elements does this selector target? `.card > p`
*a) Only `<p>` elements that are direct children of elements with class "card"
b) All `<p>` elements inside .card at any level
c) Only the first `<p>` in .card
d) All elements with class "card" and all `<p>` elements

1. Which selector has higher specificity? `div.container p` vs `#main p`
*a) `#main p` (ID selector beats class selector)
b) `div.container p` (more specific)
c) They are equal
d) Neither will apply

1. What will this CSS do? `.box { margin: 10px 20px 30px; }`
*a) 10px top, 20px left/right, 30px bottom
b) 10px all sides, other values ignored
c) Invalid syntax
d) 10px top/bottom, 20px left, 30px right

1. What's the result? `.btn { padding: 10px; border: 2px solid; width: 100px; box-sizing: border-box; }`
*a) Total width is 100px (padding and border included)
b) Total width is 124px (100 + 20 padding + 4 border)
c) Width is 100px, padding and border outside
d) Invalid CSS

1. Fix this code to select all links in nav: `nav a { ... }` vs `nav > a { ... }`
*a) First is correct (selects all `<a>` at any level in nav)
b) Second is correct (direct children only)
c) Both are identical
d) Neither works

1. What does this do? `li:nth-child(2n) { background: gray; }`
*a) Selects every even-numbered list item (2nd, 4th, 6th...)
b) Selects only the 2nd item
c) Selects all items
d) Invalid syntax

1. Which pseudo-class applies when user hovers? `a:hover` or `a:focus`
*a) `a:hover` applies on mouse hover
b) `a:focus` applies on hover
c) Both apply on hover
d) Neither for hover

1. What's the difference? `.box { display: none; }` vs `.box { visibility: hidden; }`
*a) `display: none` removes from layout, `visibility: hidden` keeps space
b) They are identical
c) `visibility: hidden` removes from layout
d) Both remove space

1. Calculate total width: `.card { width: 200px; padding: 20px; border: 5px solid; margin: 10px; }`
*a) 250px (content + padding + border, margin is outside)
b) 200px (width only)
c) 270px (including margin)
d) 240px

1. What will this select? `input[type="text"]`
*a) All input elements with type attribute equal to "text"
b) All inputs
c) Only text elements
d) Invalid syntax

1. Fix the specificity issue: Both rules apply to same element - `.nav a { color: blue; }` and `a { color: red; }`
*a) `.nav a` wins (class selector more specific than element)
b) `a` wins (comes last)
c) Both apply equally
d) Neither applies

1. What does this combinator do? `h2 + p { margin-top: 0; }`
*a) Selects `<p>` immediately following an `<h2>`
b) Selects all `<p>` after any `<h2>`
c) Selects h2 and p
d) Invalid syntax

1. How do you select elements with both classes? `<div class="box active">...</div>`
*a) `.box.active` (no space between classes)
b) `.box .active`
c) `.box, .active`
d) Cannot select both

1. What happens? `.parent { font-size: 16px; } .child { font-size: 2em; }`
*a) Child font is 32px (2 × parent's 16px)
b) Child font is 2px
c) Child font is 16px
d) Invalid unit

1. What's wrong with this? `#header .logo p span a { color: blue; }`
*a) Too specific (overly-qualified selector, hard to override)
b) Perfect specificity
c) Not specific enough
d) Invalid syntax

1. Which applies last? `<div style="color: red;">` with CSS `.box { color: blue !important; }`
*a) Blue (!important overrides inline styles)
b) Red (inline styles always win)
c) Neither
d) Both apply

1. What does `document.createElement('p')` return?
*a) A new <p> element not yet in the DOM
b) The first <p> element on the page
c) A string "<p>"
d) An error

1. What does `parent.appendChild(child)` do?
*a) Adds child as the last child of parent
b) Adds child before parent
c) Replaces parent with child
d) Creates a copy of child

1. What is the correct way to remove an element from the DOM?
a) `element.delete()`
*b) `element.remove()`
c) `document.remove(element)`
d) `element.parentNode.delete(element)`

1. What does `addEventListener` do?
*a) Attaches a function that runs when a specified event occurs on the element
b) Creates a new event
c) Removes an event
d) Fires an event immediately

1. What will this do when the button is clicked?
```js
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  document.querySelector('h1').textContent = 'Clicked!';
});
```
*a) Changes h1 text to "Clicked!" on each click
b) Changes text once, then stops
c) Nothing — event listeners don't work this way
d) Throws an error

1. What does `input.value` contain?
*a) The current text the user has typed into the input field
b) The placeholder text
c) The input element's id
d) It is always an empty string

1. Which template literal is correct?
```js
const name = "Jordan";
```
*a) `` `Hello, ${name}!` ``
b) `"Hello, ${name}!"`
c) `'Hello, {name}!'`
d) `` `Hello, name!` ``

1. What does `new Date().toLocaleString()` return?
*a) The current date and time as a human-readable string
b) A number (milliseconds since epoch)
c) null
d) An error

1. What does this pattern do?
```js
const addBtn = document.querySelector('#add');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#list');

addBtn.addEventListener('click', () => {
  const text = input.value;
  if (text === '') return;
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
  input.value = '';
});
```
*a) Reads input text, creates a list item, appends it to the list, and clears the input
b) Clears the list each time the button is clicked
c) Only runs once
d) Throws an error because createElement is inside an event listener

1. Why should you set `input.value = ''` after reading from it?
*a) To clear the field so the user can type a new item
b) It is required by the browser
c) It resets the event listener
d) It prevents the form from submitting
