# Session 21 Hints — Improving the AIPlayer

## seenCards tracking
- `seenCards` should be a `Set` of card strings (e.g., `"A of Spades"` via `card.toString()`).
- Call `recordCard(card)` on every card played by any player — not just the AI's own cards.
- In `GameRunner.playTrick()`, after each card is played, call `aiPlayer.recordCard(card)`
  for each AI player that can "see" it.

## resetForRound()
- Call `super.resetForRound()` first to clear hand, bid, tricks.
- Then reset `this.seenCards = new Set()`.

## getCardDecision() — decision order
1. **Nil bid**: always return the lowest-value card from `validCards`.
2. **Bid not yet made** (i.e., `this.bid === null`): not applicable during play — bid is always set first.
3. **Bid already made (tricks ≥ bid)**: dump the lowest non-spade card you can; fall back to lowest spade.
4. **Still need tricks (tricks < bid)**: play the highest card to try to win; prefer non-spades when leading.

## getBidDecision() (Level 2)
- Count high cards by value: Ace = 1, King = 0.75 if guarded (not singleton), Queen = 0.5.
- Strong spades (10+) count more than off-suit face cards.
- Round the total and clamp between 1 and 13.

## Anti-bag strategy (Level 3)
- Once `tricksWon >= bid`, switch to deliberately losing: play the lowest-value card possible.
- If leading, pick a suit where you hold the smallest cards to avoid taking more tricks.
