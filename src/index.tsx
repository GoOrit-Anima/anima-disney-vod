import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Search } from "./screens/Search";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Home />} />
        <Route path="/originals" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/series" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
