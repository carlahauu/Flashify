import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Generate from "./components/Generate";
import GeneratedCards from "./components/GeneratedCards";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/generated" element={<GeneratedCards />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
