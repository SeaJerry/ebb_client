import "./App.css";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Journal from "./Pages/Journal/Journal";
import Write from "./Pages/Write/Write";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

function App() {


  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
