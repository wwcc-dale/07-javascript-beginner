// Session 5 Starter Code - Algorithms

// Challenge 1: Find Maximum Score
// Write a function findMax(scores) that returns the highest score
// Test: findMax([78, 95, 82, 90]) → 95

function findMax(scores) {
  // TODO: Implement find maximum algorithm
}

// Challenge 2: Find Minimum Score
// Write a function findMin(scores) that returns the lowest score
// Test: findMin([78, 95, 82, 90]) → 78

function findMin(scores) {
  // TODO: Implement find minimum algorithm
}

// Challenge 3: Count Passing Grades
// Write a function countPassing(scores) that counts scores >= 70
// Test: countPassing([85, 65, 92, 72, 88]) → 4

function countPassing(scores) {
  // TODO: Implement count matching algorithm
}

// Challenge 4: Calculate Average
// Write a function average(numbers) that returns the average
// Test: average([80, 90, 100]) → 90

function average(numbers) {
  // TODO: Implement calculate average algorithm
}

// LEVEL 2: Challenge 5 - Grade Statistics
// Create a function that returns an object with max, min, and average
// Example: {max: 95, min: 78, average: 86.25}

function getGradeStats(scores) {
  // TODO: Use your functions above to return stats object
}

// LEVEL 2: Challenge 6 - Count in Range
// Count how many scores fall between minScore and maxScore (inclusive)

function countInRange(scores, minScore, maxScore) {
  // TODO: Count scores where score >= minScore AND score <= maxScore
}

// LEVEL 3: Challenge 7 - Complete Grade Analysis
// Return an object with all the information:
// {
//   highest: number,
//   lowest: number,
//   average: number,
//   total: number,
//   passed: number,
//   failed: number,
//   percentPassed: number
// }

function analyzeGrades(scores) {
  // TODO: Implement complete analysis using algorithmic patterns
}

// Test your functions
const testScores = [85, 65, 92, 72, 88, 78, 95];

console.log("Max:", findMax(testScores));
console.log("Min:", findMin(testScores));
console.log("Passing count:", countPassing(testScores));
console.log("Average:", average(testScores));
