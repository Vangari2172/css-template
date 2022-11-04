import React from "react";
import "./Section5.css";
import sec5 from "../../nav.json";

const Section5 = () => {
  return (
    <div className="section5">
      <h1>What We Offer</h1>
      <p className="para">Lorem Ipsum is simply dummy</p>
      <div className="container grid grid--3-cols">
        {sec5.section5.map((item) => {
          return (
            <div key={item.id}>
              <i className={`${item.icon}`}></i>
              <p className="des">{item.heading}</p>
              <p className="description">{item.des}</p>
            </div>
          );
        })}
        {/* <div>
          <i className="fa-solid fa-people-group"></i>
          <p className="des">01. Experience</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <i className="fa-solid fa-book"></i>
          <p className="des">02. Education</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <i className="fa-solid fa-file"></i>
          <p className="des">03. Certificate</p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div> */}
        {/* <div>
          <i className="fa-solid fa-file-certificate"></i>
          <p>03. Certificate</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div> */}
      </div>
      <div className="sec5-btn">
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Section5;
