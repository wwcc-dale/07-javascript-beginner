# Session 23 Hints — Visual Polish

## CSS Custom Properties
- Declare all your design variables in `:root` so every element on the page can use them.
- Name them to describe their **purpose**, not their value: `--surface` not `--white`.
- Apply them with `var(--property-name)`: `background: var(--surface);`

## Theme Toggle
- Add a second rule block for your dark theme that **overrides** the same variable names
  using a class on the root element (e.g., `html.dark { --surface: #1a1a2e; }`).
- Toggle the class from JavaScript: `document.documentElement.classList.toggle('dark')`
- Save the user's choice to localStorage — use any key name you choose.
- Restore on page load: read from localStorage and add the class before the page renders.

## Card Hover Effect
- Transitions go on the **default state**, not the hover state.
  `transition: transform 0.15s ease, box-shadow 0.15s ease;` on `.card`
- The hover state only needs to specify what changes:
  `.card.playable:hover { transform: translateY(-8px); box-shadow: ...; }`

## @keyframes Trick Winner Animation
- Define the animation with `@keyframes myName { from { ... } to { ... } }`
- Apply it by adding a class: `.announcing { animation: myName 0.4s ease forwards; }`
- To replay an animation on an element that already has it, remove the class, force a
  browser reflow, then re-add it:
  ```js
  el.classList.remove('announcing');
  void el.offsetWidth;   // Forces reflow
  el.classList.add('announcing');
  ```

## Staggered Deal Animation (Level 2)
- Set `animationDelay` in JS as you create each card element:
  `card.style.animationDelay = (index * 0.05) + 's';`
