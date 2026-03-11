---
bank_name: "Session 19: Game UI and DOM Integration"
---

1. What is the correct order of operations after a player clicks "Hit"?
a) Update display → call `playerHit()` → check state
*b) Call `playerHit()` → check state → update display
c) Check state → update display → call `playerHit()`
d) Update display → check state → call `playerHit()`

1. Why is `container.innerHTML = ''` called at the start of `renderHand()`?
a) To prevent CSS from applying to old cards
*b) To remove cards from the previous action before drawing the new set
c) `innerHTML = ''` is required before `appendChild`
d) It resets the `BlackjackGame` object

1. A button has the `disabled` attribute set. What happens when a user clicks it?
a) The click event fires but does nothing
b) An error is thrown
*c) The click event does not fire at all
d) The button becomes hidden

1. What does `{ once: true }` do?
```js
button.addEventListener('click', resolve, { once: true });
```
a) The event fires once per second
b) The listener waits one second before activating
*c) The listener automatically removes itself after the first click
d) The button can only be clicked once per page load

1. In the simple `onclick` approach, why should Hit and Stand buttons be disabled after a round ends?
a) Disabled buttons look better in the UI
b) The game class throws an error if you call `playerHit()` when state is `'over'`
*c) Preventing clicks avoids confusing the user and keeps the game in a consistent state
d) The buttons stop working automatically when state is `'over'`

1. What does this code produce in the HTML?
```js
const el = document.createElement('div');
el.classList.add('card');
el.textContent = card.toString();
container.appendChild(el);
```
a) `<span class="card">Ace of Spades</span>`
*b) `<div class="card">Ace of Spades</div>`
c) `<div id="card">Ace of Spades</div>`
d) A `Card` object is added to the container

1. After calling `game.startRound()`, when should buttons be enabled?
a) Only after the player's first hit
b) Before calling `startRound()` so they are ready immediately
*c) After `startRound()` — once the game is in `'playing'` state
d) Only when the player's total is below 17

1. Why does `updateDisplay()` read values from the game object rather than tracking them separately?
a) Game objects are faster to read than local variables
*b) The game object is the single source of truth — the UI should always reflect current game state
c) Local variables can't store card arrays
d) Event listeners require reading from objects

1. In the hidden dealer card approach, when should the dealer's face-down card be revealed?
a) When the player hits for the first time
*b) When the round ends (player busts or player stands)
c) Only if the dealer busts
d) Never — the second card is always hidden

1. Which `<script>` tag order is correct if `ui.js` uses `BlackjackGame` from `game.js`?
a) `ui.js` first, then `game.js`
*b) `game.js` first, then `ui.js`
c) The order doesn't matter for `<script>` tags
d) Both should be in `<head>`, not in `<body>`

1. A player clicks Stand. The `onclick` handler calls `game.playerStand()`. What should happen next?
a) Wait for another click before updating the display
*b) Call `updateDisplay()` to show the dealer's final hand, then call `endRound()`
c) Call `game.startRound()` immediately
d) Disable all buttons and wait for the user to reload

1. `formatResult(outcome)` converts an outcome string to a display message. Which input → output pair is correct?
a) `'push'` → `"Bust!"`
b) `'player_bust'` → `"You win!"`
*c) `'blackjack'` → `"Blackjack! You win!"`
d) `'dealer_wins'` → `"Push — tie game"`
