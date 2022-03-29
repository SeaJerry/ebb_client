import React from "react";
import "./HeroSection.css";
import city from "../../images/citycrawling.jpeg"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <img className="city-bg" src={city} alt="city" />
      <div className="hero-btn-container">
        <h1>Never Stop Exploring</h1>
        <p>Where Great Journeys Begin...</p>
        <Link to="/SignUp"><button className="sign-up-btn">Sign Up</button></Link>
      </div>
    </section>
  );
};

export default HeroSection;
