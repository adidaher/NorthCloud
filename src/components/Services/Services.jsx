import React from "react";
import "./Services.css";

import audio from "../../assests/audio.png";
import trippy from "../../assests/trippy.png";
import adicommerce from "../../assests/adicommerce.png";
import gym from "../../assests/gym.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const Images = [audio, adicommerce, trippy, gym];
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint based on your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services-container" id="Services">
      <div className="services-left">
        <Slider {...settings}>
          {Images.map((item, index) => (
            <img
              key={index}
              src={item}
              className="sliderImage"
              alt={`Slide ${index}`}
            />
          ))}
        </Slider>
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
    </section>
  );
};

export default Services;
