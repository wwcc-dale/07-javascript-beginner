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

You've already worked with objects like `{name: "Alex", phone: "555-1234"}`. Classes are blueprints that let you create many similar objects easily. Instead of manually creating each contact entry, you define a `Contact` class once and create as many contacts as you need. Today you'll learn to build and use classes.

---

## Reading: Classes Fundamentals (35 minutes)

### What Is a Class?

A class is a template for creating objects. It defines what properties and methods objects of that type will have.

**Real-world analogy:** A class is like a cookie cutter. The class is the cutter shape, and each cookie you make is an instance (object).

### Creating a Simple Class

```js
class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

// Create instances:
const contact1 = new Contact("Alex", "555-1234");
const contact2 = new Contact("Jordan", "555-5678");

console.log(contact1.name);   // "Alex"
console.log(contact2.phone);  // "555-5678"
```

**Breaking it down:**
- `class Contact` – Define a new class
- `constructor()` – Special method that runs when creating an instance
- `this.name` – Creates a property on the instance
- `new Contact()` – Creates a new instance of the class

### Why Use Classes?

Without classes (tedious):
```js
const contact1 = {name: "Alex", phone: "555-1234"};
const contact2 = {name: "Jordan", phone: "555-5678"};
const contact3 = {name: "Casey", phone: "555-9012"};
// Repeat for every contact...
```

With classes (clean):
```js
class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

const contact1 = new Contact("Alex", "555-1234");
const contact2 = new Contact("Jordan", "555-5678");
const contact3 = new Contact("Casey", "555-9012");
```

### Adding Methods to Classes

Methods are functions that belong to a class. They define what objects can do.

```js
class Track {
  constructor(title, artist, durationSeconds) {
    this.title = title;
    this.artist = artist;
    this.durationSeconds = durationSeconds;
  }

  isLong() {
    return this.durationSeconds > 240;  // longer than 4 minutes
  }

  getMinutes() {
    return Math.floor(this.durationSeconds / 60);
  }
}

const track1 = new Track("Stairway to Heaven", "Led Zeppelin", 482);
console.log(track1.isLong());     // true
console.log(track1.getMinutes()); // 8

const track2 = new Track("Happy Birthday", "Traditional", 20);
console.log(track2.isLong());     // false
console.log(track2.getMinutes()); // 0
```

### Classes vs Objects

**Object:** A single instance with specific values
```js
const alex = {name: "Alex", phone: "555-1234"};
```

**Class:** A blueprint for creating many objects
```js
class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

const alex = new Contact("Alex", "555-1234");
const jordan = new Contact("Jordan", "555-5678");
```

### Real-World Example: Recipe Class

```js
class Recipe {
  constructor(name, servings, caloriesPerServing) {
    this.name = name;
    this.servings = servings;
    this.caloriesPerServing = caloriesPerServing;
  }

  totalCalories() {
    return this.servings * this.caloriesPerServing;
  }

  scale(factor) {
    this.servings = this.servings * factor;
  }

  summary() {
    return `${this.name}: ${this.servings} servings, ${this.totalCalories()} cal total`;
  }
}

const soup = new Recipe("Tomato Soup", 4, 120);
console.log(soup.summary());      // "Tomato Soup: 4 servings, 480 cal total"
soup.scale(2);
console.log(soup.servings);       // 8
console.log(soup.totalCalories()); // 960
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
- Real examples with Contact and Track classes

Pause and type each example.

---

## Supplemental Practice: Building Classes (25 minutes)

### Scenario 1: Movie Class

```js
class Movie {
  constructor(title, director, durationMinutes) {
    this.title = title;
    this.director = director;
    this.durationMinutes = durationMinutes;
  }

  isFeatureLength() {
    return this.durationMinutes >= 60;
  }

  getSummary() {
    return `${this.title} by ${this.director} (${this.durationMinutes} min)`;
  }
}

const film = new Movie("Inception", "Nolan", 148);
console.log(film.isFeatureLength());  // true
console.log(film.getSummary());       // "Inception by Nolan (148 min)"
```

### Scenario 2: Vehicle Class

```js
class Vehicle {
  constructor(make, model, mileage) {
    this.make = make;
    this.model = model;
    this.mileage = mileage;
  }

  drive(miles) {
    this.mileage += miles;
  }

  isHighMileage() {
    return this.mileage > 100000;
  }
}

const car = new Vehicle("Toyota", "Camry", 45000);
car.drive(5000);
console.log(car.mileage);          // 50000
console.log(car.isHighMileage());  // false
```

### Scenario 3: Scoreboard Class

```js
class Scoreboard {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
    this.score1 = 0;
    this.score2 = 0;
  }

  addPoints(team, points) {
    if (team === 1) this.score1 += points;
    if (team === 2) this.score2 += points;
  }

  getLeader() {
    if (this.score1 > this.score2) return this.team1;
    if (this.score2 > this.score1) return this.team2;
    return "Tied";
  }
}

const board = new Scoreboard("Lions", "Tigers");
board.addPoints(1, 7);
board.addPoints(2, 3);
console.log(board.score1);      // 7
console.log(board.getLeader()); // "Lions"
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

- Try creating your own class for something you know (Movie, Recipe, Contact).
- Experiment with different methods.
- Ask your instructor if anything is unclear.

Next session: **Methods and Encapsulation**
