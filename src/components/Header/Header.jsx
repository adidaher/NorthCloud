import React from "react";
import "./Header.css";
import Logo from "../../assests/logo.jpeg";
const Header = () => {
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
    </div>
  );
};

export default Header;
