---
module: 5
name: 'Session 21: Adding a Betting System'
position: 1
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 21.1
---

[lead]You have a fully playable Blackjack game — but without anything at stake, it's hard to care about winning. This session adds a `Wallet` class with chip tracking, bet validation, and correct Blackjack payout rules (including the 3:2 bonus for a natural blackjack). Stakes make the game meaningful, and the Wallet class is a great example of encapsulation doing real work: it enforces rules so the rest of the game can't accidentally cheat.

# Session 21: Adding a Betting System

## Learning Outcomes

By the end of this session, you will be able to:
- Design a `Wallet` class with chip tracking and validation.
- Integrate a bet amount into the `BlackjackGame` round flow.
- Apply correct Blackjack payout rules (1:1 and 3:2 for blackjack).
- Display the current chip balance and bet in the UI.

---

## Introduction (5 minutes)

Your Blackjack game plays rounds correctly, but there are no stakes. Adding a betting system makes the game meaningful — players have to manage their chips and make decisions about how much to risk.

This session introduces one new class (`Wallet`), a minor extension to `BlackjackGame`, and new UI elements for entering a bet.

---

## Reading: The Wallet Class (20 minutes)

### What does a Wallet need to do?

- Track the current chip balance.
- Allow a bet to be placed (deduct from balance, reject invalid bets).
- Pay out winnings after a round.
- Know when the player is bankrupt (balance = 0).

```js
class Wallet {
  constructor(startingChips = 1000) {
    this._chips = startingChips;
    this._currentBet = 0;
  }

  get chips()      { return this._chips; }
  get currentBet() { return this._currentBet; }

  placeBet(amount) {
    if (amount <= 0)              return false; // invalid
    if (amount > this._chips)    return false; // can't afford
    this._chips -= amount;
    this._currentBet = amount;
    return true;
  }

  win(isBlackjack = false) {
    // Regular win: 1:1 payout (get bet back + same amount)
    // Blackjack:  3:2 payout (get bet back + 1.5× bet)
    const payout = isBlackjack
      ? this._currentBet + Math.floor(this._currentBet * 1.5)
      : this._currentBet * 2;
    this._chips += payout;
    this._currentBet = 0;
  }

  lose() {
    // Bet was already deducted in placeBet()
    this._currentBet = 0;
  }

  push() {
    // Tie — return bet to player
    this._chips += this._currentBet;
    this._currentBet = 0;
  }

  isBankrupt() {
    return this._chips === 0 && this._currentBet === 0;
  }
}
```

### Payout rules

| Outcome | Bet was $100 | Player receives |
|---------|-------------|-----------------|
| Win     | $100        | $200 (bet + $100 profit) |
| Blackjack | $100     | $250 (bet + $150 profit, 3:2 payout) |
| Lose    | $100        | $0 (already deducted) |
| Push    | $100        | $100 (bet returned) |

---

## Reading: Integrating Wallet into the Game (15 minutes)

Add a `Wallet` to `BlackjackGame`:

```js
class BlackjackGame {
  constructor(startingChips = 1000) {
    this._deck   = new Deck();
    this._deck.shuffle();
    this._player = new Hand();
    this._dealer = new Hand();
    this._state  = 'idle';
    this._wallet = new Wallet(startingChips);
  }

  get wallet() { return this._wallet; }

  startRound(betAmount) {
    if (!this._wallet.placeBet(betAmount)) {
      return false; // invalid bet — don't start
    }
    // ... rest of startRound() ...
    return true;
  }
```

Then update `getResult()` to call the wallet:

```js
getResult() {
  // ... calculate outcome ...

  if (outcome === 'player_bust' || outcome === 'dealer_wins') {
    this._wallet.lose();
  } else if (outcome === 'push') {
    this._wallet.push();
  } else if (outcome === 'blackjack') {
    this._wallet.win(true);
  } else {
    this._wallet.win(false);
  }

  return { outcome, playerTotal, dealerTotal, chips: this._wallet.chips };
}
```

---

## Reading: Bet UI (15 minutes)

Add a bet input to the HTML:

```html
<div id="bet-controls">
  <label>Bet: $<input type="number" id="bet-input" value="100" min="1"></label>
  <p>Chips: <span id="chip-count">1000</span></p>
</div>
```

In `ui.js`:

```js
dealBtn.onclick = () => {
  const bet = parseInt(document.getElementById('bet-input').value);
  if (isNaN(bet) || bet <= 0) {
    messageEl.textContent = 'Enter a valid bet amount.';
    return;
  }
  if (!game.startRound(bet)) {
    messageEl.textContent = `Not enough chips! You have ${game.wallet.chips}.`;
    return;
  }
  updateDisplay();
  // ... enable buttons, etc. ...
};
```

Update `updateDisplay()` to show the chip count:

```js
document.getElementById('chip-count').textContent = game.wallet.chips;
```

---

## Practice Problems (15 minutes)

1. Create a `Wallet(500)`. Place a bet of `200`. What is `chips` and `currentBet`?
2. Call `win()` on that wallet. What is the new `chips` total?
3. Create a new `Wallet(500)`. Place a bet of `200`. Call `win(true)` (blackjack payout). What is `chips`?
4. Try to place a bet larger than the balance. What does `placeBet` return?
5. Place a bet of 0. What does `placeBet` return?

---

## Supplemental: Bet Quick-Pick Buttons

Instead of a number input, offer preset bet amounts:

```html
<div id="quick-bets">
  <button class="bet-btn" data-amount="25">$25</button>
  <button class="bet-btn" data-amount="50">$50</button>
  <button class="bet-btn" data-amount="100">$100</button>
  <button class="bet-btn" data-amount="500">$500</button>
</div>
```

```js
let selectedBet = 25;

document.querySelectorAll('.bet-btn').forEach(btn => {
  btn.onclick = () => {
    selectedBet = parseInt(btn.dataset.amount);
    document.querySelectorAll('.bet-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };
});
```

### Supplemental Exercise

Add an "All In" button that sets the bet to the player's entire chip balance. Disable it if the balance is 0.

---

#### Helpful Resources

| [light] | |
|----------|-------------|
| [Classes — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes) | Review class design for the Wallet class with validation in setters and methods |
| [HTMLInputElement — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) | Read numeric bet input from `<input type="number">` using `.value` |
| [isNaN() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) | Validate that the bet input is a real number before using it |
| [Element: dataset property — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) | Read `data-amount` attributes from quick-pick bet buttons |
| [NodeList.forEach() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) | Attach click handlers to multiple `.bet-btn` elements at once |
