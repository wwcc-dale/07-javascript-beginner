# Spades Card Game Curriculum - Executive Summary

## Overview

This document provides a comprehensive restructuring of the Spades card game programming curriculum to align with a systematic 25-session course design framework using the Zaphod offline course authoring system for Canvas LMS.

---

## Course Design Philosophy

### Core Principles

**1. Scaffolded Learning**
Every session builds systematically on previous knowledge. Students are never asked to do something they haven't been prepared for.

**2. Multiple Difficulty Levels**
- **Level 1 (Core):** Required work that all students can complete with effort
- **Level 2 (Stretch):** Challenges for students who finish early
- **Level 3 (Advanced):** Open-ended problems for high achievers

**3. Formative Assessment**
- Ungraded practice quizzes with unlimited attempts
- Immediate feedback to support self-directed learning
- Encourages growth mindset

**4. Authentic Context**
All programming concepts taught through building a real Spades card game, providing motivation and real-world application.

**5. Self-Paced Independence**
Materials designed for students working at their own pace with instructor support, not lectures.

---

## Course Structure

### Format
- **Duration:** 25 sessions × 3 hours = 75 total hours (5 credit course)
- **Delivery:** Self-paced, offline lab environment
- **Platform:** Canvas LMS via Zaphod offline authoring
- **Support:** Instructor available for individual help, no formal lectures

### Session Components

Each 3-hour session includes:

| Component | Time | Purpose |
|-----------|------|---------|
| Reading assignments | 30-40 min | Introduce concepts with clear explanations and examples |
| Video tutorials | 15-25 min | Demonstrate concepts in action (must fit time constraints) |
| Supplemental knowledge review | 20-30 min | Apply concepts with fresh, card-game-specific examples |
| Practice quiz (ungraded) | 15 min | Self-assessment with immediate feedback |
| Hands-on assignment | 60-90 min | Apply learning with scaffolded challenges |
| Wrap-up summary | 10 min | Contextualize learning and preview next session |

### Assessment Structure

**Formative (Ungraded):**
- 24 practice quizzes (Sessions 1-14, 16-25)
- Unlimited attempts, show correct answers
- Support self-directed learning

**Summative (Graded):**
- 24 coding assignments (Sessions 1-14, 16-24)
- Session 15: Midterm assessment (covers Sessions 1-14)
- Session 25: Final assessment (covers all sessions)

---

## Content Progression

### Phase 1: Foundations (Sessions 1-5)
**Focus:** Core JavaScript programming fundamentals

- Session 1: Variables and conditionals
- Session 2: Functions and arrays
- Session 3: Objects and data structures
- Session 4: Loops and iteration
- Session 5: Algorithmic thinking

**Outcome:** Students can write basic JavaScript programs using fundamental programming constructs.

### Phase 2: Object-Oriented Programming (Sessions 6-10)
**Focus:** Organizing code with classes and objects

- Session 6: Introduction to classes
- Session 7: Card and Deck classes
- Session 8: Player class and game state
- Session 9: Methods and encapsulation
- Session 10: Game logic foundations

**Outcome:** Students can design and implement object-oriented programs with multiple interacting classes.

### Phase 3: Web Technologies (Sessions 11-15)
**Focus:** Building web interfaces

- Session 11: HTML structure
- Session 12: CSS styling basics
- Session 13: CSS Flexbox layouts
- Session 14: DOM manipulation
- Session 15: **MIDTERM** + Event handling

**Outcome:** Students can create interactive web pages and manipulate them with JavaScript.

### Phase 4: Game Implementation (Sessions 16-20)
**Focus:** Implementing Spades game rules

- Session 16: Rendering cards to DOM
- Session 17: User interaction
- Session 18: Spades rules - bidding system
- Session 19: Spades rules - trick-taking mechanics
- Session 20: Turn management and game flow

**Outcome:** Students have a working, playable Spades game.

### Phase 5: Advanced Features (Sessions 21-25)
**Focus:** Polish and professionalism

- Session 21: Score tracking and display
- Session 22: Game state management
- Session 23: UI polish and user feedback
- Session 24: Testing and debugging strategies
- Session 25: **FINAL** + Project showcase

**Outcome:** Students have a polished, professional-quality game and understand software development practices.

---

## Pedagogical Features

### Accessibility and Inclusivity

**Reading Level:** All content written at 8th grade reading level
- Short sentences
- Common vocabulary
- Technical terms explained when introduced
- Active voice preferred

**Tone:** Positive and encouraging throughout
- "You can do this" messaging
- Normalize struggle as part of learning
- Celebrate progress
- Frequent reminders to ask for help

**Universal Design:**
- Multiple representations (text, video, code examples)
- Flexible pacing (fast learners can skip ahead, slow learners can take time)
- Clear structure and expectations
- Consistent format reduces cognitive load

### Scaffolding Strategies

**Assignment Structure:**
1. **Starter code provided** - Students fill in TODOs
2. **Clear requirements** - Exactly what needs to be accomplished
3. **Expected output shown** - Students know when they're done
4. **Multiple checkpoints** - Small, achievable challenges
5. **Stretch goals** - Optional challenges for early finishers

**Knowledge Building:**
- Every concept introduced with simple example
- Applied in card game context
- Practiced in quiz
- Applied in assignment
- Built upon in future sessions

**Error Prevention:**
- Common mistakes explicitly addressed
- Debugging tips provided
- Instructor available for support

### Assessment Design

**Practice Quizzes:**
- **Purpose:** Formative self-assessment
- **Attempts:** Unlimited
- **Feedback:** Immediate, with correct answers
- **Grade Impact:** None
- **Question Pool:** 12-15 questions, 6 drawn randomly
- **Benefit:** Students can assess understanding and review as needed

**Coding Assignments:**
- **Purpose:** Apply session concepts
- **Rubric-Based:** Clear expectations and grading criteria
- **Outcome-Aligned:** Linked to course learning outcomes
- **Scaffolded:** Three difficulty levels
- **Artifact-Producing:** Students build portfolio of work

**Summative Assessments:**
- **Midterm (Session 15):** Covers Sessions 1-14
  - 50 questions from session banks + cumulative questions
  - 90 minutes, 1 attempt, no answers shown
  - Worth significant portion of grade
- **Final (Session 25):** Covers all sessions
  - 60-70 questions from all session banks + cumulative questions
  - 120 minutes, 1 attempt, no answers shown
  - Demonstrates comprehensive understanding

---

## Technical Implementation: Zaphod System

### Why Zaphod?

Zaphod enables offline course authoring with version control, while still syncing to Canvas LMS:

**Benefits:**
- **Version Control:** All materials in Git for tracking changes
- **Offline Editing:** Work without internet, perfect for lab environment
- **Consistency:** Standardized formats prevent errors
- **Efficiency:** Markdown files easier than Canvas UI for bulk content
- **Reusability:** Shared rubrics, quiz banks, and templates
- **Portability:** Materials can be reused in future offerings

### Directory Structure

```
spades-course/
├── pages/                    # All course content
│   ├── 00-Start-Here.module/
│   ├── 01-Foundations.module/
│   ├── 02-Object-Oriented-Programming.module/
│   ├── 03-Web-Technologies.module/
│   ├── 04-Game-Implementation.module/
│   └── 05-Advanced-Features.module/
├── quiz-banks/               # Question banks
├── rubrics/                  # Reusable rubric components
│   └── rows/
├── outcomes/                 # Learning outcomes
├── modules/                  # Module ordering
└── assets/                   # Videos, images, starter files
```

### Content Types

**Pages (`.page/`):**
- Session content
- Instructions
- Reference materials
- Written in Markdown

**Quizzes (`.quiz/`):**
- Practice quizzes (ungraded)
- Summative assessments (graded)
- Pull questions from banks
- Configured via YAML frontmatter

**Assignments (`.assignment/`):**
- Coding challenges
- Include rubrics
- Link to outcomes
- Provide starter files

**Question Banks (`.bank.md`):**
- Reusable question pools
- Support multiple question types
- Enable randomization

**Rubrics (`rubric.yaml`):**
- Standardized grading criteria
- Link to learning outcomes
- Reusable rows for consistency

---

## Learning Outcomes

### CLO-1: Programming Fundamentals
Apply core programming concepts including variables, data types, control structures, and functions to solve problems.

**Assessed in:** All coding assignments, Sessions 1-5 particularly

### CLO-2: Object-Oriented Design
Design and implement object-oriented programs using classes, methods, and encapsulation.

**Assessed in:** Assignments Sessions 6-10, used throughout remainder

### CLO-3: Web Development Skills
Build interactive web applications using HTML, CSS, and JavaScript DOM manipulation.

**Assessed in:** Assignments Sessions 11-23

### CLO-4: Algorithm Development
Develop and implement algorithms for game logic, data processing, and problem-solving.

**Assessed in:** All assignments, particularly Sessions 5, 18-22

### CLO-5: Debugging and Testing
Identify, diagnose, and resolve errors in code using systematic debugging techniques.

**Assessed in:** All assignments, explicitly taught Session 24

---

## Rubric System

### Shared Components

To maintain consistency, rubrics use shared reusable rows:

**Code Correctness (40 points)**
- Does the code work?
- Does it handle required scenarios?
- Linked to CLO-1 or relevant outcome

**Code Quality (30 points)**
- Is it readable?
- Does it follow conventions?
- Is it well-organized?
- Linked to CLO-1

**Problem Solving (20 points)**
- Does it show logical thinking?
- Is the approach sound?
- Are edge cases handled?
- Linked to CLO-4

**Stretch Goals (10 bonus points)**
- Optional challenges attempted?
- Creative solutions?
- Goes beyond requirements?

### Customization

Individual assignments can:
- Adjust point values
- Add assignment-specific criteria
- Link to additional outcomes
- Provide detailed descriptions

---

## Student Support Model

### Instructor Role

In this self-paced model, instructors:
- **Circulate** among students working independently
- **Respond** to questions as they arise
- **Guide** rather than solve (ask questions, don't give answers)
- **Monitor** progress through Canvas data
- **Identify** students who need extra support
- **Encourage** effort and persistence

### Support Strategies

**When Students Are Stuck:**
1. Ask what they've tried
2. Help them read the error message
3. Show them where to find similar examples
4. Teach debugging techniques (console.log, breakpoints)
5. Break problem into smaller parts

**When Students Are Ahead:**
1. Encourage stretch challenges
2. Provide advanced resources
3. Ask them to help others (teaching reinforces learning)
4. Suggest extensions and variations

### Rolling Admission Accommodation

Since students join and leave at different times:
- All materials self-contained (no "we discussed this in class")
- No collaborative group work required
- Summative assessments don't show answers (prevents sharing)
- Clear progression allows students to start anywhere in sequence
- Instructor support individualized

---

## Quality Assurance

### Content Standards

**Every Session Must:**
- [ ] Follow consistent template
- [ ] Include all six components (reading, video, supplemental, quiz, assignment, wrap-up)
- [ ] Written at 8th grade level
- [ ] Use positive, encouraging tone
- [ ] Connect explicitly to Spades game
- [ ] Fit in 3-hour time block

**Every Assignment Must:**
- [ ] Include three difficulty levels
- [ ] Provide starter code for Level 1
- [ ] Include expected output
- [ ] Have attached rubric
- [ ] Link to learning outcomes
- [ ] Be tested and verified working

**Every Quiz Must:**
- [ ] Have 12-15 questions in bank
- [ ] Draw 6 questions randomly
- [ ] Mix question types
- [ ] Focus on understanding, not memorization
- [ ] Be tested in Canvas

### Testing Protocol

Before course launch:
1. **Content review:** All 25 sessions complete and proofread
2. **Technical testing:** All code examples run without errors
3. **Assessment validation:** All quizzes function in Canvas
4. **Rubric verification:** All rubrics attached and linked to outcomes
5. **Student walkthrough:** Test account completes first 3 sessions
6. **Offline verification:** All materials accessible without internet

---

## Maintenance and Iteration

### During Course

**Monitor:**
- Student quiz performance (identify difficult concepts)
- Assignment completion rates (identify too-hard assignments)
- Student questions (identify unclear instructions)
- Time to completion (identify pacing issues)

**Adjust:**
- Clarify confusing instructions
- Fix broken code examples
- Add hints to challenging assignments
- Update FAQs based on common questions

### Between Offerings

**Review:**
- Overall performance data
- Student feedback
- Instructor observations
- Industry changes (new JavaScript features, best practices)

**Update:**
- Revise underperforming content
- Refresh examples
- Update technologies
- Refine rubrics
- Improve assignment scaffolding

**Document:**
- Version each offering (Fall 2026, Spring 2027)
- Maintain changelog
- Track changes in Git
- Preserve previous versions for students mid-course

---

## Implementation Roadmap

### Phase 1: Setup (2-3 weeks)

**Week 1:**
- Set up Zaphod directory structure
- Create outcomes file and sync to Canvas
- Create module order file
- Develop reusable rubric rows
- Create session content template

**Week 2:**
- Develop Sessions 1-5 complete materials
- Record videos for Sessions 1-5
- Test Sessions 1-3 with test account
- Refine based on testing

**Week 3:**
- Develop Sessions 6-10
- Record videos for Sessions 6-10
- Create cumulative review materials

### Phase 2: Content Development (4-5 weeks)

**Weeks 4-5:**
- Develop Sessions 11-15 (including midterm)
- Record videos
- Test midterm quiz

**Weeks 6-7:**
- Develop Sessions 16-20
- Record videos
- Test game implementation materials

**Week 8:**
- Develop Sessions 21-25 (including final)
- Record videos
- Create final project showcase materials

### Phase 3: Quality Assurance (1-2 weeks)

**Week 9:**
- Complete end-to-end test
- Proofread all content
- Verify all links and references
- Test all quizzes and assignments
- Check rubric attachments

**Week 10:**
- Final polish
- Pilot with 1-2 students if possible
- Instructor training
- Launch preparation

### Phase 4: Launch and Iteration (Ongoing)

**Week 11+:**
- Course goes live
- Monitor student progress
- Respond to issues quickly
- Document improvement ideas
- Prepare for next iteration

---

## Success Metrics

### Student Learning

**Formative Indicators:**
- Practice quiz scores average > 80%
- Assignment submission rate > 90%
- Stretch goal attempt rate > 50%

**Summative Indicators:**
- Midterm average score > 75%
- Final average score > 75%
- Course completion rate > 80%

### Course Quality

**Content Effectiveness:**
- Low variation in assignment scores (indicates clear expectations)
- High correlation between practice quiz and assignment performance
- Consistent progression (each session builds appropriately)

**Student Satisfaction:**
- Positive feedback on clarity
- Minimal confusion about expectations
- Students report feeling prepared
- Students complete course

### Instructor Efficiency

**Workload Indicators:**
- Questions per student < 5 per session
- Time spent grading reduced by rubrics
- Minimal time fixing broken materials

---

## Conclusion

This curriculum restructure transforms existing Spades card game materials into a systematic, comprehensive 25-session course optimized for:
- Self-paced learning in an offline lab
- Rolling admission with students at different points
- Instructor support rather than lecture-based delivery
- Clear progression from fundamentals to complete game
- Multiple difficulty levels serving diverse learners
- Professional standards using the Zaphod/Canvas ecosystem

**Key Innovations:**
1. **Three-level scaffolding** (core/stretch/advanced) in every assignment
2. **Formative practice quizzes** supporting self-directed learning
3. **Consistent structure** reducing cognitive load
4. **Real-world context** (building actual game) maintaining motivation
5. **Outcome-aligned rubrics** ensuring standards-based grading
6. **Offline-first design** perfect for the lab environment

**Deliverables:**
- 25 complete session content pages
- 25 quiz banks (300+ questions total)
- 24 coding assignments with rubrics
- 2 summative assessments
- 25 video tutorials
- Complete Zaphod file structure
- Comprehensive implementation guide

The result is a professional-quality, standards-aligned programming course that teaches real skills through authentic game development, delivered through a modern offline authoring system optimized for the unique constraints of a self-paced lab environment.

---

## Next Steps

To implement this curriculum:

1. **Review** complete implementation guide (provided separately)
2. **Set up** Zaphod directory structure
3. **Create** outcomes and sync to Canvas
4. **Develop** sessions sequentially (start with 1-5)
5. **Test** each phase before moving to next
6. **Record** videos as content stabilizes
7. **Pilot** with small group if possible
8. **Launch** with full monitoring
9. **Iterate** based on student performance and feedback

Questions? See implementation guide or contact curriculum development team.
