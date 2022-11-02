import React from "react";
import "./Section3.css";
import flag from "../../images/flag.png";

const Section3 = () => {
  return (
    <div>
      <section className="container grid grid--2-cols">
        <div className="section3-text-box">
          <h1>Work in Germany as a nurse</h1>
          <p>
            more&nbsp;<span className="highlight">respect,</span>&nbsp;higher{" "}
            <span className="highlight">salary,</span>&nbsp;better&nbsp;
            <span className="highlight">life</span>
          </p>
          <div className="btn-hero">
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
        <div className="section3-img-box">
          <img src={flag} alt="germany flag" />
        </div>
      </section>
    </div>
  );
};

export default Section3;
