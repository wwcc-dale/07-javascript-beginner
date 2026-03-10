---
allowed_extensions:
- js
assignment_type: online
module: 4
name: 'Session 16: Card and Deck Classes'
points: 20
position: 3
published: true
related_outcomes:
- CLO-2
- CLO-3
- CLO-4
session: 16.3
submission_types:
- online_upload
---

# Session 16: Card and Deck Classes

Build the foundation of your Blackjack game: a `Card` class and a `Deck` class.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `16-assignment.js`

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Card Class
```js
// TODO: Create a Card class with:
// - Constructor: rank (string), suit (string)
// - Private-style properties: _rank, _suit
// - Getters: rank, suit
// - Method toString(): returns "[rank] of [suit]"
//   Example: "Ace of Spades", "7 of Hearts"
// - Method getValue(): returns the Blackjack value
//   - 'Ace' → 11
//   - 'Jack', 'Queen', 'King' → 10
//   - All others → parseInt(rank) → ('2'→2, '10'→10, etc.)

// Test:
// const c1 = new Card('Ace', 'Spades');
// console.log(c1.toString());  // "Ace of Spades"
// console.log(c1.getValue()); // 11

// const c2 = new Card('Queen', 'Hearts');
// console.log(c2.toString());  // "Queen of Hearts"
// console.log(c2.getValue()); // 10

// const c3 = new Card('7', 'Clubs');
// console.log(c3.getValue()); // 7
```

### Challenge 2: Deck Constructor with _build()
```js
// TODO: Create a Deck class with:
// - Constructor: creates an empty _cards array, then calls _build()
// - Method _build(): fills _cards with all 52 Card objects
//   - 4 suits: 'Hearts', 'Diamonds', 'Clubs', 'Spades'
//   - 13 ranks per suit: '2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'
//   - Use nested for...of loops
// - Getter size: returns _cards.length

// Test:
// const deck = new Deck();
// console.log(deck.size); // 52
// console.log(deck._cards[0].toString()); // "2 of Hearts"
// console.log(deck._cards[51].toString()); // "Ace of Spades"
```

### Challenge 3: shuffle()
```js
// TODO: Add to Deck:
// - Method shuffle(): shuffles _cards in-place using Fisher-Yates
//   Algorithm:
//     for i from (length - 1) down to 1:
//       pick a random j between 0 and i (inclusive)
//       swap _cards[i] and _cards[j]
//   Use array destructuring to swap: [arr[i], arr[j]] = [arr[j], arr[i]]

// Test:
// const deck = new Deck();
// const firstBefore = deck._cards[0].toString();
// deck.shuffle();
// // After shuffling, order should be different (may occasionally match by chance)
// console.log(deck.size); // still 52 — shuffling doesn't remove cards
```

### Challenge 4: deal()
```js
// TODO: Add to Deck:
// - Method deal(): removes and returns the top card (_cards.pop())
//   Returns null if the deck is empty

// Test:
// const deck = new Deck();
// deck.shuffle();
// const card = deck.deal();
// console.log(card.toString()); // some random card
// console.log(deck.size);       // 51
// // Deal all remaining cards
// while (deck.size > 0) { deck.deal(); }
// console.log(deck.deal());     // null
```

---

## Level 2 – Stretch (3 points)

### Challenge 5: isRed() and getSuitSymbol()
```js
// TODO: Add to Card:
// - Method isRed(): returns true for Hearts and Diamonds, false otherwise
// - Method getSuitSymbol(): returns the Unicode symbol for the suit:
//   Hearts → '♥', Diamonds → '♦', Clubs → '♣', Spades → '♠'
// - Update toString() to use the symbol: "Ace ♠" instead of "Ace of Spades"
//   (or add a separate toDisplayString() method — your choice)

// Test:
// console.log(new Card('Ace', 'Hearts').isRed());        // true
// console.log(new Card('2', 'Spades').isRed());          // false
// console.log(new Card('King', 'Clubs').getSuitSymbol()); // '♣'
```

### Challenge 6: reset()
```js
// TODO: Add to Deck:
// - Method reset(): clears _cards and calls _build() again to restore all 52 cards

// Test:
// const deck = new Deck();
// deck.shuffle();
// while (deck.size > 0) deck.deal(); // empty it
// console.log(deck.size); // 0
// deck.reset();
// console.log(deck.size); // 52
```

---

## Level 3 – Advanced (2 points)

### Challenge 7: MultiDeck
```js
// TODO: Create a MultiDeck class that extends Deck with:
// - Constructor: numDecks (default 1)
// - Override _build(): calls super._build() once, then pushes all those cards again
//   (numDecks - 1) more times, resulting in numDecks × 52 cards total
//   Hint: you can use spread: this._cards.push(...this._cards.slice(...))
//   Or just call the build logic in a loop.

// Test:
// const shoe = new MultiDeck(6);  // 6-deck blackjack shoe
// console.log(shoe.size); // 312  (6 × 52)
// shoe.shuffle();
// console.log(shoe.deal().toString()); // random card
```
