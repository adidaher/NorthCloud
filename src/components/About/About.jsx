import React from "react";
import "./About.css";
import cube from "../../assests/cube.png";
import agile from "../../assests/agile.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="About-right">
        <div className="about-icon">
          <img src={cube} alt="" />
        </div>
        <div className="about-text">
          Empowering entrepreneurs and businesses through innovative solutions
        </div>
        <span>
          At NorthCloud, we are driven by a mission to provide cutting-edge
          website and application development services that help entrepreneurs
          and businesses thrive. Our team of experts combines creativity,
          technical expertise, and a customer-centric approach to deliver
          exceptional results.
        </span>

        <button className="secondary-btn">Learn More</button>
      </div>
      <div className="About-left">
        <div>
          <img src={agile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
