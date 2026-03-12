---
allowed_extensions:
- html
- js
- css
- zip
assignment_type: online
module: 5
name: 'Session 21: Betting System'
points: 20
position: 3
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 21.3
submission_types:
- online_upload
---

# Session 21: Betting System

Add a `Wallet` class to your Blackjack game and integrate chip betting and payouts.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** Zip file of complete game folder

> alert: info
>
> Start from your Session 20 game. Add `wallet.js` and update `game.js` and `ui.js`.

---

## Level 1 – Core Tasks [15 pts](#pill:accent)

### Challenge 1: Wallet class
```js
// TODO: Create a Wallet class in wallet.js with:
// - Constructor: startingChips (default 1000)
// - Private properties: _chips, _currentBet (starts at 0)
// - Getters: chips, currentBet
// - Method placeBet(amount):
//   - Returns false if amount <= 0 or amount > _chips
//   - Otherwise: deducts amount from _chips, sets _currentBet = amount, returns true
// - Method win(isBlackjack = false):
//   - Regular win (1:1): adds _currentBet * 2 to _chips
//   - Blackjack (3:2): adds _currentBet + Math.floor(_currentBet * 1.5) to _chips
//   - Resets _currentBet to 0
// - Method lose(): resets _currentBet to 0 (chips already deducted in placeBet)
// - Method push(): returns _currentBet to _chips, resets to 0
// - Method isBankrupt(): returns true if _chips === 0 and _currentBet === 0

// Test:
// const w = new Wallet(500);
// w.placeBet(200);
// console.log(w.chips);      // 300
// console.log(w.currentBet); // 200
// w.win();
// console.log(w.chips);      // 700 (300 + 400)
// console.log(w.currentBet); // 0
```

### Challenge 2: Integrate Wallet into BlackjackGame
```js
// TODO: Modify BlackjackGame:
// - Constructor: add parameter startingChips (default 1000)
//   Create this._wallet = new Wallet(startingChips)
// - Add getter: get wallet()
// - Modify startRound(betAmount):
//   - Call this._wallet.placeBet(betAmount)
//   - If it returns false, return false (don't start the round)
//   - Otherwise proceed as before, return true
// - Modify getResult():
//   - After calculating outcome, call the appropriate wallet method:
//     player_bust / dealer_wins → wallet.lose()
//     push → wallet.push()
//     blackjack → wallet.win(true)
//     all other wins → wallet.win(false)
//   - Add chips: this._wallet.chips to the returned result object
```

### Challenge 3: Bet UI
```js
// TODO: Add to index.html:
// - A number input: <input type="number" id="bet-input" value="100" min="1">
// - A chip display: Chips: <span id="chip-count">1000</span>

// TODO: Modify ui.js:
// - dealBtn.onclick: read bet from #bet-input, parse to integer
//   - If invalid (NaN or <= 0), show error in #message and return
//   - Call game.startRound(bet) — if false, show "Not enough chips" message and return
//   - Otherwise proceed normally
// - updateDisplay(): also update #chip-count with game.wallet.chips
// - endRound(): show chips in the result message:
//   Example: "You win! Chips: 1200"
```

### Challenge 4: Game over on bankruptcy
```js
// TODO: After endRound(), check if game.wallet.isBankrupt()
// If true:
// - Disable Deal button
// - Show message: "Game over — you ran out of chips! Reload to play again."
```

---

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: Bet quick-pick buttons
Add preset bet buttons ($25, $50, $100, $500) that set the bet input value when clicked.
Highlight the selected button with an `active` CSS class.
Disable buttons whose amount exceeds the current chip balance.

### Challenge 6: Chip animation
When chips change (win or lose), briefly highlight the chip count:
- Win: flash green
- Lose: flash red
Use a CSS class + `setTimeout` to remove it after 600ms.

---

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Bet history
Track the last 5 bets in the Wallet (as an array). Add a method `getRecentBets()` that returns this array. Display the last 5 bets in the UI as a "Recent bets" list. This list updates after each round.

---

## Before Submitting

- checklist: Before Submitting
- Zip file of complete game folder submitted
- `Wallet` class: `placeBet()`, `win()`, `lose()`, `push()`, and `isBankrupt()` all work correctly
- Invalid and unaffordable bets are rejected with a message
- Chip count updates correctly after each round
- Game over message shows when chips reach 0
- No JavaScript errors in the browser console
- Attempted Level 2 or 3 if time allowed
