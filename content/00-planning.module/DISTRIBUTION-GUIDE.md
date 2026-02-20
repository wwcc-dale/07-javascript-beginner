# Resource Distribution & Access Control Guide

## 🎯 Overview

This document specifies which resources are **student-facing** and which are **instructor-only**, ensuring students don't have access to solutions while maintaining transparency about where answers are kept.

---

## 📊 Resource Classification Matrix

| Resource | Audience | Location | Status | Access |
|----------|----------|----------|--------|--------|
| `session-16-starter.html` | Students | Canvas Module 16 | ✅ Safe | Public |
| `session-16-game.js` | Students | Canvas Module 16 | ✅ Safe | Public |
| `STARTER-README-STUDENT.md` | Students | Canvas Module 16 | ✅ Safe | Public |
| `javascript-quick-reference.md` | Students | Canvas Resources | ✅ Safe | Public |
| `session-16-2-card-deck.quiz` | Students | Canvas Module 16 | ✅ Safe | Public |
| `session-24-2-modularization.quiz` | Students | Canvas Module 24 | ✅ Safe | Public |
| `STARTER-README-INSTRUCTOR.md` | Instructors | Private Repo | 🔒 Secret | Private |
| `COURSE-STRUCTURE-UPDATED.md` | Instructors | Private Repo | 🔒 Secret | Private |
| `REVISED-APPROACH-SUMMARY.md` | Instructors | Private Repo | 🔒 Secret | Private |
| `24-modularization.bank.md` | Instructors | Canvas Question Banks | ⚠️ Sensitive | Private |
| `session-16-reference-complete.js` | Instructors | Private Repo | 🔒 Secret | Private |
| `session-24-modular-example/` | Instructors | Private Repo | 🔒 Secret | Private |

---

## ✅ STUDENT-FACING RESOURCES

### 1. `session-16-starter.html`
**Purpose:** HTML scaffold with CSS styling
**Status:** SAFE - No implementation code
**Storage:** Canvas Files / Module 16 `.file` folder
**Content:**
- HTML structure only
- Professional CSS (no game logic)
- Button/container IDs
- Script link to `game.js`
- No JavaScript (except link tag)

**Student can:** Download and open in browser
**Student cannot:** See any implementation

---

### 2. `session-16-game.js`  
**Purpose:** JavaScript starter with TODOs
**Status:** SAFE - All implementations commented out
**Storage:** Canvas Files / Module 16 `.file` folder
**Content:**
- Helper functions (getSuitSymbol, createCardElement, etc.) - PROVIDED
- Card class stub: `// class Card { ... }` - COMMENTED OUT
- Deck class stub: `// class Deck { ... }` - COMMENTED OUT
- Game state variables - PROVIDED
- Game function templates with `TODO` comments
- Event listener wiring - PROVIDED
- Testing code - COMMENTED OUT

**Student must implement:**
- Full Card class (uncomment and complete)
- Full Deck class (uncomment and complete)
- Game function bodies (following TODO comments)

**Student cannot:** See working implementations (all are commented)

---

### 3. `STARTER-README-STUDENT.md` (artifact:281)
**Purpose:** Instructions for students
**Status:** SAFE - Descriptive, not prescriptive
**Storage:** Canvas Files / Module 16 `.file` folder
**Content:**
- How to download and set up files
- Session 16-23 breakdown (what to build)
- Class requirements (Card: "store suit & rank, have describe() method")
- Deck requirements ("shuffle in random order", "remove and return top card")
- Common errors and troubleshooting
- Tips for success
- Naming conventions and best practices

**INTENTIONALLY EXCLUDED:**
- ❌ No algorithm names (e.g., don't mention "Fisher-Yates")
- ❌ No pseudocode
- ❌ No working code examples
- ❌ No method bodies
- ❌ No nested loops shown

**Student learns:** What to build, not how to build it

---

### 4. `javascript-quick-reference.md` (existing, from previous work)
**Purpose:** Language reference
**Status:** SAFE - Generic examples, not assignment-specific
**Storage:** Canvas / Resources Module
**Content:**
- Class syntax (generic example)
- Array methods (.push, .pop, .splice, etc.)
- DOM manipulation
- Event handling
- Common patterns
- Debugging tips

**Assignment-safe because:**
- Uses example classes like `Rectangle` or `Monster`, not `Card` or `Deck`
- Shows patterns students must learn anyway
- Doesn't reveal game-specific logic

---

### 5. `session-16-2-card-deck.quiz` (from question bank - artifact:274)
**Purpose:** Formative assessment
**Status:** SAFE - Randomized quiz from question bank
**Storage:** Canvas Quizzes / Module 16
**Content:**
- 20 randomized questions
- Tests concepts, not implementation
- Example: "Which keyword creates a class? a) class b) func c) def"
- Example: "What does .pop() return? a) last element b) first element c) nothing"

**Security:**
- Individual questions don't give away solutions
- Randomization prevents memorization
- Focuses on understanding, not copying code

---

### 6. `session-24-2-modularization.quiz` (from question bank)
**Purpose:** Formative assessment for modularization
**Status:** SAFE - Concept-focused
**Storage:** Canvas Quizzes / Module 24
**Content:**
- ES6 module syntax questions
- Import/export mechanics
- File organization patterns
- Does NOT show actual project structure

---

---

## 🔒 INSTRUCTOR-ONLY RESOURCES

### 1. `STARTER-README-INSTRUCTOR.md` (artifact:282)
**Purpose:** Complete implementation guide for instructors
**Status:** SECRET - Contains all solutions
**Storage:** Private GitHub repository (not in Canvas)
**Content:**
- Complete Card class implementation
- Complete Deck class implementation with Fisher-Yates explanation
- Player class (Session 17)
- Testing strategies and test cases
- Common mistakes and how to address them
- Grading rubric with exemplars
- Code review checklist
- Deployment verification checklist

**Keep private because:** Contains working code students shouldn't see

---

### 2. `COURSE-STRUCTURE-UPDATED.md` (artifact:276)
**Purpose:** Course planning document
**Status:** SECRET - Internal planning
**Storage:** Private GitHub repository
**Content:**
- Session renumbering (16-26 mapping)
- Module organization
- Learning progression
- Not directly relevant to students

---

### 3. `REVISED-APPROACH-SUMMARY.md` (artifact:280)
**Purpose:** Pedagogical rationale
**Status:** SECRET - Internal design document
**Storage:** Private GitHub repository
**Content:**
- Why external JS files vs embedded
- Session 24 modularization placement rationale
- Instructor notes on design decisions
- Not for student consumption

---

### 4. `24-modularization.bank.md` (artifact:274)
**Purpose:** Question bank source
**Status:** SEMI-SECRET - In Canvas, but hidden from students
**Storage:** Canvas Question Banks (instructor only)
**Content:**
- 20 raw quiz questions with answers
- Full question text and answer options

**Why secret:** Question banks are instructor tools; students only see randomized quiz
**Exception:** If you want to share study guide, create separate study version without answers

---

### 5. Reference Implementations (to be created)
**Purpose:** Grading and verification
**Status:** SECRET - Complete working code
**Storage:** Private GitHub repository
**Content:**
- `session-16-reference-complete.js` - Full Card and Deck classes
- `session-17-reference.js` - Complete through Player class
- ... continuing through Session 23
- `session-24-modular-example/` - Complete modularized structure for Session 24

**Why private:** Students must build these themselves; seeing solution defeats learning

---

---

## 📁 Folder Structure for Organization

### In Canvas (Student-visible)
```
Modules → Card Game Project Module
├── 16-Card and Deck Classes
│   ├── 16-1-lecture.page (lecture content)
│   ├── 16-2-quiz.quiz (randomized from question bank)
│   └── 16-3-starter-files.file
│       ├── session-16-starter.html ✅ Student downloads
│       ├── session-16-game.js ✅ Student downloads
│       └── STARTER-README-STUDENT.md ✅ Student reads
├── 17-Player and Hands
├── ... 18-23
├── 24-Modularization
│   ├── 24-1-lecture.page
│   ├── 24-2-quiz.quiz
│   └── 24-3-starter-files.file (modularization example)
└── 25-26: Testing and Final Project

Resources Module
├── javascript-quick-reference.page ✅ Students use
└── [other shared resources]
```

### In Private Repository (Instructor-only)
```
instructor-resources/
├── README.md (this document)
├── STARTER-README-INSTRUCTOR.md
├── COURSE-STRUCTURE-UPDATED.md
├── REVISED-APPROACH-SUMMARY.md
├── session-16/
│   ├── reference-complete.js
│   ├── test-cases.js
│   ├── common-mistakes.md
│   └── grading-checklist.md
├── session-17-23/
│   └── [similar per-session structure]
├── session-24/
│   ├── modular-example/
│   │   ├── index.html
│   │   └── src/
│   │       ├── classes/
│   │       │   ├── Card.js
│   │       │   ├── Deck.js
│   │       │   ├── Player.js
│   │       │   └── AIPlayer.js
│   │       ├── utils/
│   │       └── main.js
│   └── migration-guide.md
└── final-project/
    ├── reference-solution/
    │   └── [complete game]
    └── rubric-with-exemplars.md
```

---

## 🔐 Access Control Checklist

Before publishing to Canvas:

- [ ] HTML starter file contains NO game logic
- [ ] JS starter file has all class definitions commented out
- [ ] JS starter file has all implementations commented out
- [ ] Student README has no algorithm names mentioned
- [ ] Student README has no pseudocode or method bodies
- [ ] Quiz questions test concepts, not specific answers
- [ ] No links from student materials to instructor-only docs
- [ ] Instructor reference files are in private repo, NOT Canvas
- [ ] Question bank is in Canvas but not visible to students
- [ ] Only `.page` and `.file` and `.quiz` folders are public
- [ ] Private docs use clear filenames ending in `-INSTRUCTOR` or `-PRIVATE`

---

## 🚀 Deployment Process

### Step 1: Prepare Student Materials
```bash
# Files to upload to Canvas:
✅ session-16-starter.html
✅ session-16-game.js  
✅ STARTER-README-STUDENT.md
✅ javascript-quick-reference.md (already in Resources)
```

### Step 2: Create Question Banks
```bash
# In Canvas:
✅ Import 24-modularization.bank.md as Question Bank
✅ Create quiz from bank (randomize, shuffle answers)
✅ Hide question bank from students (view-as-instructor only)
```

### Step 3: Secure Instructor Resources
```bash
# In private repo (GitHub/GitLab):
🔒 STARTER-README-INSTRUCTOR.md
🔒 COURSE-STRUCTURE-UPDATED.md
🔒 REVISED-APPROACH-SUMMARY.md
🔒 Reference implementations
🔒 Test cases
🔒 Grading exemplars
```

### Step 4: Verify Security
```bash
# Final check:
✅ Preview as student - no solutions visible
✅ No private docs linked from Canvas
✅ Question banks hidden from students
✅ Reference code not in Canvas
✅ Instructor README clearly marked "PRIVATE"
```

---

## 📋 Per-Session Expansion

### Pattern for Future Sessions (17-23)

For each session, create:

**Student-facing:**
1. Lecture page (existing, you write this)
2. Quiz (created from question bank, randomized)
3. Starter files (new class/features to implement)
4. Student README (what to build, not how)

**Instructor-only:**
1. Reference implementation (complete working code)
2. Test cases (verify student submissions)
3. Grading checklist (exemplars for each rubric level)
4. Common mistakes guide (what to expect, how to help)

---

## ✅ Summary: What Goes Where

| Material | Student? | Instructor? | Canvas | Private Repo |
|----------|----------|-----------|--------|------------|
| Starter HTML/CSS | ✅ Yes | ✅ Yes | ✅ Files | - |
| Starter JS (TODOs) | ✅ Yes | ✅ Yes | ✅ Files | ✅ Backup |
| Student README | ✅ Yes | ✅ Yes | ✅ Files | - |
| Lectures | ✅ Yes | ✅ Yes | ✅ Pages | - |
| Quizzes | ✅ Yes | ✅ Yes | ✅ Quizzes | ✅ Questions |
| Reference Code | ❌ No | ✅ Yes | - | ✅ Only |
| Test Cases | ❌ No | ✅ Yes | - | ✅ Only |
| Grading Exemplars | ❌ No | ✅ Yes | - | ✅ Only |
| Design Docs | ❌ No | ✅ Yes | - | ✅ Only |

---

**This guidance ensures academic integrity while supporting student learning.** 🎓