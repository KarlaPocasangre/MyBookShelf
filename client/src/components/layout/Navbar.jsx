import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="bg-dark text-white vh-100 p-3 d-flex flex-column"
      style={{ width: "250px" }}
    >
      <h4 className="text-center mb-4">
        <i className="bi bi-journal-bookmark me-2"></i>
        MyBookShelf
      </h4>

      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-white d-flex align-items-center ${
                isActive ? "active bg-primary" : ""
              }`
            }
          >
            <i className="bi bi-house-door me-2"></i>
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/new"
            className={({ isActive }) =>
              `nav-link text-white d-flex align-items-center ${
                isActive ? "active bg-primary" : ""
              }`
            }
          >
            <i className="bi bi-plus-circle me-2"></i>
            Nuevo Libro
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
