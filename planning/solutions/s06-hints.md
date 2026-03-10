# Session 6 Hints — Building Your First Classes

## General
- The `constructor` runs once when you call `new ClassName(...)`. Use it to set up
  every property the object needs at birth.
- Methods go inside the class body but outside the constructor.
- Call a method like this: `student1.isPassing()` — with parentheses.

## Challenge 1: Student / isPassing
- `isPassing()` can return the boolean expression directly:
  `return this.grade >= 70;` — no if/else needed.

## Challenge 2: Product / buy
- `buy(quantity)` should subtract from `this.stock`, not replace it.

## Challenge 3: BankAccount / withdraw
- Check *before* subtracting: if `amount > this.balance`, do nothing (or log a message).

## Challenge 4: Book / percentComplete
- `percentComplete()` = `(this.currentPage / this.pages) * 100`
- Make sure `read()` adds to `currentPage` — don't replace it.

## Challenge 6: Multiple Instances (Level 2)
- Create an array of Student instances, then use a `for...of` loop to check each one.
- Keep a separate counter outside the loop and increment it when `isPassing()` is true.

## Challenge 7: GradeBook (Level 3)
- `getPassingCount()`: use `.filter()` or a loop — count students where `isPassing()` is true.
- `getAverageGrade()`: sum all `student.grade` values, then divide by `students.length`.
- `getTopStudent()`: track the highest-grade student as you loop — same pattern as findMax.
