---
allowed_attempts: 3
indent: 1
module: 5
name: Session 22 Quiz – localStorage and Persistence
position: 5
published: false
question_groups:
- bank: s22-localstorage.bank
  pick: 12
  points_per_question: 1
quiz_type: practice_quiz
session: 22.2
show_correct_answers: true
shuffle_answers: true
time_limit: 15
---

# Session 22 Quiz – localStorage and Persistence

Test your understanding of localStorage, JSON serialization, defensive loading, and stats tracking.

12 questions · 15 minutes · 3 attempts · 12 points

---

:::bank s22-localstorage.bank

## Q1

What does `localStorage.getItem('missing_key')` return when the key doesn't exist?

- [ ] `undefined`
- [ ] `0`
- [x] `null`
- [ ] An empty string `""`

> **Correct.** `getItem` returns `null` for keys that don't exist, not `undefined`.

---

## Q2

Why must objects be converted with `JSON.stringify()` before storing in localStorage?

- [ ] Because localStorage is asynchronous
- [x] Because localStorage only stores strings — objects are stored as `[object Object]` without stringify
- [ ] Because `setItem` only accepts numbers and strings, not booleans
- [ ] It is optional — localStorage stores objects natively

> **Correct.** Without `JSON.stringify`, `localStorage.setItem('key', {a:1})` stores the string `"[object Object]"`, not the actual data.

---

## Q3

```js
const raw  = localStorage.getItem('gameData');
const data = JSON.parse(raw);
```

What happens if `raw` is `null`?

- [ ] `JSON.parse(null)` returns `null` — safe to continue
- [ ] It stores a default object automatically
- [x] `JSON.parse(null)` returns `null`, which is safe — but you should still check before accessing properties
- [ ] It throws a SyntaxError

> **Correct.** `JSON.parse(null)` returns `null` without throwing. However, if you then do `data.chips`, you'll get a TypeError since `null` has no properties. Always check before accessing.

---

## Q4

Why wrap `JSON.parse()` in a `try/catch`?

- [ ] `JSON.parse` is asynchronous and needs error handling
- [x] If the stored string is corrupted (e.g., from an old bug), `JSON.parse` throws a SyntaxError
- [ ] `try/catch` is required around all localStorage operations
- [ ] It prevents the browser from saving malformed data

> **Correct.** Corrupted localStorage data causes `JSON.parse` to throw. A `try/catch` lets you fall back to defaults instead of crashing.

---

## Q5

```js
_save() {
  localStorage.setItem('bjStats', JSON.stringify(this.data));
}
```

When should `_save()` be called?

- [ ] Only when the user clicks a Save button
- [ ] Once, when the page unloads
- [x] At the end of every method that modifies `this.data`
- [ ] Every 10 seconds using `setInterval`

> **Correct.** Calling `_save()` after every modification ensures data is always up to date in localStorage. If you wait until page unload, data may be lost if the tab crashes.

---

## Q6

A stats class saves under the key `'bjStats'`. A classmate's app on the same localhost also uses `'bjStats'`. What happens?

- [ ] Both apps share the data safely — localStorage handles namespacing
- [x] They overwrite each other's data — keys should be prefixed to avoid collision
- [ ] The browser prevents two apps from using the same key
- [ ] Only the first app to save wins; the second gets a quota error

> **Correct.** All pages on the same origin (e.g., `localhost`) share the same localStorage. Use prefixes like `'bj_stats'` and `'quiz_stats'` to avoid overwriting.

---

## Q7

```js
const CURRENT_VERSION = 2;
const data = JSON.parse(localStorage.getItem('appData'));
if (data.version !== CURRENT_VERSION) {
  localStorage.removeItem('appData');
  return null;
}
```

What does this code do when loading data saved by an older version of the app?

- [ ] Upgrades the old data to the new format
- [x] Discards the old data and returns null so the app starts fresh
- [ ] Merges the old and new data formats
- [ ] Throws a VersionError

> **Correct.** Discarding old-format data and returning null is a simple, safe migration strategy. The app then re-creates default data.

---

## Q8

After calling `reset()` on a stats object:

```js
reset() {
  this.data = this._defaults();
  this._save();
}
```

What is stored in localStorage?

- [ ] Nothing — `reset()` deletes the key
- [x] The default values, serialized as JSON
- [ ] The previous data — `_save()` is not called
- [ ] `null`

> **Correct.** `reset()` overwrites `this.data` with defaults and then saves them. The key still exists but contains fresh defaults.

---

## Q9

`getWinRate()` should return `"N/A"` when no games have been played. Why?

- [ ] Division is not allowed in JavaScript when the divisor might be zero
- [ ] `gamesWon / 0` returns `Infinity`, not `NaN`
- [x] Dividing by zero returns `NaN`, which would display as "NaN%" — not useful to the user
- [ ] It is a requirement of the Canvas grading system

> **Correct.** Guard against zero: `if (gamesPlayed === 0) return 'N/A';` prevents a confusing NaN display.

---

## Q10

```js
this.data.highScore = Math.max(this.data.highScore, newScore);
```

What does this line do?

- [ ] Sets `highScore` to `newScore` always
- [ ] Returns the higher of the two values without storing it
- [x] Updates `highScore` only if `newScore` is higher than the current value
- [ ] Throws an error if `highScore` is undefined

> **Correct.** `Math.max(a, b)` returns the larger value. Assigning the result back to `highScore` updates it only if `newScore` is higher.

---

## Q11

Where in the browser can you view, edit, and delete localStorage keys for debugging?

- [x] DevTools → Application tab → Local Storage
- [ ] DevTools → Network tab
- [ ] DevTools → Sources tab → localStorage folder
- [ ] DevTools → Console → Storage panel

> **Correct.** The Application tab in Chrome/Firefox DevTools shows all localStorage keys and values for your domain.

---

## Q12

A constructor calls `this.data = this._load()`. When is this data available?

- [ ] After the first call to `_save()`
- [ ] On the next page load
- [x] Immediately, as soon as the object is created with `new`
- [ ] Only after calling a separate `init()` method

> **Correct.** `_load()` is called synchronously in the constructor. By the time `new MyStats()` returns, `this.data` is already populated from localStorage (or defaults).

---

:::end
