import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import NewBook from "../pages/NewBook";
import EditBook from "../pages/EditBook";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
