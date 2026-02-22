import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { BOOK_STATUS_LABEL } from "../../utils/constants";

export default function BookCard({ book, onDelete, onUpdate }) {
  const navigate = useNavigate();

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
    <li className="list-group-item d-flex justify-content-between align-items-start">
      {/* IZQUIERDA: imagen + texto + (debajo) estado y leído */}
      <div className="d-flex align-items-start gap-3 me-3 flex-grow-1">
        {/* Imagen */}
        {book.imageUrl ? (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="rounded border"
            style={{ width: 70, height: 100, objectFit: "cover" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              console.warn("Imagen no cargó:", book.imageUrl);
            }}
          />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center rounded border text-muted"
            style={{ width: 70, height: 100, fontSize: 12 }}
            title="Sin imagen"
          >
            Sin imagen
          </div>
        )}

        {/* Texto + acciones debajo */}
        <div className="flex-grow-1">
          <strong>{book.title}</strong>

          <div className="text-muted small">
            {book.description || "Sin descripción"}
          </div>

          {/* 👇 AQUÍ van el badge y el botón "Leído" */}
          <div className="d-flex align-items-center gap-2 mt-2">
            <span className="badge text-bg-secondary">
              {BOOK_STATUS_LABEL[book.status] ?? book.status}
            </span>

            {book.status === "IN_PROGRESS" && (
              <button
                className="btn btn-outline-success btn-sm"
                onClick={handleMarkAsRead}
                title="Marcar como leído"
              >
                <i className="bi bi-check-circle me-1"></i>
                Leído
              </button>
            )}
          </div>
        </div>
      </div>

      {/* DERECHA: solo botones */}
      <div className="d-flex align-items-start gap-2 flex-shrink-0">
        <button
          className={`btn btn-sm ${
            book.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={handleToggleFavorite}
          title="Favorito"
        >
          <i
            className={`bi ${book.isFavorite ? "bi-star-fill" : "bi-star"}`}
          ></i>
        </button>

        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navigate(`/edit/${book.id}`)}
          title="Editar"
        >
          <i className="bi bi-pencil"></i>
        </button>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
          title="Eliminar"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
