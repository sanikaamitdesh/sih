import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Login.css";
import Header from "./Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate("/"); // Navigate to the home page after login
  };

  const handleBack = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <>
      <Header />

      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <label>
          Adhar
            <input
              type="adhar"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
          Phone
            <input
              type="tel"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="button-group">
            <button type="submit">Login</button>
            <Link to="/">
  <button type="button" className="back-button">Back</button>
</Link>

          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
