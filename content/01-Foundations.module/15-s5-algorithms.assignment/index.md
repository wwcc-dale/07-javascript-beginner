---
allowed_extensions:
- js
assignment_type: online
module: 1
name: 'Session 5: Solving Problems with Algorithms'
points: 20
position: 15
published: true
related_outcomes:
- CLO-4
session: 5.3
submission_types:
- online_upload
---

# Session 5: Solving Problems with Algorithms

Implement algorithmic patterns: find max/min, count matching items, calculate averages, and solve multi-step problems.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `05-assignment.js`

## Getting Started

**[Download starter file](05-starter.zip)**

1. Open the starter file, save a copy as `05-assignment.js`, and complete each challenge.

## Level 1 – Core Tasks (15 points)

### Challenge 1: Find Maximum Score
```js
// Write a function findMax(scores) that returns the highest score
// Test: findMax([78, 95, 82, 90]) → 95
```

### Challenge 2: Find Minimum Score
```js
// Write a function findMin(scores) that returns the lowest score
// Test: findMin([78, 95, 82, 90]) → 78
```

### Challenge 3: Count Passing Grades
```js
// Write a function countPassing(scores) that counts scores >= 70
// Test: countPassing([85, 65, 92, 72, 88]) → 4
```

### Challenge 4: Calculate Average
```js
// Write a function average(numbers) that returns the average
// Test: average([80, 90, 100]) → 90
```

## Level 2 – Stretch (3 points)

### Challenge 5: Find Grade Status
Combine max/min/average into one function that returns all three stats.

### Challenge 6: Grade Range
Count how many scores fall within a range (e.g., 80-90).

## Level 3 – Advanced (2 points)

### Challenge 7: Complete Grade Analysis
Write a function that takes an array of scores and returns:
- Highest score
- Lowest score
- Average score
- Number of students
- Number who passed (>=70)
- Number who failed (<70)
- Percentage who passed