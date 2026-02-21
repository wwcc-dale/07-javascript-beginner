---
bank_name: "Session 14: DOM Manipulation and Selection"
---

1. What does this return? `document.querySelector('.box p')`
*a) First `<p>` element inside any element with class "box"
b) All `<p>` elements
c) First element with class "box"
d) Nothing

1. Fix this code: `const el = document.getElementById('#header');`
*a) `const el = document.getElementById('header');` (no # needed)
b) Code is correct
c) Use querySelector instead
d) Cannot select by ID

1. What's the result? `const div = document.createElement('div'); div.textContent = '<b>Bold</b>';`
*a) Creates div with literal text "<b>Bold</b>" (not parsed as HTML)
b) Creates div with bold text
c) Error thrown
d) Creates empty div

1. What does this do? `element.classList.toggle('active')`
*a) Adds 'active' if missing, removes if present
b) Only adds class
c) Only removes class
d) Does nothing

1. Compare: `element.textContent = 'text'` vs `element.innerHTML = 'text'`
*a) textContent is safer (doesn't parse HTML), innerHTML parses tags
b) They are identical
c) innerHTML is safer
d) Both parse HTML

1. What happens? `const items = document.querySelectorAll('.item'); items[0].remove();`
*a) First item with class 'item' is removed from DOM
b) All items removed
c) Nothing happens
d) Error thrown

1. Fix this: `document.querySelector('p').style.background-color = 'red';`
*a) `document.querySelector('p').style.backgroundColor = 'red';` (camelCase)
b) Code is correct
c) Use .css() instead
d) Cannot set styles

1. What's returned? `const list = document.querySelectorAll('li'); console.log(typeof list);`
*a) 'object' (NodeList is an object)
b) 'array'
c) 'nodelist'
d) 'list'

1. What does this create? `const p = document.createElement('p'); p.innerHTML = 'Hello <strong>World</strong>'; document.body.appendChild(p);`
*a) Paragraph with "Hello World" (World in bold) appended to body
b) Paragraph with literal HTML text
c) Error thrown
d) Nothing appended

1. What's wrong? `const el = document.querySelector('.box'); el.classList.add('active', 'visible');`
*a) Nothing wrong (can add multiple classes)
b) Can only add one class at a time
c) Should use className
d) Invalid syntax

1. What does this return? `document.getElementById('missing')`
*a) null (element doesn't exist)
b) undefined
c) Error thrown
d) Empty element

1. Compare: `parent.append(child)` vs `parent.appendChild(child)`
*a) append() can take multiple nodes and strings, appendChild() takes one node
b) They are identical
c) appendChild is newer
d) append doesn't exist

1. What happens? `const el = document.querySelector('p'); el.remove(); console.log(el.textContent);`
*a) Logs text content (element still in memory after remove)
b) Logs null
c) Error thrown
d) Logs undefined

1. Fix this: `document.querySelectorAll('.item').style.display = 'none';`
*a) `document.querySelectorAll('.item').forEach(el => el.style.display = 'none');`
b) Code is correct
c) Use querySelector instead
d) Cannot hide multiple elements

1. What's the output? `const div = document.createElement('div'); console.log(div.parentNode);`
*a) null (not attached to DOM yet)
b) document.body
c) undefined
d) Error thrown

1. What does this do? `element.setAttribute('data-id', '123'); const id = element.dataset.id;`
*a) Sets data-id attribute, then gets it via dataset (id is '123')
b) Error thrown
c) dataset.id is undefined
d) Can only use getAttribute
