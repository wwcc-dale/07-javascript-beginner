# Spades Card Game Curriculum - Complete Zaphod Implementation Guide

## Overview

This guide provides complete instructions for implementing the reworked Spades card game curriculum using the Zaphod offline course authoring system for Canvas LMS.

---

## Course Structure

**Format:** 25 sessions × 3 hours each = 5 credits  
**Delivery:** Self-paced, offline lab environment  
**LMS:** Canvas via Zaphod sync system

---

## Directory Structure

```
spades-course/
├── pages/
│   ├── 00-Start-Here.module/
│   │   ├── 01-welcome.page/
│   │   │   └── index.md
│   │   ├── 02-syllabus.page/
│   │   │   └── index.md
│   │   └── 03-how-to-succeed.page/
│   │       └── index.md
│   │
│   ├── 01-Foundations.module/
│   │   ├── 01-session-1-content.page/
│   │   │   └── index.md
│   │   ├── 02-session-1-quiz.quiz/
│   │   │   └── index.md
│   │   ├── 03-session-1-assignment.assignment/
│   │   │   ├── index.md
│   │   │   ├── rubric.yaml
│   │   │   └── starter-files/
│   │   │       └── session-01-starter.js
│   │   ├── 04-session-2-content.page/
│   │   │   └── index.md
│   │   ├── 05-session-2-quiz.quiz/
│   │   │   └── index.md
│   │   ├── 06-session-2-assignment.assignment/
│   │   │   ├── index.md
│   │   │   └── rubric.yaml
│   │   └── [continues through session 5...]
│   │
│   ├── 02-Object-Oriented-Programming.module/
│   │   └── [sessions 6-10...]
│   │
│   ├── 03-Web-Technologies.module/
│   │   ├── [sessions 11-14...]
│   │   └── 15-midterm-assessment.quiz/
│   │       └── index.md
│   │
│   ├── 04-Game-Implementation.module/
│   │   └── [sessions 16-20...]
│   │
│   └── 05-Advanced-Features.module/
│       ├── [sessions 21-24...]
│       └── 25-final-assessment.quiz/
│           └── index.md
│
├── quiz-banks/
│   ├── session-01-fundamentals.bank.md
│   ├── session-02-functions.bank.md
│   ├── session-03-objects.bank.md
│   ├── session-04-loops.bank.md
│   ├── session-05-algorithms.bank.md
│   ├── session-06-classes.bank.md
│   ├── session-07-oop-card-deck.bank.md
│   ├── session-08-oop-player.bank.md
│   ├── session-09-methods.bank.md
│   ├── session-10-game-logic.bank.md
│   ├── session-11-html.bank.md
│   ├── session-12-css.bank.md
│   ├── session-13-flexbox.bank.md
│   ├── session-14-dom.bank.md
│   ├── session-15-events.bank.md
│   ├── midterm-cumulative.bank.md
│   ├── session-16-rendering.bank.md
│   ├── session-17-interaction.bank.md
│   ├── session-18-bidding.bank.md
│   ├── session-19-tricks.bank.md
│   ├── session-20-turns.bank.md
│   ├── session-21-scoring.bank.md
│   ├── session-22-state.bank.md
│   ├── session-23-ui-polish.bank.md
│   ├── session-24-testing.bank.md
│   └── final-cumulative.bank.md
│
├── rubrics/
│   ├── rows/
│   │   ├── code_correctness.yaml
│   │   ├── code_quality.yaml
│   │   ├── problem_solving.yaml
│   │   ├── testing_debugging.yaml
│   │   └── creativity.yaml
│   ├── coding_assignment.yaml
│   ├── web_project.yaml
│   └── final_project.yaml
│
├── outcomes/
│   └── outcomes.yaml
│
├── modules/
│   └── module_order.yaml
│
├── assets/
│   ├── images/
│   │   ├── card-sprites/
│   │   └── screenshots/
│   ├── videos/
│   │   ├── session-01-basics.mp4
│   │   ├── session-02-functions.mp4
│   │   └── [one per session...]
│   └── starter-files/
│       ├── session-01/
│       ├── session-02/
│       └── [organized by session...]
│
└── _course_metadata/
    ├── outcome_map.json
    ├── bank_cache.json
    └── upload_cache.json
```

---

## Module Organization

### Module Order File

Create `modules/module_order.yaml`:

```yaml
related_outcomes:
  - "CLO-X"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
  - "html"
  - "zip"
---

[Assignment content following the template shown earlier]
```

---

## Rubric System

### Shared Rubric Rows

Create reusable criteria in `rubrics/rows/`:

**code_correctness.yaml:**
```yaml
- description: "Code Correctness"
  long_description: "Code produces expected output and handles required scenarios"
  points: 40
  outcome_code: CLO-1
  ratings:
    - description: "Excellent"
      long_description: "All requirements met; code works perfectly for all test cases"
      points: 40
    - description: "Proficient"
      long_description: "Most requirements met; minor issues in edge cases"
      points: 32
    - description: "Developing"
      long_description: "Some requirements met; several issues present"
      points: 24
    - description: "Beginning"
      long_description: "Few requirements met; significant issues"
      points: 16
    - description: "Not Demonstrated"
      points: 0
```

**code_quality.yaml:**
```yaml
- description: "Code Quality and Style"
  long_description: "Code is readable, well-organized, and follows conventions"
  points: 30
  outcome_code: CLO-1
  ratings:
    - description: "Excellent"
      long_description: "Clean, readable code with meaningful names and proper formatting"
      points: 30
    - description: "Proficient"
      long_description: "Generally readable with minor style issues"
      points: 24
    - description: "Developing"
      long_description: "Readability issues; inconsistent style"
      points: 18
    - description: "Beginning"
      long_description: "Difficult to read; poor organization"
      points: 12
    - description: "Not Demonstrated"
      points: 0
```

**problem_solving.yaml:**
```yaml
- description: "Problem Solving Approach"
  long_description: "Demonstrates logical thinking and appropriate strategy"
  points: 20
  outcome_code: CLO-4
  ratings:
    - description: "Excellent"
      long_description: "Clear logic; efficient approach; handles edge cases"
      points: 20
    - description: "Proficient"
      long_description: "Sound logic; working approach; minor efficiency issues"
      points: 16
    - description: "Developing"
      long_description: "Basic logic present; approach needs refinement"
      points: 12
    - description: "Beginning"
      long_description: "Unclear logic; inefficient or flawed approach"
      points: 8
    - description: "Not Demonstrated"
      points: 0
```

**creativity.yaml:**
```yaml
- description: "Stretch Goals and Creativity (Bonus)"
  long_description: "Attempts optional challenges and shows creative problem-solving"
  points: 10
  ratings:
    - description: "Exceptional"
      long_description: "Completes all stretch goals with creative solutions"
      points: 10
    - description: "Strong Attempt"
      long_description: "Completes some stretch goals or shows creative thinking"
      points: 7
    - description: "Attempted"
      long_description: "Attempts stretch goals with partial success"
      points: 4
    - description: "Not Attempted"
      points: 0
```

### Assignment Rubric

Create `pages/.../session-X-assignment.assignment/rubric.yaml`:

```yaml
title: "Session X Assignment Rubric"

criteria:
  - "{{rubric_row:code_correctness}}"
  - "{{rubric_row:code_quality}}"
  - "{{rubric_row:problem_solving}}"
  - "{{rubric_row:creativity}}"
```

---

## Video Guidelines

### Requirements
- Duration: 15-25 minutes maximum (to fit 3-hour session)
- Format: MP4, 720p minimum
- Audio: Clear narration, no background music
- Captions: Include for accessibility
- Storage: `assets/videos/session-XX-topic.mp4`

### Content Structure
1. **Introduction (2 min)** - What will be covered and why
2. **Main Content (10-18 min)** - Demonstrate concepts with examples
3. **Practice Exercise (2-3 min)** - Walk through a problem
4. **Wrap-up (1-2 min)** - Key takeaways and next steps

### Production Tips
- Use screen recording with code editor visible
- Type code live rather than showing finished code
- Explain reasoning as you code
- Make intentional mistakes and debug them
- Pause to let students try before showing solution

---

## Deployment Workflow

### Initial Setup

1. **Create Directory Structure:**
   ```bash
   mkdir -p spades-course/{pages,quiz-banks,rubrics/rows,outcomes,modules,assets/{videos,images,starter-files},_course_metadata}
   ```

2. **Create Outcomes:**
   - Write `outcomes/outcomes.yaml`
   - Run `zaphod sync outcomes`
   - Note Canvas outcome IDs
   - Create `_course_metadata/outcome_map.json`

3. **Create Shared Rubric Rows:**
   - Write files in `rubrics/rows/`
   - Will be expanded during assignment rubric creation

4. **Create Module Order:**
   - Write `modules/module_order.yaml`

### Per-Session Workflow

For each session (repeat 25 times):

1. **Create Content Page:**
   - `pages/0X-Module.module/session-Y-content.page/index.md`
   - Follow session content template
   - Include all sections (intro, reading, video, supplemental, quiz reference, assignment reference, wrap-up)

2. **Create Quiz Bank:**
   - `quiz-banks/session-Y-topic.bank.md`
   - Write 12-15 questions (quiz draws 6)
   - Mix question types
   - Focus on understanding, not memorization

3. **Create Practice Quiz:**
   - `pages/0X-Module.module/session-Y-quiz.quiz/index.md`
   - Set as `practice_quiz`
   - Allow unlimited attempts
   - Show correct answers

4. **Create Assignment:**
   - `pages/0X-Module.module/session-Y-assignment.assignment/index.md`
   - Follow assignment template
   - Include Level 1 (required), Level 2 (stretch), Level 3 (advanced)
   - Create starter files in `assets/starter-files/session-Y/`

5. **Create Assignment Rubric:**
   - `pages/0X-Module.module/session-Y-assignment.assignment/rubric.yaml`
   - Reference shared rubric rows
   - Link to appropriate outcomes

6. **Create Video:**
   - Record 15-25 minute tutorial
   - Save as `assets/videos/session-Y-topic.mp4`
   - Create captions file

7. **Sync to Canvas:**
   ```bash
   zaphod sync
   ```

8. **Get Bank IDs:**
   - Log into Canvas
   - Navigate to Quizzes → Manage Question Banks
   - Note the Canvas ID for the new bank
   - Update quiz's `question_groups` section with bank_id

9. **Re-sync:**
   ```bash
   zaphod sync
   ```

10. **Test:**
    - Log into Canvas as a student
    - Navigate through the session content
    - Take the practice quiz
    - Check assignment and rubric display
    - Download starter files
    - Verify video plays

### Summative Assessment Creation

**After Session 14 (Midterm):**

1. Create `quiz-banks/midterm-cumulative.bank.md` with 15-20 cumulative questions
2. Create `pages/03-Web-Technologies.module/15-midterm-assessment.quiz/index.md`
3. Pull 2-4 questions from each session bank (sessions 1-14)
4. Pull 8 questions from midterm cumulative bank
5. Set `quiz_type: assignment`, 1 attempt, 90 minute limit
6. Do NOT show correct answers

**After Session 24 (Final):**

1. Create `quiz-banks/final-cumulative.bank.md` with 20-25 cumulative questions
2. Create `pages/05-Advanced-Features.module/25-final-assessment.quiz/index.md`
3. Pull 2-3 questions from each session bank (sessions 1-24)
4. Pull 10 questions from final cumulative bank
5. Set `quiz_type: assignment`, 1 attempt, 120 minute limit
6. Do NOT show correct answers

---

## Student Experience Flow

### Typical 3-Hour Session

**Hour 1: Input (60 min)**
- Read session content (30-40 min)
- Watch video tutorial (20-25 min)
- Break (5 min)

**Hour 2: Practice (60 min)**
- Read supplemental examples (20 min)
- Take practice quiz (15 min)
- Review quiz results and re-read as needed (20 min)
- Break (5 min)

**Hour 3: Application (60 min)**
- Start assignment Level 1 (40-50 min)
- Attempt Level 2 if time allows (10-20 min)
- Read wrap-up (5 min)
- Ask instructor questions as needed (throughout)

### Pacing Flexibility

Since students work independently:
- Fast learners can complete 1+ sessions per 3-hour block
- Struggling students can take 1.5-2 blocks per session
- Instructor provides individualized support
- No student falls behind due to class pace

---

## Instructor Support Model

### Preparation
- Review all materials before course start
- Test all starter code and assignments
- Familiarize with common errors and misconceptions
- Prepare extra examples for struggling students

### During Sessions
- Circulate among students working independently
- Answer questions (don't give solutions)
- Help debug errors by teaching debugging process
- Provide encouragement and positive feedback
- Monitor Canvas submissions to identify struggling students

### Support Strategies
- Ask guiding questions rather than giving answers
- Show students how to read error messages
- Demonstrate debugging with console.log
- Encourage peer support when appropriate
- Provide extension challenges for advanced students

---

## Assessment Philosophy

### Practice Quizzes (Ungraded)
- Formative assessment
- Unlimited attempts
- Immediate feedback with correct answers
- Encourage self-assessment and review

### Assignments (Graded)
- Demonstrate applied learning
- Scaffolded with stretch levels
- Rubric-based evaluation
- Allow resubmission with reduced points

### Summative Assessments (Graded)
- Measure overall understanding
- Cumulative across multiple sessions
- One attempt (simulates real testing conditions)
- No correct answers shown (prevents answer sharing in rolling admission)

---

## Quality Assurance Checklist

### Before Course Launch

**Content Review:**
- [ ] All 25 session content pages complete
- [ ] Reading level verified at 8th grade
- [ ] All code examples tested and working
- [ ] Tone is positive and encouraging throughout

**Assessments:**
- [ ] 25 quiz banks created (12-15 questions each)
- [ ] All practice quizzes configured correctly
- [ ] Midterm quiz pulls from sessions 1-14
- [ ] Final quiz pulls from all sessions
- [ ] All question types work in Canvas

**Assignments:**
- [ ] 25 assignments created
- [ ] All starter files present and tested
- [ ] Rubrics attached and linked to outcomes
- [ ] Instructions clear and complete
- [ ] Three difficulty levels present

**Technical:**
- [ ] All videos under 25 minutes
- [ ] Videos have captions
- [ ] All assets uploaded
- [ ] Zaphod sync completes without errors
- [ ] Module order correct in Canvas
- [ ] All links and references work

**Testing:**
- [ ] Test account walks through Session 1-3
- [ ] All materials accessible offline
- [ ] File downloads work
- [ ] Quizzes function correctly
- [ ] Assignment submissions work

---

## Maintenance and Updates

### During Course Run
- Monitor student feedback
- Track common errors in assignments
- Update starter code if widespread issues
- Add clarifying notes to confusing sections
- Collect ideas for improvement

### After Course Run
- Review student performance data
- Identify sessions with low quiz scores
- Revise challenging content
- Update examples based on student questions
- Refine rubrics based on grading experience

### Version Control
- Keep all materials in Git repository
- Tag each course offering (Fall2026, Spring2027, etc.)
- Document changes in CHANGELOG.md
- Maintain backwards compatibility with ongoing students

---

## Appendix: Session-by-Session Content Outline

### Phase 1: Foundations (Sessions 1-5)

**Session 1: Variables and Conditionals**
- Variables (let vs const)
- Data types (number, string, boolean)
- Comparison operators
- If/else statements
- Card representation in code

**Session 2: Functions and Arrays**
- Function declaration and calling
- Parameters and return values
- Array creation and access
- Array methods (push, length)
- Function to compare cards

**Session 3: Objects and Data Structures**
- Object literals
- Property access (dot vs bracket)
- Nested objects
- Card objects with suit, rank, value
- Player objects

**Session 4: Loops and Iteration**
- For loops
- While loops
- Iterating through arrays
- Loop with arrays of card objects
- Counting and summing

**Session 5: Algorithmic Thinking**
- Finding maximum/minimum
- Counting matching elements
- Filtering arrays
- Finding highest card
- Counting spades in hand

### Phase 2: Object-Oriented Programming (Sessions 6-10)

**Session 6: Introduction to Classes**
- Class syntax
- Constructor method
- Creating instances with new
- Simple Card class
- Simple Player class

**Session 7: Card and Deck Classes**
- Card class with properties and methods
- Deck class
- Generating full deck
- Array of Card instances
- toString methods

**Session 8: Player Class and Game State**
- Player class with hand array
- Adding/removing cards from hand
- Player methods (hasCard, countSuit)
- Multiple player instances
- Game state object

**Session 9: Methods and Encapsulation**
- Public vs private (naming convention)
- Getter methods
- Setter methods with validation
- Method chaining
- Deck shuffle method

**Session 10: Game Logic Foundations**
- Turn management
- Comparing cards (considering suit)
- Determining trick winner
- Score tracking
- Basic game flow logic

### Phase 3: Web Technologies (Sessions 11-15)

**Session 11: HTML Structure**
- HTML document structure
- Semantic elements
- Divs and spans
- IDs and classes
- Creating card game layout

**Session 12: CSS Styling Basics**
- Selectors (element, class, ID)
- Box model
- Colors and fonts
- Borders and backgrounds
- Styling cards

**Session 13: CSS Flexbox**
- Flexbox container
- Flex direction
- Justify-content and align-items
- Gap property
- Card hand layout

**Session 14: DOM Manipulation**
- Selecting elements
- Creating elements
- Modifying content and attributes
- Adding/removing elements
- Rendering cards to DOM

**Session 15: MIDTERM + Event Handling**
- Event listeners
- Click events
- Event object
- Event delegation
- Clickable cards

### Phase 4: Game Implementation (Sessions 16-20)

**Session 16: Rendering Cards to DOM**
- Dynamic card creation
- Card image/text display
- Updating DOM when game state changes
- Hand vs table rendering
- Visual feedback

**Session 17: User Interaction**
- Click to select card
- Validation (can this card be played?)
- Playing card to table
- Turn indicator
- Disabling invalid actions

**Session 18: Spades Rules - Bidding**
- Bidding phase implementation
- Bid input and validation
- Team bid calculation
- Bid display
- Preventing gameplay until bids complete

**Session 19: Spades Rules - Trick-Taking**
- Following suit rules
- Trump (spades) rules
- Determining trick winner
- Collecting tricks
- Breaking spades

**Session 20: Turn Management**
- Current player tracking
- Automatic turn progression
- Handling all 4 players
- Round completion
- Hand completion (13 tricks)

### Phase 5: Advanced Features (Sessions 21-25)

**Session 21: Score Tracking**
- Making bid scoring
- Bags (overtricks)
- Sandbagging penalty
- Score display
- Game winner detection

**Session 22: Game State Management**
- Complete game state object
- State transitions
- Loading/saving state
- Undo functionality
- Game reset

**Session 23: UI Polish**
- Animations (card movement)
- Sound effects
- Visual themes
- Responsive design
- Accessibility features

**Session 24: Testing and Debugging**
- Console.log debugging
- Breakpoints in browser
- Testing edge cases
- Common errors and fixes
- Code review checklist

**Session 25: FINAL + Project Showcase**
- Final polish
- Documentation
- Presentation of working game
- Reflection on learning
- Next steps in programming

---

## Example: Complete Session 2 Materials

[Would continue with full Session 2 content, quiz bank, assignment, etc.]

---

## Conclusion

This implementation guide provides a complete blueprint for deploying the Spades card game curriculum using Zaphod and Canvas. The modular structure allows for continuous improvement while maintaining consistency across all 25 sessions.

**Key Success Factors:**
1. Clear, consistent structure across all sessions
2. Scaffolded assignments with multiple difficulty levels
3. Abundant practice with immediate feedback
4. Positive, encouraging tone throughout
5. Strong connection to real game development
6. Self-paced flexibility for diverse learners

**Support Resources:**
- Zaphod documentation: [linked files]
- Canvas LMS guides: [available in course resources]
- Instructor support: [contact information]
