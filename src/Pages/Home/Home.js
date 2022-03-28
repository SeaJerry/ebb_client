import React from "react";
import "./Home.css";
import city from "../../images/citycrawling.jpeg";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <img className="city-bg" src={city} alt="city" />
        <div className="hero-btn-container">
          <h1>Adventure Awaits</h1>
          <p>What are you waiting for?</p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Home;
