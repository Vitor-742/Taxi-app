import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Travels from "./pages/Travels";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/travels">Travels</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
      </Routes>
    </Router>
  );
}

export default App;
