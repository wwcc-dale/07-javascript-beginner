# Session 12 Hints — Dynamic Content Builder

## General
- `document.createElement()` creates an element in memory only.
  It won't appear on the page until you call `parent.appendChild(element)`.
- Always add event listeners *before* appending the element, to avoid a race condition.

## Challenge 1: Card Builder
- The Delete button's click handler should call `.remove()` on the **card div**, not on the button itself.
  Inside the handler, `card.remove()` works because `card` is in the closure.

## Challenge 2: Todo List
- Check `input.value.trim()` before creating — do nothing if it's empty.
- Clear the input after adding: `input.value = '';`

## Challenge 3: Dynamic Table
- Build `<thead>` with `<th>` cells for headers and `<tbody>` with `<tr>` rows for data.
- Use `document.createElement` for every element — don't use `innerHTML` for the rows.

## Challenge 4: Comment System
- Capture the timestamp *when the button is clicked*, not when the page loads:
  `new Date().toLocaleTimeString()` inside the click handler.

## Challenge 6: Shopping List (Level 2)
- "Mark as bought" = `item.classList.toggle('bought')`. Define `.bought { text-decoration: line-through; }` in CSS.

## Challenge 7: CRUD App (Level 3)
- Store items in a JavaScript array. Re-render the list from the array every time it changes.
  This "source of truth" pattern is more reliable than trying to edit the DOM directly.
