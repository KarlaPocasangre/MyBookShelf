import { useState } from "react";

export default function BookForm({ onSubmit, submitting = false }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    status: "IN_PROGRESS",
    isFavorite: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <div className="mb-3">
        <label className="form-label">Título *</label>
        <input
          name="title"
          className="form-control"
          value={form.title}
          onChange={handleChange}
          required
          minLength={2}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          name="description"
          className="form-control"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Imagen (URL)</label>
        <input
          name="imageUrl"
          className="form-control"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Estado</label>
        <select
          name="status"
          className="form-select"
          value={form.status}
          onChange={handleChange}
        >
          <option value="IN_PROGRESS">En proceso</option>
          <option value="READ">Leído</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          id="fav"
          type="checkbox"
          name="isFavorite"
          className="form-check-input"
          checked={form.isFavorite}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="fav">
          Favorito
        </label>
      </div>

      <button className="btn btn-primary" disabled={submitting}>
        {submitting ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
