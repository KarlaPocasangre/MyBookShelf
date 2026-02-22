const booksService = require("../services/books.service");

function getAll(req, res) {
  const books = booksService.getAllBooks();
  res.json({ data: books });
}
function create(req, res) {
  const { title } = req.body;

  if (!title || title.trim().length < 2) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "El título es obligatorio (mínimo 2 caracteres).",
    });
  }

  const created = booksService.createBook(req.body);
  return res.status(201).json({ data: created });
}

function getById(req, res) {
  const book = booksService.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Libro no encontrado",
    });
  }

  res.json({ data: book });
}

function update(req, res) {
  const updated = booksService.updateBook(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Libro no encontrado",
    });
  }

  res.json({ data: updated });
}

function remove(req, res) {
  const deleted = booksService.deleteBook(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Libro no encontrado",
    });
  }

  res.status(204).send();
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
};
