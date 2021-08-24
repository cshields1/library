let myLibrary = [
  {
    title: "The Children of Men",
    author: "PD James",
    pages: 241,
    hasBeenRead: false,
  },
  {
    title: "Think like a Programmer",
    author: "V. Anton Spraul",
    pages: 233,
    hasBeenRead: false,
  },
  {
    title: "DRIL",
    author: "WINT",
    pages: 417,
    hasBeenRead: true,
  },
];

displayBooks();

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
    card.setAttribute("data-id", `${myLibrary.indexOf(book)}`);

    const cardHeader = document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = book.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const bookAuthor = document.createElement("h6");
    bookAuthor.classList.add("card-subtitle");
    bookAuthor.textContent = book.author;

    const bookInfo = document.createElement("p");
    bookInfo.classList.add("card-text");
    bookInfo.textContent = `${book.pages} pages long; ${
      book.hasBeenRead ? "has been read" : "has not been read"
    }.`;

    const bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.classList.add("btn", "btn-sm", "btn-outline-danger");
    bookRemoveBtn.addEventListener("click", function removeBook() {
      const bookToRemove = this.parentElement.parentElement.dataset.id;
      myLibrary.splice(bookToRemove, 1);
      displayBooks();
    });
    bookRemoveBtn.textContent = "Remove from Library";

    cardBody.append(bookAuthor, bookInfo, bookRemoveBtn);

    card.append(cardHeader, cardBody);

    display.append(card);
  });
}
