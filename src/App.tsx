import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<div className="pt-[70px] min-h-screen bg-[#1e2341] text-white p-8">Search Page</div>} />
        <Route path="/details" element={<div className="pt-[70px] min-h-screen bg-[#1e2341] text-white p-8">Details Page</div>} />
        <Route path="/originals" element={<div className="pt-[70px] min-h-screen bg-[#1e2341] text-white p-8">Originals Page</div>} />
        <Route path="/movies" element={<div className="pt-[70px] min-h-screen bg-[#1e2341] text-white p-8">Movies Page</div>} />
        <Route path="/series" element={<div className="pt-[70px] min-h-screen bg-[#1e2341] text-white p-8">Series Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};
