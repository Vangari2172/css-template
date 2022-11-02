import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <ul className="main-nav">
            <li>
              <a className="list-name" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="list-name" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="list-name" href="#services">
                Services
              </a>
            </li>

            <li>
              <a className="list-name" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <hr
        style={{ border: "none", height: "5px", backgroundColor: "orangered" }}
      /> */}
    </header>
  );
};

export default Header;
