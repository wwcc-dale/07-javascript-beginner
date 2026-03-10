# Session 18 Hints — Spades Rules Implementation

## getValidCards(player)

Two situations to handle:

**Leading a trick** (`currentTrick.length === 0`):
- If spades are broken, the player can play anything.
- If spades are not broken, filter out spades — UNLESS all cards in hand are spades
  (then they must play spades because they have no choice).

**Following** (trick already started):
- Filter the hand for cards that match `this.leadSuit`.
- If any match, those are the only valid cards — the player *must* follow suit.
- If no match, the whole hand is valid (they can play anything).

## playCard(player, card)
- Set `this.leadSuit` from the first card played in the trick (`currentTrick.length === 0`).
- If the card played is a Spade, set `this.spadesBroken = true`.
- Push `{ player, card }` onto `this.currentTrick`.

## determineTrickWinner()
- Start with the first play as the current best.
- Loop through the rest:
  - A **spade beats any non-spade** — if the challenger is a spade and the best is not, replace best.
  - Between **two spades**, the higher value wins.
  - Between **two cards of the same non-spade suit**, the higher value wins.
  - A non-spade that doesn't match the lead suit can **never win** — ignore it.
- Return the `player` from the winning `{ player, card }` entry.
