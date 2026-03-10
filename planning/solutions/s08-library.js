// Session 8: Library Management System — Example Solution

// === LEVEL 1 ===

// Challenge 1: Book Class
class Book {
  constructor(title, author, pages, isCheckedOut = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isCheckedOut = isCheckedOut;
  }
  checkout() {
    this.isCheckedOut = true;
  }
  returnBook() {
    this.isCheckedOut = false;
  }
  getInfo() {
    const status = this.isCheckedOut ? "Checked Out" : "Available";
    return `"${this.title}" by ${this.author} (${this.pages} pages) — ${status}`;
  }
}

// Challenge 2–4: Library Class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  getTotalBooks() {
    return this.books.length;
  }
  getAvailableBooks() {
    return this.books.filter(b => !b.isCheckedOut).length;
  }
  // Challenge 3
  findByAuthor(authorName) {
    return this.books.filter(b => b.author === authorName);
  }
  // Challenge 4
  checkoutBook(title) {
    const book = this.books.find(b => b.title === title);
    if (!book || book.isCheckedOut) return false;
    book.checkout();
    return true;
  }
  returnBook(title) {
    const book = this.books.find(b => b.title === title);
    if (!book || !book.isCheckedOut) return false;
    book.returnBook();
    return true;
  }
}

const lib = new Library("City Library");
lib.addBook(new Book("JS Guide", "Jane Dev", 300));
lib.addBook(new Book("HTML Basics", "Jane Dev", 150));
lib.addBook(new Book("CSS Tips", "Bob Builder", 200));

console.log(lib.getTotalBooks());   // 3
console.log(lib.checkoutBook("JS Guide")); // true
console.log(lib.checkoutBook("JS Guide")); // false (already out)
console.log(lib.getAvailableBooks()); // 2

const janeBooksArr = lib.findByAuthor("Jane Dev");
console.log(janeBooksArr.map(b => b.title)); // ["JS Guide", "HTML Basics"]

// === LEVEL 2 ===

// Challenge 5: Statistics
Library.prototype.getMostPages = function() {
  return this.books.reduce((best, b) => b.pages > best.pages ? b : best);
};
Library.prototype.getAveragePages = function() {
  const total = this.books.reduce((sum, b) => sum + b.pages, 0);
  return total / this.books.length;
};
Library.prototype.getCheckedOutCount = function() {
  return this.books.filter(b => b.isCheckedOut).length;
};
console.log(lib.getMostPages().title);   // JS Guide
console.log(lib.getAveragePages());      // ~216.7
console.log(lib.getCheckedOutCount());   // 1

// Challenge 6: Member Class
class Member {
  constructor(name) {
    this.name = name;
    this.checkedOutBooks = [];
  }
  checkoutBook(book) {
    if (!book.isCheckedOut) {
      book.checkout();
      this.checkedOutBooks.push(book);
      return true;
    }
    return false;
  }
  returnBook(book) {
    const idx = this.checkedOutBooks.indexOf(book);
    if (idx !== -1) {
      this.checkedOutBooks.splice(idx, 1);
      book.returnBook();
      return true;
    }
    return false;
  }
}

// === LEVEL 3 ===

// Challenge 7: Complete System
class FullLibrary extends Library {
  constructor(name) {
    super(name);
    this.members = [];
  }
  addMember(member) {
    this.members.push(member);
  }
  checkoutToMember(bookTitle, memberName) {
    const book = this.books.find(b => b.title === bookTitle);
    const member = this.members.find(m => m.name === memberName);
    if (!book || !member || book.isCheckedOut) return false;
    book.checkout();
    member.checkedOutBooks.push(book);
    return true;
  }
  getMemberBooks(memberName) {
    const member = this.members.find(m => m.name === memberName);
    return member ? member.checkedOutBooks.map(b => b.title) : [];
  }
}

const fullLib = new FullLibrary("Main Library");
["Book A", "Book B", "Book C", "Book D", "Book E"].forEach((t, i) =>
  fullLib.addBook(new Book(t, "Author " + (i + 1), 100 + i * 50))
);
["Alice", "Bob", "Carol"].forEach(name => fullLib.addMember(new Member(name)));

fullLib.checkoutToMember("Book A", "Alice");
fullLib.checkoutToMember("Book C", "Alice");
fullLib.checkoutToMember("Book B", "Bob");
console.log(fullLib.getMemberBooks("Alice")); // ["Book A", "Book C"]
console.log(fullLib.getMemberBooks("Bob"));   // ["Book B"]
