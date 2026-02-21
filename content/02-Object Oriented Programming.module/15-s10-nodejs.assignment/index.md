---
name: "Session 10: Building with Node.js and Modules"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-4"
  - "CLO-5"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
  - "zip"
---

# Session 10: Building with Node.js and Modules

Set up Node.js project, create modules, use npm packages, build a CLI utility.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP file with all project files

## Setup

1. Create a new directory: `session-10-project`
2. Navigate into it: `cd session-10-project`
3. Initialize: `npm init -y`
4. Add `"type": "module"` to package.json

## Level 1 – Core Tasks (15 points)

### Challenge 1: Create a Math Module
Create `math.js`:
```js
// TODO: Export functions add, subtract, multiply, divide
// Each takes two parameters and returns the result
```

Create `app.js`:
```js
// TODO: Import your math functions
// Test each one and log results
```

Run: `node app.js`

### Challenge 2: Create a Student Module
Create `Student.js`:
```js
// TODO: Export a Student class with constructor(name, grade)
// Include isPassing() method
```

Create `classroom.js`:
```js
// TODO: Import Student class
// Create 3 students and log their passing status
```

### Challenge 3: Use an npm Package
Install chalk:
```bash
npm install chalk
```

Create `colored.js`:
```js
// TODO: Import chalk
// Print 3 messages in different colors
```

### Challenge 4: File System Module
Create `file-writer.js`:
```js
// TODO: Import fs from 'fs'
// Write "Hello from Node.js!" to output.txt
// Read and log the file contents
```

## Level 2 – Stretch (3 points)

### Challenge 5: Utility Module
Create `utils.js` with functions:
- capitalize(str)
- reverse(str)  
- isPalindrome(str)

Use them in `utils-test.js`

### Challenge 6: npm Package Exploration
Install and use `validator` package to validate:
- Email addresses
- URLs
- Credit card numbers (test format only)

## Level 3 – Advanced (2 points)

### Challenge 7: CLI Calculator
Build `calculator.js` that:
- Reads command line arguments
- Performs calculations based on input
- Usage: `node calculator.js add 5 3` → outputs 8

Use `process.argv` to read arguments.
