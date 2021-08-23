let myLibrary = [];

const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
const cancelBtn = document.querySelector("#cancel-btn");

newBookBtn.addEventListener("click", () => {
  newBookBtn.setAttribute("hidden", "");
  form.removeAttribute("hidden");
});

cancelBtn.addEventListener("click", () => {
  form.setAttribute("hidden", "");
  newBookBtn.removeAttribute("hidden");
});

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
  newBook.id = myLibrary.indexOf(newBook);
  displayBooks();
}

function displayBooks() {
  const display = document.querySelector("#display");

  while (display.firstChild) {
    display.firstChild.remove();
  }

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

    const bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.classList.add("btn", "btn-sm", "btn-outline-danger");
    bookRemoveBtn.addEventListener("click", () => {
      // find book with this id
      // remove book
      // update display
    });
    bookRemoveBtn.textContent = "Remove from Library";

    cardBody.append(bookAuthor, bookInfo, bookRemoveBtn);

    card.append(cardHeader, cardBody);

    display.append(card);
  });
}
