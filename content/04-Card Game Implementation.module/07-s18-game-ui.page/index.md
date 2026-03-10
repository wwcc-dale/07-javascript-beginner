---
module: 4
name: 'Session 18: Filtering, Conditionals, and State Transitions'
position: 7
published: true
related_outcomes:
- CLO-1
- CLO-2
- CLO-5
session: 18.1
---

# Session 18: Filtering, Conditionals, and State Transitions

## Learning Outcomes

By the end of this session, you will be able to:
- Use `Array.filter()` to return subsets of a collection based on conditions
- Chain multiple conditions to implement complex eligibility rules
- Modify state on an object as a side effect of an action
- Walk an array to find a maximum or "winning" element
- Write guard clauses that return early when an operation cannot succeed

---

## Introduction (5 minutes)

Many programs need to answer the question: **which items are currently valid choices?** A restaurant might only show menu items that are in stock and within a budget. A game controller might only enable moves that follow the current rules.

Today you learn the array filtering and conditional patterns used to implement rule-based selection — and the related technique of scanning a collection to find the "winner."

---

## Reading: Filtering, Conditions, and Winner-Finding (35 minutes)

### `Array.filter()` and Conditional Logic

`filter()` returns a new array containing only the elements that pass a test function:

```js
const products = [
  { name: 'Laptop',  price: 999, inStock: true,  category: 'electronics' },
  { name: 'Mouse',   price: 29,  inStock: true,  category: 'electronics' },
  { name: 'Desk',    price: 349, inStock: false, category: 'furniture'   },
  { name: 'Monitor', price: 399, inStock: true,  category: 'electronics' }
];

// Only electronics that are in stock
const available = products.filter(
  p => p.category === 'electronics' && p.inStock
);
console.log(available.length);  // 2 (Laptop, Mouse — Monitor is $399 which passes)
```

The function inside `filter()` is called for each element. If it returns `true`, the element is included in the result; if `false`, it is excluded. The original array is never modified.

---

### Two-Path Conditional Filtering

Many eligibility rules have two distinct cases: a **restricted** case and an **unrestricted** case. The structure looks like this:

```js
function getEligibleItems(inventory, currentBudget, inSaleMode) {
  if (inSaleMode) {
    // Restricted: only sale items within budget
    const saleItems = inventory.filter(item => item.onSale && item.price <= currentBudget);
    // Fallback: if nothing qualifies under restriction, allow everything
    return saleItems.length > 0 ? saleItems : inventory.filter(i => i.price <= currentBudget);
  }
  // Unrestricted: anything within budget
  return inventory.filter(item => item.price <= currentBudget);
}
```

**Pattern to notice:**
1. Check the outer condition first (`inSaleMode`)
2. Apply the restriction
3. Provide a fallback when the restriction leaves nothing valid
4. Handle the unrestricted case at the end

---

### Guard Clauses and Early Returns

A **guard clause** is a conditional at the start of a function that returns early when the operation cannot or should not proceed:

```js
function purchaseItem(cart, item, availableCredit) {
  if (!item.inStock) return false;              // Can't buy out-of-stock item
  if (item.price > availableCredit) return false;  // Not enough credit

  // Safe to proceed
  cart.push(item);
  availableCredit -= item.price;
  return true;
}
```

Guard clauses keep the "happy path" logic at the normal indentation level and make failure conditions explicit. Without them, you end up with deeply nested `if/else` blocks.

---

### Side Effects: Modifying State During an Action

Some methods need to **modify state** as a side effect. The pattern is: perform the action, update affected state, return a result:

```js
class Warehouse {
  constructor() {
    this.inventory = { apples: 50, oranges: 30, bananas: 20 };
    this.hasRefrigeration = false;
  }

  shipItem(item, quantity) {
    if (this.inventory[item] === undefined) return false;   // Guard: unknown item
    if (this.inventory[item] < quantity)   return false;   // Guard: insufficient stock

    // Perform the action
    const shipped = quantity;
    this.inventory[item] -= quantity;                      // Modify state

    // Side effect: check if refrigeration is needed now
    if (item === 'apples' || item === 'oranges') {
      this.hasRefrigeration = this.inventory.apples > 0
                           || this.inventory.oranges > 0;
    }

    return shipped;  // Return the result
  }
}
```

The method modifies `this.inventory` and `this.hasRefrigeration` as side effects of the shipment — analogous to how a game action might modify shared game state.

---

### Finding the "Winner" in a Collection

To find the element with the highest value according to some rule, iterate through the collection keeping track of the current best:

```js
function findWinningBid(bids) {
  // bids = [{ bidder, amount, timestamp }, ...]

  let winning = bids[0];  // Start with the first bid

  for (let i = 1; i < bids.length; i++) {
    const bid = bids[i];

    // A bid placed by a premium member automatically beats a standard bid
    if (bid.isPremiumMember && !winning.isPremiumMember) {
      winning = bid;
    } else if (bid.isPremiumMember === winning.isPremiumMember) {
      // Same tier: higher amount wins
      if (bid.amount > winning.amount) {
        winning = bid;
      }
    }
    // Otherwise current bid doesn't beat the winner — do nothing
  }

  return winning;
}
```

**Key structure:**
1. Start with index 0 as the tentative winner
2. Loop from index 1
3. Apply the dominance rules — if the current entry beats `winning`, update it
4. Return `winning` after the loop

This is the pattern you use any time you need to find the "best" element in a collection according to multi-level rules.

---

### Resetting State

After a unit of work is complete (a purchase, a round, a game), you often need to reset a subset of state while preserving other state:

```js
class AuctionRound {
  constructor() {
    this.bids           = [];
    this.roundNumber    = 0;
    this.totalRevenue   = 0;   // Persists across rounds
  }

  closeRound(winner) {
    this.totalRevenue += winner.amount;  // Accumulate persisted data
    this.roundNumber++;

    // Reset transient state for next round
    this.bids = [];
  }
}
```

Notice that `bids` resets to empty but `totalRevenue` and `roundNumber` keep accumulating. Identifying which state is **round-level** vs. **game-level** is a key design decision.

---

## Video Tutorial: Filtering and Winner-Finding (20 minutes)

Watch: `assets/videos/18-filtering-conditions.mp4`

Covers:
- `filter()` with single and compound conditions
- The two-path conditional filtering pattern
- Walking a collection to find a winner
- Guard clauses vs. nested if/else

---

## Supplemental Practice (25 minutes)

### Exercise 1: Eligible Products

Given an array of products with `{ name, price, category, inStock }`, write a function `getAvailable(products, maxPrice, category)` that returns only products that are in stock, match the category, and cost at most `maxPrice`. If nothing matches, return all in-stock products regardless of price.

### Exercise 2: Guard Clauses

Rewrite the following function using guard clauses to avoid the nested if/else:

```js
function processOrder(order) {
  if (order.items.length > 0) {
    if (order.paymentConfirmed) {
      if (order.shippingAddress) {
        return 'Order processed';
      } else {
        return 'Missing address';
      }
    } else {
      return 'Payment not confirmed';
    }
  } else {
    return 'Empty order';
  }
}
```

### Exercise 3: Find the Strongest

Given an array of competitors `{ name, score, isPro }`, write a function `findWinner(competitors)` that returns the winning competitor, where a Pro always beats a non-Pro at the same score, and within the same tier the higher score wins.

### Exercise 4: Shipment with Side Effect

Extend the `Warehouse` class with a `restock(item, quantity)` method that increases inventory. After calling it, verify that state is correctly updated.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 18 Practice Quiz** in Canvas.

Focus on:
- What `filter()` returns and whether it modifies the original array
- How to handle the "restriction has nothing valid" fallback
- The structure of the winner-finding loop (start with index 0, loop from index 1)
- Why guard clauses are preferred over deeply nested conditionals

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 18: Spades Rules Implementation"**.

You will apply these filtering and comparison patterns to implement the Spades rule methods in `SpadesGame.js`.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`filter()`** returns a new array matching a condition; the original is unchanged
- **Two-path filtering** handles restricted vs. unrestricted cases with a fallback
- **Guard clauses** at the top of a method make failure cases explicit and keep the happy path readable
- **Side-effect methods** perform an action, update dependent state, and return a result
- **Winner-finding** starts at index 0 and replaces the winner whenever a better entry is found

### How This Connects to the Assignment

The assignment applies these patterns to Spades rule enforcement: which cards a player may legally play, what happens when a card is played (state update), and which player wins a trick (winner-finding across four entries).

Next session: **Session 19 — Accumulation, Scoring, and Promise-Based Input**