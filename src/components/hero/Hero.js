import React from "react";
import "./Hero.css";
import nurse from "../../images/nurse.png";

const Hero = () => {
  return (
    <div>
      <div className="hero-img">
        <div className="hero grid grid--2-cols container">
          <div className="hero-text-box">
            <h1>German Language School</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="btn-hero">
              <button className="btn-learn">Learn More</button>
              <button className="btn-contact">8452653515</button>
            </div>
          </div>
          <div className="hero-img-box">
            <img src={nurse} alt="nurse" className="img-nurse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
