---
bank_name: "Session 15: Event Handling and Forms"
---

1. What does this do? `button.addEventListener('click', () => console.log('Clicked'));`
*a) Logs 'Clicked' every time button is clicked
b) Logs 'Clicked' once then stops
c) Error thrown
d) Nothing happens

1. What's the issue? `form.addEventListener('submit', () => { alert('Submitted'); });`
*a) Form will submit to server after alert (need preventDefault)
b) Code is perfect
c) Should use 'click' event
d) Cannot listen to forms

1. Fix this: `input.addEventListener('click', (e) => { e.preventDefault(); console.log(e.target.value); });`
*a) Use 'input' or 'change' event instead of 'click' for text input
b) Code is correct
c) Remove preventDefault
d) Cannot get value

1. What happens? `const btn = document.querySelector('button'); btn.addEventListener('click', handleClick); btn.addEventListener('click', handleClick);`
*a) handleClick executes twice per click (added twice)
b) Second listener overwrites first
c) Only executes once
d) Error thrown

1. What's logged? `<div id="parent"><button id="child">Click</button></div>` with `parent.addEventListener('click', () => console.log('Parent')); child.addEventListener('click', () => console.log('Child'));`
*a) "Child" then "Parent" (bubbling from child to parent)
b) "Parent" then "Child"
c) Only "Child"
d) Nothing

1. Fix this form handler: `form.addEventListener('submit', () => { const name = document.getElementById('name').value; alert(name); });`
*a) `form.addEventListener('submit', (e) => { e.preventDefault(); const name = document.getElementById('name').value; alert(name); });`
b) Code is correct
c) Use 'click' event
d) Cannot prevent submission

1. What does this return? `<input type="text" value="Hello">` with `const val = input.value;`
*a) "Hello" (current value of input)
b) undefined
c) null
d) Empty string

1. What's the output? `input.addEventListener('input', (e) => console.log(e.target.value));` (user types "Hi")
*a) "H" then "Hi" (fires on each character)
b) "Hi" only
c) Nothing
d) "Hi Hi"

1. Fix validation: `if (input.value = '') { alert('Required'); }`
*a) `if (input.value === '') { alert('Required'); }` (use === not =)
b) Code is correct
c) Use input.text instead
d) Cannot validate

1. What does this do? `e.stopPropagation()`
*a) Stops event from bubbling to parent elements
b) Stops default behavior
c) Removes event listener
d) Does nothing

1. Compare: `element.onclick = handler` vs `element.addEventListener('click', handler)`
*a) addEventListener can add multiple handlers, onclick only one
b) They are identical
c) onclick is better
d) addEventListener is deprecated

1. What happens? `button.addEventListener('click', function() { console.log(this); });` vs `button.addEventListener('click', () => console.log(this));`
*a) First logs button element, second logs window/undefined (arrow function)
b) Both log button
c) Both log window
d) Both throw error

1. Fix this: `document.querySelectorAll('button').addEventListener('click', handler);`
*a) `document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', handler));`
b) Code is correct
c) Use querySelector instead
d) Cannot add to multiple elements

1. What's the result? `input.value = 'New'; input.dispatchEvent(new Event('input'));`
*a) Sets value to "New" and triggers input event listeners
b) Only sets value, no event
c) Error thrown
d) Nothing happens

1. When does this fire? `window.addEventListener('DOMContentLoaded', () => console.log('Ready'));`
*a) When HTML is parsed (before images/stylesheets fully load)
b) When everything is loaded
c) Never fires
d) Immediately

1. What's logged? `form.addEventListener('submit', (e) => { e.preventDefault(); console.log('Submit prevented'); return false; });`
*a) "Submit prevented" and form doesn't submit
b) Form still submits
c) Nothing logged
d) Error thrown
