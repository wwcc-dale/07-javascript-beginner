# Session 18: The BlackjackGame Class

## Learning Outcomes

By the end of this session, you will be able to:
- Design a `BlackjackGame` class that coordinates `Deck` and `Hand` objects.
- Implement `startRound()`, `playerHit()`, `playerStand()`, and `getResult()` methods.
- Describe the full flow of a Blackjack round as a state machine.
- Return structured results from `getResult()` that the UI can consume.

---

## Introduction (5 minutes)

You have `Card`, `Deck`, and `Hand`. Now you need something to coordinate them — a game class that knows the *rules* and manages the *state* of a round.

The `BlackjackGame` class is the brain. It holds the deck, the hands, and the current game state. The UI (which you will build in Session 19) will call its methods and display whatever the game returns.

This design is called **separation of concerns**: the game class handles logic; the UI handles display. Neither one knows about the other's internals.

---

## Reading: Game State (15 minutes)

A Blackjack round progresses through these states:

1. **idle** — waiting to start a new round
2. **playing** — round in progress, player can hit or stand
3. **dealerPlaying** — player stood; dealer is drawing cards
4. **over** — round ended (someone busted or dealer played)

Tracking state prevents invalid actions (e.g., hitting after the round ends).

```js
class BlackjackGame {
  constructor() {
    this._deck   = new Deck();
    this._player = new Hand();
    this._dealer = new Hand();
    this._state  = 'idle';
  }

  get state() { return this._state; }
}
```

---

## Reading: startRound() (15 minutes)

`startRound()` deals 4 cards — 2 to player, 2 to dealer — and checks for an immediate blackjack.

```js
startRound() {
  // Reset everything
  this._player.clear();
  this._dealer.clear();
  this._state = 'playing';

  // Shuffle if the deck is running low
  if (this._deck.size < 15) {
    this._deck = new Deck();
    this._deck.shuffle();
  }

  // Deal: player, dealer, player, dealer
  this._player.addCard(this._deck.deal());
  this._dealer.addCard(this._deck.deal());
  this._player.addCard(this._deck.deal());
  this._dealer.addCard(this._deck.deal());

  // Check for immediate blackjack
  if (this._player.isBlackjack()) {
    this._state = 'over';
  }
}
```

---

## Reading: playerHit() and playerStand() (15 minutes)

```js
playerHit() {
  if (this._state !== 'playing') return;

  this._player.addCard(this._deck.deal());

  if (this._player.isBust()) {
    this._state = 'over';
  }
}

playerStand() {
  if (this._state !== 'playing') return;

  this._state = 'dealerPlaying';
  this._runDealerTurn();
}

_runDealerTurn() {
  while (this._dealer.getTotal() < 17) {
    this._dealer.addCard(this._deck.deal());
  }
  this._state = 'over';
}
```

The state guard `if (this._state !== 'playing') return;` prevents the player from hitting after busting or after standing.

---

## Reading: getResult() (15 minutes)

`getResult()` determines who won. It should only be called when `state === 'over'`.

```js
getResult() {
  const playerTotal  = this._player.getTotal();
  const dealerTotal  = this._dealer.getTotal();
  const playerBust   = this._player.isBust();
  const dealerBust   = this._dealer.isBust();
  const playerBJ     = this._player.isBlackjack();
  const dealerBJ     = this._dealer.isBlackjack();

  let outcome;

  if (playerBust) {
    outcome = 'player_bust';
  } else if (dealerBust) {
    outcome = 'dealer_bust';
  } else if (playerBJ && !dealerBJ) {
    outcome = 'blackjack';
  } else if (playerTotal > dealerTotal) {
    outcome = 'player_wins';
  } else if (dealerTotal > playerTotal) {
    outcome = 'dealer_wins';
  } else {
    outcome = 'push'; // tie
  }

  return {
    outcome,
    playerTotal,
    dealerTotal,
    playerHand: this._player.cards.map(c => c.toString()),
    dealerHand: this._dealer.cards.map(c => c.toString())
  };
}
```

The result is a plain object (not a class). The UI receives this object and decides how to display it.

---

## Getters for the UI

```js
get playerTotal() { return this._player.getTotal(); }
get dealerTotal()  { return this._dealer.getTotal(); }
get playerCards()  { return [...this._player.cards]; }  // copy
get dealerCards()  { return [...this._dealer.cards]; }
```

Returning a copy of the array (`[...array]`) prevents external code from accidentally modifying the hand.

---

## Practice Problems (15 minutes)

1. Create a `BlackjackGame`, call `startRound()`, then log `state`.
2. Call `playerHit()` until the player busts. What is `state` after the bust?
3. Can you call `playerHit()` after busting? What happens?
4. Call `getResult()` after a bust. What is the `outcome` field?

---

## Supplemental: Testing without a UI

You can test `BlackjackGame` entirely in a `.js` file before building any HTML:

```js
const game = new BlackjackGame();
game.startRound();

console.log('Player:', game.playerTotal);
console.log('Dealer shows:', game._dealer.cards[0].toString());

// Simulate player decisions
if (game.playerTotal < 17) {
  game.playerHit();
  console.log('After hit:', game.playerTotal);
}

game.playerStand();
const result = game.getResult();
console.log('Outcome:', result.outcome);
console.log('Player total:', result.playerTotal);
console.log('Dealer total:', result.dealerTotal);
```

### Supplemental Exercise

Write a `simulateGame()` function that plays 10 rounds automatically:
- If player total ≤ 15, hit
- Otherwise stand
- Count wins, losses, and pushes across all 10 rounds.
