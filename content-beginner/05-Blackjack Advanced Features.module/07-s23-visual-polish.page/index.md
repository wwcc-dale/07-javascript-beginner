---
module: 5
name: 'Session 23: CSS Custom Properties, Theming, and Transitions'
position: 7
published: true
related_outcomes:
- CLO-1
- CLO-5
session: 23.1
---

# Session 23: CSS Custom Properties, Theming, and Transitions

## Learning Outcomes

By the end of this session, you will be able to:
- Define and use CSS custom properties (variables) to centralize design values
- Switch between light and dark themes by toggling a class on the root element
- Trigger CSS transitions from JavaScript for smooth state changes
- Use `@keyframes` to animate elements entering or leaving the screen
- Apply the `hidden` class pattern to show/hide UI sections

---

## Introduction (5 minutes)

Your Spades game works correctly. Now you make it feel polished — with a consistent color system that can switch themes, smooth transitions between states, and animations that give visual feedback when things happen.

All of this is done primarily in CSS, with JavaScript used only to add or remove classes at the right moment.

---

## Reading: CSS Custom Properties and Animation (35 minutes)

### CSS Custom Properties

**CSS custom properties** (also called CSS variables) store values that can be reused across your stylesheet. They are declared with `--` and read with `var()`:

```css
/* Declare on :root so they're available everywhere */
:root {
  --primary-color: #2c5aa0;
  --background: #f5f5f5;
  --surface: #ffffff;
  --text-color: #333333;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  --border-radius: 8px;
  --transition-speed: 0.25s;
}

/* Use them anywhere */
button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: background-color var(--transition-speed) ease;
}

.card {
  background: var(--surface);
  color: var(--text-color);
}
```

Changing `--primary-color` in one place updates every element that uses it.

---

### Theme Switching

A **theme** is a complete set of values for all design variables. Switch themes by adding a class to `:root` that overrides the variables:

```css
/* Default (light) theme — declared on :root */
:root {
  --page-bg:    #f0f4f8;
  --panel-bg:   #ffffff;
  --body-text:  #2d3748;
  --link-color: #3182ce;
  --nav-bg:     #1a202c;
}

/* Dark theme — overrides when class is present */
:root.dark {
  --page-bg:    #1a202c;
  --panel-bg:   #2d3748;
  --body-text:  #e2e8f0;
  --link-color: #63b3ed;
  --nav-bg:     #0d1117;
}

body {
  background-color: var(--page-bg);
  color: var(--body-text);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

Toggle the theme from JavaScript:

```js
const root = document.documentElement;  // The <html> element

function switchColorScheme() {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  localStorage.setItem('colorScheme', isDark ? 'dark' : 'light');
}

// Apply saved scheme on load
function applyStoredScheme() {
  const saved = localStorage.getItem('colorScheme');
  if (saved === 'dark') root.classList.add('dark');
}
```

---

### The `hidden` Class Pattern

Rather than using `display: none` inline, manage visibility with a CSS class:

```css
.hidden {
  display: none !important;
}
```

Toggle it from JavaScript:

```js
const modal = document.getElementById('settings-modal');

function showModal()  { modal.classList.remove('hidden'); }
function hideModal()  { modal.classList.add('hidden');    }
function isVisible()  { return !modal.classList.contains('hidden'); }
```

This keeps display logic in CSS and behavior logic in JS — each in its appropriate place.

---

### CSS Transitions

**Transitions** animate changes to property values over time. They are triggered automatically whenever the property changes (including when a class is toggled):

```css
.status-badge {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background-color 0.2s ease;
}

.status-badge.faded {
  opacity: 0.4;
  transform: translateY(-4px);
}

.status-badge.success {
  background-color: #4caf50;
}

.status-badge.error {
  background-color: #f44336;
}
```

Add or remove classes from JavaScript; the transition runs automatically:

```js
badge.classList.add('success');
// 300ms later, the transition is complete — optionally revert
setTimeout(() => badge.classList.remove('success'), 2000);
```

---

### CSS Keyframe Animations

**`@keyframes`** define multi-step animations that run once (or on a loop). They are triggered by adding a class with `animation`:

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.announce-card {
  animation: slideUp 0.4s ease-out forwards;
}

.highlighted {
  animation: pulse 0.6s ease-in-out 3;  /* Runs 3 times */
}
```

To re-trigger an animation on an element that already has it, briefly remove and re-add the class:

```js
function flashElement(el) {
  el.classList.remove('highlighted');
  // Force a reflow so the browser registers the removal before re-adding
  void el.offsetWidth;
  el.classList.add('highlighted');
}
```

---

### Hover States and Card Lifting

A common visual polish technique: cards "lift" on hover using `transform` and `box-shadow`:

```css
.card {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: default;
}

.card.playable {
  cursor: pointer;
}

.card.playable:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
}

.card.disabled {
  opacity: 0.45;
  cursor: not-allowed;
  filter: grayscale(30%);
}
```

The transition fires automatically on both `:hover` and on leaving `:hover`. No JavaScript is needed for this effect.

---

## Video Tutorial: CSS Variables and Animations (20 minutes)

Watch: `assets/videos/23-css-themes-animations.mp4`

Covers:
- Declaring and using CSS custom properties
- Theme switching with a root class
- The `hidden` class pattern
- Writing and triggering `@keyframes` animations
- Hover lift with `transform` and `box-shadow`

---

## Supplemental Practice (25 minutes)

### Exercise 1: Custom Property System

Create a simple webpage with at least 5 UI elements. Define 6 custom properties (background, surface, text, accent, border-radius, shadow). Apply them across all elements. Change one property and verify that every element using it updates.

### Exercise 2: Reading Mode Toggle

Extend Exercise 1 with a "reading mode." Add a Toggle button that switches between a bright mode (white background, dark text) and a calm reading mode (warm sepia tones — e.g. `#fdf6e3` background, `#4a3728` text). Toggle it by adding or removing a class on `:root`. Save the user's choice to localStorage under a key of your own choosing, and restore it on page load.

### Exercise 3: Notification Animation

Create a `#notification` div that normally has `opacity: 0`. Write a `showNotification(message, type)` function that:
- Sets the text and a class (`success`, `error`, or `info`) for color
- Adds a `visible` class that transitions opacity to 1
- After 3 seconds, removes `visible` so it fades back out

### Exercise 4: Card Hover Effect

Create a grid of 6 "cards" (divs with content). Using only CSS (no JS), make them lift on hover with a transform and box-shadow transition. Add a `.selected` class variant with a colored border. Write a JS function `selectCard(index)` that adds `.selected` to one card and removes it from all others.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 23 Practice Quiz** in Canvas.

Focus on:
- Where CSS custom properties are declared and how they are read
- Why toggling a class on `:root` changes values throughout the page
- The difference between CSS transitions (react to property changes) and `@keyframes` (defined multi-step sequences)
- Why `void el.offsetWidth` is used to re-trigger an animation

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 23: Visual Polish"**.

You will apply CSS custom properties, theme switching, transitions, and animations to your Spades game.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **CSS custom properties** centralize design values; one change updates all usages
- **Theme switching** toggles a class on `:root` to override all variables at once
- **The `hidden` class** cleanly separates show/hide logic from inline styles
- **Transitions** animate property changes automatically when triggered by class changes
- **`@keyframes`** define reusable named animations; classes apply them

### How This Connects to the Assignment

The assignment asks you to add a theme toggle, smooth card hover animations, and a trick-winner announcement animation to your Spades game using the CSS patterns from this reading.

Next session: **Session 24 — ES6 Modules and Professional Code Organization**