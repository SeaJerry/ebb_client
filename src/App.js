import './App.css';
import axios from 'axios';
import { Route, Link, Routes } from 'react'; 
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetIsSubmitted = () => {
    setIsSubmitted(false)
  }





  return (
    <div className="App">
      <Navbar resetIsSubmitted={resetIsSubmitted}/>
    </div>
  );
}

export default App;




