// Session 7: Encapsulation and Data Protection — Example Solution

// === LEVEL 1 ===

// Challenge 1: BankAccount with Validation
class BankAccount {
  constructor(owner, balance) {
    this._owner = owner;
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      return true;
    }
    return false;
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}
const acc = new BankAccount("Alex", 1000);
acc.deposit(500);
console.log(acc.balance);    // 1500
console.log(acc.withdraw(2000)); // false — balance stays 1500
console.log(acc.balance);    // 1500

// Challenge 2: Product with Price Validation
class Product {
  constructor(name, price, stock) {
    this._name = name;
    this._price = price;
    this._stock = stock;
  }
  get name()  { return this._name; }
  get price() { return this._price; }
  get stock() { return this._stock; }
  set price(value) {
    if (value >= 0) this._price = value;
    else console.log("Price cannot be negative.");
  }
  set stock(value) {
    if (value >= 0) this._stock = value;
    else console.log("Stock cannot be negative.");
  }
  buy(quantity) {
    if (quantity <= this._stock) {
      this._stock -= quantity;
      return true;
    }
    return false;
  }
}
const item = new Product("Laptop", 999, 10);
item.price = -50; // rejected
console.log(item.price); // 999
item.buy(3);
console.log(item.stock); // 7

// Challenge 3: User with Login Attempts
class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._loginAttempts = 0;
  }
  attemptLogin(inputPassword) {
    if (this._loginAttempts >= 3) return "locked";
    if (inputPassword === this._password) {
      this._loginAttempts = 0;
      return "success";
    }
    this._loginAttempts++;
    return "failed";
  }
  resetAttempts() {
    this._loginAttempts = 0;
  }
}
const user = new User("alex", "secret123");
console.log(user.attemptLogin("wrong"));      // failed, attempts = 1
console.log(user.attemptLogin("wrong"));      // failed, attempts = 2
console.log(user.attemptLogin("secret123"));  // success, attempts reset
console.log(user.attemptLogin("wrong"));      // failed
console.log(user.attemptLogin("wrong"));      // failed
console.log(user.attemptLogin("wrong"));      // failed
console.log(user.attemptLogin("secret123")); // locked

// Challenge 4: Temperature with Unit Conversion
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get celsius() { return this._celsius; }
  set celsius(value) {
    if (value >= -273.15) this._celsius = value;
    else console.log("Below absolute zero.");
  }
  get fahrenheit() {
    return (this._celsius * 9 / 5) + 32;
  }
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5 / 9;
  }
}
const temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp.celsius);    // 100

// === LEVEL 2 ===

// Challenge 5: ShoppingCart with Total
class ShoppingCart {
  constructor() {
    this._items = [];
  }
  addItem(name, price, quantity) {
    if (price < 0 || quantity < 1) return;
    this._items.push({ name, price, quantity });
  }
  removeItem(name) {
    this._items = this._items.filter(i => i.name !== name);
  }
  get total() {
    return this._items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
const cart = new ShoppingCart();
cart.addItem("Book", 15, 2);
cart.addItem("Pen", 2, 5);
console.log(cart.total); // 40

// Challenge 6: Age Validation
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get age() { return this._age; }
  set age(value) {
    if (value >= 0 && value <= 120) this._age = value;
    else console.log("Invalid age.");
  }
}
const p = new Person("Alex", 25);
p.age = 150; // rejected
console.log(p.age); // 25

// === LEVEL 3 ===

// Challenge 7: Complete Validation System
class ValidatedStudent {
  constructor(name, email) {
    this._name = name;
    this._email = email;
    this._grades = [];
  }
  get name() { return this._name; }
  set name(value) {
    if (typeof value === "string" && value.trim() !== "") this._name = value;
    else console.log("Name must be a non-empty string.");
  }
  get email() { return this._email; }
  set email(value) {
    if (value.includes("@")) this._email = value;
    else console.log("Email must contain @.");
  }
  addGrade(grade) {
    if (typeof grade === "number" && grade >= 0 && grade <= 100) {
      this._grades.push(grade);
    } else {
      console.log("Grade must be 0–100.");
    }
  }
  get average() {
    if (this._grades.length === 0) return 0;
    return this._grades.reduce((a, b) => a + b, 0) / this._grades.length;
  }
  getStatus() {
    return this.average >= 70 ? "Passing" : "Failing";
  }
}
const vs = new ValidatedStudent("Casey", "casey@school.edu");
vs.addGrade(85);
vs.addGrade(72);
vs.addGrade(90);
console.log(vs.average.toFixed(1)); // 82.3
console.log(vs.getStatus());        // Passing
