import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./components/Layout"; // Import the Layout component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} /> {/* Wrap Home component with Layout */}
        <Route path="/login" element={<Layout><Login /></Layout>} /> {/* Wrap Login component with Layout */}
        <Route path="/contact" element={<Layout><Contact /></Layout>} /> {/* Wrap Login component with Layout */}
        <Route path="/about" element={<Layout><About /></Layout>} /> {/* Wrap Login component with Layout */}
      </Routes>
    </Router>
  );
}

export default App;

