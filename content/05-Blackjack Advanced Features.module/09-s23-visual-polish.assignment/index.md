---
indent: 2
allowed_extensions:
- html
- css
- js
- zip
assignment_type: online
module: 5
name: 'Session 23: Visual Polish'
points: 20
position: 9
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 23.3
submission_types:
- online_upload
---

# Session 23: Visual Polish

Add a theme toggle, card hover animations, and a win announcement animation to your Blackjack game using CSS custom properties and transitions.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** ZIP containing all game files with updated `style.css`

> alert: info
>
> Start from your Session 22 game. All changes in this session go into `style.css` and `ui.js` — you are not creating new files.

---

## Level 1 – Core Tasks [15 pts](#pill:accent)

### Challenge 1: CSS Custom Property System

Refactor `style.css` to use CSS custom properties for all repeated values. Your `:root` block must define at minimum:
- `--bg` — page background colour
- `--surface` — card and panel background colour
- `--text` — primary text colour
- `--accent` — primary interactive colour (buttons, highlights)
- `--felt` — game table background colour
- `--shadow` — standard box shadow value
- `--radius` — standard border radius value
- `--speed` — base transition speed

Replace all hardcoded occurrences throughout `style.css` with `var(--property-name)`.

### Challenge 2: Light/Dark Theme

Add a `.dark` block on `html` that overrides all 8 custom properties with dark-appropriate values:

```css
html.dark {
  --bg: #1a1a2e;
  --surface: #16213e;
  --text: #e0e0e0;
  --felt: #0a3a2a;
  /* ... etc ... */
}
```

Add a theme toggle button to `index.html`. In `ui.js`:
- Toggle `.dark` on `document.documentElement` when clicked
- Save the choice to localStorage under `bj_theme`
- Apply the saved theme on page load **before** anything else renders

### Challenge 3: Card Hover Effect

Add hover behaviour to `.card` elements in `style.css`:
- Normal state: `translateY(0)`, standard shadow
- Hover state: `translateY(-8px)`, larger shadow
- Put the `transition` on the **normal state**, not the hover state
- Cards should show `cursor: pointer` on hover

Verify the effect works in the browser when you hover over a card in the player's hand.

### Challenge 4: Win Announcement Animation

When a round ends with a win, animate the result `#message` element.

Define a `@keyframes` animation (e.g., `flashResult`):

```css
@keyframes flashResult {
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.3); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}
.announcing { animation: flashResult 0.4s ease forwards; }
```

In `ui.js`, when the outcome is a win, add the `.announcing` class to `#message`. To allow it to replay on the next win:

```js
messageEl.classList.remove('announcing');
void messageEl.offsetWidth;   // Force reflow
messageEl.classList.add('announcing');
```

---

## Level 2 – Stretch [3 pts](#pill:cert)

### Challenge 5: Staggered Deal Animation

When `renderHand()` creates card elements, add a deal-in animation with staggered delay:

```js
el.style.animationDelay = (index * 0.1) + 's';
el.classList.add('deal-in');
```

Define `@keyframes deal-in` to make cards slide up from below as they are dealt.

### Challenge 6: Chip count colour change

When the chip balance changes:
- Briefly flash the `#chip-count` element **green** on a win, **red** on a loss.
- Use a CSS class (`flash-win` or `flash-lose`) and remove it after 600ms with `setTimeout`.

---

## Level 3 – Advanced [2 pts](#pill:degree)

### Challenge 7: Smooth result panel

Instead of instantly showing/hiding the result message, animate it:
- On win/lose: fade and slide in from above using a CSS transition on `opacity` and `transform`.
- On the next Deal: fade it out before the new round starts.

Use `transitionend` event listener or a `delay()` to wait for the animation to finish before starting the new round.

---

## Before Submitting

- checklist: Before Submitting
- Zip file of complete game folder with updated `style.css`
- CSS custom properties defined in `:root` and used throughout
- Light/dark theme toggle works and saves preference to localStorage
- Card hover animation lifts card on hover
- Win announcement animation plays on win outcomes
- No JavaScript errors in the browser console
- Attempted Level 2 or 3 if time allowed
