import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import { BOOK_STATUS_LABEL } from "../../utils/constants";

export default function BookCard({ book, onDelete, onUpdate }) {
  async function handleDelete() {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Eliminar libro?",
      text: `Se eliminará "${book.title}". Esta acción no se puede deshacer.`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
    });

    if (!result.isConfirmed) return;

    try {
      await onDelete(book.id);

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el libro.",
      });
    }
  }

  async function handleMarkAsRead() {
    try {
      await onUpdate(book.id, { status: "READ" });
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el libro.",
      });
    }
  }

  async function handleToggleFavorite() {
    try {
      await onUpdate(book.id, { isFavorite: !book.isFavorite });

      Swal.fire({
        icon: "success",
        title: book.isFavorite
          ? "Quitado de favoritos"
          : "Agregado a favoritos",
        timer: 900,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar favorito.",
      });
    }
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-3">
        <strong>{book.title}</strong>
        <div className="text-muted small">
          {book.description || "Sin descripción"}
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className="badge text-bg-secondary">
          {BOOK_STATUS_LABEL[book.status] ?? book.status}
        </span>
        {book.status === "IN_PROGRESS" && (
          <button
            className="btn btn-outline-success btn-sm"
            onClick={handleMarkAsRead}
          >
            Marcar como leído
          </button>
        )}
        <button
          className={`btn btn-sm ${book.isFavorite ? "btn-warning" : "btn-outline-warning"}`}
          onClick={handleToggleFavorite}
          title="Favorito"
        >
          {book.isFavorite ? "★" : "☆"}
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
