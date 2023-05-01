import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userData = {
    email: "radha@gmail.com",
    password: 12345,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === userData.email || password === userData.password) {
      alert("user login successfully");
      navigate("/bankData");
    } else {
      alert("please enter correct email or password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Login Form</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email  </label>
              <br></br>
              <input
                type="text"
                placeholder="@gmail.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <br></br>
              <input
                type="password"
                value={password}
                placeholder="**********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
