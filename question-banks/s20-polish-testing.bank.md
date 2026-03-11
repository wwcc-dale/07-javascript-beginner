---
bank_name: "Session 20: Polish, Async, and Debugging"
---

1. What does `await delay(500)` do?
```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
await delay(500);
```
a) Stops the browser for 500 milliseconds
*b) Pauses the current async function for 500ms without blocking the browser
c) Runs the next line exactly 500ms after the page loaded
d) Waits until the user clicks the screen

1. You see `ReferenceError: Hand is not defined` in the console. What is the most likely cause?
a) `Hand` is spelled incorrectly in the class definition
*b) The `<script>` tag for `hand.js` appears after the script that tries to use `Hand`
c) `new Hand()` requires parentheses
d) Class names must start with a lowercase letter

1. Which `<script>` order is correct for a project where `ui.js` uses `BlackjackGame`, which uses `Hand`, which uses `Card`?
a) `ui.js`, `game.js`, `hand.js`, `card.js`
*b) `card.js`, `hand.js`, `game.js`, `ui.js`
c) Any order works — the browser resolves dependencies automatically
d) `game.js`, `card.js`, `hand.js`, `ui.js`

1. A card element has this CSS: `animation: dealCard 0.2s ease;`. When does the animation play?
a) Only when you call `card.animate()`
b) Every time the card's text changes
*c) When the element is added to the DOM via `appendChild`
d) Once, when the page first loads

1. The player's total shows `NaN` in the UI. Which method should you check first?
a) `renderHand()`
b) `startRound()`
*c) `Card.getValue()`
d) `Hand.addCard()`

1. What does `cursor: not-allowed` do?
```css
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```
a) Prevents the button from receiving any mouse events
*b) Changes the mouse cursor to a circle with a line through it when hovering
c) Makes the button invisible
d) Throws a CSS error because buttons can't be disabled

1. After a round ends, the "Deal" button remains disabled. Which part of `endRound()` is most likely missing?
a) `game.getResult()`
*b) `dealBtn.disabled = false`
c) `game.startRound()`
d) `updateDisplay()`

1. What does `translateY(-20px)` do at the start of this animation?
```css
@keyframes dealCard {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
a) Moves the card 20px to the left
b) Scales the card to 20% of its size
*c) Moves the card 20px upward from its normal position
d) Rotates the card 20 degrees

1. The dealer's total shows `21` even when the second card is supposed to be face-down. What is wrong?
a) `isBust()` is returning the wrong value
*b) `updateDisplay()` is being called without `hideDealer = true` during the player's turn
c) `getTotal()` is including the face-down card when it shouldn't
d) The HTML `<span id="dealer-total">` has the wrong ID

1. You want to add a 300ms pause between each dealt card. Which approach is correct?
```js
// Option A
for (const card of cards) {
  renderCard(card, container);
  delay(300);
}

// Option B
async function dealCards(cards, container) {
  for (const card of cards) {
    renderCard(card, container);
    await delay(300);
  }
}
```
a) Option A — `delay()` runs automatically
*b) Option B — `await delay(300)` actually pauses before the next card
c) Both are equivalent
d) Neither works — you need `setTimeout` directly instead

1. Which CSS property creates the green felt background colour for a card table?
a) `color: #2d6a4f`
b) `border: #2d6a4f`
*c) `background-color: #2d6a4f`
d) `fill: #2d6a4f`

1. Playing 5 rounds, you notice the dealer sometimes shows 3 cards but sometimes only 2. Is this correct?
a) No — the dealer should always have exactly 2 cards
*b) Yes — the dealer must hit until reaching 17, which may require 1 or more extra cards
c) No — the dealer should always have the same number of cards as the player
d) It depends on whether the player busted
