---
bank_name: "Session 3: Arrays and Objects"
---

1. Which correctly creates an array of three numbers?
a) const nums = {10, 20, 30};
*b) const nums = [10, 20, 30];
c) const nums = (10, 20, 30);
d) const nums = array(10, 20, 30);

1. What does `colors[0]` return?
```js
const colors = ["red", "green", "blue"];
```
*a) "red"
b) "green"
c) 0
d) 3

1. What does `.length` return for this array?
```js
const items = ["a", "b", "c", "d"];
console.log(items.length);
```
a) 0
b) 3
*c) 4
d) "d"

1. Which method adds an item to the END of an array?
*a) .push()
b) .pop()
c) .unshift()
d) .shift()

1. What will this print?
```js
const tasks = ["email", "report"];
tasks.push("meeting");
console.log(tasks.length);
```
a) 2
*b) 3
c) "meeting"
d) Error

1. What does `.pop()` do?
*a) Removes and returns the last element
b) Removes and returns the first element
c) Adds an item to the end
d) Returns the last element without removing it

1. What does `.unshift("x")` do to an array?
a) Adds "x" to the end
*b) Adds "x" to the front
c) Removes the first element
d) Replaces the first element with "x"

1. What is the index of "CSS" in this array?
```js
const topics = ["HTML", "CSS", "JavaScript"];
```
a) 0
*b) 1
c) 2
d) 3

1. How do you access the LAST element of any array?
a) arr[arr.length]
*b) arr[arr.length - 1]
c) arr.last()
d) arr[-1]

1. What will this print?
```js
const scores = [85, 92, 78];
scores.push(100);
console.log(scores[3]);
```
*a) 100
b) 78
c) undefined
d) Error

1. Which of these correctly creates an object?
a) const person = [name: "Alex", age: 25];
*b) const person = {name: "Alex", age: 25};
c) const person = (name: "Alex", age: 25);
d) const person = {name: "Alex", age: 25}[];

1. How do you access a property called `name` in an object called `student`?
a) student[name]
*b) student.name
c) student->name
d) student:name

1. What will this print?
```js
const book = {title: "Web Dev", pages: 300};
console.log(book.title);
```
*a) Web Dev
b) title
c) {title: "Web Dev", pages: 300}
d) Error

1. Can you modify a property of an object declared with `const`?
*a) Yes, you can change the property values
b) No, const objects are completely immutable
c) Only numeric properties
d) Only if you add new properties

1. Which is bracket notation?
a) student.age
*b) student["age"]
c) student{age}
d) student<age>

1. What will this code print?
```js
const user = {
  name: "Jordan",
  loginCount: 5
};
user.loginCount = 6;
console.log(user.loginCount);
```
*a) 6
b) 5
c) undefined
d) Error

1. When should you use an object?
a) Only for storing numbers
*b) When you have related properties that belong together
c) Objects and variables are the same
d) You should never use objects

1. What does this create?
```js
const account = {
  type: "Checking",
  balance: 500
};
```
a) An array
*b) An object with two properties
c) A function
d) A variable

1. How many properties does this object have?
```js
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  color: "blue"
};
```
a) 1
b) 2
c) 3
*d) 4

1. What will this print?
```js
const product = {
  name: "Keyboard",
  price: 79.99
};
console.log(product.price);
```
a) name
*b) 79.99
c) price
d) Error

1. Which is NOT a valid way to access an object property?
a) student.name
b) student["name"]
*c) student->name
d) Both a and b are valid

1. Can you add a new property to an object?
a) No, all properties must be defined when you create it
*b) Yes, you can add properties anytime
c) Only if it's declared with let
d) Only in special cases

1. What will this print?
```js
const order = {
  items: 3,
  total: 150.00
};
console.log(order["total"]);
```
*a) 150
b) total
c) 150.00
d) Error

1. Which term describes the `name` in this object?
```js
const person = {name: "Alex"};
```
a) Value
*b) Property (or key)
c) Method
d) Function

1. What's the purpose of objects?
a) To make code run faster
*b) To organize related data together
c) To replace functions
d) Objects are rarely useful

1. What will this code output?
```js
const settings = {
  brightness: 80,
  volume: 50
};
settings.brightness = 100;
console.log(settings.brightness);
```
*a) 100
b) 80
c) brightness
d) Error
