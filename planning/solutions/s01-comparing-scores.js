// Session 1: Comparing Scores and Totals — Example Solution

// === LEVEL 1 ===

// Challenge 1: Quiz Pass Check
const passingScore = 70;
let myScore = 85;

if (myScore >= passingScore) {
  console.log("You passed!");
} else {
  console.log("Keep practicing.");
}

// Challenge 2: Free Shipping
const freeShippingLimit = 35;
let cartTotal = 40;

if (cartTotal >= freeShippingLimit) {
  console.log("You get free shipping!");
} else {
  console.log("Shipping fees apply.");
}

// Challenge 3: Homework Status
let homeworkDone = true;

if (homeworkDone) {
  console.log("Nice work. You're ready for tomorrow.");
} else {
  console.log("You still need to finish your homework.");
}

// Challenge 4: Grade Label
let grade = 87;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Needs improvement");
}

// === LEVEL 2 ===

// Challenge 5: Best of Two Quizzes
const quiz1 = 78;
const quiz2 = 92;

if (quiz1 > quiz2) {
  console.log("Quiz 1 is higher");
} else if (quiz2 > quiz1) {
  console.log("Quiz 2 is higher");
} else {
  console.log("They are the same");
}

// Challenge 6: Study Time Suggestion
let hoursStudied = 3;

if (hoursStudied >= 5) {
  console.log("Great job studying!");
} else if (hoursStudied >= 2) {
  console.log("Good start, keep going.");
} else {
  console.log("Try to study more tomorrow.");
}

// === LEVEL 3 ===

// Challenge 7: Budget Helper
const budget = 50;
const item1 = 20;
const item2 = 15;
const item3 = 27;
let total = item1 + item2 + item3;

console.log(`Budget: ${budget}`);
console.log(`Total: ${total}`);

if (total <= budget) {
  console.log("You are within your budget.");
} else {
  console.log(`This is over your budget by ${total - budget}.`);
}
