import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import BookForm from "../components/books/BookForm";
import { getBookById, updateBook } from "../services/books.service";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const book = await getBookById(id);
        setInitialValues(book);
      } catch {
        Swal.fire({
          icon: "error",
          title: "No encontrado",
          text: "Ese libro no existe.",
        });
        navigate("/");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id, navigate]);

  async function handleUpdate(payload) {
    try {
      setSubmitting(true);
      await updateBook(id, payload);

      await Swal.fire({
        icon: "success",
        title: "Actualizado",
        timer: 1200,
        showConfirmButton: false,
      });

      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el libro.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p className="p-4">Cargando...</p>;

  return (
    <div className="container py-4">
      <h1>Editar Libro</h1>
      <BookForm
        initialValues={initialValues}
        onSubmit={handleUpdate}
        submitting={submitting}
      />
    </div>
  );
}
