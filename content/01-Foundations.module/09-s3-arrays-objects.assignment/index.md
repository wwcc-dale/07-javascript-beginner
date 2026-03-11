---
allowed_extensions:
- js
- txt
- zip
assignment_type: online
module: 1
name: 'Session 3: Building Objects for Real Data'
points: 20
position: 9
published: true
related_outcomes:
- CLO-1
session: 3.3
submission_types:
- online_upload
---

# Session 3: Building Objects for Real Data

## Overview

In this assignment you will create objects that represent real-world things. You'll practice defining properties, accessing them with dot notation, and using objects to organize data.

**Time Estimate:** 60–90 minutes  
**Points:** 20  
**Submit:** Your completed `03-assignment.js` file

---

## Getting Started

**[Download starter file](03-starter.js)**

1. Open the starter file.
2. Save as `03-assignment.js`.
3. Create the objects as instructed.
4. Test by accessing and logging properties.
5. Check that properties contain the expected values.

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Create a Student Object

Create an object with properties for a student.

```js
// TODO: Create an object called student with these properties:
// - name: "Alex"
// - email: "alex@school.edu"
// - grade: 88
// - enrolled: true

// Then log each property to verify it worked:
// console.log(student.name);
// console.log(student.email);
// console.log(student.grade);
// console.log(student.enrolled);

```

---

### Challenge 2: Create a Product Object

Create an object representing a product in a store.

```js
// TODO: Create an object called product with these properties:
// - name: "Wireless Mouse"
// - price: 29.99
// - inStock: true
// - quantity: 15

// Log at least two properties to verify they work

```

---

### Challenge 3: Update Object Properties

Create an object and then modify some of its properties.

```js
// TODO: Create an object called account with properties:
// - accountHolder: "Jordan"
// - balance: 1000
// - accountType: "Savings"

// Then:
// - Update the balance to 1200 (a deposit)
// - Log the new balance

```

---

### Challenge 4: Create a Book Object

Create an object that represents a book.

```js
// TODO: Create an object called book with these properties:
// - title: "Learning JavaScript"
// - author: "Jane Developer"
// - year: 2024
// - pages: 350

// Log the title and author to verify

```

---

## Level 2 – Stretch Tasks (3 points)

### Challenge 5: Car Rental

Create an object for a rental car and calculate some information.

```js
const rentalCar = {
  brand: "Toyota",
  model: "Camry",
  dailyRate: 50,
  daysRented: 3
};

// TODO: Calculate the total rental cost
// Hint: dailyRate * daysRented
// Log the total
```

---

### Challenge 6: Quiz Score

Create an object with quiz information and calculate the percentage.

```js
const quizScore = {
  studentName: "Casey",
  questionsCorrect: 9,
  totalQuestions: 10
};

// TODO: Calculate the percentage scored
// Hint: (questionsCorrect / totalQuestions) * 100
// Log the percentage
```

---

## Level 3 – Advanced Challenge (2 points)

### Challenge 7: Multiple Related Objects

Create THREE related objects (like student, course, grade) and combine their data.

Example:
- A student object with name and ID
- A course object with course name and credits
- A result object with student info, course info, and the grade received

Then create a summary that shows all the information together.

Output example:
```
Student: Alex
Course: Web Development 101
Grade: A
```

---

## Testing Your Work

Before submitting:
- Create each object as instructed
- Access properties using dot notation
- Verify all property values are correct
- For Level 2 and 3, verify calculations are correct
- Make sure code runs without errors

---

## Submission Checklist

- [ ] File named `03-assignment.js`
- [ ] All Level 1 objects are created correctly
- [ ] All properties have correct values
- [ ] Code runs without errors
- [ ] Attempted Level 2 or 3 if time allowed

---

## Getting Help

- Review the learning page examples
- Print out objects to see their structure
- Access one property at a time
- Ask your instructor if you're stuck

---

## Key Concepts

**Object:** A container for related data  
**Property:** A key-value pair in an object  
**Dot notation:** The standard way to access properties (object.property)  
**Modification:** You can change property values even in const objects

These patterns will be used constantly in future sessions!