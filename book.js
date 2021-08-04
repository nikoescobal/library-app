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

  const bookElement = `<p id="">${book.author + book.title + book.pageCount + book.hasRead}</p>`
  const bookholder = document.getElementById("bookholder");
  bookholder.appendChild(bookElement);
  // document.getElementById("bookholder").innerHTML = bookElement;
  //document.getElementById("book" + x + "-id").innerText =
}

for (let index = 0; index < array.length; index++) {
  const bookElement = `<p id="">${myLibrary[index].author + myLibrary[index].title + myLibrary[index].pageCount + myLibrary[index].hasRead}</p>`
  const element = array[index];

}