---
name: "Session 21: Decision Trees and Heuristic AI"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-2"
  - "CLO-3"
  - "CLO-5"
---

# Session 21: Decision Trees and Heuristic AI

## Learning Outcomes

By the end of this session, you will be able to:
- Build a decision tree as a series of prioritized `if/else` conditions
- Use a `Set` to track items that have been seen or used
- Compute a heuristic score from multiple weighted factors
- Design an AI that adjusts behavior based on its current goal vs. actual progress
- Explain the difference between greedy, conservative, and goal-aware strategies

---

## Introduction (5 minutes)

Most game AI is not magical — it is a well-structured series of `if/else` rules that consider the current situation and return the best available choice. The art is in choosing *which* conditions to check and in what order.

Today you learn the patterns used to build this kind of rule-based AI: decision trees, heuristic scoring, and goal tracking.

---

## Reading: AI Strategy Patterns (35 minutes)

### The Decision Tree Pattern

A **decision tree** is a series of questions answered in priority order. Each branch either returns a decision or falls through to the next question:

```js
function chooseSetting(room) {
  // Priority 1: Safety override
  if (room.smokeDetected) return 'EVACUATE';

  // Priority 2: Comfort preferences
  if (room.temperature > 78) return 'COOL';
  if (room.temperature < 65) return 'HEAT';

  // Priority 3: Energy saving (only if comfort is already satisfied)
  if (room.occupants === 0 && room.hvacOn) return 'OFF';

  // Default: no change needed
  return 'MAINTAIN';
}
```

**Structure rules:**
- Most important conditions come first
- Each branch returns immediately (no need for `else` after `return`)
- The final return is the default/fallback

---

### Tracking History with a `Set`

A `Set` is perfect for "have I seen this before?" tracking:

```js
class ContentRecommender {
  constructor() {
    this.viewedItems = new Set();  // Tracks IDs of viewed items
  }

  recordView(itemId) {
    this.viewedItems.add(itemId);
  }

  hasViewed(itemId) {
    return this.viewedItems.has(itemId);
  }

  getUnseenRecommendations(catalog) {
    return catalog.filter(item => !this.viewedItems.has(item.id));
  }

  resetHistory() {
    this.viewedItems = new Set();
  }
}

const rec = new ContentRecommender();
rec.recordView('movie-42');
rec.recordView('movie-7');

const fresh = rec.getUnseenRecommendations([
  { id: 'movie-42', title: 'Interstellar' },
  { id: 'movie-15', title: 'Arrival' }
]);
console.log(fresh[0].title);  // 'Arrival' — movie-42 was filtered out
```

`Set.has()` is O(1) — much faster than searching an array with `includes()`.

---

### Heuristic Scoring

A **heuristic** is a formula that estimates value without computing it exactly. Multiple factors are often weighted and combined:

```js
function scoreCandidate(candidate, requirements) {
  let score = 0;

  // Required skills — high weight
  const skillMatch = requirements.skills.filter(
    s => candidate.skills.includes(s)
  ).length;
  score += skillMatch * 10;

  // Experience — medium weight
  score += Math.min(candidate.yearsExp, 10) * 3;

  // Location preference — low weight
  if (candidate.city === requirements.preferredCity) score += 5;

  // Penalty: overqualified candidates may not accept lower roles
  if (candidate.yearsExp > requirements.maxExperience) score -= 8;

  return score;
}

const candidates = [alice, bob, carol];
const best = candidates.reduce((top, c) =>
  scoreCandidate(c, requirements) > scoreCandidate(top, requirements) ? c : top
);
```

Weights communicate priorities: skills matter most, location least. The penalty models an important negative factor.

---

### Goal-Aware Strategy: Progress vs. Target

One of the most useful AI improvements is making decisions based on **current progress relative to the goal**, rather than always trying to maximize:

```js
class SalesAgent {
  constructor(quota) {
    this.quota      = quota;
    this.salesMade  = 0;
  }

  chooseLead(leads) {
    const remaining = this.quota - this.salesMade;

    if (remaining <= 0) {
      // Already hit quota — pursue smallest leads (low risk)
      return leads.reduce((min, lead) =>
        lead.value < min.value ? lead : min
      );
    }

    if (remaining > this.quota * 0.7) {
      // Far from quota — pursue highest-value leads
      return leads.reduce((max, lead) =>
        lead.value > max.value ? lead : max
      );
    }

    // Close to quota — take the cheapest lead that closes the gap
    const sufficient = leads.filter(l => l.value >= remaining);
    if (sufficient.length > 0) {
      return sufficient.reduce((min, lead) =>
        lead.value < min.value ? lead : min
      );
    }

    return this.chooseLead(leads);  // Fallback: repeat with original strategy
  }
}
```

**The insight:** the optimal action depends not just on the options available, but on how far you are from your goal. Having exceeded your goal flips the strategy entirely.

---

### Combining Filtering and Scoring

In practice, AI decision-making first **filters** to valid options, then **scores** them to pick the best:

```js
function bestAvailableAction(options, context) {
  // Step 1: Filter to valid options only
  const valid = options.filter(opt => isLegalMove(opt, context));

  if (valid.length === 0) return null;  // No valid moves

  // Step 2: Score each valid option
  const scored = valid.map(opt => ({
    option: opt,
    score:  scoreOption(opt, context)
  }));

  // Step 3: Pick the highest scorer
  return scored.reduce((best, s) =>
    s.score > best.score ? s : best
  ).option;
}
```

This three-step structure (filter → score → select) is the backbone of most game AI.

---

## Video Tutorial: Decision Trees and Heuristic AI (20 minutes)

Watch: `assets/videos/21-decision-trees-heuristics.mp4`

Covers:
- Decision tree structure and priority ordering
- `Set` for O(1) membership checking
- Building a heuristic scoring function
- Goal-aware strategy: adjusting behavior based on progress

---

## Supplemental Practice (25 minutes)

### Exercise 1: Build a Decision Tree

Write a `chooseTactic(situation)` function for a board game. The function receives `{ myScore, opponentScore, roundsLeft, availableMoves }`. It should:
1. If `myScore > opponentScore + 10` (comfortable lead): return the lowest-risk move
2. If `roundsLeft < 3` (almost out of time): return the highest-value move
3. If `opponentScore > myScore` (losing): return the most aggressive move
4. Default: return the move with the best risk-adjusted value

### Exercise 2: Seen-Items Tracking

Build a `BrowsingHistory` class with a `Set`. Add `visit(url)`, `hasVisited(url)`, `getNewLinks(urls)` (returns only unvisited URLs), and `clearHistory()` methods. Test each.

### Exercise 3: Multi-Factor Scoring

Write a `scoreProduct(product, userPrefs)` function that scores products based on:
- Category match: +15 if matches preferred category
- Price fit: +10 if under budget, -5 if over by 10%, -15 if over by 25%+
- Rating: +rating × 2 (rating is 0–5)
- Already purchased: -50 penalty

Test it on a list of 5 products and return the top 2.

### Exercise 4: Goal-Aware Selection

Write a `selectItem(inventory, goal, currentProgress)` function that:
- If `currentProgress >= goal`: selects the item with the lowest cost
- If `currentProgress < goal * 0.5`: selects the item with the highest value
- Otherwise: selects the cheapest item whose value brings `currentProgress` to `goal`

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 21 Practice Quiz** in Canvas.

Focus on:
- How priority order in a decision tree affects the result
- Why `Set.has()` is faster than `Array.includes()` for large collections
- How to structure a heuristic score from multiple weighted factors
- Why the goal-aware pattern inverts strategy when the goal is already met

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 21: Improving the AIPlayer"**.

You will apply decision trees, `Set`-based tracking, and goal-aware strategy to upgrade `AIPlayer.js` in your Spades game.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **Decision trees** are `if/else` chains in priority order — most critical conditions first
- **`Set`** provides fast membership testing and automatic deduplication
- **Heuristic scoring** combines multiple weighted factors into a single comparable number
- **Goal-aware strategy** checks current progress against target and adjusts behavior accordingly
- **Filter → score → select** is the standard three-step structure for AI decision-making

### How This Connects to the Assignment

The assignment asks you to upgrade `AIPlayer` using these patterns: a decision tree for card selection, a `Set` for tracking played cards, and goal-aware logic that changes strategy once the AI has made its bid.

Next session: **Session 22 — localStorage: Persisting Data Across Sessions**
