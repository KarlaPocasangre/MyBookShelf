const booksService = require("../services/books.service");

async function getAll(req, res) {
  const books = await booksService.getAllBooks();
  res.json({ data: books });
}

async function create(req, res) {
  const { title } = req.body;

  if (!title || title.trim().length < 2) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "El título es obligatorio (mínimo 2 caracteres).",
    });
  }

  const created = await booksService.createBook(req.body);
  return res.status(201).json({ data: created });
}

async function getById(req, res) {
  const book = await booksService.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Libro no encontrado",
    });
  }

  res.json({ data: book });
}

async function update(req, res) {
  const updated = await booksService.updateBook(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Libro no encontrado",
    });
  }

  res.json({ data: updated });
}

async function remove(req, res) {
  const deleted = await booksService.deleteBook(req.params.id);

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
