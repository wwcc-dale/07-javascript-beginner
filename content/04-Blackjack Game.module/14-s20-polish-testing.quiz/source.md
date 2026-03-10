# Session 20 Quiz – Polish, Async, and Debugging

Test your understanding of CSS for games, async delays, and debugging multi-file projects.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s20-polish-testing.bank

## Q1

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
await delay(500);
```

What does `await delay(500)` do?

- [ ] Stops the browser for 500 milliseconds
- [x] Pauses the current async function for 500ms without blocking the browser
- [ ] Runs the next line exactly 500ms after the page loaded
- [ ] Waits until the user clicks the screen

> **Correct.** `await` pauses the async function, but the browser's event loop continues running — other events (clicks, timers) can still fire during the pause.

---

## Q2

You see `ReferenceError: Hand is not defined` in the console. What is the most likely cause?

- [ ] `Hand` is spelled incorrectly in the class definition
- [x] The `<script>` tag for `hand.js` appears after the script that tries to use `Hand`
- [ ] `new Hand()` requires parentheses
- [ ] Class names must start with a lowercase letter

> **Correct.** Scripts execute top-to-bottom. If `hand.js` loads after `game.js`, `BlackjackGame`'s constructor tries to create a `Hand` before the class is defined.

---

## Q3

Which `<script>` order is correct for a project where `ui.js` uses `BlackjackGame`, which uses `Hand`, which uses `Card`?

- [ ] `ui.js`, `game.js`, `hand.js`, `card.js`
- [x] `card.js`, `hand.js`, `game.js`, `ui.js`
- [ ] Any order works — the browser resolves dependencies automatically
- [ ] `game.js`, `card.js`, `hand.js`, `ui.js`

> **Correct.** Load the most fundamental class first (`Card`), then the classes that depend on it, finishing with `ui.js` which depends on everything.

---

## Q4

A card element has this CSS: `animation: dealCard 0.2s ease;`. When does the animation play?

- [ ] Only when you call `card.animate()`
- [ ] Every time the card's text changes
- [x] When the element is added to the DOM via `appendChild`
- [ ] Once, when the page first loads

> **Correct.** CSS animations with no explicit `animation-play-state` play immediately when the element is created/inserted into the DOM.

---

## Q5

The player's total shows `NaN` in the UI. Which method should you check first?

- [ ] `renderHand()`
- [ ] `startRound()`
- [x] `Card.getValue()`
- [ ] `Hand.addCard()`

> **Correct.** `NaN` in a total almost always means `getValue()` returned `NaN` for some card — typically a face card hitting the `parseInt(rank)` path.

---

## Q6

```css
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

What does `cursor: not-allowed` do?

- [ ] Prevents the button from receiving any mouse events
- [x] Changes the mouse cursor to a circle with a line through it when hovering
- [ ] Makes the button invisible
- [ ] Throws a CSS error because buttons can't be disabled

> **Correct.** `cursor: not-allowed` is purely visual — it changes the cursor appearance. The `disabled` attribute is what actually prevents clicks.

---

## Q7

After a round ends, the "Deal" button remains disabled. Which part of `endRound()` is most likely missing?

- [ ] `game.getResult()`
- [x] `dealBtn.disabled = false`
- [ ] `game.startRound()`
- [ ] `updateDisplay()`

> **Correct.** `endRound()` should re-enable the Deal button so the player can start the next round.

---

## Q8

```css
@keyframes dealCard {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

What does `translateY(-20px)` do at the start of the animation?

- [ ] Moves the card 20px to the left
- [ ] Scales the card to 20% of its size
- [x] Moves the card 20px upward from its normal position
- [ ] Rotates the card 20 degrees

> **Correct.** `translateY(-20px)` moves the element up by 20px. The animation then smoothly slides it down to `translateY(0)` — its normal position.

---

## Q9

The dealer's total shows `21` even when the second card is supposed to be face-down. What is wrong?

- [ ] `isBust()` is returning the wrong value
- [x] `updateDisplay()` is being called without `hideDealer = true` during the player's turn
- [ ] `getTotal()` is including the face-down card when it shouldn't
- [ ] The HTML `<span id="dealer-total">` has the wrong ID

> **Correct.** The fix is to call `updateDisplay(true)` during the player's turn so the dealer total shows `"?"` instead of the real value.

---

## Q10

You want to add a 300ms pause between each dealt card. Which approach is correct?

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

- [ ] Option A — `delay()` runs automatically
- [x] Option B — `await delay(300)` actually pauses before the next card
- [ ] Both are equivalent
- [ ] Neither works — you need `setTimeout` directly instead

> **Correct.** Option A calls `delay(300)` but doesn't await it — the loop runs immediately without pausing. Option B uses `await` inside an `async` function, which genuinely pauses between cards.

---

## Q11

Which CSS property creates the green felt background colour for a card table?

- [ ] `color: #2d6a4f`
- [ ] `border: #2d6a4f`
- [x] `background-color: #2d6a4f`
- [ ] `fill: #2d6a4f`

> **Correct.** `background-color` sets the element's background. `color` sets text colour.

---

## Q12

Playing 5 rounds, you notice the dealer sometimes shows 3 cards but sometimes only 2. Is this correct?

- [ ] No — the dealer should always have exactly 2 cards
- [x] Yes — the dealer must hit until reaching 17, which may require 1 or more extra cards
- [ ] No — the dealer should always have the same number of cards as the player
- [ ] It depends on whether the player busted

> **Correct.** The dealer's "stand on 17" rule means they draw as many cards as needed to reach 17+. Starting hands below 17 require extra hits.

---

:::end
