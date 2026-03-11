---
allowed_extensions:
- js
assignment_type: online
module: 2
name: 'Session 6: Building Your First Classes'
points: 20
position: 3
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 6.3
submission_types:
- online_upload
---

# Session 6: Building Your First Classes

Define classes with constructors and methods, create instances, and build practical OOP solutions.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `06-assignment.js`

## Getting Started

**[Download starter file](06-starter.zip)**

1. Open the starter file, save a copy as `06-assignment.js`, and complete each challenge.

## Level 1 – Core Tasks (15 points)

### Challenge 1: Student Class
```js
// TODO: Create a class called Student with:
// - Constructor that takes name and grade
// - Properties: name, grade
// - Method isPassing() that returns true if grade >= 70

// Test it:
// const student1 = new Student("Alex", 85);
// console.log(student1.isPassing()); // true
```

### Challenge 2: Product Class
```js
// TODO: Create a class called Product with:
// - Constructor that takes name, price, stock
// - Properties: name, price, stock
// - Method inStock() that returns true if stock > 0
// - Method buy(quantity) that reduces stock by quantity

// Test it:
// const laptop = new Product("Laptop", 999, 5);
// laptop.buy(2);
// console.log(laptop.stock); // 3
```

### Challenge 3: BankAccount Class
```js
// TODO: Create a class called BankAccount with:
// - Constructor that takes owner and balance
// - Properties: owner, balance
// - Method deposit(amount) that adds to balance
// - Method withdraw(amount) that subtracts from balance (if sufficient funds)

// Test it:
// const account = new BankAccount("Jordan", 1000);
// account.deposit(500);
// console.log(account.balance); // 1500
```

### Challenge 4: Book Class
```js
// TODO: Create a class called Book with:
// - Constructor that takes title, author, pages
// - Properties: title, author, pages, currentPage (start at 0)
// - Method read(numPages) that increases currentPage
// - Method percentComplete() that returns (currentPage / pages) * 100

// Test it:
// const book = new Book("JS Guide", "Jane Dev", 300);
// book.read(150);
// console.log(book.percentComplete()); // 50
```

## Level 2 – Stretch (3 points)

### Challenge 5: Timer Class
Create a Timer class with:
- Constructor takes seconds
- Method tick() decreases seconds by 1
- Method isFinished() returns true when seconds === 0
- Method reset(newSeconds) sets seconds to a new value

### Challenge 6: Multiple Instances
Create 3 different Student instances and use a loop to:
- Print each student's name
- Check if they're passing
- Count how many students are passing

## Level 3 – Advanced (2 points)

### Challenge 7: Grade Book System
Create a GradeBook class that:
- Has an array of Student instances
- Method addStudent(student) adds to the array
- Method getPassingCount() returns how many students are passing
- Method getAverageGrade() returns the average of all student grades
- Method getTopStudent() returns the student with the highest grade

Test with at least 4 students with different grades.