import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="NavBar">
      <ul>
        <li className={activeLink === "/" ? "active" : ""}>
          <NavLink
            to="/"
            className="nav-button"
            onClick={() => handleNavLinkClick("/")}
          >
            Homepage
          </NavLink>
        </li>
        <li className={activeLink === "/hot" ? "active" : ""}>
          <NavLink
            to="/hot"
            className="nav-button"
            onClick={() => handleNavLinkClick("/hot")}
          >
            Hot Memes
          </NavLink>
        </li>
        <li className={activeLink === "/regular" ? "active" : ""}>
          <NavLink
            to="/regular"
            className="nav-button"
            onClick={() => handleNavLinkClick("/regular")}
          >
            Regular Memes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
