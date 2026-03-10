---
module: 2
name: 'Session 9: Inheritance and Composition'
position: 10
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 9.1
---

# Session 9: Inheritance and Composition

## Learning Outcomes

- Use class inheritance with `extends`
- Override parent methods
- Understand when to use inheritance vs composition
- Build class hierarchies

---

## Introduction (5 minutes)

Sometimes classes share common properties and behaviors. **Inheritance** lets you create specialized classes based on general ones. Today you'll learn when and how to use inheritance and composition.

---

## Reading: Inheritance (35 minutes)

### Basic Inheritance

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
    super(brand, powerWatts);  // Call parent constructor
    this.liters = liters;
  }

  cool() {
    return `${this.brand} cooling ${this.liters}L`;
  }
}

const fridge = new Refrigerator("Samsung", 150, 400);
console.log(fridge.describe()); // Inherited from Appliance
console.log(fridge.cool());     // Refrigerator-specific
```

### Overriding Methods

A child class can replace a parent method with its own version.

```js
class Washer extends Appliance {
  constructor(brand, powerWatts, loadKg) {
    super(brand, powerWatts);
    this.loadKg = loadKg;
  }

  describe() {
    return `${this.brand} washer, ${this.loadKg}kg load capacity`;
  }
}

const washer = new Washer("LG", 500, 8);
console.log(washer.describe()); // Overridden version — Washer's own describe()
```

### Composition Over Inheritance

Sometimes composition (has-a) is better than inheritance (is-a).

```js
class Battery {
  charge() {
    return "Battery charging";
  }

  getLevel() {
    return "80%";
  }
}

class Laptop {
  constructor(brand) {
    this.brand = brand;
    this.battery = new Battery(); // Composition
  }

  charge() {
    return this.battery.charge();
  }
}

const laptop = new Laptop("Dell");
console.log(laptop.charge()); // "Battery charging"
```

### When to Use Each

**Inheritance:** When there's a clear "is-a" relationship
- Refrigerator IS AN Appliance
- Washer IS AN Appliance

**Composition:** When there's a "has-a" relationship
- Laptop HAS A Battery
- Playlist HAS Songs

---

## Assignment (60–90 minutes)

Build an inheritance hierarchy and use composition patterns.