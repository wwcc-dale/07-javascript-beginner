---
indent: 2
allowed_extensions:
- html
- js
- css
- zip
assignment_type: online
module: 4
name: 'Session 20: Polished Blackjack Game'
points: 20
position: 15
published: true
related_outcomes:
- CLO-3
- CLO-4
- CLO-5
session: 20.3
submission_types:
- online_upload
---

# Session 20: Polished Blackjack Game

Complete and polish your Blackjack game so it is fully playable, visually clear, and bug-free.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** A zip file of your complete game folder

> alert: info
>
> Start from your Session 19 project. Add the polish requirements below.

---

## Level 1 – Core Tasks [15 pts](#pill:accent)

### Task 1: Visual design
Your game must have:
- A green felt or dark background that looks like a card table
- Cards styled with white background, rounded corners, border, and readable text
- Red text on Hearts and Diamonds cards
- Distinct button styles for Deal (green), Hit (orange), Stand (blue)
- Disabled buttons must visually show they are disabled (lower opacity)
- A gold or yellow result message

### Task 2: Hidden dealer card
The dealer's second card must be face-down (show `?`) during the player's turn.
It is revealed when the round ends (player stands or busts).

### Task 3: Win/loss counter
Track and display across rounds:
- **Wins:** rounds where outcome is `player_wins`, `dealer_bust`, or `blackjack`
- **Losses:** rounds where outcome is `dealer_wins` or `player_bust`
- **Ties:** rounds where outcome is `push`

These numbers reset when the page is reloaded (no localStorage needed yet).

### Task 4: Clean console
Open DevTools and verify there are no JavaScript errors in the console. Fix any errors before submitting.

---

## Level 2 – Stretch [3 pts](#pill:cert)

### Task 5: Deal animation
Cards should appear one at a time with a short delay between each.

Use `@keyframes` to animate each card from `opacity: 0, translateY(-20px)` to `opacity: 1, translateY(0)`.

You may use a simple approach — just add the CSS animation class and use `staggered` `animationDelay` in JavaScript:
```js
el.style.animationDelay = (index * 0.2) + 's';
```

### Task 6: Result animation
When the round ends, the `#message` element should briefly scale up or flash.

```css
@keyframes flashResult {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.flash { animation: flashResult 0.4s ease; }
```

Add and remove the `flash` class when showing the result message.

---

## Level 3 – Advanced [2 pts](#pill:degree)

### Task 7: Play a complete session
Play your own game for at least 10 rounds. Write a short log (in a comment at the top of `ui.js`) recording:
- Any bugs you found and fixed
- Any visual problems you solved
- One thing you would add if you had more time

This is a reflection task, not a coding task. Your comment shows that you tested your game thoroughly.

---

## Before Submitting

- checklist: Before Submitting
- Green (or dark) felt background
- Cards have white background, rounded corners, red colour for hearts/diamonds
- Dealer's second card is face-down during player's turn
- Correct result message for all 6 outcomes
- Win/loss counter updates every round
- Hit and Stand are disabled after round ends; re-enabled on next Deal
- No errors in the browser console
- All files in one folder, zipped for submission
