import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const navBtn = () => {
    return isClick ? setIsClick(false) : setIsClick(true);
  };

  return (
    <div>
      <header className={isClick ? "header nav-open" : "header"}>
        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav" onClick={navBtn}>
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </header>
    </div>
  );
};

export default Header;
