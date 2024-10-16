import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import Login from "./(auth)/Login";
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;