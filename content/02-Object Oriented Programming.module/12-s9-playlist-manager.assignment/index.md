---
allowed_extensions:
- js
assignment_type: online
module: 2
name: 'Session 9: Playlist Manager'
points: 20
position: 12
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 9.3
submission_types:
- online_upload
---

# Session 9: Playlist Manager

Build a two-class system — `Song` and `Playlist` — that stores and manages a music collection.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `09-assignment.js`

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Song Class
```js
// TODO: Create a Song class with:
// - Constructor: title, artist, durationSeconds
// - Private-style properties: _title, _artist, _duration
// - Getters: title, artist, duration
// - Method getLabel(): returns "[artist] — [title] ([m:ss])"
//   Example: "Arctic Sun — Neon Rain (3:42)"
//   Hint: mins = Math.floor(seconds / 60), secs = seconds % 60
//         Pad seconds to 2 digits with a leading zero if needed

// Test:
// const s = new Song("Neon Rain", "Arctic Sun", 222);
// console.log(s.getLabel()); // "Arctic Sun — Neon Rain (3:42)"
// console.log(s.duration);   // 222
```

### Challenge 2: Playlist Constructor and addSong
```js
// TODO: Create a Playlist class with:
// - Constructor: name
// - Private-style properties: _name, _songs (starts as empty array)
// - Getter: name
// - Getter: songCount (returns number of songs in the playlist)
// - Method addSong(song): adds a Song object to _songs array
//   Returns true if added, false if a song with the same title already exists

// Test:
// const pl = new Playlist("Morning Mix");
// pl.addSong(new Song("Neon Rain", "Arctic Sun", 222));
// pl.addSong(new Song("Open Road", "The Drive", 198));
// console.log(pl.songCount); // 2
// pl.addSong(new Song("Neon Rain", "Someone Else", 180)); // duplicate title
// console.log(pl.songCount); // still 2
```

### Challenge 3: removeSong and findByArtist
```js
// TODO: Add to Playlist:
// - Method removeSong(title): removes song with that title
//   Returns true if removed, false if not found
// - Method findByArtist(artistName): returns array of songs by that artist

// Test:
// pl.removeSong("Open Road"); // true
// pl.removeSong("Open Road"); // false (already removed)
// const hits = pl.findByArtist("Arctic Sun");
// console.log(hits.length); // 1
```

### Challenge 4: totalDuration getter
```js
// TODO: Add to Playlist:
// - Getter totalDuration: returns total seconds of all songs combined
//   Use reduce on the _songs array

// Test:
// const pl2 = new Playlist("Evening Chill");
// pl2.addSong(new Song("Track A", "Band X", 180));
// pl2.addSong(new Song("Track B", "Band Y", 240));
// pl2.addSong(new Song("Track C", "Band X", 200));
// console.log(pl2.totalDuration); // 620
```

---

## Level 2 – Stretch (3 points)

### Challenge 5: getLongest
```js
// TODO: Add to Playlist:
// - Method getLongest(): returns the Song object with the highest duration
//   Use reduce. Return null if the playlist is empty.

// Test:
// const longest = pl2.getLongest();
// console.log(longest.title); // "Track B"
```

### Challenge 6: getSummary
```js
// TODO: Add to Playlist:
// - Method getSummary(): returns a string in this format:
//   "[name] — [count] songs, [m:ss] total"
//   Example: "Evening Chill — 3 songs, 10:20 total"
//   Convert totalDuration from seconds to m:ss inside this method

// Test:
// console.log(pl2.getSummary()); // "Evening Chill — 3 songs, 10:20 total"
```

---

## Level 3 – Advanced (2 points)

### Challenge 7: Queue Playlist
```js
// TODO: Create a QueuePlaylist class that extends Playlist with:
// - Property: _currentIndex (starts at 0)
// - Method getCurrentSong(): returns the song at _currentIndex, or null if empty
// - Method advance(): moves to the next song; wraps back to 0 at the end
// - Method reset(): sets _currentIndex back to 0

// Test:
// const q = new QueuePlaylist("Party Queue");
// q.addSong(new Song("Song 1", "Artist A", 180));
// q.addSong(new Song("Song 2", "Artist B", 200));
// q.addSong(new Song("Song 3", "Artist C", 220));
// console.log(q.getCurrentSong().title); // "Song 1"
// q.advance();
// console.log(q.getCurrentSong().title); // "Song 2"
// q.advance();
// q.advance(); // wraps back to 0
// console.log(q.getCurrentSong().title); // "Song 1"
```

---

## Before Submitting

- checklist: Before Submitting
- File named `09-assignment.js`
- `Song` class: `getLabel()` formats correctly with minutes and seconds
- `Playlist` class: `addSong()` rejects duplicates, `removeSong()` and `findByArtist()` work
- `totalDuration` getter returns correct sum
- Code runs without errors
- Attempted Level 2 or 3 if time allowed
