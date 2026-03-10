# Spades Card Game — Final Project

## Description

A fully playable two-player-team Spades card game. The human plays on Team 1
(with an AI partner) against two AI opponents on Team 2.

The game implements complete Spades rules:
- Standard 52-card deck, Fisher-Yates shuffle
- 13 cards dealt per player each round
- Bidding (nil bids supported)
- Follow-suit enforcement; spades are trump
- Trick determination with spade-beats-all logic
- Scoring: bid * 10 points, overtricks accumulate as bags (–100 per 10 bags)
- Nil bid bonus/penalty: +100 if successful, –100 if failed
- Game ends when a team reaches 500 points

## How to Play

1. Open `index.html` in a modern browser (Chrome or Firefox recommended).
2. Serve files via a local server (e.g., `npx serve .`) due to ES6 module imports.
3. When the game starts, click bid buttons to set your bid (0 = Nil).
4. Cards highlighted with a gold border are valid to play — click one to play it.
5. Watch AI opponents play and trick results appear in the centre.
6. Scores update after each round. First team to 500 wins!

## File List

| File | Purpose |
|------|---------|
| `index.html` | Game entry point and UI layout |
| `style.css` | Visual styling with CSS custom properties and themes |
| `app.js` | Bootstraps game objects and starts GameRunner |
| `Card.js` | Represents a single playing card |
| `Deck.js` | 52-card deck with shuffle and draw |
| `Player.js` | Base player: hand, bid, tricks tracking |
| `AIPlayer.js` | AI player with goal-aware card selection and tracking |
| `SpadesGame.js` | Core game logic: dealing, rules, trick resolution, scoring |
| `GameBoard.js` | DOM manipulation: renders hands, scoreboard, trick area |
| `GameRunner.js` | Async orchestrator: bidding loop → trick loop → round loop |
| `GameStats.js` | localStorage persistence for win/loss history |

## Features Implemented

- [x] Complete Spades rules (dealing, bidding, trick-play, scoring)
- [x] Nil bid support
- [x] AI strategies (goal-aware: bid-made → dump low; need tricks → play high)
- [x] Seen-card tracking in AIPlayer
- [x] localStorage statistics (games played, win rate, high score)
- [x] Light/dark theme toggle with CSS custom properties
- [x] Card hover animations and deal-in stagger animation
- [x] Trick winner announcement animation
- [x] ES6 modules throughout

## Challenges and Solutions

**Challenge:** Async flow between human input and AI turns.
**Solution:** `GameRunner` uses `async/await` with Promises; `GameBoard.getCardFromUser`
and `GameBoard.getBidFromUser` return Promises that resolve only when the player clicks.

**Challenge:** Scoring nil bids when partners hold nil contracts.
**Solution:** `scoreRound()` separates nil-bidder tricks from team contract tricks before
calculating scores, then applies nil bonus/penalty independently.

**Challenge:** Preventing follow-suit bugs when a player is void in the lead suit.
**Solution:** `getValidCards()` returns the full hand when no cards match the lead suit,
letting any card become a legal play.
