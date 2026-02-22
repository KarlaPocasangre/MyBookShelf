// Simulamos una "DB" en memoria (temporal)
// En el Hito 2 lo reemplazamos por DB real.
const books = [
  {
    id: "1",
    title: "Clean Code",
    description: "Un clásico para escribir código mantenible.",
    imageUrl: "",
    status: "IN_PROGRESS",
    isFavorite: true,
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    description: "Mentalidad práctica para devs.",
    imageUrl: "",
    status: "READ",
    isFavorite: false,
  },
];

function getAllBooks() {
  return books;
}

function createBook(payload) {
  const newBook = {
    id: crypto.randomUUID(),
    title: payload.title.trim(),
    description: payload.description?.trim() || "",
    imageUrl: payload.imageUrl?.trim() || "",
    status: payload.status || "IN_PROGRESS",
    isFavorite: Boolean(payload.isFavorite),
  };

  books.push(newBook);
  return newBook;
}

function getBookById(id) {
  return books.find((book) => book.id === id);
}

function updateBook(id, payload) {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;

  books[index] = {
    ...books[index],
    ...payload,
  };

  return books[index];
}

function deleteBook(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
