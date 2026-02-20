---
name: "Session 6: Introduction to Classes"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
---

# Session 6: Introduction to Classes

## Learning Outcomes

By the end of this session, you will be able to:
- Define classes with constructors and properties.
- Create instances of classes using the `new` keyword.
- Understand the difference between classes and objects.
- Use instance methods to add behavior to objects.

---

## Introduction (5 minutes)

You've already worked with objects like `{name: "Alex", grade: 85}`. Classes are blueprints that let you create many similar objects easily. Instead of manually creating each student object, you define a `Student` class once and create as many students as you need. Today you'll learn to build and use classes.

---

## Reading: Classes Fundamentals (35 minutes)

### What Is a Class?

A class is a template for creating objects. It defines what properties and methods objects of that type will have.

**Real-world analogy:** A class is like a cookie cutter. The class is the cutter shape, and each cookie you make is an instance (object).

### Creating a Simple Class

```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

// Create instances:
const student1 = new Student("Alex", 85);
const student2 = new Student("Jordan", 92);

console.log(student1.name);   // "Alex"
console.log(student2.grade);  // 92
```

**Breaking it down:**
- `class Student` – Define a new class
- `constructor()` – Special method that runs when creating an instance
- `this.name` – Creates a property on the instance
- `new Student()` – Creates a new instance of the class

### Why Use Classes?

Without classes (tedious):
```js
const student1 = {name: "Alex", grade: 85};
const student2 = {name: "Jordan", grade: 92};
const student3 = {name: "Casey", grade: 78};
// Repeat for every student...
```

With classes (clean):
```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const student1 = new Student("Alex", 85);
const student2 = new Student("Jordan", 92);
const student3 = new Student("Casey", 78);
```

### Adding Methods to Classes

Methods are functions that belong to a class. They define what objects can do.

```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  isPassing() {
    return this.grade >= 70;
  }

  getGradeLetter() {
    if (this.grade >= 90) return "A";
    if (this.grade >= 80) return "B";
    if (this.grade >= 70) return "C";
    return "F";
  }
}

const student1 = new Student("Alex", 85);
console.log(student1.isPassing());      // true
console.log(student1.getGradeLetter()); // "B"

const student2 = new Student("Jordan", 65);
console.log(student2.isPassing());      // false
console.log(student2.getGradeLetter()); // "F"
```

### Classes vs Objects

**Object:** A single instance with specific values
```js
const alex = {name: "Alex", grade: 85};
```

**Class:** A blueprint for creating many objects
```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const alex = new Student("Alex", 85);
const jordan = new Student("Jordan", 92);
```

### Real-World Example: Book Class

```js
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = 0;
  }

  read(numPages) {
    this.currentPage += numPages;
    if (this.currentPage > this.pages) {
      this.currentPage = this.pages;
    }
  }

  percentComplete() {
    return (this.currentPage / this.pages) * 100;
  }
}

const book1 = new Book("JavaScript Basics", "Jane Dev", 300);
book1.read(50);
console.log(book1.currentPage);        // 50
console.log(book1.percentComplete());  // 16.67
```

### The `this` Keyword

Inside a class method, `this` refers to the specific instance you're working with.

```js
class Counter {
  constructor(startValue) {
    this.count = startValue;
  }

  increment() {
    this.count++;  // this.count refers to THIS counter's count
  }
}

const counter1 = new Counter(0);
const counter2 = new Counter(10);

counter1.increment();
console.log(counter1.count);  // 1
console.log(counter2.count);  // 10 (unchanged)
```

---

## Video Tutorial: Classes and Instances (20 minutes)

Watch: `assets/videos/06-classes-intro.mp4`

This video covers:
- Defining classes with constructors
- Creating instances with `new`
- Adding methods to classes
- Understanding `this`
- Real examples with Student and Product classes

Pause and type each example.

---

## Supplemental Practice: Building Classes (25 minutes)

### Scenario 1: Product Class

```js
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  inStock() {
    return this.stock > 0;
  }

  buy(quantity) {
    if (quantity <= this.stock) {
      this.stock -= quantity;
      return true;
    }
    return false;
  }
}

const laptop = new Product("Laptop", 999, 5);
console.log(laptop.inStock());    // true
laptop.buy(2);
console.log(laptop.stock);        // 3
```

### Scenario 2: BankAccount Class

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

const account = new BankAccount("Alex", 1000);
account.deposit(500);
console.log(account.balance);  // 1500
account.withdraw(200);
console.log(account.balance);  // 1300
```

### Scenario 3: Timer Class

```js
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  tick() {
    if (this.seconds > 0) {
      this.seconds--;
    }
  }

  isFinished() {
    return this.seconds === 0;
  }

  reset(newSeconds) {
    this.seconds = newSeconds;
  }
}

const timer = new Timer(10);
timer.tick();
console.log(timer.seconds);      // 9
console.log(timer.isFinished()); // false
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 6 Practice Quiz** in Canvas.

Focus on:
- Class syntax and constructors
- Creating instances with `new`
- Using `this` in methods
- Difference between classes and objects

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 6: Building Your First Classes"**.

You will:
- Define classes with constructors
- Create multiple instances
- Add methods that use `this`
- Build practical classes for real scenarios

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Classes are blueprints** for creating objects with shared structure.
- **Constructors** initialize new instances with starting values.
- **Methods** define what objects can do.
- **`this`** refers to the specific instance you're working with.
- **Instances** are individual objects created from a class.

### How This Connects to Your Learning

Next session, you'll dive deeper into methods and learn about **encapsulation**—hiding internal details and controlling how data is accessed and modified.

### Questions?

- Try creating your own class for something you know (Movie, Recipe, Car).
- Experiment with different methods.
- Ask your instructor if anything is unclear.

Next session: **Methods and Encapsulation**
