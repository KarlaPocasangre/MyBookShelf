import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="d-flex">
      <Navbar />

      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
