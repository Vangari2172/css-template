import React from "react";
import "./Section6.css";
import sec6_img from "../../images/face.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section6 = () => {
  var settings = {
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section6">
      <div className="container">
        <h1>Testimonials</h1>
        <p className="sec6_p">Lorem Ipsum is simply dummy</p>
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
        <Slider {...settings}>
          <div className="second-div">
            <blockquote>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, ""
            </blockquote>
            <div className="sec6_image">
              <img src={sec6_img} alt="face" />
            </div>
            <p className="quote">&mdash; Hayley Alex</p>
            <p className="location">London</p>
          </div>

          <div className="second-div">
            <blockquote>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, ""
            </blockquote>
            <div className="sec6_image">
              <img src={sec6_img} alt="face" />
            </div>
            <p className="quote">&mdash; Hayley Alex</p>
            <p className="location">London</p>
          </div>

          <div className="second-div">
            <blockquote>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, ""
            </blockquote>
            <div className="sec6_image">
              <img src={sec6_img} alt="face" />
            </div>
            <p className="quote">&mdash; Hayley Alex</p>
            <p className="location">London</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section6;
