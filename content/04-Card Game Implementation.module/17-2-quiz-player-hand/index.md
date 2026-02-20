---
bank_name: "Session 17: Player and Hand Management"
---

1. What does the Hand class manage?
*a) A collection of cards for one player
b) All players in the game
c) The deck
d) Game scoring

1. What does hand.playCard(index) do?
*a) Removes and returns card at that index
b) Shows the card
c) Adds a card
d) Shuffles the hand

1. Why does Player have a Hand property?
*a) Composition - Player has-a Hand to manage their cards
b) Inheritance
c) For speed
d) It's optional

1. What does player.receiveCard(card) do?
*a) Adds card to player's hand
b) Removes a card
c) Compares cards
d) Shuffles hand

1. How do you sort a hand by value?
*a) hand.cards.sort((a, b) => b.value - a.value)
b) hand.shuffle()
c) hand.cards.reverse()
d) You cannot sort

1. What properties does Game class need?
*a) deck, player, computer, currentRound, gameOver
b) Only deck
c) Only players
d) cards, score

1. Why call deck.shuffle() in startGame()?
*a) Randomize cards for fair gameplay
b) To remove cards
c) To count cards
d) It's not necessary

1. What does dealCards() do?
*a) Alternates giving cards to each player until deck empty
b) Gives all cards to one player
c) Shuffles cards
d) Compares cards

1. How does playRound() work?
*a) Player plays card at index, computer plays card, compare results
b) Only player plays
c) Both play random cards
d) No cards are played

1. What does compareCards() return?
*a) Object with winner, both cards played, and updated scores
b) Just the winner
c) true or false
d) The winning card

1. When is game over?
*a) When both players have no cards left
b) After 10 rounds
c) When one player reaches 26 points
d) Never

1. What does getGameState() return?
*a) Object with current scores, card counts, gameOver status
b) Just the score
c) Only player cards
d) Winner only

1. How to implement simple computer AI?
*a) Choose card at random index or use strategy
b) Always play first card
c) Computer cannot play
d) Use external API

1. What does player.winRound() do?
*a) Increments roundsWon and adds 1 to score
b) Only increments score
c) Ends the game
d) Shuffles cards

1. Why store lastResult in Game class?
*a) To display previous round result to user
b) To undo moves
c) For debugging only
d) Not needed

1. True or false: Hand class should know about Player class
*a) False - Hand is independent, Player contains Hand
b) True - they must communicate directly
