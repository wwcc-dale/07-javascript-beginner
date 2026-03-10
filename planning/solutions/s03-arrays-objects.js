// Session 3: Building Objects for Real Data — Example Solution

// === LEVEL 1 ===

// Challenge 1: Create a Student Object
const student = {
  name: "Alex",
  email: "alex@school.edu",
  grade: 88,
  enrolled: true
};
console.log(student.name);
console.log(student.email);
console.log(student.grade);
console.log(student.enrolled);

// Challenge 2: Create a Product Object
const product = {
  name: "Wireless Mouse",
  price: 29.99,
  inStock: true,
  quantity: 15
};
console.log(product.name);
console.log(product.price);

// Challenge 3: Update Object Properties
const account = {
  accountHolder: "Jordan",
  balance: 1000,
  accountType: "Savings"
};
account.balance = 1200;
console.log(account.balance); // 1200

// Challenge 4: Create a Book Object
const book = {
  title: "Learning JavaScript",
  author: "Jane Developer",
  year: 2024,
  pages: 350
};
console.log(book.title);
console.log(book.author);

// === LEVEL 2 ===

// Challenge 5: Car Rental
const rentalCar = {
  brand: "Toyota",
  model: "Camry",
  dailyRate: 50,
  daysRented: 3
};
const totalCost = rentalCar.dailyRate * rentalCar.daysRented;
console.log(`Total rental cost: $${totalCost}`); // 150

// Challenge 6: Quiz Score
const quizScore = {
  studentName: "Casey",
  questionsCorrect: 9,
  totalQuestions: 10
};
const percentage = (quizScore.questionsCorrect / quizScore.totalQuestions) * 100;
console.log(`${quizScore.studentName} scored ${percentage}%`); // 90%

// === LEVEL 3 ===

// Challenge 7: Multiple Related Objects
const studentInfo = {
  name: "Alex",
  id: "S001"
};
const course = {
  courseName: "Web Development 101",
  credits: 3
};
const result = {
  student: studentInfo,
  course: course,
  grade: "A"
};
console.log(`Student: ${result.student.name}`);
console.log(`Course: ${result.course.courseName}`);
console.log(`Grade: ${result.grade}`);
