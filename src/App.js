import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logbook" element={<Blog />} />
        <Route path="/devblog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
