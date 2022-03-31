import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Journal from "./Pages/Journal/Journal";
import Write from "./Pages/Write/Write";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";


function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Journal" element={user ? <Journal /> : <SignUp/>} />
        <Route path="/Write" element={user ? <Write /> : <SignUp/>} />
        <Route path="/SignUp" element={user ? <Home /> : <SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
