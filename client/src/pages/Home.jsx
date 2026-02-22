import { useBooks } from "../hooks/useBooks";

export default function Home() {
  const { books, loading, error } = useBooks();

  if (loading) return <p className="p-4">Cargando libros...</p>;
  if (error) return <p className="p-4 text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <h1>MyBookShelf</h1>

      {books.length === 0 ? (
        <p>No hay libros aún.</p>
      ) : (
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.id} className="list-group-item">
              <strong>{book.title}</strong> — {book.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
