---
allowed_extensions:
- js
assignment_type: online
module: 2
name: 'Session 10: Inheritance and Class Hierarchies'
points: 20
position: 15
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 10.3
submission_types:
- online_upload
---

# Session 10: Inheritance and Class Hierarchies

Practice using `extends`, `super()`, and method overriding to build class hierarchies.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `10-assignment.js`

---

## Level 1 – Core Tasks (15 points)

### Challenge 1: Basic Inheritance
```js
// TODO: Create an Appliance class with:
// - Constructor: brand, powerWatts
// - Method describe(): returns "[brand] appliance, [powerWatts]W"

// TODO: Create a Refrigerator class that extends Appliance with:
// - Constructor: brand, powerWatts, liters
//   (call super() with brand and powerWatts)
// - Method cool(): returns "[brand] is cooling [liters]L"

// Test:
// const fridge = new Refrigerator("Samsung", 150, 400);
// console.log(fridge.describe()); // "Samsung appliance, 150W"  ← inherited
// console.log(fridge.cool());     // "Samsung is cooling 400L"
// console.log(fridge instanceof Appliance); // true
```

### Challenge 2: Method Overriding
```js
// TODO: Create a Washer class that extends Appliance with:
// - Constructor: brand, powerWatts, loadKg
// - Override describe(): returns "[brand] washer — [loadKg] kg load"

// TODO: Create a SmartWasher class that extends Washer with:
// - Constructor: brand, powerWatts, loadKg, appName
// - Override describe(): calls super.describe() and appends ", app: [appName]"

// Test:
// const sw = new SmartWasher("Bosch", 500, 9, "HomeConnect");
// console.log(sw.describe()); // "Bosch washer — 9 kg load, app: HomeConnect"
// console.log(sw instanceof Washer);    // true
// console.log(sw instanceof Appliance); // true
```

### Challenge 3: Shape Hierarchy
```js
// TODO: Create a Shape class with:
// - Constructor: color
// - Method describe(): returns "A [color] shape"
// - Method getArea(): returns 0 (default)

// TODO: Create a Circle class that extends Shape with:
// - Constructor: color, radius
// - Override getArea(): returns Math.PI * radius * radius (rounded to 2 decimal places)
// - Override describe(): returns "A [color] circle with radius [radius]"

// TODO: Create a Rectangle class that extends Shape with:
// - Constructor: color, width, height
// - Override getArea(): returns width * height
// - Override describe(): returns "A [color] rectangle ([width]×[height])"

// Test:
// const c = new Circle("red", 5);
// console.log(c.describe()); // "A red circle with radius 5"
// console.log(c.getArea());  // 78.54

// const r = new Rectangle("blue", 4, 6);
// console.log(r.describe()); // "A blue rectangle (4×6)"
// console.log(r.getArea());  // 24
```

### Challenge 4: Animal Hierarchy
```js
// TODO: Create an Animal class with:
// - Constructor: name, sound
// - Method speak(): returns "[name] says [sound]!"

// TODO: Create a Dog class that extends Animal with:
// - Constructor: name, breed
// - Calls super(name, "woof")
// - Adds property breed
// - Override speak(): calls super.speak() and appends " *wags tail*"

// TODO: Create a Cat class that extends Animal with:
// - Constructor: name, indoor (boolean)
// - Calls super(name, "meow")
// - Override speak(): if indoor, returns "[name] says meow! (indoor cat)"
//                     otherwise returns "[name] says meow!"

// Test:
// const dog = new Dog("Rex", "Labrador");
// console.log(dog.speak()); // "Rex says woof! *wags tail*"

// const cat = new Cat("Whiskers", true);
// console.log(cat.speak()); // "Whiskers says meow! (indoor cat)"
```

---

## Level 2 – Stretch (3 points)

### Challenge 5: Extending Your Playlist
```js
// TODO: Copy your Song and Playlist classes from Session 9.
// Create a RadioPlaylist class that extends Playlist with:
// - Property: _currentIndex (starts at 0)
// - Method getCurrentSong(): returns the song at _currentIndex, or null if empty
// - Method next(): advances to the next song (wraps around using modulo)
// - Method previous(): goes back one song (wraps from 0 to last song)
// - Override addSong(song): calls super.addSong(song) — if returns true,
//   log "Added [title] to [name]"

// Test:
// const radio = new RadioPlaylist("Chill FM");
// radio.addSong(new Song("Song 1", "Artist A", 200));
// radio.addSong(new Song("Song 2", "Artist B", 180));
// radio.addSong(new Song("Song 3", "Artist C", 220));
// console.log(radio.getCurrentSong().title); // "Song 1"
// radio.next();
// console.log(radio.getCurrentSong().title); // "Song 2"
// radio.previous();
// console.log(radio.getCurrentSong().title); // "Song 1"
```

### Challenge 6: Using instanceof
```js
// TODO: Create 5 objects: 2 Appliances, 1 Refrigerator, 1 Washer, 1 SmartWasher.
// Write a function describeItem(item) that:
// - If the item is a SmartWasher, log "Smart appliance: " + item.describe()
// - Else if the item is a Washer, log "Washer: " + item.describe()
// - Else if the item is a Refrigerator, log "Fridge: " + item.describe()
// - Else log "Generic: " + item.describe()
// Call describeItem() on all 5 objects.
```

---

## Level 3 – Advanced (2 points)

### Challenge 7: Vehicle Fleet
```js
// TODO: Build a small vehicle hierarchy:
// - Vehicle(make, model, year): base class with describe() and getAge()
//   getAge() returns current year - year (use 2026 as current year)
// - ElectricVehicle extends Vehicle: adds batteryKwh, method range() returns batteryKwh * 5
// - Truck extends Vehicle: adds payloadKg, method canCarry(kg) returns boolean
// - ElectricTruck extends ElectricVehicle: also adds payloadKg (multiple inheritance
//   via chaining: ElectricTruck → ElectricVehicle → Vehicle)
//   Override describe() to include both battery and payload info.

// Create a fleet array with 3 different vehicle types.
// Loop through and call describe() on each.
// Count how many are ElectricVehicle (using instanceof).
```
