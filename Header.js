import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate(); 

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">🌍 Country Explorer</div>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/tourist-places">
  Places
</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/documentation">Documentation</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/status">Status</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>

        <button onClick={logout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
