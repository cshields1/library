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

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
}

Book.prototype.toggleRead = function () {
  console.dir(this);
};

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

    const cardHeader = document.createElement("h5");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = book.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("row");

    const authorInfoDiv = document.createElement("div");
    authorInfoDiv.classList.add("col");

    const bookAuthor = document.createElement("h6");
    bookAuthor.classList.add("card-subtitle", "my-1");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.classList.add("card-text", "my-2");
    bookPages.textContent = `${book.pages} pages`;

    const readStatus = document.createElement("p");
    readStatus.classList.add("card-text", "my-2");
    readStatus.setAttribute("data-id", myLibrary.indexOf(book));
    readStatus.textContent = `${book.hasBeenRead ? "Read." : "Unread."}`;

    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("col", "d-sm-flex");

    const hasReadBtn = document.createElement("button");
    hasReadBtn.classList.add("btn", "btn-sm", "btn-outline-primary");
    hasReadBtn.setAttribute("data-id", myLibrary.indexOf(book));
    hasReadBtn.addEventListener("click", function () {
      const thisBook = myLibrary[this.getAttribute("data-id")];
      thisBook.hasBeenRead
        ? (thisBook.hasBeenRead = false)
        : (thisBook.hasBeenRead = true);
      readStatus.textContent = `${!book.hasBeenRead ? "Unread." : "Read."}`;
    });
    hasReadBtn.textContent = "Read/Unread";

    const bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.classList.add("btn", "btn-sm", "btn-outline-danger");
    bookRemoveBtn.setAttribute("data-id", myLibrary.indexOf(book));
    bookRemoveBtn.addEventListener("click", function () {
      const bookIndex = this.getAttribute("data-id");
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    });
    bookRemoveBtn.textContent = "Remove";

    authorInfoDiv.append(bookAuthor, bookPages, readStatus);

    btnsDiv.append(hasReadBtn, bookRemoveBtn);

    cardBodyDiv.append(authorInfoDiv, btnsDiv);

    cardBody.append(cardBodyDiv);

    card.append(cardHeader, cardBody);

    display.append(card);
  });
}
