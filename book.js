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

  const bookholder = document.getElementById('bookholder');

  myLibrary.forEach((book) => {
    const bookElement = `
    <article
        class="
          bg-white
          max-w-xs
          rounded-2xl
          border-b-4 border-red-500
          overflow-hidden
          shadow-lg
          hover:shadow-2xl
          transition
          duration-500
          transform
          hover:scale-105
          cursor-pointer
        "
      >
        <div class="h-20 bg-red-500 flex items-center">
          <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
            ${book.hasRead}:
          </h1>
          <p class="text-white text-base ml-4 uppercase">${book.title}</p>
        </div>
        <p class="py-3 px-6 text-lg tracking-wide text-center">${book.author}</p>
        <p class="py-3 px-6 text-lg tracking-wide text-center">${book.pageCount}</p>

        <p class="py-6 px-6 text-lg tracking-wide text-center">
          Description Goes Here
        </p>
        <!-- <hr > -->
        <div class="flex justify-center px-5 mb-2 text-sm">
        <button onClick="removeBookFromLibrary('${book.title}')"
            type="button"
            class="
              removeBtn
              border border-red-500
              text-red-500
              rounded-md
              px-4
              py-2
              m-2
              transition
              duration-500
              ease
              select-none
              hover:text-white hover:bg-green-600
              focus:outline-none focus:shadow-outline
            "
          >
            Remove
          </button>
        </div>
      </article>
    `;
    bookholder.innerHTML += bookElement;
  });
}

function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pageCount = document.getElementById('pageCount').value;
  const hasRead = document.getElementById('check').checked;
  const newBook = Book(author, title, pageCount, hasRead);
  myLibrary.push(newBook);
  displayLibrary();
}

/* eslint-disable */
function removeBookFromLibrary(bookTitle) {
  const newLibrary = myLibrary.filter((book) => book.title !== bookTitle);
  myLibrary = newLibrary;
  displayLibrary();
}
/* eslint-enable */

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