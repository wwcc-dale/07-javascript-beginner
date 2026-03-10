# Session 22: localStorage — Persisting Data Across Sessions

## Learning Outcomes

By the end of this session, you will be able to:
- Store and retrieve strings from `localStorage` using `setItem` and `getItem`.
- Serialize JavaScript objects to JSON strings and deserialize them back.
- Handle the case where saved data doesn't exist or is malformed.
- Design a stats-tracking class that persists across page loads.
- Apply versioning to avoid errors when your data format changes.

---

## Introduction (5 minutes)

Every time a user reloads your Blackjack game, all progress is lost — chip balance, win rate, game history. The browser provides a built-in solution: **localStorage**, a simple key-value store that survives page refreshes and browser closes.

Today you learn how to use localStorage to save and restore complex JavaScript objects.

---

## Reading: localStorage Basics (15 minutes)

`localStorage` stores **strings** only. It provides four operations:

```js
// Save
localStorage.setItem('username', 'alice');

// Retrieve (returns null if the key doesn't exist)
const name = localStorage.getItem('username');
console.log(name);  // 'alice'

// Delete one key
localStorage.removeItem('username');

// Delete everything
localStorage.clear();
```

Data persists until you explicitly remove it or the user clears their browser data. There is no automatic expiration.

---

## Reading: Storing Objects with JSON (10 minutes)

Since localStorage only stores strings, objects must be serialized with `JSON.stringify()` and deserialized with `JSON.parse()`:

```js
const settings = {
  theme: 'dark',
  language: 'en',
  notifications: true,
  fontSize: 16
};

// Save: object → string
localStorage.setItem('appSettings', JSON.stringify(settings));

// Load: string → object
const raw    = localStorage.getItem('appSettings');
const loaded = JSON.parse(raw);

console.log(loaded.theme);    // 'dark'
console.log(loaded.fontSize); // 16
```

**JSON limitations:** Functions and `undefined` cannot be serialized. Date objects serialize as strings.

---

## Reading: Defensive Loading (10 minutes)

`localStorage.getItem()` returns `null` if the key doesn't exist. Always handle this:

```js
function loadSettings() {
  const raw = localStorage.getItem('appSettings');

  if (!raw) {
    return { theme: 'light', language: 'en', notifications: true, fontSize: 14 };
  }

  try {
    return JSON.parse(raw);
  } catch (e) {
    // Data is corrupted — fall back to defaults
    localStorage.removeItem('appSettings');
    return { theme: 'light', language: 'en', notifications: true, fontSize: 14 };
  }
}
```

Wrapping `JSON.parse()` in `try/catch` prevents a corrupt save from crashing the app.

---

## Reading: A Stats Tracker with localStorage (20 minutes)

Here is a complete pattern for persisting statistics across page loads. Note: this example tracks reading habits — the names and keys are intentionally different from the Blackjack assignment.

```js
class ReadingLog {
  constructor() {
    this.data = this._load();
  }

  _load() {
    const raw = localStorage.getItem('readingLog');
    if (!raw) return this._defaults();
    try {
      return JSON.parse(raw);
    } catch {
      return this._defaults();
    }
  }

  _defaults() {
    return {
      booksRead:     0,
      pagesRead:     0,
      longestStreak: 0
    };
  }

  _save() {
    localStorage.setItem('readingLog', JSON.stringify(this.data));
  }

  logBook(pageCount) {
    this.data.booksRead++;
    this.data.pagesRead += pageCount;
    this._save();  // Always save after modifying
  }

  getAvgPages() {
    return this.data.booksRead > 0
      ? (this.data.pagesRead / this.data.booksRead).toFixed(0)
      : 0;
  }

  reset() {
    this.data = this._defaults();
    this._save();
  }
}

const log = new ReadingLog();
log.logBook(312);
console.log(log.data.booksRead);  // 1
// Reload the page — log persists!
```

Key patterns to notice:
- `_load()` is called in the constructor so data is immediately available.
- `_save()` is called at the end of every method that modifies data.
- `reset()` replaces data with defaults and saves.

---

## Reading: Data Versioning (5 minutes)

When you change your saved data format, old saves can cause errors. A version field detects this:

```js
const CURRENT_VERSION = 2;

function loadData() {
  const raw = localStorage.getItem('myAppData');
  if (!raw) return null;

  const data = JSON.parse(raw);

  if (data.version !== CURRENT_VERSION) {
    localStorage.removeItem('myAppData');
    return null;
  }

  return data;
}
```

Increment `CURRENT_VERSION` whenever you change the saved data structure.

---

## Reading: Inspecting localStorage in DevTools (5 minutes)

In Chrome/Firefox: **DevTools** → **Application** tab → **Local Storage** → your domain. You can view, edit, and delete keys directly.

Console shortcut:
```js
// View all keys and values
Object.keys(localStorage).forEach(key => {
  console.log(key, ':', localStorage.getItem(key));
});
```

---

## Supplemental Practice (25 minutes)

### Exercise 1: Round-Trip Test

Open your browser console. Create an object `{ name: 'Test', values: [1, 2, 3], active: true }`. Store it in localStorage, reload the page, retrieve it, and verify all properties are present.

### Exercise 2: Save and Load

Build a `NotepadStorage` class with:
- `save(title, content)` — stores a note under `notepad_[title]`
- `load(title)` — returns the note or `null`
- `listAll()` — returns an array of all saved note titles (filter by your prefix)
- `delete(title)` — removes a note

### Exercise 3: Versioned Data

Write `saveProfile(profile)` and `loadProfile()` functions. Include `version: 1` in saved data. Then change the format (add a new required field) and update to `version: 2`. Verify that loading a v1 save returns `null` and uses a fresh v2 default instead.

### Exercise 4: Quiz Stats

Build a `QuizStats` class that persists across reloads:
- `recordAnswer(correct)` — increments total and (if correct) correct count
- `getAccuracy()` — returns correct/total as a percentage string
- `reset()` — clears the stats

Verify: call `recordAnswer()` 5 times, reload, call it 2 more times — the total should show 7.
