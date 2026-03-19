---
module: 1
name: 'Session 5: Algorithmic Thinking'
position: 13
published: true
related_outcomes:
- CLO-4
session: 5.1
---

# Session 5: Algorithmic Thinking

## Learning Outcomes

By the end of this session, you will be able to:
- Identify and solve problems using algorithmic patterns.
- Find maximum and minimum values in data.
- Count items matching specific criteria.
- Combine functions, loops, and conditionals to solve problems.

---

## Introduction (5 minutes)

An algorithm is a step-by-step solution to a problem. You've learned the building blocks (variables, functions, loops, conditionals). Now you'll use them together to solve real problems. This is where programming becomes powerful.

---

## Reading: Common Algorithms (35 minutes)

### What Is an Algorithm?

An algorithm is a well-defined series of steps to solve a problem. In programming, it usually combines loops, conditionals, and functions.

### Algorithm 1: Find Largest

Find the largest number in a list.

```js
function getLargest(values) {
  let largest = values[0];  // Start with first number

  for (let i = 1; i < values.length; i++) {
    if (values[i] > largest) {
      largest = values[i];  // Update if we find larger
    }
  }

  return largest;
}

console.log(getLargest([3, 9, 2, 7, 5]));  // 9
```

### Algorithm 2: Count Matching

Count how many items match a condition.

```js
function countAffordable(prices) {
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= 25) {
      count++;
    }
  }

  return count;
}

console.log(countAffordable([12, 30, 8, 22, 45]));  // 3
```

### Algorithm 3: Calculate Average

Sum all values and divide by count.

```js
function calculateAverage(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  
  let average = sum / numbers.length;
  return average;
}

console.log(calculateAverage([80, 90, 100]));  // 90
```

### Algorithm 4: Find Smallest

Find the smallest number.

```js
function getSmallest(values) {
  let smallest = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] < smallest) {
      smallest = values[i];
    }
  }

  return smallest;
}

console.log(getSmallest([25, 10, 30, 5, 15]));  // 5
```

### Algorithm Patterns

Many algorithms follow the same pattern:

1. **Initialize** – Set up a variable to track results
2. **Loop** – Go through the data
3. **Condition** – Check if current item matches criteria
4. **Update** – Modify the tracking variable
5. **Return** – Send back the result

---

## Video Tutorial: Solving Problems with Algorithms (20 minutes)

Watch: `assets/videos/05-algorithms.mp4`

This video covers:
- Common algorithmic patterns
- How to break down problems
- Finding max, min, and counting items
- Combining multiple algorithms
- Debugging algorithm errors

Pause and implement each example.

---

## Supplemental Practice: Real Algorithms (25 minutes)

### Scenario 1: Find Highest Temperature

```js
const temps = [72, 85, 68, 91, 77];

function findHottest(temperatures) {
  let hottest = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > hottest) {
      hottest = temperatures[i];
    }
  }
  return hottest;
}

console.log(findHottest(temps));  // 91
```

### Scenario 2: Count Late Assignments

```js
const submissions = [true, false, true, false, false, true];

function countLate(arr) {
  let lateCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) {
      lateCount++;
    }
  }
  return lateCount;
}

console.log(countLate(submissions));  // 3
```

### Scenario 3: Find Best Test Score

```js
const allScores = [78, 92, 85, 88, 95, 80];

function getBestScore(scores) {
  let best = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > best) {
      best = scores[i];
    }
  }
  return best;
}

console.log(getBestScore(allScores));  // 95
```

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 5 Practice Quiz** in Canvas.

Focus on:
- Understanding algorithmic patterns
- Finding max/min values
- Counting items
- Solving multi-step problems

---

## Hands-On Assignment (60–90 minutes)

Open the assignment **"Session 5: Solving Problems with Algorithms"**.

You will:
- Implement common algorithms
- Combine multiple patterns
- Solve real problems using algorithmic thinking

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Algorithms are step-by-step solutions** combining loops, conditionals, and functions.
- **Common patterns** (find max, count, average) appear in many programs.
- **Algorithm thinking** means breaking problems into small steps.
- **Practice makes algorithms intuitive.**

### How This Connects to Your Learning

You've now completed **Phase 1: Foundations!** You know:
- Variables, data types, conditionals
- Functions and reusable code
- Objects for organizing data
- Loops and iteration
- Algorithmic thinking

**Next phase:** Object-Oriented Programming (Sessions 6-10). You'll learn to organize code using classes and objects, building more complex programs.

### Questions?

- Try writing your own algorithms for different problems.
- Experiment with variations of max/min/count patterns.
- Ask your instructor if anything is unclear.

**Congratulations on completing the Foundations phase!** 🎉

---

- accordion: Helpful Resources
- [Algorithms — Wikipedia overview](https://en.wikipedia.org/wiki/Algorithm)
  - Explains what an algorithm is and the general concepts behind algorithmic thinking
- [Array.prototype.indexOf() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  - Find the position of a value in an array — useful for searching
- [Math.max() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
  - Returns the largest of the provided numbers
- [Math.min() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
  - Returns the smallest of the provided numbers
- [Expressions and operators — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
  - Covers arithmetic, comparison, and logical operators used inside algorithm conditions