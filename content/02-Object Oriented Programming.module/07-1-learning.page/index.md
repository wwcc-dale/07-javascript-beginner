---
name: "Session 7: Math Methods and Encapsulation"
published: true
related_outcomes:
  - "CLO-2"
  - "CLO-3"
---

# Session 7: Math Methods and Encapsulation

## Learning Outcomes

By the end of this session, you will be able to:
- Use `Math` methods to round numbers, generate random values, and find min/max.
- Use `Number` methods to parse and format numeric strings.
- Apply the underscore convention to signal private properties.
- Write getters and setters to control how class properties are read and written.
- Add validation logic inside setters to protect object state.

---

## Introduction (5 minutes)

Two important topics today. First, JavaScript's built-in `Math` object gives you a toolkit of numeric operations you'll reach for constantly — rounding prices, generating random IDs, clamping values to a range. Second, you'll learn **encapsulation**: how to hide the internal details of a class so that outside code can only interact with data the way you intend.

---

## Reading: Math Methods (25 minutes)

### The `Math` Object

`Math` is a built-in JavaScript object that comes pre-loaded with mathematical constants and functions. You use it like `Math.methodName()` — no need to create or import it.

### Rounding Numbers

| Method | What It Does | Example |
|--------|-------------|---------|
| `Math.round(x)` | Round to nearest integer | `Math.round(4.6)` → `5` |
| `Math.floor(x)` | Always round **down** | `Math.floor(4.9)` → `4` |
| `Math.ceil(x)` | Always round **up** | `Math.ceil(4.1)` → `5` |

```js
const price = 9.74;

console.log(Math.round(price));  // 10 (nearest integer)
console.log(Math.floor(price));  // 9  (down to the dollar)
console.log(Math.ceil(price));   // 10 (up to the dollar)
```

**Real-world use:** Tax calculations, displaying star ratings, pagination:

```js
const totalItems = 53;
const itemsPerPage = 10;
const pages = Math.ceil(totalItems / itemsPerPage);
console.log(pages);  // 6 (you need 6 pages, not 5.3)
```

### `Math.random()` — Random Numbers

`Math.random()` returns a random decimal between **0 (inclusive) and 1 (exclusive)**.

```js
console.log(Math.random());  // something like 0.7342...
```

Alone it's not very useful. Combine it with `Math.floor` to get a random integer in a range:

```js
// Random integer from 0 to 5 (six possible values: 0,1,2,3,4,5)
const roll = Math.floor(Math.random() * 6);

// Random integer from 1 to 6 (like a die)
const die = Math.floor(Math.random() * 6) + 1;

// Random integer from min to max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 100));   // anywhere from 1 to 100
console.log(randomInt(50, 60));   // anywhere from 50 to 60
```

### `Math.max()` and `Math.min()`

Find the largest or smallest value in a list of arguments:

```js
console.log(Math.max(10, 45, 23, 7));   // 45
console.log(Math.min(10, 45, 23, 7));   // 7
```

**Real-world use:** Clamping a value to stay within bounds:

```js
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

console.log(clamp(150, 0, 100));  // 100 (too high, capped at 100)
console.log(clamp(-5, 0, 100));   // 0   (too low, floored at 0)
console.log(clamp(42, 0, 100));   // 42  (within range, unchanged)
```

### `Math.abs()` — Absolute Value

Returns the distance from zero (removes the negative sign):

```js
console.log(Math.abs(-15));   // 15
console.log(Math.abs(15));    // 15
console.log(Math.abs(-3.7));  // 3.7
```

**Real-world use:** Calculate the difference between two values regardless of order:

```js
const budget = 500;
const spent = 620;
const difference = Math.abs(budget - spent);
console.log("Over budget by:", difference);  // 120
```

### Number Methods

These format and parse numbers:

```js
// toFixed — round to N decimal places, returns a string
const price = 9.999;
console.log(price.toFixed(2));   // "10.00"
console.log(price.toFixed(0));   // "10"

// parseInt — convert a string to a whole number
console.log(parseInt("42px"));   // 42
console.log(parseInt("3.7"));    // 3

// parseFloat — convert a string to a decimal number
console.log(parseFloat("3.14 meters"));  // 3.14

// isNaN — check if something is "Not a Number"
console.log(isNaN("hello"));  // true
console.log(isNaN(42));       // false
console.log(isNaN("42"));     // false (coerces to number first)

// Number.isInteger — check if a number has no decimal part
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.0));  // true
console.log(Number.isInteger(5.5));  // false
```

---

## Reading: Encapsulation (25 minutes)

### What Is Encapsulation?

Encapsulation means **bundling data with the methods that operate on it, and controlling access to that data**. The goal is to prevent outside code from putting objects into invalid states.

**Problem without encapsulation:**

```js
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const acc = new BankAccount(1000);
acc.balance = -99999;  // Anyone can set any value — dangerous!
console.log(acc.balance);  // -99999
```

**Solution:** hide the data and expose controlled access points.

### The Underscore Convention

JavaScript doesn't enforce true privacy by default. Developers use an underscore prefix (`_balance`) as a signal: "this property is internal — don't touch it directly from outside the class."

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;  // _ means "treat as private"
  }
}
```

The underscore is just a naming convention — it's a message to other developers, not a technical lock.

### Getters — Controlled Reading

A **getter** is a special method that looks like a property when you read it. Define it with `get`:

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }
}

const acc = new BankAccount(1000);
console.log(acc.balance);  // 1000  (calls the getter, no parentheses needed)
```

You read `acc.balance` like a property, but under the hood it's calling the getter method.

### Setters — Controlled Writing with Validation

A **setter** runs code whenever you assign to a property. This is where you add validation:

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
      return;
    }
    this._balance = amount;
  }
}

const acc = new BankAccount(1000);
acc.balance = 1500;    // calls the setter — valid, accepted
console.log(acc.balance);  // 1500

acc.balance = -500;   // calls the setter — rejected
console.log(acc.balance);  // 1500 (unchanged)
```

### Real Example: Temperature

```js
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      console.log("Below absolute zero — impossible.");
      return;
    }
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9 / 5) + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) * 5 / 9;  // uses the celsius setter for validation
  }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit);  // 32

temp.fahrenheit = 212;
console.log(temp.celsius);     // 100

temp.celsius = -300;           // rejected — below absolute zero
console.log(temp.celsius);     // 100 (unchanged)
```

### Example: Product with Price Validation

```js
class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  get name() { return this._name; }
  get price() { return this._price; }

  set price(value) {
    if (typeof value !== "number" || value < 0) {
      console.log("Price must be a non-negative number.");
      return;
    }
    this._price = value;
  }

  formattedPrice() {
    return "$" + this._price.toFixed(2);
  }
}

const item = new Product("Headphones", 79.99);
console.log(item.formattedPrice());  // "$79.99"

item.price = 89.99;
console.log(item.price);   // 89.99

item.price = -10;          // rejected
console.log(item.price);   // 89.99
```

### Why Encapsulation Matters

1. **Prevents invalid state** — you control what values are acceptable
2. **Hides implementation** — callers don't need to know how data is stored
3. **Easier to change later** — you can update internal logic without breaking callers
4. **Self-documenting** — getters/setters make the interface explicit

---

## Video Tutorial: Math and Encapsulation (20 minutes)

Watch: `assets/videos/07-math-encapsulation.mp4`

This video covers:
- Using `Math.floor`, `Math.random`, `Math.max`, `Math.min`
- The underscore naming convention
- Writing getters and setters
- Adding validation in setters
- Real examples with BankAccount and Temperature

Pause and type each example.

---

## Supplemental Practice (25 minutes)

### Practice 1: Random Number Utilities

```js
// Roll a 6-sided die
const die = Math.floor(Math.random() * 6) + 1;
console.log("Rolled:", die);

// Pick a random item from an array
const options = ["rock", "paper", "scissors"];
const choice = options[Math.floor(Math.random() * options.length)];
console.log("Computer chose:", choice);

// Generate a random percentage (0–100)
const pct = Math.round(Math.random() * 100);
console.log("Random %:", pct);
```

### Practice 2: Rounding and Formatting

```js
const subtotal = 47.856;
const tax = subtotal * 0.08;
const total = subtotal + tax;

console.log("Subtotal:", subtotal.toFixed(2));  // "47.86"
console.log("Tax:", tax.toFixed(2));             // "3.83"
console.log("Total:", total.toFixed(2));          // "51.69"
```

### Practice 3: Add a Getter/Setter

Start with this class and add a getter and setter for `_score` that rejects values outside 0–100:

```js
class Student {
  constructor(name, score) {
    this._name = name;
    this._score = score;
  }

  get name() { return this._name; }

  // TODO: add get score() and set score(value) with validation
}

const s = new Student("Alex", 85);
s.score = 110;  // should be rejected
s.score = 72;   // should be accepted
console.log(s.score);  // 72
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 7 Practice Quiz** in Canvas.

Focus on:
- `Math.floor`, `Math.ceil`, `Math.round`, `Math.random`
- `Math.max`, `Math.min`, `Math.abs`
- `Number` methods: `toFixed`, `parseInt`, `parseFloat`, `isNaN`
- Underscore convention for private properties
- Getter syntax and behavior
- Setter validation patterns

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 7: Encapsulation and Data Protection"**.

You will:
- Use `_` prefix to signal private properties
- Write getters for controlled reading
- Write setters with validation logic
- Build classes that protect their internal state

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`Math` methods** give you rounding (`floor`/`ceil`/`round`), random numbers, min/max, and absolute value.
- **`Math.floor(Math.random() * N)`** is the standard pattern for a random integer 0 to N-1.
- **Underscore prefix** (`_balance`) signals a property is private — convention, not enforcement.
- **Getters** (`get balance()`) let you read internal data with property-like syntax.
- **Setters** (`set balance(v)`) let you intercept and validate assignments.
- Together, getters and setters are the primary tools for **encapsulation** in JavaScript classes.

### How This Connects to Your Learning

Next session (Session 8) goes deeper into OOP: static methods, and more sophisticated class design. Your classes are becoming real software.

### Questions?

- Try adding a setter to one of the classes you built in Session 6.
- Experiment with `Math.random()` to build a small guessing game.
- Ask your instructor if anything is unclear.

Next session: **Advanced OOP**
