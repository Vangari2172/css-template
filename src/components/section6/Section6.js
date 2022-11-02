import React from "react";
import "./Section6.css";
import sec6_img from "../../images/face.png";

const Section6 = () => {
  return (
    <div className="section6">
      <h1>Testimonials</h1>
      <p className="sec6_p">Lorem Ipsum is simply dummy text of the printing</p>
      <div className="container grid-section6">
        <div className="first-div">
          <p className="first-para">Lorem Ipsem</p>
          <p className="third-des">Lorem Ipsem</p>
        </div>
        <div className="second-div">
          <div className="sec6_image">
            <img src={sec6_img} alt="face" />
          </div>
          <blockquote>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages.""
          </blockquote>
          <p className="quote">&mdash; Hayley Alex</p>
          <p className="location">London</p>
        </div>
        <div className="third-div">
          <p className="third-para">Lorem Ipsem</p>
          <p className="third-des">Lorem Ipsem</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
