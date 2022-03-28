import './App.css';
import axios from 'axios';
import { Route, Link, Routes } from 'react'; 
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetIsSubmitted = () => {
    setIsSubmitted(false)
  }





  return (
    <div className="App">
      <Navbar resetIsSubmitted={resetIsSubmitted}/>
      <HeroSection />
    </div>
  );
}

export default App;




