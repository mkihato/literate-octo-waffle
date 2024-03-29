import React from "react";
import ".././login/login.scss";

const Login = () => {
  return (
    <div className="log">
      <div className="box">
        <h2>Welcome to fusion</h2>
        {/* <label className="inp">
          <input type="text" placeholder="user">
            <span className="label">Label</span>
            <span className="focus-bg"></span>
          </input>
        </label> */}
        <form className="form">
          {/* <label className="label">Email</label> */}
          <input type="text" placeholder="Email"></input>
          {/* <label className="label">Password</label> */}
          <input type="text" placeholder="Password"></input>

          <button className="original-button">Sign Up</button>

          <h4>or </h4>

          <button className="original-button">Log In </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
