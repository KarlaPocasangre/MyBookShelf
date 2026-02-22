import { useEffect, useState } from "react";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/books.service";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadBooks() {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError("Error al cargar libros");
    } finally {
      setLoading(false);
    }
  }

  async function addBook(payload) {
    try {
      setError(null);
      const newBook = await createBook(payload);
      setBooks((prev) => [...prev, newBook]);
      return newBook;
    } catch (err) {
      setError("Error al crear libro");
      throw err;
    }
  }

  async function editBook(id, payload) {
    const updated = await updateBook(id, payload);
    setBooks((prev) => prev.map((book) => (book.id === id ? updated : book)));
  }

  async function removeBook(id) {
    try {
      setError(null);
      await deleteBook(id);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      setError("Error al eliminar libro");
      throw err;
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return {
    books,
    loading,
    error,
    loadBooks,
    addBook,
    editBook,
    removeBook,
  };
}
