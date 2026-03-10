---
module: 2
name: 'Session 10: Inheritance — Extending Classes'
position: 13
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 10.1
---

# Session 10: Inheritance — Extending Classes

## Learning Outcomes

By the end of this session, you will be able to:
- Use `extends` to create a class that inherits from another.
- Call the parent constructor using `super()`.
- Override a parent method and optionally call the parent version with `super.method()`.
- Choose between inheritance and composition for a given design problem.

---

## Introduction (5 minutes)

In Session 9 you built a `Playlist` that manages `Song` objects. You gave `Playlist` methods like `addSong` and `removeSong`. What if you later wanted a `QueuePlaylist` that does everything a `Playlist` does, *plus* keeps track of which song is currently playing?

You could copy all of `Playlist`'s code into a new class — but that's a bad idea. Any bug fix in `Playlist` would need to be repeated in the copy. Instead, you can use **inheritance**: write `QueuePlaylist extends Playlist` and only add the new behaviour.

This is the idea behind the `extends` keyword.

---

## Reading: Inheritance Basics (30 minutes)

### The `extends` keyword

```js
class Appliance {
  constructor(brand, powerWatts) {
    this.brand = brand;
    this.powerWatts = powerWatts;
  }

  describe() {
    return `${this.brand} appliance, ${this.powerWatts}W`;
  }
}

class Refrigerator extends Appliance {
  constructor(brand, powerWatts, liters) {
    super(brand, powerWatts);   // ← MUST call super() first
    this.liters = liters;
  }

  cool() {
    return `${this.brand} is cooling ${this.liters}L`;
  }
}

const fridge = new Refrigerator("Samsung", 150, 400);
console.log(fridge.describe()); // "Samsung appliance, 150W"  ← inherited
console.log(fridge.cool());     // "Samsung is cooling 400L"  ← own method
```

Key rules:
1. `extends ClassName` says "inherit everything from `ClassName`".
2. The child constructor **must** call `super(...)` before using `this`.
3. `super(...)` runs the parent's constructor.

---

### Overriding a method

A child class can replace a parent method with its own version:

```js
class Washer extends Appliance {
  constructor(brand, powerWatts, loadKg) {
    super(brand, powerWatts);
    this.loadKg = loadKg;
  }

  // Override the parent's describe()
  describe() {
    return `${this.brand} washer — ${this.loadKg} kg load`;
  }
}

const washer = new Washer("LG", 500, 8);
console.log(washer.describe()); // "LG washer — 8 kg load"
```

The parent's `describe` is gone — the child's version runs instead.

---

### Calling the parent version with `super.method()`

Sometimes you want to *extend* the parent method rather than replace it entirely:

```js
class Refrigerator extends Appliance {
  constructor(brand, powerWatts, liters) {
    super(brand, powerWatts);
    this.liters = liters;
  }

  describe() {
    const base = super.describe();    // ← calls Appliance.describe()
    return `${base}, ${this.liters}L fridge`;
  }
}

const fridge = new Refrigerator("Samsung", 150, 400);
console.log(fridge.describe()); // "Samsung appliance, 150W, 400L fridge"
```

`super.describe()` runs the parent version, and you add to its result.

---

### `instanceof` — checking class membership

```js
console.log(fridge instanceof Refrigerator); // true
console.log(fridge instanceof Appliance);    // true  ← inherits from Appliance
console.log(fridge instanceof Washer);       // false
```

An object is an `instanceof` both the child class **and** any parent classes it inherits from.

---

## When to Use Inheritance vs Composition

| Situation | Pattern | Example |
|-----------|---------|---------|
| "Is a specialised version of" | Inheritance | `Refrigerator` is a type of `Appliance` |
| "Has a" or "uses a" | Composition | `Laptop` has a `Battery` |
| "Shares a few methods" | Composition | Two classes share a helper |
| "Specialises behaviour of" | Inheritance | `QueuePlaylist` is a type of `Playlist` |

A useful test: say the sentence aloud.
- "A Refrigerator **is an** Appliance" → inheritance is natural.
- "A Laptop **has a** Battery" → composition is natural.

---

## Worked Example: Extending Playlist from Session 9

```js
class QueuePlaylist extends Playlist {
  constructor(name) {
    super(name);          // calls Playlist constructor
    this._currentIndex = 0;
  }

  getCurrentSong() {
    if (this._songs.length === 0) return null;
    return this._songs[this._currentIndex];
  }

  advance() {
    if (this._songs.length === 0) return;
    this._currentIndex = (this._currentIndex + 1) % this._songs.length;
  }

  reset() {
    this._currentIndex = 0;
  }
}

const q = new QueuePlaylist("Road Trip");
q.addSong(new Song("Song A", "Band X", 200)); // inherited from Playlist
q.addSong(new Song("Song B", "Band Y", 240));

console.log(q.getCurrentSong().title); // "Song A"
q.advance();
console.log(q.getCurrentSong().title); // "Song B"
q.advance();
console.log(q.getCurrentSong().title); // "Song A" — wraps around
```

Notice: `QueuePlaylist` uses `addSong` and `this._songs` from `Playlist` without rewriting them.

---

## Practice Problems (15 minutes)

1. Create a `SmartAppliance` that extends `Appliance` and adds a `wifiEnabled` property and a `connect()` method.
2. Create two `Appliance` objects and two `Refrigerator` objects. Use `instanceof` to verify which ones are instances of `Appliance`.
3. Write a `Washer` that overrides `describe()` to call `super.describe()` and append `", front-loader"`.

---

## Supplemental: Protected Properties and Inheritance

Private-style properties (starting with `_`) work across inheritance — the child class can access `this._songs` because it is just a naming convention, not enforced privacy. If you use the new private `#` syntax, child classes **cannot** access parent private fields, so they must use getters instead.

For this course, stick with the `_` convention. It gives you the right habits without the extra complexity.

### Supplemental Exercise

Create a `DiscountProduct` class that extends a `Product` class.
- `Product`: `name`, `_price`, getter `price`, setter `price` (rejects negatives).
- `DiscountProduct` extends `Product` and adds `_discountPercent`.
- Add getter `salePrice` that returns `price * (1 - discountPercent / 100)`.
- Override `toString()` to return `"[name]: $[price] → $[salePrice]"`.
