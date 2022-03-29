import React from "react";
import "./SignUp.css";
import plane from "../../images/leonardo-yip-rn-NLirHQPY-unsplash.jpg";

const SignUp = () => {
  return (
    <>
      <div className="sign-up-container">
        <img src={plane} alt="plane" className="sign-up-bg" />
      </div>
      <div className="sign-up-form">
          <form className="register-form">
              <label className="sign-up-form-heading">Email</label>
              <input  className="sign-up-inpt" type="email" placeholder="Enter Username" />
              <label  className="sign-up-form-heading">Password</label>
              <input className="sign-up-inpt" type="password" placeholder="Enter Password"/>
          </form>
          <button className="sign-up-btn-1">Register</button>
      </div>
    </>
  );
};

export default SignUp;
