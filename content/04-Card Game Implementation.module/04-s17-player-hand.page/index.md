---
name: "Session 17: Inheritance, Subclasses, and Object Graphs"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
  - "CLO-5"
---

# Session 17: Inheritance, Subclasses, and Object Graphs

## Learning Outcomes

By the end of this session, you will be able to:
- Use `extends` and `super` to create a subclass that inherits from a parent
- Override parent methods and add new methods in a subclass
- Build an object graph where one class owns arrays of another
- Use a rotation loop to distribute items across multiple buckets
- Sort an array of objects using a custom comparator

---

## Introduction (5 minutes)

Your Spades game has a working `Card` and `Deck`. Now you need the humans and AI that will use those cards. That requires two more class techniques: **inheritance** for building specialized versions of a class, and **object graphs** for building structures where one object owns collections of others.

---

## Reading: Inheritance and Object Graphs (35 minutes)

### Inheritance with `extends` and `super`

Inheritance lets you define a more specialized version of an existing class without rewriting everything:

```js
class Vehicle {
  constructor(make, model, year) {
    this.make  = make;
    this.model = model;
    this.year  = year;
    this.speed = 0;
  }

  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  accelerate(amount) {
    this.speed += amount;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(make, model, year, batteryKwh) {
    super(make, model, year);   // Must call super() first — runs parent constructor
    this.batteryKwh  = batteryKwh;
    this.chargeLevel = 100;     // Additional property only on ElectricVehicle
  }

  describe() {
    // Override parent method and extend it
    return `${super.describe()} [Electric, ${this.batteryKwh} kWh]`;
  }

  charge() {
    this.chargeLevel = 100;
  }
}

const car = new ElectricVehicle('Tesla', 'Model 3', 2023, 82);
console.log(car.describe());    // "2023 Tesla Model 3 [Electric, 82 kWh]"
car.accelerate(30);             // Inherited from Vehicle
console.log(car.speed);         // 30
```

**Rules:**
- `super(...)` in the constructor calls the parent constructor and must come before `this`
- Methods defined in the subclass override same-named methods in the parent
- `super.methodName()` calls the parent version of an overridden method

---

### The `instanceof` Check

You can check whether an object is an instance of a particular class (or its parent):

```js
const ev = new ElectricVehicle('Rivian', 'R1T', 2024, 135);

console.log(ev instanceof ElectricVehicle);  // true
console.log(ev instanceof Vehicle);           // true (it IS a Vehicle too)
console.log(ev instanceof Object);            // true (everything is an Object)
```

This is useful when you have a mixed array and need to handle subclass instances differently:

```js
const fleet = [
  new Vehicle('Ford', 'F-150', 2022),
  new ElectricVehicle('Tesla', 'Model Y', 2023, 75)
];

fleet.forEach(v => {
  if (v instanceof ElectricVehicle) {
    v.charge();
    console.log(`${v.describe()} — charged`);
  } else {
    console.log(`${v.describe()} — gas vehicle`);
  }
});
```

---

### Object Graphs: One Object Owns Arrays of Others

Real programs are rarely a single object — they form **graphs** where objects own references to other objects. A fleet manager owns an array of vehicles; each vehicle owns a maintenance log:

```js
class FleetManager {
  constructor(companyName) {
    this.companyName = companyName;
    this.vehicles    = [];     // Owns an array of Vehicle objects
    this.teamSize    = 0;
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  assignVehicle(vehicle, driverName) {
    vehicle.driver = driverName;  // Add a property to an owned object
  }

  totalVehicles() {
    return this.vehicles.length;
  }

  // Find all vehicles by a specific driver
  vehiclesForDriver(name) {
    return this.vehicles.filter(v => v.driver === name);
  }
}
```

---

### Rotation Loops

A **rotation loop** distributes items across multiple buckets in a round-robin pattern. This is how cards are dealt in real card games — one to each player in order, repeatedly:

```js
// Distribute 20 tasks across 4 workers
const tasks   = Array.from({ length: 20 }, (_, i) => `Task-${i + 1}`);
const workers = [[], [], [], []];

for (const task of tasks) {
  // (index of current task) % 4 determines which worker gets it
}
```

A simpler way to think about it: use a nested loop — outer loop repeats N times, inner loop goes through each bucket once:

```js
for (let round = 0; round < 5; round++) {      // 5 rounds
  for (const worker of workers) {
    worker.push(tasks.shift());                  // Give next task to each worker
  }
}

workers.forEach((w, i) => console.log(`Worker ${i}: ${w.length} tasks`));
// Each worker gets exactly 5 tasks
```

---

### Sorting Objects with a Custom Comparator

`Array.sort()` takes an optional comparator function that returns a negative, zero, or positive number:

```js
const books = [
  { title: 'Dune',       year: 1965, pages: 412 },
  { title: 'Foundation', year: 1951, pages: 255 },
  { title: 'Neuromancer',year: 1984, pages: 271 }
];

// Sort by year (oldest first)
books.sort((a, b) => a.year - b.year);
console.log(books[0].title);  // "Foundation" (1951)

// Sort by pages (largest first), then by year as tiebreaker
books.sort((a, b) => {
  const pageDiff = b.pages - a.pages;
  if (pageDiff !== 0) return pageDiff;
  return a.year - b.year;   // Tiebreaker
});
```

**Key rule:** `a - b` sorts ascending; `b - a` sorts descending. For a multi-level sort, compute the primary difference first — if it's zero, fall through to the secondary difference.

---

## Video Tutorial: Inheritance and Object Graphs (20 minutes)

Watch: `assets/videos/17-inheritance-object-graphs.mp4`

Covers:
- `extends` and `super` step by step with the Vehicle example
- Building an object graph — `FleetManager` owning `Vehicle` instances
- The rotation loop for even distribution
- Multi-key sort comparators

---

## Supplemental Practice (25 minutes)

### Exercise 1: Animal Subclass

Write an `Animal` class with `name`, `sound`, and a `speak()` method that returns `"[name] says [sound]"`. Create a `Dog` subclass that extends `Animal`, calls `super` with `'Woof'`, and adds a `fetch(item)` method that returns `"[name] fetches the [item]!"`. Verify that a `Dog` instance works with both `speak()` and `fetch()`.

### Exercise 2: Distribute Items

Create an array of 52 numbers (1–52). Distribute them evenly across 4 arrays using a rotation loop (inner/outer loop pattern). Verify each of the 4 arrays has exactly 13 items.

### Exercise 3: Sort by Two Keys

Create an array of 10 employee objects: `{ name, department, salary }`. Sort them first by department alphabetically, then by salary descending within each department.

### Exercise 4: `instanceof` Filter

Create a mixed array containing both `Animal` and `Dog` instances. Use `instanceof` to separate them into two arrays: one for all animals, one for only dogs.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 17 Practice Quiz** in Canvas.

Focus on:
- Why `super()` must be called before `this` in a subclass constructor
- The difference between overriding a method and calling `super.method()`
- How a rotation loop distributes items evenly across buckets
- How the sort comparator controls ascending vs. descending order

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 17: Player, AIPlayer, and Dealing"**.

You will apply these patterns to build `Player.js`, `AIPlayer.js`, and the dealing logic in `SpadesGame.js`.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`extends`** creates a subclass; **`super()`** calls the parent constructor
- Subclasses inherit all parent methods and can override or add to them
- **Object graphs** model real-world "has-a" relationships — `FleetManager` has vehicles
- **Rotation loops** distribute items evenly using nested loops (outer = rounds, inner = buckets)
- **Multi-key sort** falls through from primary to secondary difference when the primary is zero

### How This Connects to the Assignment

The assignment asks you to build a Player class, an AIPlayer subclass, and a game object that manages teams and deals cards using a rotation loop. The patterns in this reading map directly to those challenges.

Next session: **Session 18 — Conditional Logic, Filtering, and Comparison**
