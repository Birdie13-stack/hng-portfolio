import React from "react";
import img from "../assets/img.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>
        Hi, <br /> I'm <span>Nenye </span>and I <br /> build things for the web.
      </h1>
      <img src={img} alt="" className="main-img" />
    </div>
  );
}

export default HeroSection;
