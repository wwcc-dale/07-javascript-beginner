# Session 11 Quiz – JavaScript and the DOM

Test your understanding of DOM selection, reading and modifying content, and the relationship between JavaScript and HTML.

**Topics covered:** `querySelector`, `querySelectorAll`, `getElementById`, `textContent`, `innerHTML`, `setAttribute`, `classList`

14 questions · 18 minutes · 3 attempts · 14 points

---

:::bank s11-dom-basics.bank

## Q1

Which method selects the **first** element on the page that matches a CSS selector?

- [x] `document.querySelector('#title')`
- [ ] `document.querySelectorAll('#title')`
- [ ] `document.getElement('#title')`
- [ ] `document.find('#title')`

> **Correct.** `querySelector` returns the first match. `querySelectorAll` returns a NodeList of all matches.

---

## Q2

```html
<h1 id="greeting">Hello</h1>
```
```js
document.querySelector('#greeting').textContent = 'Welcome!';
```

What does the page now display in the `<h1>`?

- [ ] `Hello`
- [x] `Welcome!`
- [ ] Nothing — you can't change `textContent` after the page loads
- [ ] `Hello Welcome!`

> **Correct.** Assigning to `textContent` replaces the element's text content.

---

## Q3

What is the DOM?

- [ ] A programming language for styling web pages
- [ ] A file format for saving HTML documents
- [x] A tree of JavaScript objects representing every element on the page
- [ ] The browser's network request system

> **Correct.** The DOM (Document Object Model) is the browser's internal representation of the HTML page as a tree of objects that JavaScript can read and modify.

---

## Q4

```js
const btn = document.querySelector('#submit');
btn.setAttribute('disabled', 'true');
```

What does this code do?

- [ ] Deletes the button from the page
- [x] Adds the `disabled` attribute to the button, preventing it from being clicked
- [ ] Changes the button's text to "true"
- [ ] Selects all elements with the class `submit`

> **Correct.** `setAttribute` adds or changes an HTML attribute. Setting `disabled` prevents user interaction with form elements.

---

## Q5

Which selector string targets elements with **class** `card`?

- [ ] `'#card'`
- [x] `'.card'`
- [ ] `'card'`
- [ ] `'[card]'`

> **Correct.** `.card` is the CSS class selector. `#card` selects by ID. `card` alone selects by tag name.

---

## Q6

```js
const items = document.querySelectorAll('li');
```

What type does `items` have?

- [ ] An `Array`
- [ ] A single `HTMLElement`
- [x] A `NodeList`
- [ ] A `HTMLCollection`

> **Correct.** `querySelectorAll` returns a `NodeList`. You can loop over it with `forEach`, but it is not a full JavaScript `Array`.

---

## Q7

```js
const el = document.querySelector('p');
el.innerHTML = '<strong>Bold text</strong>';
```

What happens?

- [ ] The paragraph shows the literal string `<strong>Bold text</strong>`
- [x] The paragraph renders **Bold text** in bold
- [ ] An error is thrown because `innerHTML` is read-only
- [ ] The `<p>` tag is replaced by a `<strong>` tag

> **Correct.** `innerHTML` parses HTML tags. `textContent` treats everything as plain text.

---

## Q8

You want to add the class `active` to an element without removing its existing classes. Which code is correct?

- [ ] `el.className = 'active'`
- [x] `el.classList.add('active')`
- [ ] `el.class = 'active'`
- [ ] `el.setAttribute('class', 'active')`

> **Correct.** `classList.add` appends the class. Assigning to `className` replaces all existing classes.

---

## Q9

```js
const heading = document.querySelector('h2');
console.log(heading.textContent);
```

If the `<h2>` contains `<span>Score: </span>42`, what is logged?

- [ ] `<span>Score: </span>42`
- [ ] `42`
- [x] `Score: 42`
- [ ] `undefined`

> **Correct.** `textContent` returns all the text inside the element and its children, stripping HTML tags.

---

## Q10

Which method checks whether an element currently has a given class?

- [ ] `el.classList.get('name')`
- [ ] `el.hasClass('name')`
- [x] `el.classList.contains('name')`
- [ ] `el.className.includes('name')`

> **Correct.** `classList.contains('name')` returns `true` if the class is present.

---

## Q11

```js
document.querySelector('#score').textContent = 100;
```

`100` is a number. Will this work?

- [x] Yes — JavaScript automatically converts the number to a string for `textContent`
- [ ] No — you must write `String(100)` first
- [ ] No — `textContent` only accepts boolean values
- [ ] It depends on the browser

> **Correct.** `textContent` accepts any value and coerces it to a string.

---

## Q12

You have a `<button id="btn">`. Which code reads the button's current text?

- [ ] `document.querySelector('#btn').value`
- [x] `document.querySelector('#btn').textContent`
- [ ] `document.querySelector('#btn').src`
- [ ] `document.querySelector('#btn').label`

> **Correct.** `textContent` reads the visible text content of any element.

---

## Q13

`classList.toggle('hidden')` does what?

- [ ] Always adds the class `hidden`
- [ ] Always removes the class `hidden`
- [x] Adds `hidden` if it is missing; removes it if it is present
- [ ] Throws an error if the class does not exist

> **Correct.** `toggle` is useful for show/hide behaviour without checking the current state first.

---

## Q14

JavaScript inside a `<script>` tag at the bottom of `<body>` runs when:

- [ ] The page starts loading
- [ ] The user clicks anywhere
- [x] The browser has parsed all the HTML above the script tag
- [ ] Only after all images have loaded

> **Correct.** A `<script>` at the bottom of `<body>` executes after all the HTML above it is parsed, so all elements are available in the DOM.

---

:::end
