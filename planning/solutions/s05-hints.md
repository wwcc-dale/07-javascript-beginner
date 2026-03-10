# Session 5 Hints — Solving Problems with Algorithms

## Challenges 1 & 2: findMax / findMin
- Set your starting value to the **first element** of the array before looping.
- Loop from index 1 (you've already "seen" index 0).
- Update whenever you find something bigger (or smaller).

## Challenge 3: countPassing
- Initialize a counter to 0, loop through, check `>= 70`, increment if true.
- Return the counter after the loop — don't return inside the loop.

## Challenge 4: average
- Sum all values in the loop, then divide by `numbers.length` after the loop.

## Challenge 5: gradeStats (Level 2)
- Call your existing `findMax`, `findMin`, and `average` functions — don't rewrite the logic.
- Return an object with three properties: `{ max, min, average }`.

## Challenge 6: countInRange (Level 2)
- Two conditions must both be true: `score >= low && score <= high`.

## Challenge 7: Complete Grade Analysis (Level 3)
- One loop can calculate max, min, sum, passed count, and failed count simultaneously.
- Calculate average and percentPassed *after* the loop using the totals you accumulated.
- Use `parseFloat(value.toFixed(2))` to round decimal results cleanly.
