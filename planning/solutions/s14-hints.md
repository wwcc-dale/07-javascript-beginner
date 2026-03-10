# Session 14 Hints — Interactive Applications

## Challenge 1: Counter App
- Store the count in a variable outside the button handlers so all buttons share it.
- After updating the variable, update the display: `countEl.textContent = count;`

## Challenge 2: Form Handler
- Call `event.preventDefault()` as the **very first line** of the submit handler — otherwise the page reloads.
- Check that both fields are non-empty before showing the welcome message.
- Clear the form after a successful submission: `form.reset()` or set each `input.value = ''`.

## Challenge 3: Interactive List
- Check `input.value.trim() === ''` and return early if so — don't add blank items.
- The Delete button's handler removes its parent `<li>`, not itself.

## Challenge 4: Color Picker
- Store the button colors in an array. Loop to create 6 buttons, each setting the color box's `style.backgroundColor`.
- Display the color name in a separate element after each click.

## Challenge 5: Calculator (Level 2)
- You need to track three things: the first number, the operator, and whether you're entering the second number.
- When `=` is pressed, apply the stored operator to the stored first number and the current display value.

## Challenge 7: Complete Todo App (Level 3)
- Store todos as an array of objects: `{ id, text, done }`.
- Filter the array for display only — never delete items when filtering.
- "Clear completed" removes items with `done === true` from the array, then re-renders.
- Filtering and rendering should call one shared `render()` function.
