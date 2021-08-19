let myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
  const newBook = Object.create(Book.prototype);
  newBook.title = prompt("Title of book");
  newBook.author = prompt("Author of book");
  newBook.pages = +prompt("Number of pages");
  newBook.hasBeenRead = prompt("Has it been read? (yes/no)") === "yes";
  myLibrary.push(newBook);
}

function displayBooks() {
  const display = document.querySelector("div");

  myLibrary.forEach((book) => {
    const libraryBook = document.createElement("div");
    libraryBook.classList.add("card");
    libraryBook.textContent = book.title;
    display.appendChild(libraryBook);
  });
}
