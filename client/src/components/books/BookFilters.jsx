import { BOOK_STATUS, BOOK_STATUS_LABEL } from "../../utils/constants";

export default function BookFilters({
  status,
  favoriteOnly,
  onChangeStatus,
  onToggleFavoriteOnly,
  onClear,
}) {
  return (
    <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
      <select
        className="form-select"
        style={{ maxWidth: 220 }}
        value={status}
        onChange={(e) => onChangeStatus(e.target.value)}
      >
        <option value="ALL">Todos</option>
        <option value={BOOK_STATUS.IN_PROGRESS}>
          {BOOK_STATUS_LABEL.IN_PROGRESS}
        </option>
        <option value={BOOK_STATUS.READ}>{BOOK_STATUS_LABEL.READ}</option>
      </select>

      <div className="form-check">
        <input
          id="favoriteOnly"
          className="form-check-input"
          type="checkbox"
          checked={favoriteOnly}
          onChange={(e) => onToggleFavoriteOnly(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="favoriteOnly">
          Solo favoritos
        </label>
      </div>

      <button className="btn btn-outline-secondary btn-sm" onClick={onClear}>
        Limpiar filtros
      </button>
    </div>
  );
}
