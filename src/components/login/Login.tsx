import React from "react";
import ".././login/login.scss";
// import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="log">
      <div className="box">
        <h2>Welcome</h2>
        <label className="inp">
          <input type="text" placeholder="user">
            <span className="label">Label</span>
            <span className="focus-bg"></span>
          </input>
        </label>
        {/* <form className="form">
          <label className="label">Email</label>
          <input type="text" placeholder="Email"></input>
          <label className="label">Password</label>
          <input type="text" placeholder="Password"></input>

          <div className="buttonstyle">
            <button>Sign Up</button>
          </div>

          <h4>or Log In with</h4>

          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Login;
