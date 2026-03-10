// Session 7 Starter Code - Encapsulation

// ============================================
// Challenge 1: BankAccount with Validation
// ============================================

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
// console.log(acc.balance);




// ============================================
// Challenge 2: Product with Price Validation
// ============================================

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
// console.log(item.stock);




// ============================================
// Challenge 3: User with Login Attempts
// ============================================

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
// console.log(user.attemptLogin("wrong")); // "failed", attempts = 1
// console.log(user.attemptLogin("wrong")); // "failed", attempts = 2
// console.log(user.attemptLogin("secret123")); // "success"




// ============================================
// Challenge 4: Temperature with Unit Conversion
// ============================================

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




// ============================================
// LEVEL 2 - STRETCH TASKS (OPTIONAL)
// ============================================

// Challenge 5: ShoppingCart with Total
// Create ShoppingCart class with:
// - Array of items (each item: {name, price, quantity})
// - Method addItem(name, price, quantity) with validation
// - Method removeItem(name)
// - Getter total that calculates sum




// Challenge 6: Age Validation
// Create Person class with _age property and setter
// that only accepts ages 0-120




// ============================================
// LEVEL 3 - ADVANCED CHALLENGE (OPTIONAL)
// ============================================

// Challenge 7: Complete Validation System
// Create a Student class with:
// - Properties: _name, _email, _grades (array)
// - Setters that validate:
//   - name: must be non-empty string
//   - email: must contain "@"
//   - grades: array of numbers 0-100
// - Method addGrade(grade) with validation
// - Getter average that calculates grade average
// - Method getStatus() returns "Passing" or "Failing" based on average
