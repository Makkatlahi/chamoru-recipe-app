import React from "react";
import "../assets/styles/navbar.scss"; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Sent<span>a</span>dan Chamoru
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/recipes" className="nav-link">
            Recipes
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
