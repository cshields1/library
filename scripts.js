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
  const display = document.querySelector("#display");

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card", "mx-auto", "my-3");

    const cardHeader = document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = book.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const bookAuthor = document.createElement("h6");
    bookAuthor.classList.add("card-subtitle");
    bookAuthor.textContent = `${book.author} (author)`;

    const bookInfo = document.createElement("p");
    bookInfo.classList.add("card-text");
    bookInfo.textContent = `${book.pages} pages long; ${
      book.hasBeenRead ? "has been read" : "has not been read"
    }.`;

    cardBody.append(bookAuthor, bookInfo);

    card.append(cardHeader, cardBody);

    display.append(card);
  });
}
