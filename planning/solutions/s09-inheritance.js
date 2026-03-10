// Session 9: Inheritance and Composition Patterns — Example Solution

// === LEVEL 1 ===

// Challenge 1: Basic Inheritance (Person → Student)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}

class StudentPerson extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  introduce() {
    return `Hi, I'm ${this.name}, a student`;
  }
  study() {
    return `${this.name} is studying`;
  }
}
const sp = new StudentPerson("Alex", 20, 85);
console.log(sp.introduce()); // Hi, I'm Alex, a student
console.log(sp.study());     // Alex is studying

// Challenge 2: Employee Hierarchy
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  introduce() {
    return `Hi, I'm ${this.name}, ${this.position}`;
  }
  work() {
    return `${this.name} is working`;
  }
}
const emp = new Employee("Jordan", 30, "Developer");
console.log(emp.introduce()); // Hi, I'm Jordan, Developer
console.log(emp.work());      // Jordan is working

// Challenge 3: Composition (Engine inside Car)
class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }
  start() {
    return "Engine started";
  }
}
class Car {
  constructor(make, model, horsepower) {
    this.make = make;
    this.model = model;
    this.engine = new Engine(horsepower);
  }
  start() {
    return this.engine.start();
  }
}
const car = new Car("Toyota", "Camry", 200);
console.log(car.start()); // Engine started

// Challenge 4: Shape Hierarchy
class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `A ${this.color} shape`;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  describe() {
    return `A ${this.color} circle`;
  }
}
const circle = new Circle("red", 5);
console.log(circle.describe());           // A red circle
console.log(circle.getArea().toFixed(2)); // 78.54

// === LEVEL 2 ===

// Challenge 5: Animal Hierarchy
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return this.sound;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name, "bark");
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name, "meow");
  }
}
console.log(new Dog("Rex").makeSound()); // bark
console.log(new Cat("Luna").makeSound()); // meow

// Challenge 6: Vehicle Composition
class GPS {
  getLocation() { return "37.7749° N, 122.4194° W"; }
}
class Radio {
  playMusic() { return "Playing music..."; }
}
class LuxuryCar {
  constructor(make) {
    this.make = make;
    this.gps = new GPS();
    this.radio = new Radio();
  }
}
const lux = new LuxuryCar("BMW");
console.log(lux.gps.getLocation()); // 37.7749° N, 122.4194° W
console.log(lux.radio.playMusic()); // Playing music...

// === LEVEL 3 ===

// Challenge 7: Education System
class BasePerson {
  constructor(name) { this.name = name; }
}
class FullStudent extends BasePerson {
  constructor(name) {
    super(name);
    this.grades = [];
  }
  addGrade(g) { this.grades.push(g); }
  getAverage() {
    if (!this.grades.length) return 0;
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
}
class GraduateStudent extends FullStudent {
  constructor(name, thesis) {
    super(name);
    this.thesis = thesis;
  }
}
class Teacher extends BasePerson {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
class Classroom {
  constructor(teacher) {
    this.teacher = teacher;
    this.students = [];
  }
  addStudent(student) { this.students.push(student); }
  getClassAverage() {
    const avgs = this.students.map(s => s.getAverage());
    return avgs.reduce((a, b) => a + b, 0) / avgs.length;
  }
}

const teacher = new Teacher("Dr. Smith", "JavaScript");
const room = new Classroom(teacher);
const s1 = new FullStudent("Alex");
s1.addGrade(85); s1.addGrade(90);
const s2 = new FullStudent("Jordan");
s2.addGrade(72); s2.addGrade(68);
const grad = new GraduateStudent("Casey", "AI in Education");
grad.addGrade(95); grad.addGrade(98);
room.addStudent(s1); room.addStudent(s2); room.addStudent(grad);

console.log(`Teacher: ${room.teacher.name} (${room.teacher.subject})`);
console.log(`Class average: ${room.getClassAverage().toFixed(1)}`);
console.log(`Grad thesis: ${grad.thesis}`);
