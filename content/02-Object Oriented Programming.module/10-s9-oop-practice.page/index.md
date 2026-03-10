---
module: 2
name: 'Session 9: OOP Practice — Building a Playlist Manager'
position: 10
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 9.1
---

# Session 9: OOP Practice — Building a Playlist Manager

## Learning Outcomes

By the end of this session, you will be able to:
- Design two cooperating classes from scratch.
- Use arrays inside classes to manage collections of objects.
- Apply getters, setters, and validation patterns you learned in Sessions 6–8.
- Explain when to use a method versus a getter.

---

## Introduction (5 minutes)

You have now learned how to write classes, use encapsulation, and build container classes that hold other objects. This session ties all three skills together through a single project: a **Playlist Manager**.

You will build two classes — `Song` and `Playlist` — and make them work together. This is exactly the same pattern you will use later when building a card game, except the objects will be cards and a deck instead of songs and a playlist.

---

## Review: What You Know So Far (10 minutes)

Before diving in, let's recap the big ideas from Sessions 6–8.

**From Session 6 — Classes:**
- A class is a blueprint. Every object created from it gets the same properties and methods.
- The constructor runs once when you write `new ClassName(...)`.

**From Session 7 — Encapsulation:**
- Store data in private-style properties (e.g., `_title`).
- Use getters to read them: `get title() { return this._title; }`
- Use setters to validate before storing.

**From Session 8 — Container pattern:**
- One class owns an array of objects from another class.
- It provides methods to add, remove, search, and summarise its collection.

Today you will combine all three in one project.

---

## Reading: Designing Two Classes That Work Together (30 minutes)

### Step 1 — Design the smaller class first

When two classes work together, always design the simpler one first. The container class needs to know what properties and methods the item class has before you can write the container.

Here is a simple `Track` class that models a music track:

```js
class Track {
  constructor(title, artist, durationSeconds) {
    this._title = title;
    this._artist = artist;
    this._duration = durationSeconds;
  }

  get title()    { return this._title; }
  get artist()   { return this._artist; }
  get duration() { return this._duration; }

  getLabel() {
    const mins = Math.floor(this._duration / 60);
    const secs = this._duration % 60;
    const pad = secs < 10 ? '0' : '';
    return `${this._artist} — ${this._title} (${mins}:${pad}${secs})`;
  }
}

const t = new Track("Waterfall", "The Collective", 213);
console.log(t.getLabel()); // The Collective — Waterfall (3:33)
```

Notice:
- Private-style storage (`_title`, `_artist`, `_duration`)
- Public getters for read access
- A helper method (`getLabel`) that formats output

### Step 2 — Design the container class

The container class holds an array of `Track` objects and gives you useful ways to work with them.

```js
class Album {
  constructor(title, year) {
    this._title = title;
    this._year = year;
    this._tracks = [];
  }

  get title()  { return this._title; }
  get year()   { return this._year; }
  get tracks() { return this._tracks; }

  addTrack(track) {
    this._tracks.push(track);
  }

  get totalDuration() {
    return this._tracks.reduce((sum, t) => sum + t.duration, 0);
  }

  findByArtist(name) {
    return this._tracks.filter(t => t.artist === name);
  }
}
```

Note how `Album` never directly touches `Track`'s private properties. It only calls `t.artist` and `t.duration` through the public getters. This is good encapsulation.

### Step 3 — Connecting the two classes

```js
const album = new Album("Midnight Drive", 2024);

album.addTrack(new Track("Open Road", "The Collective", 195));
album.addTrack(new Track("City Lights", "The Collective", 230));
album.addTrack(new Track("Waterfall", "The Collective", 213));

console.log(album.totalDuration); // 638 seconds
const results = album.findByArtist("The Collective");
console.log(results.length);      // 3
```

---

## Design Pattern: Validation in the Container

Often you want to prevent duplicates or enforce rules at the container level.

```js
addTrack(track) {
  const alreadyExists = this._tracks.some(t => t.title === track.title);
  if (alreadyExists) {
    console.log(`"${track.title}" is already in the album.`);
    return false;
  }
  this._tracks.push(track);
  return true;
}
```

This validation lives in the container (`Album`), not in the item (`Track`), because duplicates only make sense in the context of a collection.

---

## Design Pattern: Computed Getters vs Methods

A good rule of thumb:
- Use a **getter** when the value is derived directly from existing data and has no side effects.
- Use a **method** when you need to pass arguments or the operation has side effects.

```js
// Getter — no arguments, pure calculation
get totalDuration() {
  return this._tracks.reduce((sum, t) => sum + t.duration, 0);
}

// Method — takes an argument
findByArtist(name) {
  return this._tracks.filter(t => t.artist === name);
}
```

---

## Worked Example: Adding a removeTrack Method

```js
removeTrack(title) {
  const index = this._tracks.findIndex(t => t.title === title);
  if (index === -1) return false;
  this._tracks.splice(index, 1);
  return true;
}
```

`findIndex` returns -1 if nothing matches. `splice(index, 1)` removes one item at that position.

---

## Practice Problems (20 minutes)

Try these in your browser console or a `.js` file.

1. Create a `Track` for your favourite song (guess the duration in seconds).
2. Create an `Album` and add three tracks to it.
3. Call `totalDuration` and verify it by adding the seconds manually.
4. Call `findByArtist` and log how many results you get.
5. Call `removeTrack` with a title that doesn't exist and confirm it returns `false`.

---

## Supplemental: More Array Methods for Containers (optional)

These three array methods are especially useful when building container classes:

| Method | What it does | Returns |
|--------|-------------|---------|
| `find(fn)` | First item where `fn` is true | item or `undefined` |
| `some(fn)` | At least one item where `fn` is true | `true` or `false` |
| `every(fn)` | All items where `fn` is true | `true` or `false` |

```js
// Find the longest track
const longest = this._tracks.reduce((a, b) => a.duration > b.duration ? a : b);

// Does the album have any tracks over 5 minutes?
const hasLong = this._tracks.some(t => t.duration > 300);

// Are all tracks under 10 minutes?
const allShort = this._tracks.every(t => t.duration < 600);
```

### Supplemental Exercise 1

Add a `getLongest()` method to `Album` that returns the `Track` with the highest `duration`. Use `reduce`.

### Supplemental Exercise 2

Add a `getSummary()` method that returns a string like:
`"Midnight Drive (2024) — 3 tracks, 10:38 total"`

Convert `totalDuration` from seconds to `mm:ss` format inside this method.
