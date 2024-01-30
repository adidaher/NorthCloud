import React from "react";
import "./Services.css";
import servie from "../../assests/services.png";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <img src={servie} alt="" />
      </div>
      <div className="services-right">
        <div className="service-details">
          <div className="service-title">Our Services</div>
          <span className="service-text">
            At NorthCloud, we offer a wide range of services including website
            and application development. Our team of experts is dedicated to
            delivering high-quality solutions tailored to meet your business
            needs.
          </span>
        </div>
        <div className="service-details">
          <div className="service-title">Website Development</div>
          <span className="service-text">
            We specialize in creating stunning and user-friendly websites that
            help businesses establish a strong online presence. Our websites are
            designed to be responsive, ensuring optimal performance across all
            devices.
          </span>
        </div>
        <div className="service-details">
          <div className="service-title">Application Development</div>
          <span className="service-text">
            From mobile apps to custom software solutions, our team has the
            expertise to bring your ideas to life. We follow industry best
            practices to develop robust and scalable applications that drive
            business growth.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
