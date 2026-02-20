# Session 24 Complete Package - Ready for Zaphod

## 📦 Files Created for Session 24

### 1. **Lecture Page** - `24-1-modularization-lecture.md`
- **Type:** `.page` (learning content)
- **Artifact:** 285
- **Content:** Complete lecture on ES6 modules and code organization
- **Sections:**
  - Learning objectives
  - Why modularization matters
  - Module syntax (export/import)
  - Professional project structure
  - Step-by-step refactoring guide
  - Common issues and solutions
  - Best practices
  - Testing modular code
- **Status:** ✅ Ready to publish

### 2. **Assignment** - `24-3-assignment.md`
- **Type:** `.assignment` (gradable work)
- **Artifact:** 286
- **Content:** Instructions for modularizing card game
- **Requirements:**
  - Project structure (10 points)
  - Module exports (10 points)
  - Module imports (10 points)
  - Functionality preserved (15 points)
  - Code quality (5 points)
- **Total Points:** 50
- **Submission:** ZIP file upload
- **Due Date:** +7 days
- **Status:** ✅ Ready to publish

### 3. **Rubric** - `24-assignment-rubric.yaml`
- **Type:** `rubric.yaml` (grading criteria)
- **Artifact:** 287
- **Content:** Detailed rubric for assignment
- **Criteria:**
  1. Project Structure (10 pts)
  2. Module Exports (10 pts)
  3. Module Imports (10 pts)
  4. Functionality Preserved (15 pts)
  5. Code Quality (5 pts)
- **Rating Levels:** Excellent, Good, Satisfactory, Needs Improvement, Insufficient
- **Status:** ✅ Ready to publish

### 4. **Quiz** - Already Created
- **Question Bank:** `24-modularization.bank.md` (artifact 274)
- **Quiz Instance:** `24-2-modularization.quiz.md` (artifact 275)
- **Questions:** 20 questions on ES6 modules
- **Status:** ✅ Ready to publish

---

## 🗂️ Recommended Zaphod Folder Structure

```
pages/
└── 03-Card-Game-Project.module/
    └── 24-Modularization.module/                    # or session-24/
        ├── 24-1-lecture.page/
        │   └── index.md                              # → 24-1-modularization-lecture.md
        ├── 24-2-quiz.quiz/
        │   └── index.md                              # → 24-2-modularization.quiz.md
        └── 24-3-assignment.assignment/
            ├── index.md                              # → 24-3-assignment.md
            └── rubric.yaml                           # → 24-assignment-rubric.yaml
```

---

## 📋 Integration Checklist

### Step 1: Create Folder Structure
```bash
mkdir -p pages/03-Card-Game-Project.module/24-Modularization/24-1-lecture.page
mkdir -p pages/03-Card-Game-Project.module/24-Modularization/24-2-quiz.quiz
mkdir -p pages/03-Card-Game-Project.module/24-Modularization/24-3-assignment.assignment
```

### Step 2: Add Lecture Content
```bash
# Copy 24-1-modularization-lecture.md to:
cp 24-1-modularization-lecture.md pages/03-Card-Game-Project.module/24-Modularization/24-1-lecture.page/index.md
```

### Step 3: Add Quiz
```bash
# Copy 24-2-modularization.quiz.md to:
cp 24-2-modularization.quiz.md pages/03-Card-Game-Project.module/24-Modularization/24-2-quiz.quiz/index.md

# Note: Question bank (24-modularization.bank.md) goes in quiz-banks/
cp 24-modularization.bank.md quiz-banks/
```

### Step 4: Add Assignment + Rubric
```bash
# Copy assignment:
cp 24-3-assignment.md pages/03-Card-Game-Project.module/24-Modularization/24-3-assignment.assignment/index.md

# Copy rubric:
cp 24-assignment-rubric.yaml pages/03-Card-Game-Project.module/24-Modularization/24-3-assignment.assignment/rubric.yaml
```

### Step 5: Verify Structure
```
pages/03-Card-Game-Project.module/24-Modularization/
├── 24-1-lecture.page/
│   └── index.md          ✅
├── 24-2-quiz.quiz/
│   └── index.md          ✅
└── 24-3-assignment.assignment/
    ├── index.md          ✅
    └── rubric.yaml       ✅
```

### Step 6: Sync to Canvas
```bash
# Preview first
zaphod sync --dry-run

# Sync to Canvas
zaphod sync

# Sync rubrics separately if needed
zaphod sync rubrics
```

---

## ✅ Pre-Deployment Verification

Before running `zaphod sync`, verify:

- [ ] All 4 files created (lecture, quiz, assignment, rubric)
- [ ] All frontmatter YAML is valid
- [ ] Assignment points add up to 50
- [ ] Rubric criteria match assignment requirements
- [ ] Quiz references correct question bank
- [ ] Lecture content is complete and formatted
- [ ] File names follow your naming convention
- [ ] Folder structure matches your course organization

---

## 🎯 What Students Will See in Canvas

### Module: Session 24 - Code Modularization
1. **📖 Lecture: Code Modularization and Project Structure**
   - Learning content
   - Examples and best practices
   - Step-by-step refactoring guide

2. **📝 Quiz: Session 24 - ES6 Modules**
   - 20 randomized questions
   - 20 minutes, 3 attempts
   - Tests understanding of module concepts

3. **📋 Assignment: Modularize Your Card Game**
   - Instructions for refactoring
   - 50 points total
   - Due in 7 days
   - Rubric attached (visible to students)
   - Submit ZIP file

---

## 📊 Grading Workflow (For Instructor)

### When Students Submit:

1. **Download ZIP file** from Canvas
2. **Extract and verify structure:**
   ```
   student-submission/
   ├── index.html          ✅
   └── src/
       ├── classes/        ✅
       ├── utils/          ✅
       ├── ui/             ✅
       └── main.js         ✅
   ```

3. **Run local server:**
   ```bash
   cd student-submission
   python -m http.server 8000
   # Open http://localhost:8000
   ```

4. **Test functionality:**
   - [ ] Page loads without errors
   - [ ] Can create new game
   - [ ] Can shuffle deck
   - [ ] Can deal cards
   - [ ] All original features work

5. **Check console:**
   - F12 → Console
   - [ ] No red errors
   - [ ] Modules load successfully

6. **Review code:**
   - [ ] Exports present in all modules
   - [ ] Imports use correct paths
   - [ ] One class per file
   - [ ] Proper folder organization

7. **Grade using rubric in Canvas**
   - Click rubric to open
   - Select rating for each criterion
   - Total calculated automatically

---

## 💡 Teaching Notes

### Common Student Struggles:

1. **CORS errors**
   - Remind: Must use local server, not `file://`
   - Solution: VS Code Live Server or Python server

2. **Import path confusion**
   - Common mistake: Missing `./` or `../`
   - Common mistake: Forgetting `.js` extension
   - Solution: Emphasize relative paths in lecture

3. **"It worked before refactoring"**
   - Missing exports or imports
   - Solution: Test one module at a time during refactoring

4. **Circular dependencies**
   - Deck imports Player, Player imports Deck
   - Solution: Pass instances as parameters instead

### Office Hours Topics:

- Debugging module loading
- Understanding import/export
- Organizing code logically
- Testing modular code

---

## 🚀 Next Steps After Session 24

**Session 25:** Testing, Debugging, and Code Quality
- Students will test their modular code
- Learn unit testing concepts
- Add documentation

**Session 26:** Final Project
- Students submit complete, professional card game
- Modular structure from Session 24
- Testing from Session 25
- Portfolio-worthy project

---

## 📁 Files Summary

| File | Purpose | Points | Status |
|------|---------|--------|--------|
| `24-1-modularization-lecture.md` | Learning content | N/A | ✅ Complete |
| `24-2-modularization.quiz.md` | Assessment | 20 | ✅ Complete |
| `24-3-assignment.md` | Project work | 50 | ✅ Complete |
| `24-assignment-rubric.yaml` | Grading criteria | 50 | ✅ Complete |
| `24-modularization.bank.md` | Quiz questions | N/A | ✅ Complete |

**Total Session 24 Points:** 70 (20 quiz + 50 assignment)

---

## ✨ Ready for Deployment

All Session 24 materials are complete and ready for integration into your Zaphod course structure. Follow the integration checklist above to deploy to Canvas.

**Status: ✅ READY FOR PRODUCTION**