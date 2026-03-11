---
allowed_extensions:
- js
assignment_type: online
module: 2
name: 'Session 8: Library Management System'
points: 20
position: 9
published: true
related_outcomes:
- CLO-2
- CLO-3
session: 8.3
submission_types:
- online_upload
---

# Session 8: Library Management System

Build a system with Book and Library classes that manage collections of objects.

**Time:** 60–90 minutes | **Points:** 20 | **Submit:** `08-assignment.js`

## Getting Started

**[Download starter file](08-starter.js)**

1. Open the starter file, save a copy as `08-assignment.js`, and complete each challenge.

## Level 1 – Core Tasks (15 points)

### Challenge 1: Book Class
```js
// TODO: Create a Book class with:
// - Constructor: title, author, pages, isCheckedOut (default false)
// - Method checkout(): sets isCheckedOut to true
// - Method returnBook(): sets isCheckedOut to false
// - Method getInfo(): returns string with book details

// Test:
// const book = new Book("JS Guide", "Jane Dev", 300);
// book.checkout();
// console.log(book.isCheckedOut); // true
```

### Challenge 2: Library Class (Container)
```js
// TODO: Create a Library class with:
// - Constructor: name
// - Property: books (empty array)
// - Method addBook(book): adds book to array
// - Method getTotalBooks(): returns books.length
// - Method getAvailableBooks(): counts books where isCheckedOut is false

// Test:
// const lib = new Library("City Library");
// lib.addBook(new Book("Book 1", "Author 1", 200));
// lib.addBook(new Book("Book 2", "Author 2", 150));
// console.log(lib.getTotalBooks()); // 2
```

### Challenge 3: Find Books by Author
```js
// TODO: Add method to Library class:
// - findByAuthor(authorName): returns array of books by that author

// Test:
// const books = lib.findByAuthor("Jane Dev");
// books should be an array of matching books
```

### Challenge 4: Checkout System
```js
// TODO: Add method to Library class:
// - checkoutBook(title): finds book by title and checks it out
// - Returns true if successful, false if not found or already checked out

// Test:
// lib.checkoutBook("JS Guide"); // true
// lib.checkoutBook("JS Guide"); // false (already out)
```

## Level 2 – Stretch (3 points)

### Challenge 5: Statistics
Add methods to Library:
- getMostPages(): returns book with most pages
- getAveragePages(): returns average page count
- getCheckedOutCount(): counts checked out books

### Challenge 6: Member Class
Create a Member class with:
- Properties: name, checkedOutBooks (array)
- Method checkoutBook(book): adds to their array if book available
- Method returnBook(book): removes from their array

## Level 3 – Advanced (2 points)

### Challenge 7: Complete System
Build a system with:
- Book class (from Challenge 1)
- Member class (from Challenge 6)
- Library class that tracks both books and members
- Method library.checkoutToMember(bookTitle, memberName)
- Method library.getMemberBooks(memberName)
- Proper validation throughout

Test with 5 books and 3 members.