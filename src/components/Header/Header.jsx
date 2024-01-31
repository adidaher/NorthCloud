import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assests/logo.jpeg";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Header-containter">
      <div className="header-logo">
        <img alt="" src={Logo} />
      </div>

      <div className="header-content">
        <ul>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Services"> Services</a>
          </li>
          <li>
            <a>Protofolio</a>
          </li>
          <li>
            <a href="#Connect">More</a>
          </li>
        </ul>
      </div>

      <div className="header-btn">
        <button className="primary-btn">Contact</button>
      </div>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>

      <ul className={`header-menu ${showMenu ? "show" : ""}`}>
        <a href="#About" onClick={toggleMenu}>
          About Us
        </a>
        <a href="#Services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#Connect" onClick={toggleMenu}>
          Protofolio
        </a>
        <a href="#Connect" onClick={toggleMenu}>
          More
        </a>
      </ul>
    </div>
  );
};

export default Header;
