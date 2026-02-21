---
name: "Session 22: localStorage — Persisting Data Across Sessions"
published: true
related_outcomes:
  - "CLO-1"
  - "CLO-5"
---

# Session 22: localStorage — Persisting Data Across Sessions

## Learning Outcomes

By the end of this session, you will be able to:
- Store and retrieve strings from `localStorage` using `setItem` and `getItem`
- Serialize JavaScript objects to JSON strings and deserialize them back
- Handle the case where saved data doesn't exist or is malformed
- Design a simple stats-tracking object that persists across page loads
- Apply versioning to avoid errors when your data format changes

---

## Introduction (5 minutes)

Every time a user reloads your Spades game, all progress is lost — scores, round history, player preferences. The browser provides a built-in solution: **localStorage**, a simple key-value store that survives page refreshes and browser closes.

Today you learn how to use localStorage to save and restore complex JavaScript objects.

---

## Reading: localStorage (35 minutes)

### localStorage Basics

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

### Storing Objects with JSON

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
const raw     = localStorage.getItem('appSettings');
const loaded  = JSON.parse(raw);

console.log(loaded.theme);  // 'dark'
console.log(loaded.fontSize);  // 16
```

**JSON limitations:** Functions, `undefined`, and circular references cannot be serialized. Date objects serialize as strings and must be reconstructed with `new Date(loaded.date)`.

---

### Defensive Loading

`localStorage.getItem()` returns `null` if the key doesn't exist. Always handle this:

```js
function loadSettings() {
  const raw = localStorage.getItem('appSettings');

  if (!raw) {
    // Key doesn't exist — return defaults
    return { theme: 'light', language: 'en', notifications: true, fontSize: 14 };
  }

  try {
    return JSON.parse(raw);
  } catch (e) {
    // Data is corrupted (e.g., from a bug in a previous version)
    console.warn('Saved settings corrupted, using defaults');
    localStorage.removeItem('appSettings');
    return { theme: 'light', language: 'en', notifications: true, fontSize: 14 };
  }
}
```

Wrapping `JSON.parse()` in `try/catch` prevents a corrupt save from crashing the app.

---

### A Stats Tracker with localStorage

Here is a complete pattern for persisting statistics:

```js
class WorkoutStats {
  constructor() {
    this.data = this.load();
  }

  load() {
    const raw = localStorage.getItem('workoutStats');
    if (!raw) return this.defaults();
    try {
      return JSON.parse(raw);
    } catch {
      return this.defaults();
    }
  }

  defaults() {
    return {
      totalSessions:   0,
      totalMinutes:    0,
      longestStreak:   0,
      currentStreak:   0,
      lastSessionDate: null
    };
  }

  save() {
    localStorage.setItem('workoutStats', JSON.stringify(this.data));
  }

  recordSession(durationMinutes) {
    this.data.totalSessions++;
    this.data.totalMinutes += durationMinutes;

    const today = new Date().toDateString();
    const last  = this.data.lastSessionDate;

    if (last) {
      const daysSince = (new Date(today) - new Date(last)) / 86400000;
      if (daysSince <= 1) {
        this.data.currentStreak++;
      } else {
        this.data.currentStreak = 1;  // Streak broken
      }
    } else {
      this.data.currentStreak = 1;  // First session
    }

    this.data.longestStreak = Math.max(
      this.data.longestStreak,
      this.data.currentStreak
    );
    this.data.lastSessionDate = today;

    this.save();  // Always save after modifying
  }

  getWinRate() {
    // Example: returns ratio of sessions over 30 min
    return this.data.totalSessions > 0
      ? (this.data.totalMinutes / this.data.totalSessions).toFixed(1)
      : 0;
  }
}

const stats = new WorkoutStats();
stats.recordSession(45);
console.log(stats.data.totalSessions);  // 1
// Reload the page — stats persist!
```

---

### Data Versioning

When you change the format of your saved data, old saves can cause errors. A version field lets you detect and handle this:

```js
const CURRENT_VERSION = 2;

function loadData() {
  const raw = localStorage.getItem('myAppData');
  if (!raw) return null;

  const data = JSON.parse(raw);

  if (data.version !== CURRENT_VERSION) {
    console.log(`Old data format (v${data.version}), clearing...`);
    localStorage.removeItem('myAppData');
    return null;
  }

  return data;
}

function saveData(payload) {
  localStorage.setItem('myAppData', JSON.stringify({
    version: CURRENT_VERSION,
    ...payload
  }));
}
```

Increment `CURRENT_VERSION` whenever you change the saved data structure. Old saves will be discarded rather than causing `TypeError: Cannot read property 'x' of undefined`.

---

### Inspecting localStorage in the Browser

In Chrome/Firefox DevTools → **Application** tab → **Local Storage** → your domain. You can view, edit, and delete keys directly. This is invaluable for debugging.

You can also inspect from the console:

```js
// View all keys
Object.keys(localStorage).forEach(key => {
  console.log(key, ':', localStorage.getItem(key));
});

// Clear everything (useful when testing)
localStorage.clear();
```

---

### Namespacing Keys

If multiple apps or features use localStorage on the same domain, prefix your keys to avoid collisions:

```js
// Bad: generic key
localStorage.setItem('settings', data);

// Good: namespaced key
localStorage.setItem('spadesGame_settings', data);
localStorage.setItem('spadesGame_stats', data);
localStorage.setItem('spadesGame_playerName', data);
```

---

## Video Tutorial: localStorage (20 minutes)

Watch: `assets/videos/22-localstorage.mp4`

Covers:
- `setItem`/`getItem`/`removeItem` in the console
- JSON serialization and the DevTools Application tab
- The defensive loading pattern with `try/catch`
- A complete stats-tracker class walkthrough

---

## Supplemental Practice (25 minutes)

### Exercise 1: Round-Trip Test

Open your browser console. Create an object `{ name: 'Test', values: [1, 2, 3], active: true }`. Store it in localStorage, reload the page, retrieve it, and verify all properties are present.

### Exercise 2: Save and Load

Build a `NotepadStorage` class with:
- `save(title, content)` — stores a note under `notepad_[title]`
- `load(title)` — returns the note or `null`
- `listAll()` — returns an array of all saved note titles (filter localStorage keys by your prefix)
- `delete(title)` — removes a note

### Exercise 3: Versioned Data

Write `saveProfile(profile)` and `loadProfile()` functions. Include `version: 1` in the saved data. Then change the format (add a new required field) and update to `version: 2`. Verify that loading a v1 save returns `null` and saves a fresh v2 default.

### Exercise 4: Stats with Persistence

Build a `QuizStats` class that persists across reloads:
- `recordAnswer(correct)` — increments total and (if correct) correct count
- `getAccuracy()` — returns correct/total as a percentage string
- `reset()` — clears the stats and removes from localStorage

Verify that calling `recordAnswer()` 5 times, reloading, and calling `recordAnswer()` 2 more times shows 7 total.

---

## Knowledge Check Quiz (15 minutes)

Take the **Session 22 Practice Quiz** in Canvas.

Focus on:
- Why `JSON.stringify()` is required when saving objects
- What `getItem()` returns when the key does not exist
- Why `try/catch` is necessary around `JSON.parse()`
- How versioning prevents crashes when the data format changes

---

## Hands-On Assignment (60–90 minutes)

Open **"Session 22: Persistence and Stats"**.

You will apply localStorage patterns to add session-to-session statistics to your Spades game.

---

## Wrap-Up (10 minutes)

### Key Takeaways

- **`localStorage`** stores only strings — serialize objects with `JSON.stringify()`, deserialize with `JSON.parse()`
- **Defensive loading** handles missing keys (`null`) and corrupted data (`try/catch`)
- **Version fields** prevent old saves from crashing newer code
- **Prefix keys** to avoid collisions with other apps on the same domain
- **Always call `save()`** after modifying the data — localStorage doesn't auto-sync

### How This Connects to the Assignment

The assignment asks you to add a stats-tracking class to the Spades game that persists wins, losses, and scores across page reloads, using all the patterns from this reading.

Next session: **Session 23 — CSS Themes, Variables, and Visual Polish**
