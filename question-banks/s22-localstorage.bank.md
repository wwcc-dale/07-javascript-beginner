---
bank_name: "Session 22: localStorage and Persistence"
---

1. What does `localStorage.getItem('missing_key')` return when the key doesn't exist?
a) `undefined`
b) `0`
*c) `null`
d) An empty string `""`

1. Why must objects be converted with `JSON.stringify()` before storing in localStorage?
a) Because localStorage is asynchronous
*b) Because localStorage only stores strings — objects are stored as `[object Object]` without stringify
c) Because `setItem` only accepts numbers and strings, not booleans
d) It is optional — localStorage stores objects natively

1. What happens if `raw` is `null`?
```js
const raw  = localStorage.getItem('gameData');
const data = JSON.parse(raw);
```
a) `JSON.parse(null)` returns `null` — safe to continue without checking
b) It stores a default object automatically
*c) `JSON.parse(null)` returns `null`, which is safe — but you should still check before accessing properties
d) It throws a SyntaxError

1. Why wrap `JSON.parse()` in a `try/catch`?
a) `JSON.parse` is asynchronous and needs error handling
*b) If the stored string is corrupted (e.g., from an old bug), `JSON.parse` throws a SyntaxError
c) `try/catch` is required around all localStorage operations
d) It prevents the browser from saving malformed data

1. When should `_save()` be called?
```js
_save() {
  localStorage.setItem('bjStats', JSON.stringify(this.data));
}
```
a) Only when the user clicks a Save button
b) Once, when the page unloads
*c) At the end of every method that modifies `this.data`
d) Every 10 seconds using `setInterval`

1. A stats class saves under the key `'bjStats'`. A classmate's app on the same localhost also uses `'bjStats'`. What happens?
a) Both apps share the data safely — localStorage handles namespacing
*b) They overwrite each other's data — keys should be prefixed to avoid collision
c) The browser prevents two apps from using the same key
d) Only the first app to save wins; the second gets a quota error

1. What does this code do when loading data saved by an older version of the app?
```js
const CURRENT_VERSION = 2;
const data = JSON.parse(localStorage.getItem('appData'));
if (data.version !== CURRENT_VERSION) {
  localStorage.removeItem('appData');
  return null;
}
```
a) Upgrades the old data to the new format
*b) Discards the old data and returns null so the app starts fresh
c) Merges the old and new data formats
d) Throws a VersionError

1. What is stored in localStorage after calling `reset()`?
```js
reset() {
  this.data = this._defaults();
  this._save();
}
```
a) Nothing — `reset()` deletes the key
*b) The default values, serialized as JSON
c) The previous data — `_save()` is not called
d) `null`

1. `getWinRate()` should return `'N/A'` when no games have been played. Why?
a) Division is not allowed in JavaScript when the divisor might be zero
b) `gamesWon / 0` returns `Infinity`, not `NaN`
*c) Dividing by zero returns `NaN`, which would display as "NaN%" — not useful to the user
d) It is a requirement of the Canvas grading system

1. What does this line do?
```js
this.data.highScore = Math.max(this.data.highScore, newScore);
```
a) Sets `highScore` to `newScore` always
b) Returns the higher of the two values without storing it
*c) Updates `highScore` only if `newScore` is higher than the current value
d) Throws an error if `highScore` is undefined

1. Where in the browser can you view, edit, and delete localStorage keys for debugging?
*a) DevTools → Application tab → Local Storage
b) DevTools → Network tab
c) DevTools → Sources tab → localStorage folder
d) DevTools → Console → Storage panel

1. A constructor calls `this.data = this._load()`. When is this data available?
a) After the first call to `_save()`
b) On the next page load
*c) Immediately, as soon as the object is created with `new`
d) Only after calling a separate `init()` method
