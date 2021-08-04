// import "tailwindcss/tailwind.css"
let myLibrary = [];

function Book(author, title, pageCount, hasRead) {
  let book = {
    "author": author,
    "title": title,
    "pageCount": pageCount,
    "hasRead": hasRead
  };
  return book;
}

function addBookToLibrary() {
  let newBook = Book("Mary Higgins Clark", "Remember Me", 100, true);
  myLibrary.push(newBook);
}

addBookToLibrary();

for (var book in myLibrary) {
  console.log(myLibrary[book])

  const bookElement = `<p id="">${myLibrary[book].author + ' ' + myLibrary[book].title + ' ' + myLibrary[book].pageCount + ' ' + myLibrary[book].hasRead}</p>`;
  const bookholder = document.getElementById("bookholder");
  bookholder.insertAdjacentHTML('afterbegin', bookElement);
}