---
bank_name: "Session 12: DOM Creation and Event Basics"
---

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
