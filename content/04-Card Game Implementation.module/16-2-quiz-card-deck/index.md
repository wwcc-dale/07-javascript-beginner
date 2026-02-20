---
bank_name: "Session 16: Card Game Foundation"
---

1. What properties does a Card class need?
*a) suit, rank, value, color
b) Only suit and rank
c) Only value
d) name, type, image

1. How do you calculate card value where Ace=14?
*a) Use if statements to check rank and return appropriate value
b) All cards have value = rank
c) Use random numbers
d) Value is not needed

1. What does the compare() method return?
*a) 1 if greater, -1 if less, 0 if equal
b) true or false
c) The winning card
d) A string message

1. How many cards in a standard deck?
*a) 52
b) 48
c) 54
d) 50

1. What is Fisher-Yates shuffle algorithm for?
*a) Randomly reordering array elements with equal probability
b) Sorting cards
c) Dealing cards
d) Comparing cards

1. What does deck.draw() do?
*a) Removes and returns the last card from deck
b) Shows a card without removing it
c) Shuffles the deck
d) Adds a card to deck

1. Why separate Card and Deck classes?
*a) Single responsibility - Card knows itself, Deck manages collection
b) They should be one class
c) For speed
d) It's required by JavaScript

1. What color are Hearts and Diamonds?
*a) Red
b) Black
c) Blue
d) It varies

1. What does this.cards.pop() do?
*a) Removes and returns last element from array
b) Adds element to array
c) Removes first element
d) Shuffles array

1. How do you create all 52 cards?
*a) Nested loop through suits and ranks
b) Type them all manually
c) Use Math.random()
d) Import from library

1. What does isEmpty() check?
*a) If cards array length is 0
b) If deck is null
c) If cards are face down
d) If game is over

1. Why use getSuitSymbol()?
*a) Returns unicode symbol (♥ ♦ ♣ ♠) for display
b) To shuffle cards
c) To compare cards
d) Not needed

1. What does cardsRemaining() return?
*a) The length of cards array
b) Number of players
c) Game score
d) Always 52

1. What happens if you draw from empty deck?
*a) Should return null or handle error
b) Game crashes
c) Creates new cards
d) Shuffles automatically

1. In Fisher-Yates, why start from end?
*a) Ensures each position has equal probability of any card
b) It's faster
c) Cards stay sorted
d) No particular reason

1. True or false: Card class should know about Deck class
*a) False - Card is independent
b) True - they must communicate
