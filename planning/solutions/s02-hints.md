# Session 2 Hints — Building Functions for Everyday Tasks

## General
- Every function that is supposed to produce a value must have a `return` statement.
  Without it, calling the function gives you `undefined`.
- Test each function immediately after writing it — don't write all four before testing any.

## Challenge 2: Calculate Average
- Average = (sum of all values) ÷ (count of values).
- Add the three parameters together, then divide by 3.

## Challenge 3: Apply Discount
- Discount amount = `originalPrice * (discountPercent / 100)`.
- Final price = `originalPrice - discountAmount`.

## Challenge 4: isPassing
- The function should `return` a boolean expression directly:
  `return score >= passingScore;` — no `if` needed.

## Challenge 7: Multiple Operations (Level 3)
- You don't need to rewrite the average or passing logic — call `calculateAverage`
  and `isPassing` *inside* this new function. That's the point of reusability.
- Build the message string using template literals or concatenation.
