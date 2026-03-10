---
allowed_attempts: 3
indent: 1
module: 2
name: Session 9 Quiz – OOP Practice and Container Patterns
position: 11
published: false
question_groups:
- bank: s9-oop-practice.bank
  pick: 12
  points_per_question: 1
quiz_type: practice_quiz
session: 9.2
show_correct_answers: true
shuffle_answers: true
time_limit: 15
---

# Session 9 Quiz – OOP Practice and Container Patterns

This quiz checks your understanding of how two classes work together.

---

:::bank s9-oop-practice.bank

## Q1

When two classes are designed to work together, which class should you design first?

- [x] The simpler "item" class (e.g., Song, Book, Card)
- [ ] The container class (e.g., Playlist, Library, Deck)
- [ ] It doesn't matter — design them at the same time
- [ ] Whichever one is mentioned first in the requirements

> **Correct.** Design the item class first because the container depends on knowing what properties and methods the item exposes.

---

## Q2

Which method removes one element from an array at a specific position?

- [ ] `arr.remove(index)`
- [x] `arr.splice(index, 1)`
- [ ] `arr.delete(index)`
- [ ] `arr.pop(index)`

> **Correct.** `splice(index, 1)` removes one element at `index`. `pop()` removes the last element only.

---

## Q3

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

Why is `songCount` defined as a getter rather than a regular method?

- [ ] Because getters run faster than methods
- [x] Because it returns a derived value with no arguments and no side effects
- [ ] Because arrays require getters to return their length
- [ ] No reason — it could just as easily be `getSongCount()`

> **Correct.** The rule of thumb: use a getter for argument-free, side-effect-free calculations on existing data.

---

## Q4

```js
const songs = [
  { title: "A", duration: 180 },
  { title: "B", duration: 240 },
  { title: "C", duration: 200 }
];
const total = songs.reduce((sum, s) => sum + s.duration, 0);
```

What is the value of `total`?

- [ ] 180
- [ ] 240
- [x] 620
- [ ] 3

> **Correct.** `180 + 240 + 200 = 620`.

---

## Q5

A `Playlist` class has an `addSong(song)` method. Where should duplicate-prevention logic go?

- [ ] Inside the `Song` constructor
- [x] Inside `Playlist.addSong()` — the container enforces collection rules
- [ ] In a separate utility function outside both classes
- [ ] Duplicates should never be prevented

> **Correct.** Whether something is a duplicate only makes sense in the context of the collection, so the container is the right place for that logic.

---

## Q6

```js
findByArtist(name) {
  return this._songs.filter(s => s.artist === name);
}
```

If no songs match, what does this method return?

- [ ] `null`
- [ ] `undefined`
- [x] An empty array `[]`
- [ ] `false`

> **Correct.** `filter` always returns an array. When nothing matches, it returns an empty array.

---

## Q7

Which array method returns `true` if **at least one** element satisfies the condition?

- [ ] `every()`
- [ ] `find()`
- [x] `some()`
- [ ] `includes()`

> **Correct.** `some()` returns `true` as soon as one element matches. `every()` requires all elements to match.

---

## Q8

A `Song` class stores its title as `this._title` and provides `get title()`. Another class reads the title using `song.title`. Is this good or bad design?

- [x] Good — the container uses the public getter, respecting encapsulation
- [ ] Bad — the container should read `song._title` directly for efficiency
- [ ] Bad — getters should only be used inside the same class
- [ ] It depends on whether the class is large or small

> **Correct.** Using the public getter (`song.title`) is correct. Reading `song._title` directly from outside the class breaks encapsulation.

---

## Q9

```js
removeTrack(title) {
  const index = this._tracks.findIndex(t => t.title === title);
  if (index === -1) return false;
  this._tracks.splice(index, 1);
  return true;
}
```

What does `findIndex` return when no element matches the condition?

- [ ] `0`
- [ ] `null`
- [x] `-1`
- [ ] `undefined`

> **Correct.** `findIndex` returns `-1` when no element satisfies the callback. This is why the code checks `if (index === -1)`.

---

## Q10

You want the shortest song in a playlist. Which approach is best?

- [ ] Loop with `for` and manually track the minimum
- [x] Use `reduce((min, s) => s.duration < min.duration ? s : min)`
- [ ] Use `filter` and check lengths
- [ ] Use `sort` and take the first element

> **Correct.** `reduce` is the idiomatic way to find a minimum or maximum in an array without sorting the whole thing.

---

## Q11

A `Song` object is created with `new Song("Rain", "Blue Band", 195)`. The `Song` class has no setter for `title`. Can you change the title later?

- [ ] Yes — you can always assign to any property of any object
- [ ] Yes — but only if you call `song.title = "..."` through the getter
- [x] Not through the class's public interface — there is no setter, so `song.title = "..."` silently fails or throws in strict mode
- [ ] No — all class properties are automatically locked

> **Correct.** Without a setter, assigning to the getter-only property is a no-op in normal mode and throws a TypeError in strict mode. The class intentionally provides no way to change the title.

---

## Q12

Which statement about the container pattern is correct?

- [ ] The container class must extend the item class
- [ ] The item class must know about the container class
- [x] The container class holds an array of item objects and provides methods to manage them
- [ ] You can only have one container per item class

> **Correct.** The container pattern is one-directional: the container knows about items, but items don't need to know about the container.

---

:::end
