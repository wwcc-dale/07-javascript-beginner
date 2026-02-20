---
bank_name: "Session 18: Game State and UI Foundation"
---

1. How do you render a card to DOM?
*a) Create div with createElement, set innerHTML with card data
b) Use alert()
c) Just console.log
d) Cards render automatically

1. What does renderPlayerHand() do?
*a) Creates card divs for each card in player's hand and appends to DOM
b) Only shows card count
c) Removes cards
d) Shuffles display

1. How to make cards clickable?
*a) Add click event listener to each card div
b) Use alert on hover
c) Cards are automatically clickable
d) Use form submit

1. What's the purpose of updateScores()?
*a) Updates score display elements with current game scores
b) Calculates new scores
c) Resets scores
d) Only logs to console

1. How to show computer's cards face-down?
*a) Render divs with 'card-back' class instead of card data
b) Don't render them
c) Show all cards
d) Use images only

1. What does updateUI() typically do?
*a) Calls all render functions to refresh entire display
b) Only updates score
c) Only renders cards
d) Closes the game

1. Where should game logic live?
*a) In Game class, UI just displays state
b) All in HTML
c) All in CSS
d) Mixed throughout

1. How to display played cards in play area?
*a) Append card divs to player-card-slot and computer-card-slot elements
b) Replace hand
c) Use alert
d) Don't show them

1. What's the benefit of separate render functions?
*a) Easier to maintain, update specific parts of UI
b) Slower performance
c) More code
d) No benefit

1. How to prevent clicks during animations?
*a) Set pointerEvents='none' or use flag variable
b) Remove all cards
c) Reload page
d) Cannot prevent

1. What does clearPlayArea() do?
*a) Removes played cards and result message from display
b) Ends game
c) Shuffles deck
d) Resets scores

1. Why use innerHTML for card display?
*a) Easy to inject HTML structure for card layout
b) It's required
c) Faster than createElement
d) No particular reason

1. How to show game over state?
*a) Display message with final scores and winner
b) Close window
c) Refresh page
d) Do nothing

1. What CSS property makes cards look like cards?
*a) border-radius, background, border, dimensions
b) Only color
c) Only font-size
d) display: none

1. How to handle empty hand rendering?
*a) Check if hand is empty before rendering, or render nothing
b) Show error
c) Crash game
d) Render placeholder

1. True or false: UI should directly modify game state
*a) False - UI displays state, game logic modifies it
b) True - UI controls everything
