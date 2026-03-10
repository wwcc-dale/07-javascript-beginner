# Session 3 Hints — Building Objects for Real Data

## General
- `const` on an object means the *variable* can't be reassigned — but you can still
  change the *properties* inside it. `account.balance = 1200` works even with `const account`.

## Challenge 3: Update Object Properties
- Create the object first, then update the property on a separate line:
  `account.balance = 1200;`

## Challenge 5: Car Rental (Level 2)
- Access both values using dot notation and multiply:
  `rentalCar.dailyRate * rentalCar.daysRented`

## Challenge 6: Quiz Score (Level 2)
- Percentage = `(questionsCorrect / totalQuestions) * 100`
- Access the values through the object: `quizScore.questionsCorrect`

## Challenge 7: Multiple Related Objects (Level 3)
- An object's property can hold another object as its value:
  `result.student = studentInfo;`
- Build a summary by reading properties across all three objects.
