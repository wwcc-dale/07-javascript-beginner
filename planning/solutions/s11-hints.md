# Session 11 Hints — DOM Selection and Modification

## General
- `document.getElementById('id')` returns one element.
- `document.querySelectorAll('.class')` returns a NodeList of all matches — use `forEach` to loop it.
- Always set `textContent` (for plain text) rather than `innerHTML` unless you need actual HTML tags.

## Challenge 1: Select and Modify
- Select the h1 and set its `textContent` after the page loads (inside a `<script>` at the bottom of `<body>`, or in a `DOMContentLoaded` listener).
- For numbering paragraphs: use the `index` parameter in `forEach` — `index + 1` gives you 1, 2, 3.

## Challenge 2: Dynamic List
- Create the `<li>` with `document.createElement('li')`, set its `textContent`, then `ul.appendChild(li)`.

## Challenge 3: User Profile
- Read from a JavaScript object and write to specific DOM elements.
  `document.getElementById('userName').textContent = user.name;`
- For the status: use a ternary: `user.online ? 'Online' : 'Offline'`

## Challenge 4: Image Gallery
- `img.src = 'url'` or `img.setAttribute('src', 'url')` — both work.
- Always set `alt` text too: `img.alt = 'description'`

## Challenge 5: Dynamic Table (Level 2)
- Build the header row first (with `<th>` elements), then loop your data array for body rows.
- `table.insertRow()` adds a row; `row.insertCell()` adds a cell to that row.

## Challenge 7: Mini Dashboard (Level 3)
- Create a container div, build child elements inside a loop, then append the container to `<body>`.
- All data comes from JS objects — nothing is hardcoded in HTML.
