import React from "react";
import "./Connect.css";
import map from "../../assests/map.png";
const Connect = () => {
  return (
    <>
      <div className="connect-container">
        <div className="connect-left">
          <h1>Get in Touch</h1>
          <span>
            Have any questions or need assistance? We're here to help!
          </span>
        </div>

        <div className="connect-right">
          <div className="connect-item">
            <span>
              <i class="fa-solid fa-envelope"></i>Email
            </span>
            <a>hello@northcloud.io</a>
          </div>

          <div className="connect-item">
            <span>
              <i class="fa-solid fa-phone"></i> Phome
            </span>
            <a>+1 (555) 123-4567</a>
          </div>

          <div className="connect-item">
            <span>
              <i class="fa-solid fa-location-dot"></i> Office
            </span>
            <a>123 Main St, Sydney NSW 2000, Australia</a>
          </div>
        </div>
      </div>
      <img src={map} alt="" className="offileMap" />
    </>
  );
};

export default Connect;
