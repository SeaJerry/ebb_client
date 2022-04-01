import React from "react";
import "./SignUp.css";
import plane from "../../images/leonardo-yip-rn-NLirHQPY-unsplash.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://murmuring-inlet-81483.herokuapp.com/auth/register",
      { username, email, password }
    );
    response.data &&
      window.location.replace("https://seajerry.github.io/ebb_client/#/Login");
  };

  return (
    <>
      <div className="sign-up-container">
        <img src={plane} alt="plane" className="sign-up-bg" />
      </div>
      <div className="sign-up-form">
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="sign-up-form-heading">Username</label>
          <input
            className="sign-up-inpt"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="sign-up-form-heading">Email</label>
          <input
            className="sign-up-inpt"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="sign-up-form-heading">Password</label>
          <input
            className="sign-up-inpt"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-up-btn-1" type="submit">
            Register
          </button>
        </form>

        <Link to="/Login">
          <button className="sign-up-btn-2">Login</button>
        </Link>
      </div>
    </>
  );
};

export default SignUp;
