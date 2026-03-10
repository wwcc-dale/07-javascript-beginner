# Session 3: Arrays and Objects

## Learning Outcomes

By the end of this session, you will be able to:
- Create arrays to store ordered lists of values.
- Access array elements by index and check an array's length.
- Add and remove items from an array using `.push()`, `.pop()`, and `.unshift()`.
- Create and use objects to organize related data.
- Access object properties using dot notation and bracket notation.
- Understand when to use arrays vs. objects.

---

## Introduction (5 minutes)

So far you've stored one value in one variable. But real programs deal with collections: a list of quiz scores, a set of product names, a roster of students. JavaScript gives you two tools for this: **arrays** (ordered lists) and **objects** (named bundles of data). Today you'll learn both.

---

## Reading: Arrays (30 minutes)

### What Is an Array?

An array is an ordered list of values stored in a single variable. Each value is called an **element**, and each element has a position called an **index** (starting at 0).

**Real-world analogy:** A to-do list is an array — items are in order, and you can add or remove items from either end.

### Creating an Array

```js
const fruits = ["apple", "banana", "cherry"];
const scores = [85, 92, 78, 88];
const mixed = ["hello", 42, true];   // arrays can hold any type
```

Use square brackets `[]` with items separated by commas.

### Accessing Elements by Index

Indexes start at **0**, not 1.

```js
const colors = ["red", "green", "blue"];

console.log(colors[0]);  // "red"
console.log(colors[1]);  // "green"
console.log(colors[2]);  // "blue"
```

**Common mistake:** Asking for `colors[3]` on a 3-item array returns `undefined` — there is no fourth slot.

### The `.length` Property

`.length` tells you how many elements are in the array.

```js
const cities = ["Austin", "Denver", "Portland"];
console.log(cities.length);   // 3

// Last element — works for any length:
console.log(cities[cities.length - 1]);  // "Portland"
```

### Mutating an Array

Arrays are **mutable** — you can change them after creation.

| Method | What It Does | Example |
|--------|-------------|---------|
| `.push(val)` | Add to the **end** | `arr.push("x")` |
| `.pop()` | Remove from the **end** | `arr.pop()` |
| `.unshift(val)` | Add to the **front** | `arr.unshift("x")` |

```js
const tasks = ["email", "report"];

tasks.push("meeting");
console.log(tasks);  // ["email", "report", "meeting"]

tasks.pop();
console.log(tasks);  // ["email", "report"]

tasks.unshift("standup");
console.log(tasks);  // ["standup", "email", "report"]
```

### Why Use Arrays?

1. **Order matters** — elements stay in the sequence you put them in
2. **Same kind of data** — a list of scores, a list of names
3. **Works with loops** — you'll use `.length` and indexes to process every item (Session 4)

### Real-World Array Examples

**Example 1: Shopping Cart**

```js
const cart = ["shirt", "shoes", "hat"];
console.log("Items in cart:", cart.length);  // 3
cart.push("socks");
console.log(cart[3]);  // "socks"
```

**Example 2: Quiz Scores**

```js
const scores = [92, 85, 78, 90];
console.log("First score:", scores[0]);   // 92
console.log("Last score:", scores[scores.length - 1]);  // 90
```

**Example 3: Waiting List**

```js
const waitlist = ["Morgan", "Jordan", "Casey"];
waitlist.push("Alex");          // Alex joins end
const served = waitlist.shift(); // Morgan is served (removes first)
console.log(served);            // "Morgan"
console.log(waitlist);          // ["Jordan", "Casey", "Alex"]
```

> **Note:** `.shift()` removes and returns the first element — the counterpart to `.unshift()`.

---

## Reading: Objects and Properties (30 minutes)

### What Is an Object?

An object is a container that holds related information (properties) and actions (methods). Properties are key-value pairs.

**Real-world analogy:** An event listing has properties like name, date, and attendees. An object groups these together.

### Creating a Simple Object

```js
const event = {
  name: "Web Dev Workshop",
  date: "2026-03-15",
  attendees: 42,
  isPublic: true
};

console.log(event.name);      // "Web Dev Workshop"
console.log(event.attendees); // 42
```

### Accessing Properties

**Dot notation** (most common):
```js
let eventName = event.name;
console.log(eventName);  // "Web Dev Workshop"
```

**Bracket notation** (useful with variable keys):
```js
let eventName = event["name"];
console.log(eventName);  // "Web Dev Workshop"
```

### Modifying Properties

```js
const event = {
  name: "Web Dev Workshop",
  attendees: 42
};

event.attendees = 50;  // Update the attendees
console.log(event.attendees);  // 50
```

### Objects in Real Scenarios

**Example 1: User Profile**

```js
const user = {
  username: "jordan_codes",
  password: "secret123",
  loginCount: 15,
  lastLogin: "2026-01-31"
};

console.log(user.username);      // "jordan_codes"
console.log(user.loginCount);    // 15
user.loginCount = 16;            // Update it
```

**Example 2: Flight Info**

```js
const flight = {
  airline: "SkyLine",
  destination: "Denver",
  durationHours: 2.5,
  onTime: true
};

console.log(flight.airline);              // "SkyLine"
console.log(flight.durationHours * 60);  // 150 (minutes)
```

**Example 3: Quiz Result**

```js
const quizResult = {
  studentName: "Casey",
  score: 92,
  totalQuestions: 10,
  questionsCorrect: 9,
  passingScore: 70
};

console.log("Student:", quizResult.studentName);
console.log("Passed:", quizResult.score >= quizResult.passingScore);
```

### Why Use Objects?

1. **Organization** – Group related data together
2. **Readability** – `student.name` is clearer than `name_variable`
3. **Scalability** – Easy to add more properties
4. **Real-world modeling** – Objects mirror how we think about the world

---

## Video Tutorial: Arrays and Objects (20 minutes)

Watch: `assets/videos/03-arrays-objects.mp4`

This video covers:
- Creating arrays with square brackets
- Accessing elements by index
- Using `.push()`, `.pop()`, `.unshift()` to change arrays
- Creating objects with curly braces
- Using dot and bracket notation
- When to reach for an array vs. an object

Pause and type along with examples.

---

## Supplemental Practice: Arrays and Objects (25 minutes)

### Scenario 0: Array Warm-Up

```js
const grades = [88, 95, 72, 61, 90];

console.log(grades[0]);               // 88 (first)
console.log(grades[grades.length - 1]); // 90 (last)

grades.push(100);
console.log(grades.length);           // 6

grades.pop();
console.log(grades.length);           // 5
```

Try: add your own score to the front of the list using `.unshift()`.

### Scenario 0b: Arrays of Objects

Arrays can hold objects — this pattern is everywhere:

```js
const students = [
  { name: "Alex", grade: 85 },
  { name: "Jordan", grade: 92 },
  { name: "Casey", grade: 78 }
];

console.log(students[0].name);   // "Alex"
console.log(students[1].grade);  // 92
console.log(students.length);    // 3
```

---

## Supplemental Practice: Real Objects (25 minutes)

### Scenario 1: Recipe Card

```js
const recipe = {
  name: "Spaghetti Carbonara",
  servings: 4,
  cookTimeMinutes: 30,
  vegetarian: false
};

console.log(recipe.name);            // "Spaghetti Carbonara"
console.log(recipe.cookTimeMinutes); // 30
console.log(recipe.vegetarian);      // false
```

Try adding a `difficulty` property and updating the `servings` property.

### Scenario 2: Athlete Profile

```js
const athlete = {
  name: "Maya Chen",
  sport: "tennis",
  wins: 47,
  losses: 12
};

let totalMatches = athlete.wins + athlete.losses;
let winRate = (athlete.wins / totalMatches * 100).toFixed(1);
console.log("Win rate:", winRate + "%");  // "79.7%"
```

### Scenario 3: Hotel Listing

```js
const hotel = {
  name: "Seaside Inn",
  pricePerNight: 129.99,
  roomsAvailable: 8,
  hasPool: true
};

hotel.roomsAvailable = hotel.roomsAvailable - 1;  // Book a room
console.log("Rooms left:", hotel.roomsAvailable);  // 7
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 3 Practice Quiz** in Canvas.

Focus on:
- Creating arrays with `[]` and accessing elements by index
- Using `.push()`, `.pop()`, `.unshift()` to modify arrays
- Creating objects with `{}`
- Accessing properties with dot notation
- Knowing when to use an array vs. an object

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 3: Building Objects for Real Data"**.

You will:
- Create arrays and access elements by index
- Modify arrays with `.push()`, `.pop()`, `.unshift()`
- Create objects to represent different things
- Practice accessing and modifying object properties
- Build arrays that contain objects

The assignment includes three difficulty levels.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Arrays** (`[]`) store ordered lists — access items by index starting at 0.
- **`.push()` / `.pop()` / `.unshift()`** add and remove items from an array.
- **`.length`** tells you how many items are in an array.
- **Objects** (`{}`) bundle related data together with a key-value structure.
- **Dot notation** (`student.name`) is the most common way to access properties.
- **Use arrays for ordered lists; use objects for named bundles of related data.**
- You can combine them: arrays of objects are a foundational data pattern.

### How This Connects to Your Learning

Next session, you'll learn **loops** — which let you repeat code for every element in an array. With arrays + loops, you can process entire datasets in just a few lines.

### Questions?

- Try creating an array of your own objects (e.g., an array of book objects).
- Experiment with `.push()` and `.pop()` to see how arrays change.
- Ask your instructor if something is unclear.

Next session: **Loops and Iteration**
