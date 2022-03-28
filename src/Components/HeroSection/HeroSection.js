import React from "react";
import "./HeroSection.css";
import city from "../../images/citycrawling.jpeg"

const HeroSection = () => {
  return (
    <section className="hero-container">
      <img className="city-bg" src={city} alt="city" />
      <div className="hero-btn-container">
        <h1>Never Stop Exploring</h1>
        <p>What are you waiting for?</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </section>
  );
};

export default HeroSection;
