import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = localStorage.getItem("user");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-dot"></span>
        <span>User Portal</span>
      </div>

      <div className="nav-links">
        {user ? (
          <>
            <Link to="/home" className={isActive("/home") ? "active-link" : ""}>
              Home
            </Link>

            <Link
              to="/profile"
              className={isActive("/profile") ? "active-link" : ""}
            >
              Profile
            </Link>

            <span className="nav-user">
              Hi, {username || "User"}
            </span>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className={isActive("/") ? "active-link" : ""}>
              Login
            </Link>

            <Link
              to="/register"
              className={isActive("/register") ? "active-link" : ""}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;