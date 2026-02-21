---
bank_name: "Session 13: CSS Manipulation with JavaScript"
---

1. Which property sets an element's background color directly from JavaScript?
*a) `element.style.backgroundColor`
b) `element.css.background`
c) `element.setStyle('background-color')`
d) `element.color`

1. What is the correct way to hide an element using inline styles?
*a) `element.style.display = 'none'`
b) `element.style.visibility = 'hidden'`
c) `element.hidden = true`
d) `element.style = 'display:none'`

1. What does `element.classList.add('highlight')` do?
*a) Adds the class 'highlight' to the element's class list
b) Replaces all classes with 'highlight'
c) Creates a new element with class 'highlight'
d) Removes the 'highlight' class

1. What does `element.classList.toggle('active')` do?
*a) Adds 'active' if not present; removes it if present
b) Always adds 'active'
c) Always removes 'active'
d) Checks if 'active' is present and returns true or false

1. What does `element.classList.contains('selected')` return?
*a) true if the element has class 'selected', false otherwise
b) The number of elements with that class
c) The element itself if it has the class
d) Always returns true

1. Why is using `classList` better than `element.style` for most UI changes?
*a) CSS classes keep styles in the stylesheet, making them easier to maintain and reuse
b) `classList` is faster than inline styles
c) `element.style` cannot change colors
d) `classList` works without JavaScript

1. What does `localStorage.setItem('username', 'Alex')` do?
*a) Saves the string 'Alex' under the key 'username' in the browser's local storage
b) Sets a variable called username to 'Alex'
c) Creates a cookie named username
d) Sends 'Alex' to the server

1. What does `localStorage.getItem('username')` return if the key does not exist?
*a) `null`
b) `undefined`
c) An empty string `''`
d) It throws an error

1. What data type does `localStorage` always store values as?
*a) String — everything is stored as a string
b) The original data type is preserved
c) Numbers are stored as numbers, everything else as strings
d) Objects are stored as objects

1. How do you correctly restore a saved boolean from localStorage?
```js
localStorage.setItem('darkMode', 'true');
const isDark = ____;
```
*a) `localStorage.getItem('darkMode') === 'true'`
b) `Boolean(localStorage.getItem('darkMode'))`
c) `localStorage.getItem('darkMode')`
d) `localStorage.getBool('darkMode')`

1. What does this code do?
```js
const theme = localStorage.getItem('theme') || 'light';
```
*a) Gets the saved theme, defaulting to 'light' if none has been saved
b) Sets the theme to 'light' in localStorage
c) Returns true if theme is 'light'
d) Clears the theme from localStorage

1. What does `localStorage.removeItem('score')` do?
*a) Deletes the 'score' key and its value from localStorage
b) Sets score to 0
c) Removes all localStorage data
d) Returns the old value before deleting it

1. What does this pattern accomplish?
```js
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});
```
*a) Toggles dark mode on click and saves the preference so it persists across page loads
b) Toggles dark mode but does not save the preference
c) Saves 'true' to localStorage regardless of the current state
d) Removes the dark-mode class and clears localStorage

1. What is the difference between `element.classList.remove('x')` and `element.classList.toggle('x')`?
*a) `remove` always removes 'x'; `toggle` removes it if present and adds it if absent
b) They do the same thing
c) `toggle` always removes 'x'; `remove` toggles it
d) `remove` works on multiple classes; `toggle` only works on one

1. How do you save a number to localStorage so it can be retrieved as a number later?
*a) `localStorage.setItem('score', String(42))` then `Number(localStorage.getItem('score'))`
b) `localStorage.setItem('score', 42)` and it comes back as a number automatically
c) You cannot store numbers in localStorage
d) `localStorage.setNumber('score', 42)`

1. Which approach correctly applies a saved preference on page load?
```js
const savedSize = localStorage.getItem('textSize') || 'normal';
```
*a) Gets the saved size from storage; uses 'normal' as the default if nothing was saved
b) Saves 'normal' as the default text size
c) Removes the saved size and resets to 'normal'
d) Returns true if the saved size is 'normal'

