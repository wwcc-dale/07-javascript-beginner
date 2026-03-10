// Student.js — Session 10 example solution
export class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  isPassing() {
    return this.grade >= 70;
  }
}
