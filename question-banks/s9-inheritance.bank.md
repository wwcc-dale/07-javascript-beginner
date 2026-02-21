---
bank_name: "Session 9: Inheritance and Composition"
---

1. What does the `extends` keyword do?
*a) Creates a subclass that inherits from a parent class
b) Deletes a class
c) Creates a new file
d) Exports a class

1. What is the `super()` function used for?
*a) Calls the parent class constructor
b) Deletes the parent
c) Creates a superclass
d) Returns a value

1. What is inheritance?
*a) A mechanism where a class acquires properties and methods from another class
b) A type of loop
c) A way to delete classes
d) A debugging tool

1. What will this code output?
```js
class Animal {
  speak() {
    return "sound";
  }
}
class Dog extends Animal {
  speak() {
    return "bark";
  }
}
const dog = new Dog();
console.log(dog.speak());
```
*a) "bark"
b) "sound"
c) Error
d) undefined

1. What is method overriding?
*a) Providing a new implementation of a parent's method in the child class
b) Deleting a method
c) Calling a method twice
d) A syntax error

1. What's the difference between "is-a" and "has-a" relationships?
*a) "is-a" uses inheritance, "has-a" uses composition
b) They are the same
c) "is-a" is faster
d) "has-a" is deprecated

1. When should you use inheritance?
a) Always
b) Never
*c) When there's a clear "is-a" relationship
d) Only for math

1. What is composition?
*a) When a class contains instances of other classes
b) A type of inheritance
c) A looping method
d) A syntax error

1. Can a child class have additional properties not in the parent?
*a) Yes
b) No
c) Only if you use special syntax
d) Only numbers

1. What does this represent?
```js
class Car {
  constructor() {
    this.engine = new Engine();
  }
}
```
*a) Composition (Car has-an Engine)
b) Inheritance (Car is-an Engine)
c) An error
d) Method overriding

1. True or false: A child class inherits all parent methods.
*a) True
b) False

1. What's wrong with this code?
```js
class Student extends Person {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
```
*a) Missing super() call to parent constructor
b) Nothing is wrong
c) extends is spelled wrong
d) Cannot use this

1. Can you call a parent method from a child class?
*a) Yes, using super.methodName()
b) No, parent methods are hidden
c) Only sometimes
d) You must override it

1. Which is better: inheritance or composition?
a) Always inheritance
b) Always composition
*c) Depends on the relationship (is-a vs has-a)
d) They are identical

1. What will this output?
```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
const s = new Student("Alex", 85);
console.log(s.name);
```
*a) "Alex"
b) undefined
c) Error
d) 85

1. Why might composition be preferred over inheritance?
*a) More flexible, avoids deep inheritance hierarchies
b) It's always faster
c) Inheritance is deprecated
d) Composition uses less memory
