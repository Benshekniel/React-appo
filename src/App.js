import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import "./App.css"; 

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact-us/:department" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
