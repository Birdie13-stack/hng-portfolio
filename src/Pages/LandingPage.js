import React from "react";
import HeroSection from "../Components/HeroSection";
import Technologies from "../Components/Technologies";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default LandingPage;
