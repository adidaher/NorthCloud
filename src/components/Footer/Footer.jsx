import React from "react";
import Logo from "../../assests/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="firstRow">
        <div className="footer-logo">
          <img src={Logo} />
        </div>
        <div className="footer-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      <div className="line-2"></div>

      <div className="copyrights">
        <a>© 2024 NorthCloud. All rights reserved.</a>
        <a>Privacy Policy</a>
        <a>Terms and Conditions</a>
        <a>Cookie Policy</a>
      </div>
    </div>
  );
};

export default Footer;
