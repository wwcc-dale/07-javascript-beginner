# Session 8 Hints — Library Management System

## Challenge 1: Book
- `getInfo()` should return a single string that combines all the book details.
  Template literals make this clean: `` `"${this.title}" by ${this.author}` ``

## Challenge 2: Library basics
- `getAvailableBooks()` counts books where `isCheckedOut` is `false`.
  Loop and count, or use `.filter(b => !b.isCheckedOut).length`.

## Challenge 3: findByAuthor
- Use `.filter()` to return all books where `book.author === authorName`.
  The result is an array — it might be empty, and that's fine.

## Challenge 4: checkoutBook
- Two failure conditions: book not found *and* book already checked out.
- Find the book first with `.find()`. If `!book || book.isCheckedOut`, return false.
- Otherwise call `book.checkout()` and return true.

## Challenge 5: Statistics (Level 2)
- `getMostPages()`: same "find maximum" pattern — start with the first book, compare `pages`.
- `getAveragePages()`: sum all `book.pages`, divide by `books.length`.

## Challenge 6: Member (Level 2)
- `checkoutBook(book)` on a Member adds the book to *their* array AND calls `book.checkout()`.
- `returnBook(book)` removes it from their array AND calls `book.returnBook()`.

## Challenge 7: Complete System (Level 3)
- `checkoutToMember(bookTitle, memberName)` needs to find both objects first.
  If either isn't found, or the book is already checked out, return false.
- Track members in a separate array alongside `books`.
