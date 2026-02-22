import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewBook from "../pages/NewBook";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewBook />} />
      </Routes>
    </BrowserRouter>
  );
}
