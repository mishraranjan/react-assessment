import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
      localStorage.setItem("loggedInUser", email);
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
        <button type="submit" className="btn">Login</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/register" className="link">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
