import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  navigate("/home");
}
     else {
      alert("Invalid Username or Password");
    }
  };
  const forgotPassword = () => {
  alert("Demo Login\n\nUsername: admin\nPassword: 1234");
};

  return (
    <div className="login-container">
      <div className="login-header">
  <div className="login-logo">
    🌍 Country Explorer
  </div>

  <div className="login-links">
    <a href="#features">Features</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>
      <form className="login-card" onSubmit={handleLogin}>
        <h1>🌍 Country Explorer</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
  

<p
  className="forgot-password"
  onClick={forgotPassword}
>
  Forgot Password?
</p>
      </form>
    </div>
  );
}

export default Login;