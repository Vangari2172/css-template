import React from "react";
import "./Section4.css";
import sec4_img1 from "../../images/img1.png";
import sec4_img2 from "../../images/img2.png";
import sec4_img3 from "../../images/img3.png";

const Section4 = () => {
  return (
    <div>
      <div className="section4-img">
        <h1>Our Latest Courses</h1>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <div className="container grid grid--3-cols">
          <div className="sec4-image-box">
            <div className="sec4_img">
              <img src={sec4_img1} alt="picture1" />
            </div>
            <p className="des1">Lorem Ipsum is simply</p>
          </div>
          <div>
            <div className="sec4_img">
              <img src={sec4_img2} alt="picture2" />
            </div>
            <p className="des1">dummy text of the printing</p>
          </div>
          <div>
            <div className="sec4_img">
              <img src={sec4_img3} alt="picture3" />
            </div>
            <p className="des1">Lorem Ipsum is simply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
