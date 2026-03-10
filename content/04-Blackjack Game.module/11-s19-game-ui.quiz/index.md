---
allowed_attempts: 3
indent: 1
module: 4
name: Session 19 Quiz – Game UI and DOM Integration
position: 11
published: false
question_groups:
- bank: s19-game-ui.bank
  pick: 12
  points_per_question: 1
quiz_type: practice_quiz
session: 19.2
show_correct_answers: true
shuffle_answers: true
time_limit: 15
---

# Session 19 Quiz – Game UI and DOM Integration

Test your understanding of connecting a game class to a browser UI using DOM events.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s19-game-ui.bank

## Q1

What is the correct order of operations after a player clicks "Hit"?

- [ ] Update display → call `playerHit()` → check state
- [x] Call `playerHit()` → check state → update display
- [ ] Check state → update display → call `playerHit()`
- [ ] Update display → check state → call `playerHit()`

> **Correct.** Call the game method first (which changes the game state), then update the display to reflect the new state.

---

## Q2

```js
container.innerHTML = '';
```

Why is this called at the start of `renderHand()`?

- [ ] To prevent CSS from applying to old cards
- [x] To remove cards from the previous action before drawing the new set
- [ ] `innerHTML = ''` is required before `appendChild`
- [ ] It resets the `BlackjackGame` object

> **Correct.** Without clearing first, each update would add more cards on top of the existing ones.

---

## Q3

A button has `disabled` attribute set. What happens when a user clicks it?

- [ ] The click event fires but does nothing
- [ ] An error is thrown
- [x] The click event does not fire at all
- [ ] The button becomes hidden

> **Correct.** Disabled buttons do not fire click events, so your listeners are never called.

---

## Q4

```js
button.addEventListener('click', resolve, { once: true });
```

What does `{ once: true }` do?

- [ ] The event fires once per second
- [ ] The listener waits one second before activating
- [x] The listener automatically removes itself after the first click
- [ ] The button can only be clicked once per page load

> **Correct.** `{ once: true }` is a built-in option that removes the event listener after it fires once.

---

## Q5

In the simple `onclick` approach, why should Hit and Stand buttons be disabled after a round ends?

- [ ] Disabled buttons look better in the UI
- [ ] The game class throws an error if you call `playerHit()` when state is `'over'`
- [x] Preventing clicks avoids confusing the user and keeps the game in a consistent state
- [ ] The buttons stop working automatically when state is `'over'`

> **Correct.** The game's state guards prevent invalid actions, but disabling buttons also gives the user a clear visual signal that the round is over.

---

## Q6

```js
const el = document.createElement('div');
el.classList.add('card');
el.textContent = card.toString();
container.appendChild(el);
```

What does this code produce in the HTML?

- [ ] `<span class="card">Ace of Spades</span>`
- [x] `<div class="card">Ace of Spades</div>`
- [ ] `<div id="card">Ace of Spades</div>`
- [ ] A `Card` object is added to the container

> **Correct.** `createElement('div')` creates a `<div>`, `classList.add('card')` adds the class, and `textContent` sets the visible text.

---

## Q7

After calling `game.startRound()`, when should buttons be enabled?

- [ ] Only after the player's first hit
- [ ] Before calling `startRound()` so they are ready immediately
- [x] After `startRound()` — once the game is in `'playing'` state
- [ ] Only when the player's total is below 17

> **Correct.** Hit and Stand buttons should only be enabled when there is an active round. Enabling them before `startRound()` could allow clicks before the round begins.

---

## Q8

Why does `updateDisplay()` read values from the game object (`game.playerTotal`, `game.dealerCards`) rather than tracking them separately?

- [ ] Game objects are faster to read than local variables
- [x] The game object is the single source of truth — the UI should always reflect current game state
- [ ] Local variables can't store card arrays
- [ ] Event listeners require reading from objects

> **Correct.** Having one source of truth prevents the display getting out of sync with the actual game state.

---

## Q9

In the hidden dealer card approach, when should the dealer's face-down card be revealed?

- [ ] When the player hits for the first time
- [x] When the round ends (player busts or player stands)
- [ ] Only if the dealer busts
- [ ] Never — the second card is always hidden

> **Correct.** Reveal the dealer's full hand when the round is resolved, so the player can verify the outcome.

---

## Q10

Which `<script>` tag order is correct if `ui.js` uses `BlackjackGame` from `game.js`?

- [ ] `ui.js` first, then `game.js`
- [x] `game.js` first, then `ui.js`
- [ ] The order doesn't matter for `<script>` tags
- [ ] Both should be in `<head>`, not in `<body>`

> **Correct.** Scripts execute in order. `game.js` must define `BlackjackGame` before `ui.js` tries to use it.

---

## Q11

A player clicks Stand. The `onclick` handler calls `game.playerStand()`. What should happen next?

- [ ] Wait for another click before updating the display
- [x] Call `updateDisplay()` to show the dealer's final hand, then call `endRound()`
- [ ] Call `game.startRound()` immediately
- [ ] Disable all buttons and wait for the user to reload

> **Correct.** After `playerStand()`, the dealer plays automatically inside `_runDealerTurn()`. You then update the display and call `endRound()` to show the result.

---

## Q12

`formatResult(outcome)` converts an outcome string to a display message. Which input → output pair is correct?

- [ ] `'push'` → `"Bust!"`
- [ ] `'player_bust'` → `"You win!"`
- [x] `'blackjack'` → `"Blackjack! You win!"`
- [ ] `'dealer_wins'` → `"Push — tie game"`

> **Correct.** `'blackjack'` means the player has a 2-card 21 and the dealer does not — the player wins with a bonus.

---

:::end
