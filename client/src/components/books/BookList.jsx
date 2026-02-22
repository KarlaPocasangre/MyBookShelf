import BookCard from "./BookCard";

export default function BookList({ books, onDelete, onUpdate }) {
  return (
    <ul className="list-group">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
