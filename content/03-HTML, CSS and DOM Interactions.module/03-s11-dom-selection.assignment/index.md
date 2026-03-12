---
allowed_extensions:
- html
assignment_type: online
module: 3
name: 'Session 11: DOM Selection and Modification'
points: 20
position: 3
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 11.2
submission_types:
- online_upload
---

# Session 11: DOM Selection and Modification

Select elements, modify content, and build dynamic updates.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `11-assignment.html`

## Getting Started

- buttons
- Download Starter File | 11-starter.html | primary | download

1. Open the starter file, save a copy as `11-assignment.html`, and complete each challenge.

## Level 1 – Core Tasks [15 pts](#pill:accent)

Build an HTML file with embedded JavaScript that:

### Challenge 1: Select and Display
- Create h1, 3 paragraphs with class "info", button with id "updateBtn"
- Use JS to select h1 and change textContent to "DOM Master"
- Select all .info paragraphs, loop through and number them (1., 2., 3.)

### Challenge 2: Dynamic List
- Create empty ul with id "skills"
- In JS, create array: ['JavaScript', 'HTML', 'CSS', 'DOM']
- Loop through array, create li for each, append to ul

### Challenge 3: User Profile
- Create div with id "profile" containing empty h2 (id="userName"), p (id="userEmail"), p (id="userStatus")
- Create object: {name: 'Alex', email: 'alex@example.com', online: true}
- Use JS to populate elements with object data
- Status should show "Online" or "Offline"

### Challenge 4: Image Gallery
- Create 3 img tags with placeholder src
- Use JS to update src attributes to actual image URLs
- Update alt text for each

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: Dynamic Table
Build table with headers (Name, Score) and 5 student rows from array of objects

### Challenge 6: Attribute Manager
Build form that shows/updates element attributes live

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Mini Dashboard
Build dashboard that displays:
- Welcome message with user name
- Stats cards (created dynamically)
- List of recent activities
- All data from JS objects, all elements created/populated dynamically

---

## Before Submitting

- checklist: Before Submitting
- File named `11-assignment.html`
- All Level 1 challenges work correctly in the browser
- DOM elements selected and modified using correct methods
- Dynamic list and user profile populate from JavaScript data
- No JavaScript errors in the browser console
- Attempted Level 2 or 3 if time allowed