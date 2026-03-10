# Session 17 Hints — Player, AIPlayer, and Dealing

## Player class

### playCard(card)
- Find the card in `this.hand` using `.findIndex()` comparing suit and rank.
- Use `.splice(index, 1)` to remove it from the array (not `filter` — you want to remove exactly one).
- Return the card that was played, or `null` if not found.

### resetForRound()
- Clear every property that changes between rounds: `hand`, `bid`, `tricksWon`, `isNil`.
- Set `hand = []` (empty array), not `hand = null`.

## AIPlayer class

### getBidDecision()
- Count high cards and strong spades to estimate tricks.
- A simple baseline: count Aces, Kings, and Queens as one trick each.
- Clamp the result: `Math.max(1, Math.min(bid, 13))` — never bid 0 unless you intend nil.

## SpadesGame class

### startRound()
- Reset all players **before** dealing — `resetForRound()` on each player first.
- Shuffle the deck, then deal by looping 13 times (one card per player per round):
  ```
  for (let i = 0; i < 13; i++) {
    for each player:
      player.receiveCard(deck.draw())
  }
  ```
- This deals one card at a time to each player in rotation, as in a real game.
