# Session 25 Hints — Final Project: Complete Spades Game

## Getting started
- Start from a working Session 20 game, not from scratch.
- Choose your advanced features **before** you start coding — pick ones that build on each other
  (e.g., modules + stats, or theme + animations).
- Add one feature at a time and test fully before starting the next.

## Mandatory requirements checklist
- [ ] Deal 13 cards per player correctly
- [ ] Bidding works for all 4 players (nil is a valid bid)
- [ ] Follow-suit is enforced; spades only break when a player is void in lead suit
- [ ] Tricks are won correctly (spade trumps non-spade; highest of lead suit otherwise)
- [ ] Scoring is correct: bid made → bid × 10; missed → −bid × 10; overtricks add to bags
- [ ] Nil bid: +100 if successful, −100 if failed; nil bidder's tricks excluded from team contract
- [ ] Bag penalty: −100 when a team accumulates 10 bags (bags reset to 0)
- [ ] Game ends when a team reaches 500 points
- [ ] UI shows valid cards highlighted; trick area shows played cards; scoreboard updates each round

## Nil bid — common mistake
- The nil bidder's tricks must NOT be added to the team's contract total.
- Separate: calculate nil bonus/penalty first, then calculate the team's contract using only
  the non-nil player's bid and tricks.

## ES6 Modules (if chosen)
- Add `export` before every class definition.
- Change `<script src="...">` tags to a single `<script type="module" src="main.js">`.
- Use a local server (VS Code Live Server or `python -m http.server`) — modules don't work over `file://`.

## README
- Describe what the project is (1–2 sentences).
- List every feature implemented and whether it's mandatory or advanced.
- Include play instructions (how to bid, how to select a card).
- Briefly describe one challenge you solved and how you solved it.

## Before submitting
- Open the browser console and clear all errors. A clean console is part of the rubric.
- Play a complete game from start to finish at least once.
- Verify the game-over screen appears at the right time.
