import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FormTable from "./components/FormTable";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-center space-x-6">
        <Link to="/" className="hover:text-gray-200 font-semibold transition">Home</Link>
        <Link to="/about" className="hover:text-gray-200 font-semibold transition">About</Link>
        <Link to="/contact" className="hover:text-gray-200 font-semibold transition">Contact</Link>
        <Link to="/form" className="hover:text-gray-200 font-semibold transition">Form + Table</Link>
      </nav>

      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<FormTable />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        © 2025 React Router + Tailwind Demo
      </footer>
    </div>
  );
};

export default App;
