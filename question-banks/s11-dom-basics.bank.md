---
bank_name: "Session 11: JavaScript and the DOM"
---

1. Which method selects the first element on the page that matches a CSS selector?
*a) `document.querySelector('#title')`
b) `document.querySelectorAll('#title')`
c) `document.getElement('#title')`
d) `document.find('#title')`

1. What does the page now display in the `<h1>` after this code runs?
```html
<h1 id="greeting">Hello</h1>
```
```js
document.querySelector('#greeting').textContent = 'Welcome!';
```
a) `Hello`
*b) `Welcome!`
c) Nothing — you can't change `textContent` after the page loads
d) `Hello Welcome!`

1. What is the DOM?
a) A programming language for styling web pages
b) A file format for saving HTML documents
*c) A tree of JavaScript objects representing every element on the page
d) The browser's network request system

1. What does this code do?
```js
const btn = document.querySelector('#submit');
btn.setAttribute('disabled', 'true');
```
a) Deletes the button from the page
*b) Adds the `disabled` attribute to the button, preventing it from being clicked
c) Changes the button's text to "true"
d) Selects all elements with the class `submit`

1. Which selector string targets elements with class `card`?
a) `'#card'`
*b) `'.card'`
c) `'card'`
d) `'[card]'`

1. What type does `items` have?
```js
const items = document.querySelectorAll('li');
```
a) An `Array`
b) A single `HTMLElement`
*c) A `NodeList`
d) A `HTMLCollection`

1. What happens when this code runs?
```js
const el = document.querySelector('p');
el.innerHTML = '<strong>Bold text</strong>';
```
a) The paragraph shows the literal string `<strong>Bold text</strong>`
*b) The paragraph renders **Bold text** in bold
c) An error is thrown because `innerHTML` is read-only
d) The `<p>` tag is replaced by a `<strong>` tag

1. You want to add the class `active` to an element without removing its existing classes. Which code is correct?
a) `el.className = 'active'`
*b) `el.classList.add('active')`
c) `el.class = 'active'`
d) `el.setAttribute('class', 'active')`

1. If the `<h2>` contains `<span>Score: </span>42`, what is logged?
```js
const heading = document.querySelector('h2');
console.log(heading.textContent);
```
a) `<span>Score: </span>42`
b) `42`
*c) `Score: 42`
d) `undefined`

1. Which method checks whether an element currently has a given class?
a) `el.classList.get('name')`
b) `el.hasClass('name')`
*c) `el.classList.contains('name')`
d) `el.className.includes('name')`

1. `100` is a number. Will this work?
```js
document.querySelector('#score').textContent = 100;
```
*a) Yes — JavaScript automatically converts the number to a string for `textContent`
b) No — you must write `String(100)` first
c) No — `textContent` only accepts boolean values
d) It depends on the browser

1. You have a `<button id="btn">`. Which code reads the button's current text?
a) `document.querySelector('#btn').value`
*b) `document.querySelector('#btn').textContent`
c) `document.querySelector('#btn').src`
d) `document.querySelector('#btn').label`

1. `classList.toggle('hidden')` does what?
a) Always adds the class `hidden`
b) Always removes the class `hidden`
*c) Adds `hidden` if it is missing; removes it if it is present
d) Throws an error if the class does not exist

1. JavaScript inside a `<script>` tag at the bottom of `<body>` runs when:
a) The page starts loading
b) The user clicks anywhere
*c) The browser has parsed all the HTML above the script tag
d) Only after all images have loaded
