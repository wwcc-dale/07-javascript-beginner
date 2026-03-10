# Session 4 Hints — Processing Data with Loops

## Challenge 1: Print Numbers
- `for (let i = 1; i <= 10; i++)` — start at 1, end condition is `<= 10`.

## Challenge 3: Sum Array
- Declare `let sum = 0` *before* the loop starts.
- Inside the loop: `sum += numbers[i];`

## Challenge 4: Count Passing Scores
- Declare `let count = 0` before the loop.
- Inside the loop: check the condition, then `count++` if true.

## Challenge 5: Find Maximum (Level 2)
- Start by assuming the first element is the max: `let max = numbers[0];`
- Loop from index 1, and update `max` whenever you find something bigger.

## Challenge 6: Doubles (Level 2)
- Create an empty array before the loop: `const doubled = [];`
- Inside the loop: `doubled.push(numbers[i] * 2);`

## Challenge 7: Grade Summary (Level 3)
- One loop can track multiple things at once: a sum, a pass count, and a fail count.
- Average = `sum / scores.length` (calculate after the loop, not inside it).
