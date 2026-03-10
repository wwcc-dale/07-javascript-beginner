# Session 19 Hints — Scoring and GameBoard

## scoreRound()

**Structure:**
1. Loop over both teams (index 0 and 1).
2. For each team, check each player for a nil bid first — apply nil bonus/penalty separately.
3. Add up the team's bid and tricks, excluding nil bidders from both counts.
4. Score the contract: made bid = bid × 10 pts; missed bid = −bid × 10 pts.
5. Add overtricks (the extras beyond the bid) to score AND to bags.
6. Use `while` (not `if`) for the bag penalty — bags might cross 10 more than once.

**Nil bids:**
- A nil bid succeeds if that player took 0 tricks: +100.
- A nil bid fails if they took any tricks: −100.
- A nil bidder's tricks do NOT count toward the team's contract total.

**Bag penalty:**
```
while (teamBags >= 10) {
  score -= 100;
  teamBags -= 10;
}
```

## GameBoard

### getBidFromUser(playerName, handSize)
- Create one button per possible bid value (0 through `handSize`).
- Return a `new Promise(resolve => ...)`.
- Each button's click handler calls `resolve(bidValue)` and clears the bidding area.

### getCardFromUser(player, validCards)
- Call `updatePlayerHand(player, validCards, callback)` where the callback resolves the Promise.
- The Promise resolves with the card the user clicked.
- After resolving, re-render the hand without click handlers to "lock" it.

### getSuitSymbol(suit)
- A simple lookup object: `{ Spades: '♠', Hearts: '♥', Diamonds: '♦', Clubs: '♣' }`
