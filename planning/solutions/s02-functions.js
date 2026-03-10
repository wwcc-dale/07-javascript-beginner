// Session 2: Building Functions for Everyday Tasks — Example Solution

// === LEVEL 1 ===

// Challenge 1: Simple Greeting Function
function greetStudent(name) {
  return `Hello, ${name}!`;
}
console.log(greetStudent("Alex")); // Hello, Alex!

// Challenge 2: Calculate Average Score
function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
console.log(calculateAverage(85, 90, 95)); // 90

// Challenge 3: Apply Discount
function applyDiscount(originalPrice, discountPercent) {
  const discountAmount = originalPrice * (discountPercent / 100);
  return originalPrice - discountAmount;
}
console.log(applyDiscount(100, 20)); // 80

// Challenge 4: Check if Passing Grade
function isPassing(score, passingScore) {
  return score >= passingScore;
}
console.log(isPassing(85, 70)); // true
console.log(isPassing(60, 70)); // false

// === LEVEL 2 ===

// Challenge 5: Convert Time
function hoursToMinutes(hours) {
  return hours * 60;
}
console.log(hoursToMinutes(1.5)); // 90

// Challenge 6: Find Maximum
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(findMax(25, 30)); // 30

// === LEVEL 3 ===

// Challenge 7: Multiple Operations
function studentReport(name, score1, score2) {
  const avg = calculateAverage(score1, score2, 0) * 3 / 2; // average of two
  // Simpler: just compute directly
  const average = (score1 + score2) / 2;
  const status = isPassing(average, 70) ? "Passing" : "Not passing";
  return `${name} has an average of ${average}. Status: ${status}`;
}
console.log(studentReport("Alex", 85, 90));    // Alex has an average of 87.5. Status: Passing
console.log(studentReport("Jordan", 60, 70)); // Jordan has an average of 65. Status: Not passing
