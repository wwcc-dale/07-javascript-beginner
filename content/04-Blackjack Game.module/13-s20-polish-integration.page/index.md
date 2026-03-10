---
module: 4
name: 'Session 20: Polish and Full Game Integration'
position: 13
published: true
related_outcomes:
- CLO-3
- CLO-4
- CLO-5
session: 20.1
---

# Session 20: Polish and Full Game Integration

## Learning Outcomes

By the end of this session, you will be able to:
- Add CSS to make a browser game look polished and clear.
- Use `async/await` with `delay()` to create timed animations.
- Debug a multi-file browser project using the console.
- Play a complete, integrated Blackjack game from start to finish.

---

## Introduction (5 minutes)

By now you have working game logic and a basic UI. Today is about making it feel like a real game.

Polishing a game means:
- Clear visual feedback for every state (dealing, playing, result)
- Smooth transitions rather than instant jumps
- Readable layout that guides the player's eye
- A clean browser console (no errors)

---

## Reading: CSS for Card Games (20 minutes)

### The table layout

A Blackjack table typically has the dealer at the top, the player at the bottom, and buttons in between.

```css
body {
  font-family: sans-serif;
  background-color: #2d6a4f;   /* green felt */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
}

.hand-area {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 120px;
}
```

### Card styling

```css
.card {
  width: 70px;
  height: 100px;
  background: white;
  color: black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
}

.card.red { color: #c0392b; }

.card.face-down {
  background: #2c3e50;
  color: transparent;
}
```

### Button styling

```css
button {
  padding: 10px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

#deal-btn  { background: #27ae60; color: white; }
#hit-btn   { background: #e67e22; color: white; }
#stand-btn { background: #2980b9; color: white; }
```

### Result message styling

```css
#message {
  font-size: 24px;
  font-weight: bold;
  min-height: 36px;
  color: #f1c40f;   /* gold */
}
```

---

## Reading: Adding Delays for Visual Effect (15 minutes)

A game that updates instantly can feel abrupt. A small delay makes card dealing feel real.

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

Use it in an async function:

```js
async function dealWithAnimation() {
  game.startRound();

  // Show cards one at a time with a small delay
  const playerCards = game.playerCards;
  const dealerCards = game.dealerCards;

  renderSingleCard(playerCards[0], 'player-cards');
  await delay(300);
  renderSingleCard(dealerCards[0], 'dealer-cards');
  await delay(300);
  renderSingleCard(playerCards[1], 'player-cards');
  await delay(300);
  // Dealer's second card is face-down
  renderFaceDown('dealer-cards');

  updateTotals();
  enablePlayerControls();
}
```

---

## Reading: Debugging a Multi-File Project (15 minutes)

### Script load order

If you see `ReferenceError: BlackjackGame is not defined`, your script tags are in the wrong order. Dependencies must be loaded first:

```html
<!-- Wrong: ui.js loads before game.js defines BlackjackGame -->
<script src="ui.js"></script>
<script src="game.js"></script>

<!-- Correct: define classes before using them -->
<script src="card.js"></script>
<script src="deck.js"></script>
<script src="hand.js"></script>
<script src="game.js"></script>
<script src="ui.js"></script>
```

### Common bugs checklist

| Symptom | Likely cause |
|---------|-------------|
| Cards don't appear on Deal | `renderHand` container ID doesn't match the HTML |
| Total shows NaN | `getTotal()` returned NaN — check `getValue()` for face cards |
| Hit works after round ends | State guard missing in `playerHit()` |
| "Deal" button stays disabled | `endRound()` not re-enabling it |
| Dealer shows all cards instantly | Missing `hideDealer` logic or `updateDisplay` call order wrong |

### The console is your friend

Open DevTools (F12 or Cmd+Option+J). Every unhandled error appears here. Aim for a clean console — no red text — before submitting.

---

## Putting It All Together — Complete Game Flow

```
page loads
  → create BlackjackGame
  → disable Hit and Stand

player clicks Deal
  → game.startRound()
  → render hands
  → enable Hit and Stand
  → if game.state === 'over' (blackjack), go to endRound()

player clicks Hit
  → game.playerHit()
  → render player hand, update total
  → if game.state === 'over' (bust), go to endRound()

player clicks Stand
  → game.playerStand()
  → render dealer hand (reveal hidden card)
  → endRound()

endRound()
  → disable Hit and Stand
  → enable Deal
  → show result message
  → update scoreboard (if implemented)
```

---

## Practice Problems (15 minutes)

1. Open your game and play 5 complete rounds. Note any visual issues.
2. Can you trigger a case where Hit and Stand are both enabled after the round ends?
3. Add a `delay(400)` after `game.playerHit()` to slow down the hit animation. Does the game still work?
4. Check the browser console. Are there any errors?

---

## Supplemental: CSS Transitions for Cards (optional)

Add a fade-in effect when a new card appears:

```css
@keyframes dealCard {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: dealCard 0.2s ease;
}
```

Every time you `appendChild` a card element, the animation automatically plays because the element is new to the DOM.

### Supplemental Exercise

Implement the staggered deal animation: each card appears 250ms after the previous one. Use `animationDelay`:

```js
function renderCardAnimated(card, container, index) {
  const el = document.createElement('div');
  el.classList.add('card');
  el.textContent = card.toString();
  el.style.animationDelay = (index * 0.25) + 's';
  container.appendChild(el);
}
```
