import React from "react";
import logo from "../assets/logo.jpg";
import github from "../assets/Icons/github.jpg";
import twitter from "../assets/Icons/twitter.jpg";
import linkedin from "../assets/Icons/linkedin.jpg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <a href="" className="section-link">
          Home
        </a>
        <a href="" className="section-link">
          About
        </a>
        <a href="" className="section-link">
          Tech Stack
        </a>
        <a href="" className="section-link">
          Projects
        </a>
        <a href="" className="section-link"></a>
      </nav>
      <div className="socials">
        <a href="https://github.com/Birdie13-stack">
          <img src={github} alt="Github Icon" />
        </a>

        <a href="https://twitter.com/thatbirdintech">
          <img src={twitter} alt="Twitter Icon" />
        </a>

        <a href="">
          <img src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>

      <div className="socials"></div>
    </div>
  );
}

export default Header;
