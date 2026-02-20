---
name: "Session 9: Inheritance and Composition"
published: true
related_outcomes:
  - "CLO-2"
  - "CLO-3"
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
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);  // Call parent constructor
    this.grade = grade;
  }
  
  study() {
    return `${this.name} is studying`;
  }
}

const student = new Student("Alex", 20, 85);
console.log(student.introduce()); // Inherited from Person
console.log(student.study());     // Student-specific
```

### Overriding Methods

```js
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  
  introduce() {
    return `Hi, I'm ${this.name}, ${this.position}`;
  }
}

const emp = new Employee("Jordan", 30, "Developer");
console.log(emp.introduce()); // Overridden version
```

### Composition Over Inheritance

Sometimes composition (has-a) is better than inheritance (is-a).

```js
class Engine {
  start() {
    return "Engine started";
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // Composition
  }
  
  start() {
    return this.engine.start();
  }
}
```

### When to Use Each

**Inheritance:** When there's a clear "is-a" relationship
- Student IS A Person
- Employee IS A Person

**Composition:** When there's a "has-a" relationship
- Car HAS AN Engine
- Player HAS A Score

---

## Assignment (60–90 minutes)

Build an inheritance hierarchy and use composition patterns.
