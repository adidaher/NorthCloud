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
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      <div class="line-2"></div>

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
