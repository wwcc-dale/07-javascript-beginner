# Session 19: Building the Blackjack UI

Connect your `BlackjackGame` logic to a browser UI with cards, buttons, and score display.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** A zip file containing `index.html`, `style.css`, and your `.js` files

---

## Setup

Start by downloading the starter files: `index.html`, `style.css`, and the `.js` files from your previous sessions (Card, Deck, Hand, BlackjackGame). The starter HTML already includes the `waitForClick()` helper function — you do not need to write it.

Folder structure:
```
19-assignment/
├── index.html
├── style.css
├── card.js
├── deck.js
├── hand.js
├── game.js
└── ui.js          ← you write this
```

The starter `index.html` has this structure already in place:
```html
<div id="dealer-cards"></div>
<span id="dealer-total">—</span>
<div id="player-cards"></div>
<span id="player-total">—</span>
<button id="deal-btn">Deal</button>
<button id="hit-btn" disabled>Hit</button>
<button id="stand-btn" disabled>Stand</button>
<p id="message"></p>
```

---

## Level 1 – Core Tasks (15 points)

### Task 1: renderHand()
In `ui.js`, write a function `renderHand(cards, containerId)` that:
- Selects the container by ID
- Clears it (`innerHTML = ''`)
- For each card, creates a `<div>` with class `card` and text from `card.toString()`
- Appends each div to the container

Test by calling `renderHand([new Card('Ace','Spades'), new Card('7','Hearts')], 'player-cards')` from the console.

### Task 2: updateDisplay()
Write `updateDisplay()` that:
- Calls `renderHand(game.playerCards, 'player-cards')`
- Calls `renderHand(game.dealerCards, 'dealer-cards')`
- Updates `#player-total` with `game.playerTotal`
- Updates `#dealer-total` with `game.dealerTotal`

### Task 3: Deal button
Connect the **Deal** button:
- `startRound()` on the game
- `updateDisplay()`
- Enable Hit and Stand buttons
- Disable the Deal button
- Clear `#message`
- If game state is already `'over'` (blackjack on deal), call `endRound()`

### Task 4: Hit and Stand buttons + endRound()
Connect the **Hit** button: call `game.playerHit()`, then `updateDisplay()`. If state is `'over'`, call `endRound()`.

Connect the **Stand** button: call `game.playerStand()`, then `updateDisplay()`, then `endRound()`.

Write `endRound()` that:
- Disables Hit and Stand
- Enables Deal
- Reads `game.getResult()` and shows a message in `#message`:
  - `'player_bust'` → `"Bust! Dealer wins."`
  - `'dealer_bust'` → `"Dealer busts! You win!"`
  - `'blackjack'`   → `"Blackjack! You win!"`
  - `'player_wins'` → `"You win!"`
  - `'dealer_wins'` → `"Dealer wins."`
  - `'push'`        → `"Push — it's a tie."`

---

## Level 2 – Stretch (3 points)

### Task 5: Hide the dealer's second card
During the player's turn, show only the dealer's first card. The second card should display as `"?"`.

Update `updateDisplay()` to accept a boolean parameter `hideDealer` (default `false`).
- Call `updateDisplay(true)` during the player's turn
- Call `updateDisplay(false)` in `endRound()` (reveals all cards)

Also show `"?"` in `#dealer-total` while the card is hidden.

### Task 6: Basic CSS styling
Style the cards so they look like playing cards:
- White background, rounded corners, border, fixed width, centered text
- Red text for Hearts and Diamonds (add class `red` to those card elements)
- The hidden `"?"` card should have a different background colour (e.g., blue)

---

## Level 3 – Advanced (2 points)

### Task 7: Win/loss counter
Add a scoreboard that tracks wins, losses, and pushes across all rounds.
- Display three numbers on screen: Wins / Losses / Ties
- Update after every `endRound()` call
- These numbers should persist as long as the page is open (no need for localStorage yet)

Blackjack wins count as wins. Player busts count as losses.
