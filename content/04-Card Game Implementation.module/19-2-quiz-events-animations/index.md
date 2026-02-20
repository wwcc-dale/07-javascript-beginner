---
bank_name: "Session 19: Event Handling and Animations"
---

1. How do you handle card clicks?
*a) Add event listener to each card that calls playRound with index
b) Use form submission
c) Cards handle themselves
d) Use alert on click

1. What's the purpose of animateRound()?
*a) Coordinate sequence of showing cards, result, then clearing with delays
b) Just show cards
c) Play sound
d) Not needed

1. How to add delay between animations?
*a) Use setTimeout or return Promise with delay
b) Use alert
c) Reload page
d) Cannot add delays

1. What does disableCardClicks() do?
*a) Prevents clicking during animations by setting pointerEvents='none'
b) Removes all cards
c) Ends game
d) Shows error

1. Why use Promises for animations?
*a) Chain async operations in sequence, wait for completion
b) They're required
c) Faster than setTimeout
d) No particular reason

1. What CSS property creates smooth transitions?
*a) transition with duration and easing
b) display: none
c) color
d) margin

1. How to animate card entering play area?
*a) Add CSS animation class that slides/fades in
b) Use alert
c) Just appear instantly
d) Cannot animate

1. What does enableCardClicks() do after animation?
*a) Restores pointerEvents='auto' so cards clickable again
b) Removes cards
c) Ends game
d) Shows message

1. How to show round result message?
*a) Update textContent and add CSS class for styling
b) Use console.log only
c) Alert box
d) Don't show result

1. What happens if user clicks during animation?
*a) Should be prevented by disabling clicks or checking flag
b) Game crashes
c) Plays multiple rounds
d) Nothing happens

1. How to clear played cards after delay?
*a) Use setTimeout to call clearPlayArea() after specific time
b) Immediately
c) Never clear
d) Use alert

1. What's the purpose of delay() function?
*a) Returns Promise that resolves after specified milliseconds
b) Stops game
c) Speeds up game
d) Not useful

1. How to chain multiple animations?
*a) Use .then() on Promises or async/await
b) Call them all at once
c) Use alert
d) Cannot chain

1. What CSS makes card hover effect?
*a) .card:hover with transform and box-shadow
b) display: none
c) color change only
d) margin change

1. How to handle game over after final round?
*a) Check gameOver in animation callback, call showGameOver()
b) Ignore it
c) Reload page
d) Alert only

1. True or false: Animations should block all user input
*a) True - prevent clicks during animations for smooth experience
b) False - users should always be able to click
