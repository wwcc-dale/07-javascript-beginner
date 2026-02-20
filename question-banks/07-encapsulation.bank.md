---
bank_name: "Session 7: Methods and Encapsulation"
---

1. What is encapsulation?
*a) Controlling how data is accessed and modified in a class
b) Making all properties public
c) A type of loop
d) A way to delete objects

1. Why use getters and setters?
a) They make code slower
*b) To validate and control access to properties
c) They are required in all classes
d) To avoid using methods

1. What does the underscore convention (_property) indicate?
a) The property is a number
*b) The property is intended to be private/internal
c) The property is required
d) The property is a string

1. What will this code do?
```js
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    if (amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}
const acc = new BankAccount(100);
acc.withdraw(150);
```
*a) Return false and balance stays 100
b) Set balance to -50
c) Throw an error
d) Set balance to 0

1. Which is better encapsulation?
a) Allowing direct modification: account.balance = -500
*b) Using a method: account.withdraw(500) with validation
c) Both are the same
d) Neither, encapsulation isn't important

1. What's wrong with this setter?
```js
set price(newPrice) {
  this._price = newPrice;
}
```
a) Syntax error
*b) No validation - allows invalid values
c) Should use this.price
d) Nothing is wrong

1. What does this getter do?
```js
get fullName() {
  return this._firstName + " " + this._lastName;
}
```
*a) Combines two properties into one computed value
b) Sets the full name
c) Deletes the name
d) Nothing useful

1. Why validate input in methods?
a) To make code longer
*b) To prevent invalid object states
c) Validation is not needed
d) Because JavaScript requires it

1. What will this return?
```js
class Product {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(val) {
    if (val < 0) return;
    this._price = val;
  }
}
const p = new Product(50);
p.price = -10;
console.log(p.price);
```
*a) 50 (setter rejected -10)
b) -10
c) undefined
d) Error

1. What is data hiding?
*a) Keeping internal details private and exposing only necessary methods
b) Deleting data
c) Encrypting variables
d) Using underscores

1. Can you still access _property directly even with underscore convention?
*a) Yes, but it's discouraged
b) No, it's truly private
c) Only with special syntax
d) Only in getters

1. What's the benefit of encapsulation?
a) Makes code run faster
*b) Prevents bugs by controlling data access
c) Reduces file size
d) Makes variables global

1. Which method name suggests encapsulation?
a) account.balance = 500
*b) account.deposit(500)
c) account.b = 500
d) balance(500)

1. What will this do?
```js
class User {
  constructor(age) {
    this._age = age;
  }
  set age(val) {
    if (val < 0 || val > 120) {
      console.log("Invalid age");
      return;
    }
    this._age = val;
  }
}
const u = new User(25);
u.age = 150;
```
*a) Log "Invalid age" and keep age at 25
b) Set age to 150
c) Throw an error
d) Set age to 0

1. True or false: Encapsulation makes debugging easier.
*a) True
b) False

1. What's the purpose of validation in methods?
*a) Ensure data meets requirements before accepting it
b) Make code slower
c) Validation has no purpose
d) To use more memory
