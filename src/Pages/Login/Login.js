import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="main-login-container">
      <div className="login-form-container">
        <form className="login-form">
          <label className="login-form-heading">Username</label>
          <input
            className="login-inpt"
            type="text"
            placeholder="Enter Username"
          />
          <label className="login-form-heading">Password</label>
          <input
            className="login-inpt"
            type="password"
            placeholder="Enter Password"
          />
        </form>
        <button className="login-btn-1">Login</button>
      </div>
    </div>
  );
};

export default Login;
