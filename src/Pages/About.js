import React from "react";
import img from "../assets/img.jpg";
import Header from "../Components/Header";
import "./Pages.css";

function About() {
  return (
    <>
      <Header />
      <div className="about-section">
        <h1>
          Hi, <br /> I'm <span>Nenye </span>, a Frontend Web Developer,
          Technical Writer and Open Source Contributor.
        </h1>
        <img src={img} alt="" className="main-img" />
      </div>
    </>
  );
}

export default About;
