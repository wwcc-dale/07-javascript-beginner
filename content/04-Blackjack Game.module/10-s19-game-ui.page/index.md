---
module: 4
name: 'Session 19: Connecting the Game to a Browser UI'
position: 10
published: true
related_outcomes:
- CLO-3
- CLO-4
- CLO-5
session: 19.1
---

# Session 19: Connecting the Game to a Browser UI

## Learning Outcomes

By the end of this session, you will be able to:
- Build an HTML page that displays cards and game state.
- Connect DOM event listeners to `BlackjackGame` methods.
- Update the display after each player action.
- Use a provided `waitForClick()` helper to pause and await button clicks.

---

## Introduction (5 minutes)

Your `BlackjackGame` class has no HTML in it — it is pure logic. Today you will build the browser layer that shows it to the user.

The pattern is:
1. User clicks a button.
2. Event listener calls a game method (`playerHit()`, `playerStand()`, etc.).
3. You read the new state from the game and update the DOM.

This session also introduces the `waitForClick()` helper — a provided function that lets you write the game loop as a clean sequence of steps, rather than scattering everything across separate event handlers.

---

## Reading: HTML Structure (15 minutes)

Here is the basic HTML layout for your Blackjack game:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blackjack</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Blackjack</h1>

  <section id="dealer-section">
    <h2>Dealer</h2>
    <div id="dealer-cards"></div>
    <p>Total: <span id="dealer-total">—</span></p>
  </section>

  <section id="player-section">
    <h2>You</h2>
    <div id="player-cards"></div>
    <p>Total: <span id="player-total">—</span></p>
  </section>

  <div id="controls">
    <button id="deal-btn">Deal</button>
    <button id="hit-btn"   disabled>Hit</button>
    <button id="stand-btn" disabled>Stand</button>
  </div>

  <p id="message"></p>

  <script src="card.js"></script>
  <script src="deck.js"></script>
  <script src="hand.js"></script>
  <script src="game.js"></script>
  <script src="ui.js"></script>
</body>
</html>
```

---

## Reading: Rendering Cards (15 minutes)

A helper function creates one card element and appends it to a container:

```js
function renderCard(card, container) {
  const el = document.createElement('div');
  el.classList.add('card');
  el.textContent = card.toString();
  container.appendChild(el);
}

function renderHand(cards, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';           // clear old cards
  for (const card of cards) {
    renderCard(card, container);
  }
}
```

After each game action, call `renderHand()` for both player and dealer.

---

## Reading: The waitForClick() Helper (20 minutes)

Writing a Blackjack game loop can get complicated with event listeners scattered everywhere. A cleaner approach uses `async/await` with a helper called `waitForClick`:

```js
// ui.js — provided helper, don't modify
function waitForClick(button) {
  return new Promise(resolve => {
    button.addEventListener('click', resolve, { once: true });
  });
}
```

This function returns a Promise that resolves the next time the button is clicked. The `{ once: true }` option automatically removes the listener after one click.

**You do not need to understand how Promises work internally.** Just know that `await waitForClick(btn)` pauses the function until the user clicks that button.

### Using waitForClick in an async function

```js
async function playRound() {
  game.startRound();
  updateDisplay();

  // Player's turn
  while (game.state === 'playing') {
    const clicked = await waitForClick(hitBtn) || await waitForClick(standBtn);
    // This doesn't quite work as written — see the correct pattern below
  }
}
```

The correct pattern for waiting on *either* button:

```js
async function playRound() {
  game.startRound();
  updateDisplay();

  // Player turn loop
  while (game.state === 'playing') {
    // Enable buttons
    hitBtn.disabled  = false;
    standBtn.disabled = false;

    // Wait for whichever button is clicked first
    const action = await new Promise(resolve => {
      hitBtn.addEventListener('click',   () => resolve('hit'),   { once: true });
      standBtn.addEventListener('click', () => resolve('stand'), { once: true });
    });

    // Clean up the listener that wasn't clicked
    hitBtn.replaceWith(hitBtn.cloneNode(true));
    standBtn.replaceWith(standBtn.cloneNode(true));
    // Re-select after clone
    hitBtn   = document.getElementById('hit-btn');
    standBtn = document.getElementById('stand-btn');

    if (action === 'hit') {
      game.playerHit();
    } else {
      game.playerStand();
    }
    updateDisplay();
  }

  // Round over
  showResult(game.getResult());
}
```

This is the most advanced pattern in the beginner track. An alternative is simpler — separate `onclick` handlers:

---

## Alternative: Simple onclick Approach

If `async/await` feels too complex, use direct `onclick` handlers instead:

```js
const game = new BlackjackGame();

dealBtn.onclick = () => {
  game.startRound();
  updateDisplay();
  hitBtn.disabled  = false;
  standBtn.disabled = false;
  dealBtn.disabled = true;
  messageEl.textContent = '';

  if (game.state === 'over') {
    endRound();
  }
};

hitBtn.onclick = () => {
  game.playerHit();
  updateDisplay();
  if (game.state === 'over') endRound();
};

standBtn.onclick = () => {
  game.playerStand();
  updateDisplay();
  endRound();
};

function endRound() {
  hitBtn.disabled  = true;
  standBtn.disabled = true;
  dealBtn.disabled = false;
  const result = game.getResult();
  messageEl.textContent = formatResult(result.outcome);
}

function updateDisplay() {
  document.getElementById('player-total').textContent = game.playerTotal;
  document.getElementById('dealer-total').textContent = game.dealerTotal;
  renderHand(game.playerCards, 'player-cards');
  renderHand(game.dealerCards, 'dealer-cards');
}
```

**This simpler approach is perfectly valid** for this assignment.

---

## Practice Problems (15 minutes)

1. Create the HTML file from the template above. Open it in a browser — what do you see?
2. Add a `<style>` block that makes `.card` elements look like cards (border, padding, display inline-block).
3. Add a `renderHand()` call in your `updateDisplay()`. Verify that after clicking Deal, cards appear.
4. What happens if you click Hit repeatedly without standing? What state does the game end up in?

---

## Supplemental: Hiding the Dealer's Second Card

In real Blackjack, the dealer's second card is face-down until the player stands.

```js
function updateDisplay(hideDealer = false) {
  renderHand(game.playerCards, 'player-cards');

  if (hideDealer) {
    // Show only first card
    const container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    renderCard(game.dealerCards[0], container);

    const hidden = document.createElement('div');
    hidden.classList.add('card', 'card-back');
    hidden.textContent = '?';
    container.appendChild(hidden);

    document.getElementById('dealer-total').textContent = '?';
  } else {
    renderHand(game.dealerCards, 'dealer-cards');
    document.getElementById('dealer-total').textContent = game.dealerTotal;
  }

  document.getElementById('player-total').textContent = game.playerTotal;
}
```

Call `updateDisplay(true)` during the player's turn, and `updateDisplay(false)` when the round ends.

### Supplemental Exercise

Implement the hidden dealer card. Verify that the second card is hidden during the player's turn and revealed when the round ends.
