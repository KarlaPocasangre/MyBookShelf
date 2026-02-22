import { useMemo, useState } from "react";
import { useBooks } from "../hooks/useBooks";
import BookList from "../components/books/BookList";
import BookFilters from "../components/books/BookFilters";

export default function Home() {
  const { books, loading, error, removeBook, editBook } = useBooks();

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredBooks = useMemo(() => {
    return books.filter((b) => {
      const matchesStatus =
        statusFilter === "ALL" ? true : b.status === statusFilter;
      const matchesFav = favoriteOnly ? b.isFavorite === true : true;
      return matchesStatus && matchesFav;
    });
  }, [books, statusFilter, favoriteOnly]);

  function clearFilters() {
    setStatusFilter("ALL");
    setFavoriteOnly(false);
  }

  if (loading) return <p className="p-4">Cargando libros...</p>;
  if (error) return <p className="p-4 text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <h1>MyBookShelf</h1>

      <BookFilters
        status={statusFilter}
        favoriteOnly={favoriteOnly}
        onChangeStatus={setStatusFilter}
        onToggleFavoriteOnly={setFavoriteOnly}
        onClear={clearFilters}
      />

      {filteredBooks.length === 0 ? (
        <p>No hay libros con esos filtros.</p>
      ) : (
        <BookList
          books={filteredBooks}
          onDelete={removeBook}
          onUpdate={editBook}
        />
      )}
    </div>
  );
}
