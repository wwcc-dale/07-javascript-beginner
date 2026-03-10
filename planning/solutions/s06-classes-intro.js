// Session 6: Building Your First Classes — Example Solution

// === LEVEL 1 ===

// Challenge 1: Student Class
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  isPassing() {
    return this.grade >= 70;
  }
}
const student1 = new Student("Alex", 85);
console.log(student1.isPassing()); // true
const student2 = new Student("Sam", 65);
console.log(student2.isPassing()); // false

// Challenge 2: Product Class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  inStock() {
    return this.stock > 0;
  }
  buy(quantity) {
    this.stock -= quantity;
  }
}
const laptop = new Product("Laptop", 999, 5);
laptop.buy(2);
console.log(laptop.stock); // 3
console.log(laptop.inStock()); // true

// Challenge 3: BankAccount Class
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}
const account = new BankAccount("Jordan", 1000);
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(2000); // Insufficient funds.

// Challenge 4: Book Class
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = 0;
  }
  read(numPages) {
    this.currentPage += numPages;
    if (this.currentPage > this.pages) {
      this.currentPage = this.pages;
    }
  }
  percentComplete() {
    return (this.currentPage / this.pages) * 100;
  }
}
const book = new Book("JS Guide", "Jane Dev", 300);
book.read(150);
console.log(book.percentComplete()); // 50

// === LEVEL 2 ===

// Challenge 5: Timer Class
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  tick() {
    if (this.seconds > 0) this.seconds--;
  }
  isFinished() {
    return this.seconds === 0;
  }
  reset(newSeconds) {
    this.seconds = newSeconds;
  }
}
const timer = new Timer(3);
timer.tick();
timer.tick();
console.log(timer.isFinished()); // false
timer.tick();
console.log(timer.isFinished()); // true

// Challenge 6: Multiple Instances
const students = [
  new Student("Alex", 85),
  new Student("Jordan", 65),
  new Student("Casey", 92)
];
let passingCount = 0;
for (const s of students) {
  console.log(`${s.name}: ${s.isPassing() ? "Passing" : "Not passing"}`);
  if (s.isPassing()) passingCount++;
}
console.log(`${passingCount} students passing`);

// === LEVEL 3 ===

// Challenge 7: GradeBook Class
class GradeBook {
  constructor() {
    this.students = [];
  }
  addStudent(student) {
    this.students.push(student);
  }
  getPassingCount() {
    return this.students.filter(s => s.isPassing()).length;
  }
  getAverageGrade() {
    const total = this.students.reduce((sum, s) => sum + s.grade, 0);
    return total / this.students.length;
  }
  getTopStudent() {
    return this.students.reduce((best, s) => s.grade > best.grade ? s : best);
  }
}

const gb = new GradeBook();
gb.addStudent(new Student("Alex", 85));
gb.addStudent(new Student("Jordan", 72));
gb.addStudent(new Student("Casey", 95));
gb.addStudent(new Student("Riley", 60));

console.log(`Passing: ${gb.getPassingCount()}`);       // 3
console.log(`Average: ${gb.getAverageGrade()}`);       // 78
console.log(`Top student: ${gb.getTopStudent().name}`); // Casey
