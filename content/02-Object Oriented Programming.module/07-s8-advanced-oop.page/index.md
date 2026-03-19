---
module: 2
name: 'Session 8: Working with Multiple Objects'
position: 7
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 8.1
---

# Session 8: Working with Multiple Objects

## Learning Outcomes

- Manage arrays of object instances
- Iterate through collections of objects
- Use class methods to work with multiple related objects
- Build systems that coordinate multiple objects

---

## Introduction (5 minutes)

Real programs rarely work with just one object. You'll have arrays of tasks, events, or contacts. Today you'll learn to manage collections of objects and build systems where objects work together.

---

## Reading: Managing Object Collections (35 minutes)

### Arrays of Objects

```js
class Task {
  constructor(description, priority, done) {
    this.description = description;
    this.priority = priority;
    this.done = done;
  }

  isUrgent() {
    return this.priority === "high" && !this.done;
  }
}

const tasks = [
  new Task("Fix login bug", "high", false),
  new Task("Update readme", "low", true),
  new Task("Deploy to prod", "high", false)
];

// Loop through all tasks
for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].description, tasks[i].isUrgent());
}
```

### Container Classes

A container class manages a collection of other objects.

```js
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getOpenCount() {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (!this.tasks[i].done) {
        count++;
      }
    }
    return count;
  }

  getUrgentCount() {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isUrgent()) {
        count++;
      }
    }
    return count;
  }
}

const project = new Project("Website Relaunch");
project.addTask(new Task("Fix login bug", "high", false));
project.addTask(new Task("Update readme", "low", false));
project.addTask(new Task("Write tests", "high", true));
console.log(project.getOpenCount());  // 2
console.log(project.getUrgentCount()); // 1
```

### Objects Working Together

```js
class Song {
  constructor(title, durationSeconds) {
    this.title = title;
    this.durationSeconds = durationSeconds;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  getTotalDuration() {
    let total = 0;
    for (let i = 0; i < this.songs.length; i++) {
      total += this.songs[i].durationSeconds;
    }
    return total;
  }
}

const playlist = new Playlist("Morning Mix");
playlist.addSong(new Song("Rise Up", 210));
playlist.addSong(new Song("Good Day", 185));
console.log(playlist.getTotalDuration()); // 395
```

---

## Assignment (60–90 minutes)

Build a Library system with Book and Library classes that manage multiple books.

---

- accordion: Helpful Resources
- [Array.prototype.push() — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  - Add objects to a collection array inside a container class
- [for...of — MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  - Clean syntax for iterating over an array of objects
- [Classes — MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
  - Review class syntax and how to design coordinating classes
- [Object-oriented programming — MDN Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
  - Overview of OOP concepts including encapsulation and composition