// import "tailwindcss/tailwind.css"
const myLibrary = [];

function Book(author, title, pageCount, hasRead) {
  const book = {
    author,
    title,
    pageCount,
    hasRead,
  };
  return book;
}

function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pageCount = document.getElementById('pageCount').value;
  const hasRead = document.getElementById('check').checked;
  const newBook = Book(author, title, pageCount, hasRead);
  myLibrary.push(newBook);
  const bookElement = `<p id="">${`${author} ${title} ${pageCount} ${hasRead}`}</p>`;
  const bookholder = document.getElementById('bookholder');
  bookholder.insertAdjacentHTML('afterbegin', bookElement);
}

myLibrary.forEach((book) => {
  const bookElement = `<p id="">${`${book.author} ${book.title} ${book.pageCount} ${book.hasRead}`}</p>`;
  const bookholder = document.getElementById('bookholder');
  bookholder.insertAdjacentHTML('afterbegin', bookElement);
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