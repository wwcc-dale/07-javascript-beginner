---
name: "Session 9: Inheritance and Composition Patterns"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-2"
  - "CLO-3"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
---

# Session 9: Inheritance and Composition Patterns

Build class hierarchies using inheritance and composition.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `09-assignment.js`

## Level 1 – Core Tasks (15 points)

### Challenge 1: Basic Inheritance
```js
// TODO: Create a Person class with:
// - Constructor: name, age
// - Method introduce(): returns "Hi, I'm [name]"

// TODO: Create a Student class that extends Person with:
// - Constructor: name, age, grade
// - Override introduce(): returns "Hi, I'm [name], a student"
// - Method study(): returns "[name] is studying"

// Test:
// const student = new Student("Alex", 20, 85);
// console.log(student.introduce());
// console.log(student.study());
```

### Challenge 2: Employee Hierarchy
```js
// TODO: Create Employee class that extends Person with:
// - Constructor: name, age, position
// - Override introduce(): returns "Hi, I'm [name], [position]"
// - Method work(): returns "[name] is working"

// Test:
// const emp = new Employee("Jordan", 30, "Developer");
// console.log(emp.introduce());
```

### Challenge 3: Composition Example
```js
// TODO: Create Engine class with:
// - Constructor: horsepower
// - Method start(): returns "Engine started"

// TODO: Create Car class with:
// - Constructor: make, model, horsepower
// - Property: engine (new Engine instance using composition)
// - Method start(): calls this.engine.start()

// Test:
// const car = new Car("Toyota", "Camry", 200);
// console.log(car.start()); // "Engine started"
```

### Challenge 4: Shape Hierarchy
```js
// TODO: Create Shape class with:
// - Constructor: color
// - Method describe(): returns "A [color] shape"

// TODO: Create Circle class that extends Shape with:
// - Constructor: color, radius
// - Method getArea(): returns Math.PI * radius * radius
// - Override describe(): returns "A [color] circle"

// Test:
// const circle = new Circle("red", 5);
// console.log(circle.describe());
// console.log(circle.getArea());
```

## Level 2 – Stretch (3 points)

### Challenge 5: Animal Hierarchy
Create:
- Animal class (name, sound)
- Dog extends Animal (overrides sound to "bark")
- Cat extends Animal (overrides sound to "meow")
- Method makeSound() that returns the sound

### Challenge 6: Vehicle Composition
Create:
- GPS class with method getLocation()
- Radio class with method playMusic()
- Luxury Car that uses composition to include both GPS and Radio

## Level 3 – Advanced (2 points)

### Challenge 7: Complete System
Build an education system:
- Person base class
- Student extends Person (adds grades array, method addGrade)
- GraduateStudent extends Student (adds thesis property)
- Teacher extends Person (adds subject)
- Classroom class that uses composition to manage Students and Teacher

Test with multiple students, a graduate student, and a teacher.
