import React from "react";
import "./Section5.css";

const Section5 = () => {
  return (
    <div className="section5">
      <h1>What We Offer</h1>
      <p className="para">Lorem Ipsum is simply dummy text of the printing</p>
      <div className="container grid grid--3-cols">
        <div>
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
        </div>
        {/* <div>
          <i class="fa-solid fa-file-certificate"></i>
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
