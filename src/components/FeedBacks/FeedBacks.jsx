import React from "react";
import "./FeedBacks.css";
import stars from "../../assests/stars.png";
import profile from "../../assests/profile.png";

const FeedBacks = () => {
  return (
    <div className="FeedBacks-container">
      <img src={stars} />
      <div className="feedback-text">
        <h4>
          Working with NorthCloud has been a game-changer for my business. Their
          expertise and dedication have helped us achieve remarkable results.
        </h4>
      </div>
      <div className="profile">
        <img src={profile} alt="" className="feedback-profile" />
        <span> | </span>
        <span> John Doe</span>
      </div>
    </div>
  );
};

export default FeedBacks;
