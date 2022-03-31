import React, { useContext } from "react";
import "./Login.css";
import { useRef } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

const Login = () => {
const userReference = useRef();
const passwordReference = useRef();
const {user, dispatch, isFetching} = useContext(Context)

const handleLogout = () => {
  dispatch({ type: "Logout" });
};


const handleSubmit = async (e) => {
  e.preventDefault()
  dispatch({type:"login_start"})
  try {
    const response = await axios.post("http://localhost:4000/auth/login", {
      username: userReference.current.value,
      password: passwordReference.current.value,
    })
    dispatch({type:"login_success", payload: response.data})
    window.location.replace("/#/Journal")
  } catch (error) {
    dispatch({type:"login_fail"})
  }
}


console.log(isFetching)


  return (
    <div className="main-login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-form-heading">Username</label>
          <input
            className="login-inpt"
            type="text"
            placeholder="Enter Username"
            ref ={userReference}
          />
          <label className="login-form-heading">Password</label>
          <input
            className="login-inpt"
            type="password"
            placeholder="Enter Password"
            ref={passwordReference}
          />
          <button className="login-btn-1" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="login-btn-1"  onClick={handleLogout}>{ user && "Logout"}</button>
      </div>
    </div>
  );
};

export default Login;
