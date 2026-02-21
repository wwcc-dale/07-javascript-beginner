---
bank_name: "Session 8: Working with Multiple Objects"
---

1. How do you create an array of object instances?
a) Use special syntax
*b) Create instances and put them in an array
c) Arrays can't hold objects
d) Use the object keyword

1. What does this code do?
```js
const students = [
  new Student("Alex", 85),
  new Student("Jordan", 92)
];
```
*a) Creates an array containing two Student instances
b) Creates one student
c) Causes an error
d) Creates two arrays

1. How do you loop through an array of objects?
*a) Use a for loop with array length
b) You cannot loop through objects
c) Objects loop automatically
d) Use the loop keyword

1. What is a container class?
*a) A class that manages a collection of other objects
b) A class with no methods
c) A temporary class
d) A class that cannot be instantiated

1. What will this return?
```js
class Classroom {
  constructor() {
    this.students = [];
  }
  addStudent(s) {
    this.students.push(s);
  }
  getCount() {
    return this.students.length;
  }
}
const room = new Classroom();
room.addStudent(new Student("Alex", 85));
room.addStudent(new Student("Jordan", 92));
console.log(room.getCount());
```
*a) 2
b) 0
c) undefined
d) Error

1. Why use a container class instead of a plain array?
*a) Encapsulates logic and provides useful methods
b) Arrays don't work
c) Container classes are faster
d) It's required

1. What does this method do?
```js
getPassingCount() {
  let count = 0;
  for (let i = 0; i < this.students.length; i++) {
    if (this.students[i].isPassing()) {
      count++;
    }
  }
  return count;
}
```
*a) Counts how many students are passing
b) Returns all students
c) Deletes failing students
d) Returns true or false

1. Can objects work together in a system?
*a) Yes, objects can call methods on other objects
b) No, objects are isolated
c) Only with special syntax
d) Objects cannot interact

1. What's the benefit of managing multiple objects?
a) Makes code slower
*b) Models real-world systems with many entities
c) Wastes memory
d) No benefit

1. How would you find the average grade of all students?
*a) Loop through students, sum grades, divide by count
b) Use the average keyword
c) JavaScript calculates it automatically
d) You cannot calculate averages

1. What will this output?
```js
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  getTotalBooks() {
    return this.books.length;
  }
}
const lib = new Library();
console.log(lib.getTotalBooks());
```
*a) 0
b) undefined
c) null
d) Error

1. Can you have an array inside a class?
*a) Yes, arrays are properties like any other
b) No, classes cannot have arrays
c) Only with special syntax
d) Arrays must be outside classes

1. What's the purpose of an addItem method?
*a) To add objects to the collection with validation
b) To delete items
c) To count items
d) To display items

1. How do you access a property of an object in an array?
a) array.property
*b) array[index].property
c) array->property
d) array(index).property

1. What does this represent?
```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(product) {
    this.items.push(product);
  }
}
```
*a) A container managing multiple product objects
b) A single product
c) An error
d) A database

1. True or false: You can loop through an array of objects and call methods on each object.
*a) True
b) False
