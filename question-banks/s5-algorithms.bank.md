---
bank_name: "Session 5: Algorithmic Thinking"
---

1. What is an algorithm?
a) A fancy name for a function
*b) A step-by-step solution to a problem
c) A programming language
d) A type of loop

1. In a "find maximum" algorithm, what do we start with?
*a) The first item in the array
b) 0
c) -Infinity
d) The last item

1. What does this algorithm do?
```js
function count(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) total++;
  }
  return total;
}
```
*a) Counts items greater than 50
b) Finds the maximum value
c) Calculates an average
d) Finds the minimum

1. When is the "find maximum" pattern useful?
a) Only for numbers
*b) Whenever you need to find the largest item
c) For small arrays only
d) Never, it's outdated

1. What value should we start with when finding a minimum?
a) 0
*b) The first item in the array
c) The largest possible number
d) It doesn't matter

1. How would you find the average of 5 scores?
a) Divide by 5
*b) Sum them all, then divide by 5
c) Find the maximum
d) Count how many passed

1. In the count algorithm, what does the if statement do?
a) Checks the loop condition
*b) Checks if the current item matches the criteria
c) Updates the maximum
d) Stops the loop

1. What's the first step in most algorithms?
a) Loop through data
*b) Initialize a variable to track results
c) Return a value
d) Check a condition

1. What will this return?
```js
function findMax(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}
findMax([5, 12, 3, 9, 7]);
```
*a) 12
b) 5
c) 7
d) undefined

1. Why do we start at index 1 in "find max"?
a) Arrays are 1-indexed
*b) We already compared the first element (index 0)
c) It's faster
d) It's required

1. How many times does this loop run?
```js
function count(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 100) c++;
  }
  return c;
}
```
*a) Once for each item in the array
b) Once for each item that equals 100
c) The number of items equal to 100
d) Infinity

1. What's a common use for the "count" algorithm?
a) Nothing
*b) Counting how many items meet a condition
c) Finding the biggest number
d) Organizing data

1. Can you combine multiple algorithms?
a) No, use only one per program
*b) Yes, algorithms can work together
c) Only if they're the same
d) Not recommended

1. What is algorithmic thinking?
a) Using fancy keywords
*b) Breaking problems into steps and solving them systematically
c) Using loops only
d) Writing code quickly

1. Which algorithm would you use to find the lowest temperature?
a) Count
b) Average
*c) Find minimum
d) Find maximum

1. When implementing an algorithm, what should you do first?
a) Start coding immediately
*b) Understand the problem and plan the steps
c) Test it with data
d) Ask for help
