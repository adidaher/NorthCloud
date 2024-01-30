import React from "react";
import "./Hero.css";
import blog from "../../assests/Blog.png";
export const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="hero-txt">
        Transform Your Business with NorthCloud's Cutting-Edge Websites and
        Applications
      </div>
      <span>
        Unlock the Power of Digital Innovation and Drive Your Business Forward
      </span>
      <div className="hero-btn">
        <button className="primary-btn">Learn More</button>
        <button className="secondary-btn">Sign Up</button>
      </div>

      <div className="hero-image">
        <img src={blog} alt="" />
      </div>
    </div>
  );
};
