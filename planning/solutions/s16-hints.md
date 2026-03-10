# Session 16 Hints — Card and Deck Implementation

## Card class

### getValue()
- Use an object as a lookup table for face cards:
  `const faceValues = { J: 11, Q: 12, K: 13, A: 14 };`
- For number cards, `parseInt(this.rank)` converts the string `"10"` to the number 10.
- Return the looked-up value if it exists, otherwise return the parsed integer.

### equals(other)
- Compare both suit AND rank — two cards are equal only if both match.

## Deck class

### buildDeck()
- Nested loops: outer loop over suits, inner loop over ranks.
  Each combination produces one card — 4 × 13 = 52 total.

### shuffle() — Fisher-Yates
- Start at the last index and work backwards.
- For each index `i`, pick a random index `j` between 0 and `i` (inclusive).
- Swap `cards[i]` and `cards[j]` using destructuring: `[cards[i], cards[j]] = [cards[j], cards[i]]`

### draw()
- `array.pop()` removes and returns the last element. Return `null` if the deck is empty.

## Testing for 52 unique cards
- Draw all cards into a `Set` using `.add(card.toString())`.
- After drawing all 52, check `set.size === 52`.
- Call `deck.reset()` first to start from a full deck.
