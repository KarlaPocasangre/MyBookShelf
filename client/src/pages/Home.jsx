import { useBooks } from "../hooks/useBooks";
import BookList from "../components/books/BookList";

export default function Home() {
  const { books, loading, error, removeBook, editBook } = useBooks();

  if (loading) return <p className="p-4">Cargando libros...</p>;
  if (error) return <p className="p-4 text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <h1>MyBookShelf</h1>

      {books.length === 0 ? (
        <p>No hay libros aún.</p>
      ) : (
        <BookList books={books} onDelete={removeBook} onUpdate={editBook} />
      )}
    </div>
  );
}
