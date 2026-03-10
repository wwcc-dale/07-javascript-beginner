// Session 4: Processing Data with Loops — Example Solution

// === LEVEL 1 ===

// Challenge 1: Print Numbers 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Challenge 2: Loop Through Array
const colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Challenge 3: Sum Array
const numbers = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 100

// Challenge 4: Count Passing Scores
const scores = [85, 65, 92, 72, 88];
let passingCount = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 80) {
    passingCount++;
  }
}
console.log(`Passing count: ${passingCount}`); // 3

// === LEVEL 2 ===

// Challenge 5: Find Maximum
const examScores = [72, 95, 84, 60, 91];
let max = examScores[0];
for (let i = 1; i < examScores.length; i++) {
  if (examScores[i] > max) {
    max = examScores[i];
  }
}
console.log(`Maximum: ${max}`); // 95

// Challenge 6: Create New Array (doubles)
const original = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < original.length; i++) {
  doubled.push(original[i] * 2);
}
console.log(doubled); // [2, 4, 6, 8, 10]

// === LEVEL 3 ===

// Challenge 7: Grade Summary
function gradeSummary(scores) {
  let total = 0;
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
    if (scores[i] >= 70) {
      passed++;
    } else {
      failed++;
    }
  }

  return {
    totalStudents: scores.length,
    passed: passed,
    failed: failed,
    average: total / scores.length
  };
}

const result = gradeSummary([85, 65, 92, 72, 88, 55, 78]);
console.log(`Total students: ${result.totalStudents}`);
console.log(`Passed: ${result.passed}`);
console.log(`Failed: ${result.failed}`);
console.log(`Average: ${result.average.toFixed(1)}`);
