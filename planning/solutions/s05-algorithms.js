// Session 5: Solving Problems with Algorithms — Example Solution

// === LEVEL 1 ===

// Challenge 1: Find Maximum Score
function findMax(scores) {
  let max = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
    }
  }
  return max;
}
console.log(findMax([78, 95, 82, 90])); // 95

// Challenge 2: Find Minimum Score
function findMin(scores) {
  let min = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
    }
  }
  return min;
}
console.log(findMin([78, 95, 82, 90])); // 78

// Challenge 3: Count Passing Grades
function countPassing(scores) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 70) {
      count++;
    }
  }
  return count;
}
console.log(countPassing([85, 65, 92, 72, 88])); // 4

// Challenge 4: Calculate Average
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(average([80, 90, 100])); // 90

// === LEVEL 2 ===

// Challenge 5: Find Grade Status (all three stats)
function gradeStats(scores) {
  return {
    max: findMax(scores),
    min: findMin(scores),
    average: average(scores)
  };
}
const stats = gradeStats([78, 95, 82, 90, 60]);
console.log(`Max: ${stats.max}, Min: ${stats.min}, Average: ${stats.average}`);

// Challenge 6: Grade Range (count scores between low and high inclusive)
function countInRange(scores, low, high) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= low && scores[i] <= high) {
      count++;
    }
  }
  return count;
}
console.log(countInRange([78, 95, 82, 85, 90, 60], 80, 90)); // 3

// === LEVEL 3 ===

// Challenge 7: Complete Grade Analysis
function gradeAnalysis(scores) {
  let sum = 0;
  let passed = 0;
  let failed = 0;
  let max = scores[0];
  let min = scores[0];

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (scores[i] >= 70) {
      passed++;
    } else {
      failed++;
    }
    if (scores[i] > max) max = scores[i];
    if (scores[i] < min) min = scores[i];
  }

  const avg = sum / scores.length;
  const percentPassed = (passed / scores.length) * 100;

  return {
    highest: max,
    lowest: min,
    average: parseFloat(avg.toFixed(2)),
    totalStudents: scores.length,
    passed: passed,
    failed: failed,
    percentPassed: parseFloat(percentPassed.toFixed(1))
  };
}

const analysis = gradeAnalysis([85, 65, 92, 72, 88, 55, 78]);
console.log("Grade Analysis:");
console.log(`  Highest: ${analysis.highest}`);
console.log(`  Lowest:  ${analysis.lowest}`);
console.log(`  Average: ${analysis.average}`);
console.log(`  Students: ${analysis.totalStudents}`);
console.log(`  Passed:  ${analysis.passed} (${analysis.percentPassed}%)`);
console.log(`  Failed:  ${analysis.failed}`);
