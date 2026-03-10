# Session 1 Hints — Comparing Scores and Totals

## Challenge 1: Quiz Pass Check
- Use `>=` (greater than or equal) for the passing check — a score exactly at the limit should pass.
- `const` for values that never change; `let` for values that might.

## Challenge 4: Grade Label
- Order matters in an `if / else if` chain. Start with the **highest** grade threshold first.
  If you start with 70, a score of 95 will match that branch and never reach the "A" check.

## Challenge 5: Best of Two Quizzes
- Three cases: greater, less, or equal. Make sure you handle all three.

## Challenge 7: Budget Helper (Level 3)
- Calculate the total by adding all three item variables together before the `if`.
- The "over by X" message needs subtraction: `total - budget`.
- Sample output: `"This is over your budget by 12."`
