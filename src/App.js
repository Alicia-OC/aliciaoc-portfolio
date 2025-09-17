import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LogBook from "./pages/LogBook";
import DevBlog from "./pages/DevBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logbook" element={<LogBook />} />
        <Route path="/devblog" element={<DevBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
