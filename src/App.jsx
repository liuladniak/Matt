import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home.jsx";
import Project from "./views/Project.jsx";
import NotFound from "./views/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
