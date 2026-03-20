---
indent: 2
allowed_extensions:
- html
assignment_type: online
module: 3
name: 'Session 12: Dynamic Content Builder'
points: 20
position: 5
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 12.3
submission_types:
- online_upload
---

# Session 12: Dynamic Content Builder

Create and remove elements dynamically. Build interactive todo list.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `12-assignment.html`

## Getting Started

- buttons
- Download Starter File | 12-starter.html | primary | download

1. Open the starter file, save a copy as `12-assignment.html`, and complete each challenge.

## Level 1 – Core [15 pts](#pill:accent)

### Challenge 1: Card Builder
- Button "Add Card"
- Clicking creates div.card with h3 title, p content, "Delete" button
- Delete button removes that card

### Challenge 2: Todo List
- Input field, "Add" button, ul#todoList
- Adding creates li with text + delete button
- Delete removes that todo

### Challenge 3: Dynamic Table
- Array of 5 products: {name, price, stock}
- Create table dynamically with thead, tbody
- Each row has product data

### Challenge 4: Comment System
- Input + button for comments
- Each comment shows: text, timestamp, delete button
- Uses createElement for all elements

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: Photo Gallery
Dynamically create image grid from array of objects

### Challenge 6: Shopping List
Add items with quantity, mark as bought (toggle class), delete

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Complete CRUD App
Create, Read, Update, Delete items with full interface

---

## Before Submitting

- checklist: Before Submitting
- File named `12-assignment.html`
- All Level 1 challenges work correctly in the browser
- Elements created with `createElement` and appended correctly
- Delete buttons remove their parent element
- No JavaScript errors in the browser console
- Attempted Level 2 or 3 if time allowed