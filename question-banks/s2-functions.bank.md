---
bank_name: "Session 2: Functions and Reusable Code"
---

1. What is a parameter in a function?
a) The code inside the function
*b) An input that a function accepts
c) The value the function returns
d) A variable outside the function

1. Which of these correctly defines a function with a parameter?
a) function add(num1 num2) { return num1 + num2; }
*b) function add(num1, num2) { return num1 + num2; }
c) function add num1 num2 { return num1 + num2; }
d) function add[num1, num2] { return num1 + num2; }

1. What does `return` do in a function?
a) Starts the function over
*b) Sends a value back to where the function was called
c) Stops the program
d) Prints to the console

1. What will this code print?
```js
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));
```
a) a * b
*b) 20
c) undefined
d) Error

1. How many times can you call a function?
a) Only once
b) Only two times
*c) As many times as you want
d) It depends on the parameters

1. What is wrong with this code?
```js
function greet(name) {
  console.log("Hello, " + name);
}
greet();  // Called with no argument
```
a) Nothing is wrong
*b) The function expects a parameter but none was provided
c) You cannot use string concatenation in functions
d) The function name is invalid

1. What will this code print?
```js
function calculateTotal(price, tax) {
  let total = price + tax;
  return total;
}
let result = calculateTotal(50, 5);
console.log(result);
```
*a) 55
b) 50
c) 5
d) undefined

1. Which correctly calls a function with two parameters?
a) calculateTotal 50, 5
*b) calculateTotal(50, 5)
c) calculateTotal[50, 5]
d) calculateTotal{50, 5}

1. What does this function do?
```js
function isEven(num) {
  return num % 2 === 0;
}
```
a) Adds 2 to a number
*b) Returns true if the number is even, false otherwise
c) Divides a number by 2
d) Multiplies by 2

1. What will this code print?
```js
function sayHello() {
  console.log("Hello!");
}
sayHello();
sayHello();
```
a) Hello!
*b) Hello! Hello!
c) Hello! (printed once)
d) Error

1. A function that accepts a score and returns true if the score is 70 or higher would be:
a) function passTest(score) { if (score >= 70) return true; }
*b) function passTest(score) { if (score >= 70) return true; else return false; }
c) function passTest(score) { console.log(score >= 70); }
d) Both a and b are correct

1. What is the difference between parameters and arguments?
a) They are the same thing
*b) Parameters are in the function definition; arguments are the values you pass when calling
c) Parameters are always numbers
d) Arguments can only be used once

1. What will this code print?
```js
function applyTax(price) {
  let tax = price * 0.1;
  return price + tax;
}
console.log(applyTax(100));
```
*a) 110
b) 100
c) 10
d) 0.1

1. Why would you use a function instead of repeating code?
a) Functions are always faster
*b) Functions reduce repetition, make code cleaner, and are easier to fix
c) Functions are required in JavaScript
d) Functions use less memory

1. What will this code output?
```js
function findMax(a, b) {
  if (a > b) return a;
  else return b;
}
console.log(findMax(25, 30));
```
*a) 30
b) 25
c) true
d) Error

1. A function that takes no parameters and returns no value would be:
a) function doNothing() { }
*b) function doNothing() { console.log("Hi"); }
c) Not allowed in JavaScript
d) Called a "void" function
