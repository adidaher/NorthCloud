import React from "react";
import "./Connect.css";
import map from "../../assests/map.png";
import haifa from "../../assests/Haifa.jpg";
const Connect = () => {
  return (
    <>
      <div className="connect-container" id="Connect">
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
            <a>northcloudbb@gmail.com</a>
          </div>

          <div className="connect-item">
            <span>
              <i class="fa-solid fa-phone"></i> Phome
            </span>
            <a>+972546683995</a>
          </div>

          <div className="connect-item">
            <span>
              <i class="fa-solid fa-location-dot"></i> Office
            </span>
            <a>Haifa, Main St,Israel</a>
          </div>
        </div>
      </div>
      <img src={haifa} alt="" className="offileMap" />
    </>
  );
};

export default Connect;
