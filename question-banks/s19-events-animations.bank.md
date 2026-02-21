---
bank_name: "Session 19: Event Handling and Animations"
---

1. What does this do? `document.getElementById('deal-btn').addEventListener('click', () => game.dealCards());`
*a) Calls game.dealCards() when button clicked
b) Calls immediately
c) Error thrown
d) Nothing happens

1. Fix this animation: `function animateCard(element) { element.style.opacity = 0; element.style.opacity = 1; }`
*a) Use setTimeout or CSS transitions: `element.style.opacity = 0; setTimeout(() => element.style.opacity = 1, 100);`
b) Code is correct
c) Use display instead
d) Cannot animate

1. What's the result? `async function playRound() { await delay(500); updateScore(); await delay(500); nextRound(); }` with `function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }`
*a) Waits 500ms, updates score, waits 500ms, starts next round
b) All happens immediately
c) Only delays once
d) Error thrown

1. Fix this: `button.addEventListener('click', handleClick()); `
*a) `button.addEventListener('click', handleClick);` (pass function reference, not call it)
b) Code is correct
c) Use onclick instead
d) Cannot add listener

1. What does this do? `element.classList.add('fade-in'); element.addEventListener('animationend', () => element.classList.remove('fade-in'));`
*a) Adds animation class, removes it when animation completes
b) Animation never starts
c) Class never removed
d) Error thrown

1. What happens? `async function dealCards() { for (let i = 0; i < 5; i++) { await animateCard(i); } }`
*a) Animates 5 cards sequentially (waits for each to finish)
b) Animates all at once
c) Only animates first card
d) Error thrown

1. Fix event delegation: `document.querySelectorAll('.card').forEach(card => card.addEventListener('click', handleCardClick));` (cards added dynamically)
*a) `document.getElementById('game-area').addEventListener('click', (e) => { if (e.target.classList.contains('card')) handleCardClick(e); });`
b) Code is correct
c) Cannot handle dynamic elements
d) Use onclick instead

1. Complete: `function animateCardFlip(element) { element.style.transform = 'rotateY(180deg)'; element.style.transition = ____; }`
*a) `'transform 0.5s'` or similar (property and duration)
b) `'0.5s'`
c) `'transform'`
d) Not needed

1. What's logged when button clicked twice? `let count = 0; button.addEventListener('click', () => { count++; console.log(count); });`
*a) 1, then 2 (increments each click)
b) 1, then 1
c) 2 only
d) Nothing

1. Fix this: `async function playGame() { await dealCards(); calculateWinner(); }` (calculateWinner needs delay)
*a) `async function playGame() { await dealCards(); await delay(500); calculateWinner(); }`
b) Code is correct
c) Remove await
d) Cannot use async

1. What does this prevent? `form.addEventListener('submit', (e) => { e.preventDefault(); processForm(); });`
*a) Prevents form from submitting to server (page reload)
b) Prevents form from being processed
c) Does nothing
d) Prevents all events

1. What's the result? `const card = document.querySelector('.card'); card.style.transition = 'all 0.3s'; card.style.transform = 'scale(1.5)';`
*a) Card smoothly scales to 1.5x size over 0.3 seconds
b) Card immediately scales
c) No change
d) Error thrown

1. Fix race condition: `button.addEventListener('click', async () => { await playRound(); await playRound(); });` (allows clicking during play)
*a) Disable button at start, enable at end: `button.disabled = true; await playRound(); await playRound(); button.disabled = false;`
b) Code is correct
c) Remove async
d) Cannot fix

1. What happens? `element.addEventListener('transitionend', () => console.log('Done')); element.style.transition = 'opacity 1s'; element.style.opacity = '0';`
*a) Logs 'Done' when opacity transition completes
b) Logs 'Done' immediately
c) Never logs
d) Error thrown

1. Complete: `async function sequenceAnimations() { await animate1(); ____ animate2(); ____ animate3(); }`
*a) `await` before both animate2() and animate3() (for sequential)
b) No await needed
c) Only await animate2()
d) Cannot sequence

1. What's wrong? `cards.forEach(async (card) => { await animateCard(card); });`
*a) forEach doesn't wait for async, use for...of: `for (const card of cards) { await animateCard(card); }`
b) Code is correct
c) Remove async
d) Cannot use forEach
