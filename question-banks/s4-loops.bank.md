---
bank_name: "Session 4: Loops and Iteration"
---

1. What kind of loop should you use when you don't know in advance how many times to repeat?
a) for loop
*b) while loop
c) for...of loop
d) Loops always require a known count

1. What will this print?
```js
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}
```
a) 0, 1, 2
*b) 3, 2, 1
c) 3
d) Infinite output

1. Which loop correctly iterates over every element in an array without needing an index?
a) `for (let i = 0; i < arr; i++)`
b) `while (arr.length > 0)`
*c) `for (const item of arr)`
d) `loop(arr)`

1. What will this print?
```js
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```
*a) apple, banana, cherry
b) 0, 1, 2
c) 3
d) Error

1. What is the risk of a while loop that never changes its condition?
a) It runs zero times
*b) It runs forever (infinite loop)
c) It automatically stops after 1000 iterations
d) JavaScript throws an error

1. What does this pattern produce?
```js
const prices = [10, 20, 30];
const doubled = [];
for (const price of prices) {
  doubled.push(price * 2);
}
console.log(doubled);
```
*a) [20, 40, 60]
b) [10, 20, 30]
c) 60
d) Error

1. When should you use `for...of` instead of a classic `for` loop?
a) When you need the element's index
*b) When you only need each element's value
c) When looping fewer than 10 times
d) for...of is always better

1. What does this build-new-array pattern require before the loop?
```js
const result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}
```
*a) An empty array declared before the loop starts
b) A starting value of 0
c) The loop variable must start at 1
d) Nothing special

1. What does this for loop do?
```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
*a) Prints 0, 1, 2
b) Prints 1, 2, 3
c) Prints 3
d) Error

1. What is `i` in a for loop?
a) The total number of iterations
*b) The loop variable that tracks the current iteration
c) The size of the array
d) A function

1. What will this print?
```js
const items = [10, 20, 30];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
```
*a) 10, 20, 30
b) 0, 1, 2
c) 3
d) Error

1. What does `i++` do in a for loop?
a) Checks the loop condition
*b) Adds 1 to i after each iteration
c) Initializes the loop
d) Ends the loop

1. How many times does this loop run?
```js
for (let i = 0; i < 5; i++) {
  console.log("Hi");
}
```
a) 0 times
b) 4 times
*c) 5 times
d) 6 times

1. What's the difference between `i < 5` and `i <= 5`?
a) They're the same
*b) < loops 5 times (0-4), <= loops 6 times (0-5)
c) <= is faster
d) They do opposite things

1. What will this code print?
```js
const scores = [85, 92, 78];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```
*a) 85, 92, 78
b) 0, 1, 2
c) 3
d) undefined

1. What is the purpose of a loop?
a) To make code run faster
*b) To repeat code without copy-pasting
c) To organize variables
d) To create functions

1. In a loop, what does `scores.length` give you?
a) The first item in the array
*b) The number of items in the array
c) The last item
d) An error

1. What will this code output?
```js
for (let i = 1; i <= 3; i++) {
  console.log(i * 2);
}
```
*a) 2, 4, 6
b) 1, 2, 3
c) 6
d) 2, 4

1. How would you loop through an array backwards?
a) Just use a regular for loop
*b) Start i at the end and decrement (i--)
c) You cannot loop backwards
d) Use a special backwards loop keyword

1. What happens if your loop condition is always true?
a) The loop doesn't run
*b) The loop runs forever (infinite loop)
c) It stops automatically
d) No effect

1. When do you use a loop?
a) Only once per program
*b) When you need to repeat code for multiple items
c) Loops are optional
d) For every function

1. What will this print?
```js
const prices = [5, 10, 15];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum = sum + prices[i];
}
console.log(sum);
```
*a) 30
b) 0
c) 3
d) 15

1. Why is `i < array.length` a common condition?
a) It's required
*b) It ensures you loop through every item without going past
c) It makes code run faster
d) It's just a convention

1. Can you modify array elements inside a loop?
a) No, loops are read-only
*b) Yes, you can access and modify them
c) Only sometimes
d) You need special syntax
