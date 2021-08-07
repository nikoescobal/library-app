/* eslint-disable */
let myLibrary = [];

function Book(author, title, pageCount, hasRead) {
  const book = {
    author,
    title,
    pageCount,
    hasRead,
  };
  return book;
}

function clearDisplay() {
  const bookholder = document.getElementById('bookholder');
  bookholder.innerHTML = '';
}

function displayLibrary() {
  clearDisplay();
}

function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pageCount = document.getElementById('pageCount').value;
  const hasRead = document.getElementById('check').checked;
  const newBook = Book(author, title, pageCount, hasRead);
  myLibrary.push(newBook);
  displayLibrary();

  const savedLibrary = JSON.stringify(myLibrary);
  localStorage.setItem('book', savedLibrary);
  // const book =
  localStorage.getItem('book');
  localStorage.clear();
}

function removeBookFromLibrary(bookTitle) {
  const newLibrary = myLibrary.filter((book) => book.title !== bookTitle);
  myLibrary = newLibrary;
  displayLibrary();
}

const bookholder = document.getElementById('bookholder');

myLibrary.forEach((book) => {
  const bookElement = `<p>${book.author} ${book.title} ${book.pageCount} ${book.hasRead} <button class="remove-book" onClick="removeBookFromLibrary('${book.title}');">x</button></p>`;
  bookholder.innerHTML += bookElement;
});

document.getElementById('submit').addEventListener('click', () => {
  addBookToLibrary();
});

function displayForm() {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

document.getElementById('displayForm').addEventListener('click', displayForm);

displayLibrary();