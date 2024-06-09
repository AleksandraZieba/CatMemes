// Header.js
import React from "react";
import catImage from "../../art/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={catImage} alt="Logo" className="logo" width={300} />
    </header>
  );
};

export default Header;
