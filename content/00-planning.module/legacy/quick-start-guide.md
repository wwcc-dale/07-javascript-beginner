# Quick Start Guide: Implementing Spades Curriculum with Zaphod

This quick reference guide provides step-by-step instructions for implementing the Spades card game curriculum using Zaphod and Canvas.

---

## Prerequisites

- [ ] Zaphod installed and configured
- [ ] Canvas course created
- [ ] Canvas API credentials configured in Zaphod
- [ ] Git repository initialized (recommended)
- [ ] Text editor (VS Code recommended)

---

## Step 1: Initial Setup (30 minutes)

### Create Directory Structure

```bash
mkdir -p spades-course/{pages,quiz-banks,rubrics/rows,outcomes,modules,assets/{videos,images,starter-files},_course_metadata}
cd spades-course
git init
```

### Create Outcomes File

Create `outcomes/outcomes.yaml`:

```yaml
course_outcomes:
  - code: "CLO-1"
    title: "Programming Fundamentals"
    description: "Apply core programming concepts"
    vendor_guid: "SPADES-CLO-1"
    mastery_points: 3
    ratings:
      - points: 4
        description: "Exceeds"
      - points: 3
        description: "Meets"
      - points: 2
        description: "Developing"
      - points: 1
        description: "Beginning"
      - points: 0
        description: "Not Demonstrated"
  # Add CLO-2 through CLO-5 similarly
```

### Sync Outcomes to Canvas

```bash
zaphod sync outcomes
```

### Get Canvas Outcome IDs

1. Log into Canvas
2. Go to Outcomes section
3. Click each outcome
4. Note the ID from the URL (e.g., `.../outcomes/12345`)

### Create Outcome Map

Create `_course_metadata/outcome_map.json`:

```json
{
  "CLO-1": 12345,
  "CLO-2": 12346,
  "CLO-3": 12347,
  "CLO-4": 12348,
  "CLO-5": 12349
}
```

### Create Module Order

Create `modules/module_order.yaml`:

```yaml
related_outcomes:
  - "CLO-1"
submission_types:
  - "online_upload"
allowed_extensions:
  - "js"
---

# Session 1: Card Comparison Assignment

[Complete assignment per template]
```

### Create Assignment Rubric

Create `pages/01-Foundations.module/03-session-1-assignment.assignment/rubric.yaml`:

```yaml
title: "Session 1 Assignment Rubric"

criteria:
  - "{{rubric_row:code_correctness}}"
  - "{{rubric_row:code_quality}}"
  - "{{rubric_row:problem_solving}}"
  - "{{rubric_row:creativity}}"
```

### Create Starter Files

Create `pages/01-Foundations.module/03-session-1-assignment.assignment/starter-files/session-01-starter.js`:

```javascript
// Session 1 Starter Code

// Challenge 1: Create Card Variables
// TODO: Create variables for cardRank, cardSuit, cardValue

// Challenge 2: Compare Two Cards
const card1Value = 14;
const card2Value = 10;
// TODO: Write if/else to compare cards

// [Complete starter code]
```

### Sync Everything

```bash
zaphod sync
```

### Test in Canvas

1. Log in as test student
2. Navigate to Module "01-Foundations"
3. Check session page displays correctly
4. Take practice quiz
5. View assignment and download starter files
6. Verify rubric is attached

---

## Step 4: Record Session Video (1-2 hours)

### Video Content
- 15-25 minutes total
- Screen recording with code editor
- Cover main concepts from reading
- Show live coding examples
- Make and fix intentional mistakes
- Provide captions

### Save Video
- Place in `assets/videos/session-01-basics.mp4`
- Reference in session content page

---

## Step 5: Repeat for Remaining Sessions

For Sessions 2-25, repeat Step 3:

1. Create content page (copy template, modify)
2. Create quiz bank (12-15 questions)
3. Sync and get bank ID
4. Create practice quiz (reference bank)
5. Create assignment
6. Create rubric (reuse rows)
7. Create starter files
8. Record video
9. Sync to Canvas
10. Test

**Time estimate per session:** 3-4 hours once you have the rhythm

---

## Special Procedures: Summative Assessments

### Session 15: Midterm

After creating Sessions 1-14, create midterm:

1. Create `quiz-banks/midterm-cumulative.bank.md` with 15-20 synthesis questions
2. Create `pages/03-Web-Technologies.module/15-midterm-assessment.quiz/index.md`
3. Configure to pull 2-4 questions from EACH session bank (1-14)
4. Pull 8 questions from cumulative bank
5. Set `quiz_type: assignment`, 1 attempt, 90 minutes
6. Set `show_correct_answers: false`

```yaml
question_groups:
  - bank_id: [SESSION_1_BANK]
    pick: 3
    points_per_question: 2
  - bank_id: [SESSION_2_BANK]
    pick: 3
    points_per_question: 2
  # ... repeat for all session banks 1-14 ...
  - bank_id: [MIDTERM_BANK]
    pick: 8
    points_per_question: 3
```

### Session 25: Final

Similar to midterm but:
- Pull from ALL session banks (1-24)
- 2-3 questions per bank
- 10 questions from final cumulative bank
- 120 minute time limit
- Total: 60-70 questions

---

## Workflow Tips

### Daily Workflow

```bash
# Start of day
cd spades-course
git pull  # if collaborating

# Make changes to content
# ... edit files ...

# Sync to Canvas
zaphod sync

# Check for errors
# Fix any issues
# Test in Canvas

# End of day
git add .
git commit -m "Added Session X materials"
git push
```

### Testing Checklist

For each session:
- [ ] Content page displays correctly
- [ ] All code examples work
- [ ] Links and references are correct
- [ ] Video plays
- [ ] Practice quiz draws questions
- [ ] Practice quiz shows correct answers
- [ ] Assignment displays
- [ ] Rubric is attached
- [ ] Starter files download
- [ ] Outcomes are linked

### Common Issues

**"Bank not found"**
- Did you sync the bank first?
- Did you use the Canvas bank ID (not the filename)?

**"Rubric not attaching"**
- Did you create rubric rows first?
- Is the rubric.yaml in the .assignment folder?
- Did you run `zaphod sync rubrics`?

**"Video not playing"**
- Is the file path correct?
- Is the file in MP4 format?
- Did you sync after adding the video?

**"Outcomes not linking"**
- Did you sync outcomes first?
- Is the outcome_map.json correct?
- Are the outcome codes spelled correctly?

---

## Maintenance Tasks

### Weekly During Course
- Monitor student quiz performance
- Check assignment submission rates
- Respond to student questions
- Fix any errors reported
- Update FAQs

### Between Course Offerings
- Review all student performance data
- Update confusing content
- Refresh examples
- Update technologies if needed
- Test entire course end-to-end
- Version tag in Git (e.g., `Fall2026`)

---

## Resources

### Templates
- Session content: See Session 1 example
- Quiz bank: 12-15 questions per session
- Assignment: Three difficulty levels
- Rubric: Use shared rows

### File Naming Conventions
- Session content: `01-session-1-content.page/`
- Practice quiz: `02-session-1-quiz.quiz/`
- Assignment: `03-session-1-assignment.assignment/`
- Prefix with numbers for ordering

### Documentation
- Zaphod docs: See attached files
- This implementation guide
- Executive summary
- Complete implementation guide

---

## Getting Help

**Zaphod Issues:**
- Check documentation in attached files
- Verify .yaml frontmatter syntax
- Check Zaphod logs for errors

**Canvas Issues:**
- Verify sync completed successfully
- Check Canvas manually
- Clear cache if content not updating

**Content Issues:**
- Review session template
- Check reading level (8th grade)
- Ensure positive tone
- Verify time estimates

**Technical Issues:**
- Test all code examples
- Check file paths
- Verify extensions are correct

---

## Success Checklist

**Before Launch:**
- [ ] All 25 sessions complete
- [ ] All quiz banks created and synced
- [ ] All assignments created with rubrics
- [ ] All videos recorded and uploaded
- [ ] Midterm and final assessments configured
- [ ] All outcomes linked
- [ ] Complete test walkthrough performed
- [ ] Instructor trained

**After Launch:**
- [ ] Monitor student progress
- [ ] Respond to questions quickly
- [ ] Track common issues
- [ ] Document improvements
- [ ] Celebrate student success!

---

## Time Estimates

**Initial Setup:** 1-2 days
- Directory structure: 30 min
- Outcomes: 2 hours
- Reusable rubrics: 1 hour
- Module setup: 30 min

**Per Session Development:** 3-4 hours
- Content writing: 1-1.5 hours
- Quiz bank: 30-45 min
- Assignment: 1 hour
- Starter files: 30 min
- Video: 1-2 hours

**Total Development Time:** 
- 1-2 days setup + (25 sessions × 3.5 hours) = **~90 hours**

**With team or experience:** Can reduce to 60-70 hours

---

## Final Tips

1. **Start small:** Perfect Sessions 1-3 before moving on
2. **Test often:** Sync and check Canvas after each session
3. **Use version control:** Git saves you from mistakes
4. **Get feedback:** Pilot with 1-2 students if possible
5. **Document as you go:** Note issues and solutions
6. **Be patient:** First iteration takes time; second is much faster
7. **Celebrate progress:** 25 sessions is a big accomplishment!

---

You're ready to start! Begin with Step 1 and work systematically through the process. Good luck! 🎉
