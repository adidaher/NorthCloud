import React from "react";
import redhat from "../../assests/redhat.png";
import amazon from "../../assests/amazon.png";
import google from "../../assests/google.png";
import cube from "../../assests/cube.png";
import linkedin from "../../assests/linkedin.jpg";
import github from "../../assests/github.png";

import "./Logos.css";
const Logos = () => {
  return (
    <section className="Logos-container">
      <h5>Trusted by top global companies for exceptional results</h5>
      <div className="Logos-row">
        <div className="logos-company">
          <img src={redhat} alt="" />
          <span>RED HAT</span>
        </div>
        <div className="logos-company">
          <img src={amazon} alt="" />
          <span>Amazon</span>
        </div>
        <div className="logos-company">
          <img src={google} alt="" />
          <span>Google</span>
        </div>
      </div>
      <div className="Logos-row">
        <div className="logos-company">
          <img src={cube} alt="" />
          <span>Relume</span>
        </div>
        <div className="logos-company">
          <img src={linkedin} alt="" />
          <span>Linkedin</span>
        </div>
        <div className="logos-company">
          <img src={github} alt="" />
          <span>Github</span>
        </div>
      </div>
    </section>
  );
};

export default Logos;
