import React, { useState, useRef } from "react";
import "./Connect.css";
import map from "../../assests/map.png";
import haifa from "../../assests/Haifa.jpg";

import emailjs from "@emailjs/browser";

const Connect = () => {
  const [message, setMessage] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    console.log(phone, name, message);
    e.preventDefault();

    emailjs
      .sendForm("service_14qhtad", "template_8frtija", form.current, {
        publicKey: "qcXypAENgVmeK1ubB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
        setName(""),
        setPhone(""),
        setMessage("")
      );
  };

  return (
    <>
      <div className="connect-container" id="Connect">
        <div className="connect-left">
          <h1>Get in Touch</h1>
          <span>
            Have any questions or need assistance? We're here to help!
          </span>
          <div className="connect-item">
            <i className="fa-solid fa-envelope"></i>
            <a className="contact-txt">northcloudbb@gmail.com</a>
          </div>

          <div className="connect-item">
            <i className="fa-solid fa-phone"></i>
            <a className="contact-txt">+972546683995</a>
          </div>

          <div className="connect-item">
            <i className="fa-solid fa-location-dot"></i>
            <a className="contact-txt">Haifa, Main St, Israel</a>
          </div>
        </div>

        <div className="connect-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="from_name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                value={phone}
                name="user_phone"
                className="form-control"
                aria-describedby="user_phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message <span className="gray-text">(optional)</span>
              </label>
              <textarea
                rows="5"
                className="form-control"
                value={message}
                name="user_message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <img src={haifa} alt="" className="offileMap" />
    </>
  );
};

export default Connect;
