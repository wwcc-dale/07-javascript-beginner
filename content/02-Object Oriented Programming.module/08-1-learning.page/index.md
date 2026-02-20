---
name: "Session 8: Working with Multiple Objects"
published: true
related_outcomes:
  - "CLO-2"
  - "CLO-3"
---

# Session 8: Working with Multiple Objects

## Learning Outcomes

- Manage arrays of object instances
- Iterate through collections of objects
- Use class methods to work with multiple related objects
- Build systems that coordinate multiple objects

---

## Introduction (5 minutes)

Real programs rarely work with just one object. You'll have arrays of students, products, or users. Today you'll learn to manage collections of objects and build systems where objects work together.

---

## Reading: Managing Object Collections (35 minutes)

### Arrays of Objects

```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  
  isPassing() {
    return this.grade >= 70;
  }
}

const students = [
  new Student("Alex", 85),
  new Student("Jordan", 92),
  new Student("Casey", 68)
];

// Loop through all students
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].isPassing());
}
```

### Container Classes

A container class manages a collection of other objects.

```js
class Classroom {
  constructor(name) {
    this.name = name;
    this.students = [];
  }
  
  addStudent(student) {
    this.students.push(student);
  }
  
  getPassingCount() {
    let count = 0;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].isPassing()) {
        count++;
      }
    }
    return count;
  }
  
  getAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.students.length; i++) {
      sum += this.students[i].grade;
    }
    return sum / this.students.length;
  }
}

const classroom = new Classroom("CS 101");
classroom.addStudent(new Student("Alex", 85));
classroom.addStudent(new Student("Jordan", 92));
console.log(classroom.getAverageGrade()); // 88.5
```

### Objects Working Together

```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }
  
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].product.price * this.items[i].quantity;
    }
    return total;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const cart = new ShoppingCart();
cart.addItem(new Product("Laptop", 999), 1);
cart.addItem(new Product("Mouse", 25), 2);
console.log(cart.getTotal()); // 1049
```

---

## Assignment (60–90 minutes)

Build a Library system with Book and Library classes that manage multiple books.
