---
bank_name: "Session 6: Introduction to Classes"
---

1. What is a class in JavaScript?
*a) A blueprint for creating objects
b) A single object with properties
c) A function that returns a value
d) A variable that stores data

1. Which keyword is used to create an instance of a class?
a) create
*b) new
c) make
d) instance

1. What does the constructor method do?
a) Destroys an instance
*b) Initializes a new instance with starting values
c) Creates a copy of a class
d) Returns the class name

1. What will this code output?
```js
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
}
const book1 = new Book("JS Guide", 300);
console.log(book1.pages);
```
a) undefined
b) "JS Guide"
*c) 300
d) Error

1. What does `this` refer to inside a class method?
a) The class itself
*b) The specific instance the method is called on
c) All instances of the class
d) The constructor

1. How do you add a method to a class?
a) Use the method keyword
*b) Define it inside the class body
c) Create it outside the class
d) Methods are automatic

1. What's the difference between a class and an object?
a) They are the same thing
*b) A class is a blueprint; an object is an instance
c) Classes are older syntax
d) Objects can't have methods

1. What will this code print?
```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const c = new Counter();
c.increment();
c.increment();
console.log(c.count);
```
a) 0
b) 1
*c) 2
d) undefined

1. Which is the correct syntax for defining a class?
a) function class Student() {}
*b) class Student {}
c) new class Student {}
d) create Student class {}

1. Can you create multiple instances from one class?
a) No, only one instance per class
*b) Yes, you can create as many as you need
c) Only if the class allows it
d) Only two instances maximum

1. What's wrong with this code?
```js
class Product {
  constructor(name, price) {
    name = name;
    price = price;
  }
}
```
a) Nothing is wrong
*b) Should use this.name and this.price
c) Constructor is spelled wrong
d) Missing the new keyword

1. When is the constructor method called?
a) When you define the class
*b) When you create a new instance with new
c) When you call a method
d) Constructors are never called

1. What will this return?
```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  isPassing() {
    return this.grade >= 70;
  }
}
const s = new Student("Alex", 85);
console.log(s.isPassing());
```
*a) true
b) false
c) 85
d) Error

1. How do you access a property of an instance?
a) instance->property
*b) instance.property
c) instance[property]
d) get instance.property

1. Can a class have methods without a constructor?
*a) Yes, the constructor is optional
b) No, constructor is required
c) Only if it has properties
d) Only for advanced classes

1. What's the purpose of using classes?
a) To make code slower
*b) To create reusable templates for similar objects
c) Classes are outdated
d) To replace functions
