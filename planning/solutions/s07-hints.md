# Session 7 Hints — Encapsulation and Data Protection

## General
- The underscore prefix (`_balance`) is a naming convention meaning "internal — don't access directly."
  JavaScript doesn't enforce it; you enforce it by using getters and setters instead.
- Getters and setters are called like *properties*, not methods:
  `acc.balance` (not `acc.balance()`), `item.price = 50` (not `item.setPrice(50)`).

## Challenge 1: BankAccount
- The getter just returns `this._balance`.
- `deposit` should only add if `amount > 0`; return `true` on success, `false` otherwise.
- `withdraw` should only subtract if `amount <= this._balance`; return `false` if refused.

## Challenge 2: Product setters
- The setter runs when someone writes `item.price = value`.
  Inside it, `value` is the new value being assigned.
- If `value < 0`, do nothing (or log a message) — don't store it.

## Challenge 3: User login lock
- Check `_loginAttempts >= 3` **first** — if locked, return immediately without checking the password.
- On a successful login, reset `_loginAttempts` to 0 before returning `"success"`.

## Challenge 4: Temperature
- `get fahrenheit()`: convert from the stored Celsius: `(this._celsius * 9/5) + 32`
- `set fahrenheit(value)`: convert back: `this._celsius = (value - 32) * 5/9`

## Challenge 7: Complete Validation (Level 3)
- `addGrade(grade)` should validate the number (0–100) before pushing to the array.
- `get average()` should handle an empty grades array (return 0 or a default).
