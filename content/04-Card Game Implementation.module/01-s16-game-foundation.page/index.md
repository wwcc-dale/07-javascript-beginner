---
module: 4
name: 'Session 16: Classes, Constructors, and Collections'
position: 1
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 16.1
---

# Session 16: Classes, Constructors, and Collections

## Learning Outcomes

By the end of this session, you will be able to:
- Write a class with a constructor, properties, and methods
- Build a collection class that manages an array of objects
- Implement a statistically unbiased shuffle using Fisher-Yates
- Write an `equals()` method that compares two objects by value, not identity
- Explain why `===` fails to match two objects with identical data

---

## Introduction (5 minutes)

Over the next five sessions you build a Spades card game. The game has many moving parts — players, bids, tricks, scores — but every game built in code starts the same way: with small, well-defined objects that represent the things in the game.

Today you learn the **class patterns** those objects use: constructor initialization, getter methods, value equality, shuffling a collection, and drawing from it one at a time.

---

## Reading: Classes and Collections (35 minutes)

### Classes and Constructors

A **class** is a blueprint for creating objects with the same structure. The `constructor` runs automatically when you use `new`.

```js
class Book {
  constructor(title, author, year) {
    this.title  = title;
    this.author = author;
    this.year   = year;
  }

  getTitle()  { return this.title; }
  getAuthor() { return this.author; }

  describe() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}

const b = new Book('Dune', 'Herbert', 1965);
console.log(b.describe());  // "Dune by Herbert (1965)"
console.log(b.getTitle());  // "Dune"
```

The `constructor` is called once at creation. Getter methods like `getTitle()` provide controlled read access to the properties.

---

### Object Identity vs. Value Equality

JavaScript's `===` tests **identity** — whether two variables point to the same object in memory:

```js
const b1 = new Book('Dune', 'Herbert', 1965);
const b2 = new Book('Dune', 'Herbert', 1965);

console.log(b1 === b2);  // false — different objects in memory
```

Even though `b1` and `b2` have identical data, they are different objects. To compare by **value** you need an `equals()` method:

```js
class Book {
  // ... (constructor and other methods above)

  equals(other) {
    return this.title === other.title && this.author === other.author;
  }
}

console.log(b1.equals(b2));  // true — same title and author
```

`equals()` is essential whenever you need to find and remove a specific item from an array — searching by value, not by reference.

---

### Collection Classes and Nested Loops

A **collection class** owns an array of objects and provides methods to manage them.

```js
class Catalog {
  constructor() {
    this.books = [];
    this.buildSampleCatalog();
  }

  buildSampleCatalog() {
    const authors = ['Tolkien', 'Herbert', 'Le Guin'];
    const titles  = ['Fellowship', 'Dune', 'Wizard'];

    for (let a = 0; a < authors.length; a++) {
      for (let t = 0; t < titles.length; t++) {
        this.books.push(new Book(`${titles[t]}-${a}`, authors[a], 1960 + t));
      }
    }
  }

  size()   { return this.books.length; }

  draw()   { return this.books.pop(); }  // Remove and return last item

  reset() {
    this.books = [];
    this.buildSampleCatalog();
  }
}
```

**Nested loops** (one `for` inside another) are the standard way to generate all combinations of two sets — every author paired with every title in this example.

---

### Fisher-Yates Shuffle

A naive shuffle (pick two random positions and swap, repeated many times) produces **biased distributions** — some orderings appear more often than others. The Fisher-Yates algorithm gives every permutation exactly equal probability.

```js
function shuffle(array) {
  // Work backward from the end of the array
  for (let i = array.length - 1; i > 0; i--) {
    // Pick any position from 0 up to and including i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap positions i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const items = [1, 2, 3, 4, 5];
shuffle(items);
console.log(items);  // Some random permutation
```

**Why it works:** On each pass, each remaining element has an equal chance of landing in the current position. By the time you reach the beginning, every possible order is equally likely.

---

### Finding and Removing with `findIndex`

When you need to locate a specific item in an array and remove it, use `findIndex()` with your `equals()` method:

```js
class Catalog {
  // ...

  removeBook(target) {
    const i = this.books.findIndex(b => b.equals(target));
    if (i !== -1) {
      return this.books.splice(i, 1)[0];  // Remove and return
    }
    return null;  // Not found
  }
}
```

`splice(i, 1)` removes one element at index `i` and returns it as an array — the `[0]` gets the item itself. This is the same pattern you will use when a player plays a card from their hand.

---

### Verifying Uniqueness with a Set

After generating a collection of objects, you can verify no duplicates exist by checking that the number of unique string representations equals the total count:

```js
const catalog = new Catalog();
const titles = catalog.books.map(b => b.describe());
const unique = new Set(titles);
console.log('All unique:', unique.size === catalog.size());  // true
```

A `Set` automatically discards duplicates. If `unique.size` equals the total count, every item is distinct.

---

## Video Tutorial: Classes and Collections (20 minutes)

Watch: `assets/videos/16-classes-collections.mp4`

Covers:
- Building a class with a constructor step by step
- Why `===` fails for object comparison and how `equals()` fixes it
- Fisher-Yates walkthrough on a small array
- The `findIndex` + `splice` pattern for removal

---

## Supplemental Practice (25 minutes)

### Exercise 1: Build a `Movie` Class

Write a `Movie` class with `title`, `director`, and `releaseYear` properties. Add `describe()` and `equals(other)` methods. Create two `Movie` objects with the same data and verify `equals()` returns `true` while `===` returns `false`.

### Exercise 2: Shuffle and Verify

Create an array of 10 numbers (1–10). Run Fisher-Yates on it and `console.log` the result. Run it 5 more times. Is it always in a different order?

### Exercise 3: Find and Remove

Create an array of 5 `Book` objects. Write a function `removeByTitle(books, title)` that uses `findIndex` to locate the book by title and `splice` to remove it. Verify the array is shorter after calling it.

### Exercise 4: Uniqueness Check

Generate a collection of 20 items using a nested loop (e.g., 4 categories × 5 types). Use a `Set` to verify all 20 are unique.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 16 Practice Quiz** in Canvas.

Focus on:
- Constructor syntax and `this` keyword
- `===` vs. `equals()` for object comparison
- How Fisher-Yates achieves an unbiased shuffle
- `findIndex` + `splice` for locate-and-remove

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 16: Card and Deck Implementation"**.

You will apply these patterns to build two classes that the Spades game depends on.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Classes** bundle data and behavior; the `constructor` sets initial state
- **`===` fails** for object comparison — `equals()` compares by value instead
- **Nested loops** generate all combinations of two sets
- **Fisher-Yates** shuffles an array so every permutation is equally likely
- **`findIndex` + `splice`** is the pattern for finding and removing by value

### How This Connects to the Assignment

The assignment asks you to build two classes following these exact patterns. The classes you build today become the foundation that every subsequent session depends on — everything else in Spades uses them.

Next session: **Session 17 — Players, Inheritance, and Dealing**