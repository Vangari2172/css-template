import React from "react";
import "./Footer.css";
import logo from "../../images/logo-footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container grid grid--3-cols ">
        <div className="footer-link">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="footer-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="social-links">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="usefull-link">
          <h3>Usefull links</h3>
          <div className="flex">
            <ul>
              <li>About</li>
              <li>Our Story</li>
              <li>Professional</li>
              <li>Services</li>
              <li>Testimonials</li>
            </ul>
            <ul>
              <li>Courses</li>
              <li>Support</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <div>
            <p className="footer-para">Phone</p>
            <p className="footer-des">89 63 416 869</p>
          </div>
          <div>
            <p className="footer-para">Address</p>
            <p className="footer-des">
              419, texas-tower, next to west-coast,New-York City
            </p>
          </div>
          <div>
            <p className="footer-para">E-mail</p>
            <p className="footer-des">alexhales@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
