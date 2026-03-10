// classroom.js — Session 10 example solution
import { Student } from './Student.js';

const students = [
  new Student("Alex", 85),
  new Student("Jordan", 65),
  new Student("Casey", 90)
];

for (const s of students) {
  console.log(`${s.name}: ${s.isPassing() ? "Passing" : "Not passing"}`);
}
