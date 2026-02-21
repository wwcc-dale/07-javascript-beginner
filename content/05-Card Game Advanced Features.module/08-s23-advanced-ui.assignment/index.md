---
name: "Session 23: Visual Polish"
assignment_type: "online"
points: 20
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-5"
submission_types:
  - "online_upload"
allowed_extensions:
  - "html"
  - "css"
  - "js"
  - "zip"
---

# Session 23: Visual Polish

Add a theme toggle, card hover animations, and a trick-winner announcement to your Spades game using CSS custom properties and transitions.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing all game files with updated `style.css`

---

## Level 1 – Core (15 pts)

### Challenge 1: CSS Custom Property System

Refactor `style.css` to use CSS custom properties for all repeated values. Your `:root` block must define at minimum:
- `--bg` — page background color
- `--surface` — card and panel background color
- `--text` — primary text color
- `--accent` — primary interactive color (buttons, highlights)
- `--felt` — game table background color
- `--shadow` — standard box shadow value
- `--radius` — standard border radius value
- `--speed` — base transition speed

Replace all hardcoded occurrences of these values throughout `style.css` with `var(--bg)`, `var(--text)`, etc.

### Challenge 2: Light/Dark Theme

Add a `.dark` variant on `:root` that overrides all 8 custom properties with dark-appropriate values. Add a theme toggle button to `index.html`. In `app.js` or a new `themeManager.js`:
- Toggle `.dark` on `document.documentElement` when clicked
- Save the current theme to localStorage under `spades_theme`
- Apply the saved theme on page load before anything else renders

### Challenge 3: Playable Card Hover Effect

In `style.css`, add transition-based hover behavior for `.card.playable`:
- Normal state: `translateY(0)`, standard shadow
- Hover state: `translateY(-8px)`, larger shadow
- Transition must be smooth (use `var(--speed)` or similar)
- Cursor should be `pointer` on playable cards and `not-allowed` on `.card.disabled`

Verify: hovering a playable card lifts it; hovering a disabled card shows the not-allowed cursor with no lift.

### Challenge 4: Trick Winner Announcement

Add a `@keyframes` animation to `style.css` (e.g., `slideDown` or `fadeIn`). In `GameBoard.showTrickWinner(playerName)`, add a CSS class to `#trick-winner-msg` that triggers this animation. The element should animate in, display for about 800ms, then the animation ends (the trick is then cleared by `GameRunner`).

---

## Level 2 – Stretch (3 pts)

### Challenge 5: Card Deal Animation

When `updatePlayerHand()` renders cards, add the animation class to each card with a staggered delay:

```js
cardEl.style.animationDelay = `${index * 50}ms`;
cardEl.classList.add('deal-in');
```

Define `@keyframes deal-in` in CSS to make cards slide up from below when dealt.

### Challenge 6: Score Change Highlight

When `updateScoreboard(teams)` updates the score display, briefly add a `.changed` class to the score element that pulses or flashes to draw the player's attention. Use `setTimeout` to remove it after the animation completes.

---

## Level 3 – Advanced (2 pts)

### Challenge 7: Smooth Bidding Area Transition

Instead of the `hidden` class (which shows/hides instantly), animate the `#bidding-area` in and out:
- When showing: slide in from above using `@keyframes` or a CSS transition on `opacity` + `transform`
- When hiding: reverse the animation before setting `display: none`

You may need to handle the timing carefully — the Promise in `getBidFromUser()` should only resolve after the bidding area is fully hidden.
