import './App.css';
import axios from 'axios';
import { Route, Link, Routes } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetIsSubmitted = () => {
    setIsSubmitted(false)
  }





  return (
    <div className="App">
      <Navbar resetIsSubmitted={resetIsSubmitted}/>
      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;




