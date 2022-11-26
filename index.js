function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function fetchCharacters() {
  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((json) => console.log(json));
}

function renderBooks(books) {
  let pages = 0;
  console.log(`The 5th book is ${books[4].name}`);
  const main = document.querySelector("main");
  books.forEach((book) => {
    pages += book["numberOfPages"];
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  console.log(pages);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  fetchCharacters();
});
