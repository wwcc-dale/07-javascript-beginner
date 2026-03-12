---
allowed_extensions:
- js
assignment_type: online
module: 2
name: 'Session 7: Encapsulation and Data Protection'
points: 20
position: 6
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-5
session: 7.3
submission_types:
- online_upload
---

# Session 7: Encapsulation and Data Protection

Build classes with proper encapsulation, validation, and controlled data access.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `07-assignment.js`

## Getting Started

- buttons
- Download Starter File | 07-starter.zip | primary | download

1. Open the starter file, save a copy as `07-assignment.js`, and complete each challenge.

## Level 1 – Core Tasks [15 pts](#pill:accent)

### Challenge 1: BankAccount with Validation
```js
// TODO: Create a BankAccount class with:
// - Constructor: owner, balance
// - Properties: _owner, _balance (use underscore convention)
// - Method deposit(amount): adds to balance if amount > 0
// - Method withdraw(amount): subtracts if amount <= balance
// - Getter for balance
// Both methods should return true/false for success

// Test:
// const acc = new BankAccount("Alex", 1000);
// acc.deposit(500);   // balance: 1500
// acc.withdraw(2000); // fails, balance stays 1500
```

### Challenge 2: Product with Price Validation
```js
// TODO: Create a Product class with:
// - Constructor: name, price, stock
// - Properties: _name, _price, _stock
// - Setter for price that rejects values < 0
// - Setter for stock that rejects values < 0
// - Getter for each property
// - Method buy(quantity) that reduces stock if available

// Test:
// const item = new Product("Laptop", 999, 10);
// item.price = -50;  // rejected
// item.buy(3);       // stock becomes 7
```

### Challenge 3: User with Login Attempts
```js
// TODO: Create a User class with:
// - Constructor: username, password
// - Properties: _username, _password, _loginAttempts (starts at 0)
// - Method attemptLogin(inputPassword):
//   - If _loginAttempts >= 3, return "locked"
//   - If password matches, reset attempts and return "success"
//   - If password wrong, increment attempts and return "failed"
// - Method resetAttempts()

// Test:
// const user = new User("alex", "secret123");
// user.attemptLogin("wrong"); // "failed", attempts = 1
// user.attemptLogin("wrong"); // "failed", attempts = 2
```

### Challenge 4: Temperature with Unit Conversion
```js
// TODO: Create a Temperature class with:
// - Constructor: celsius
// - Property: _celsius
// - Getter celsius: returns _celsius
// - Setter celsius: validates > -273.15 (absolute zero)
// - Getter fahrenheit: returns (celsius * 9/5) + 32
// - Setter fahrenheit: converts to celsius and stores

// Test:
// const temp = new Temperature(0);
// console.log(temp.fahrenheit); // 32
// temp.fahrenheit = 212;
// console.log(temp.celsius);    // 100
```

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: ShoppingCart with Total
Create ShoppingCart class with:
- Array of items (each item: {name, price, quantity})
- Method addItem(name, price, quantity) with validation
- Method removeItem(name)
- Getter total that calculates sum

### Challenge 6: Age Validation
Create Person class with _age property and setter that only accepts ages 0-120.

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Complete Validation System
Create a Student class with:
- Properties: _name, _email, _grades (array)
- Setters that validate:
  - name: must be non-empty string
  - email: must contain "@"
  - grades: array of numbers 0-100
- Method addGrade(grade) with validation
- Getter average that calculates grade average
- Method getStatus() returns "Passing" or "Failing" based on average

---

## Before Submitting

- checklist: Before Submitting
- File named `07-assignment.js`
- All Level 1 classes use private-style properties (`_name` convention)
- Validation rejects invalid values correctly
- Getters and setters work as expected
- Code runs without errors
- Attempted Level 2 or 3 if time allowed