import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/books/BookForm";
import { useBooks } from "../hooks/useBooks";

export default function NewBook() {
  const navigate = useNavigate();
  const { addBook } = useBooks();
  const [submitting, setSubmitting] = useState(false);

  async function handleCreate(payload) {
    try {
      setSubmitting(true);
      await addBook(payload);

      await Swal.fire({
        icon: "success",
        title: "Libro creado",
        text: "Se agregó a tu estantería.",
        timer: 1400,
        showConfirmButton: false,
      });

      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "No se pudo crear el libro.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-4">
      <h1>Nuevo Libro</h1>
      <BookForm onSubmit={handleCreate} submitting={submitting} />
    </div>
  );
}
