# Session 9 Hints — Inheritance and Composition Patterns

## General — Inheritance
- `super(...)` must be the **first line** in a child class constructor.
  It calls the parent constructor to set up the inherited properties.
- A child class can call `super.methodName()` to use the parent's version of a method,
  or simply define its own version to override it.

## Challenge 1: Student extends Person
- Call `super(name, age)` in Student's constructor before setting `this.grade`.
- `introduce()` in Student replaces the one in Person — define it again in the child class.

## Challenge 2: Employee
- Same pattern as Student but with `position` instead of `grade`.

## Challenge 3: Composition (Engine inside Car)
- Car does **not** extend Engine. Instead, Car *has* an Engine:
  `this.engine = new Engine(horsepower);` inside the Car constructor.
- `Car.start()` delegates to `this.engine.start()`.

## Challenge 4: Circle
- `getArea()` uses `Math.PI * this.radius * this.radius` (or `** 2`).
- `describe()` overrides the Shape version — returns a more specific string.

## Challenge 7: Education System (Level 3)
- Three levels of inheritance: `BasePerson → FullStudent → GraduateStudent`
- `Classroom` uses **composition** — it contains a Teacher and an array of Students,
  but does not extend either.
- Test: add at least one GraduateStudent and verify it has both `grades` and `thesis`.
