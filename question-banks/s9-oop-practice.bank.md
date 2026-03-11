---
bank_name: "Session 9: OOP Practice and Container Patterns"
---

1. When two classes are designed to work together, which class should you design first?
*a) The simpler "item" class (e.g., Song, Book, Card)
b) The container class (e.g., Playlist, Library, Deck)
c) It doesn't matter — design them at the same time
d) Whichever one is mentioned first in the requirements

1. Which method removes one element from an array at a specific position?
a) `arr.remove(index)`
*b) `arr.splice(index, 1)`
c) `arr.delete(index)`
d) `arr.pop(index)`

1. Why is `songCount` defined as a getter rather than a regular method?
```js
class Playlist {
  constructor(name) {
    this._name = name;
    this._songs = [];
  }
  get songCount() {
    return this._songs.length;
  }
}
```
a) Because getters run faster than methods
*b) Because it returns a derived value with no arguments and no side effects
c) Because arrays require getters to return their length
d) No reason — it could just as easily be `getSongCount()`

1. What is the value of `total`?
```js
const songs = [
  { title: "A", duration: 180 },
  { title: "B", duration: 240 },
  { title: "C", duration: 200 }
];
const total = songs.reduce((sum, s) => sum + s.duration, 0);
```
a) 180
b) 240
*c) 620
d) 3

1. A `Playlist` class has an `addSong(song)` method. Where should duplicate-prevention logic go?
a) Inside the `Song` constructor
*b) Inside `Playlist.addSong()` — the container enforces collection rules
c) In a separate utility function outside both classes
d) Duplicates should never be prevented

1. If no songs match, what does this method return?
```js
findByArtist(name) {
  return this._songs.filter(s => s.artist === name);
}
```
a) `null`
b) `undefined`
*c) An empty array `[]`
d) `false`

1. Which array method returns `true` if at least one element satisfies the condition?
a) `every()`
b) `find()`
*c) `some()`
d) `includes()`

1. A `Song` class stores its title as `this._title` and provides `get title()`. Another class reads the title using `song.title`. Is this good or bad design?
*a) Good — the container uses the public getter, respecting encapsulation
b) Bad — the container should read `song._title` directly for efficiency
c) Bad — getters should only be used inside the same class
d) It depends on whether the class is large or small

1. What does `findIndex` return when no element matches the condition?
```js
removeTrack(title) {
  const index = this._tracks.findIndex(t => t.title === title);
  if (index === -1) return false;
  this._tracks.splice(index, 1);
  return true;
}
```
a) `0`
b) `null`
*c) `-1`
d) `undefined`

1. You want the shortest song in a playlist. Which approach is best?
a) Loop with `for` and manually track the minimum
*b) Use `reduce((min, s) => s.duration < min.duration ? s : min)`
c) Use `filter` and check lengths
d) Use `sort` and take the first element

1. A `Song` object is created with `new Song("Rain", "Blue Band", 195)`. The `Song` class has no setter for `title`. Can you change the title later?
a) Yes — you can always assign to any property of any object
b) Yes — but only if you call `song.title = "..."` through the getter
*c) Not through the class's public interface — there is no setter, so `song.title = "..."` silently fails or throws in strict mode
d) No — all class properties are automatically locked

1. Which statement about the container pattern is correct?
a) The container class must extend the item class
b) The item class must know about the container class
*c) The container class holds an array of item objects and provides methods to manage them
d) You can only have one container per item class
