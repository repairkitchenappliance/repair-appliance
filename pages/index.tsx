import type { NextPage } from "next";
import * as React from "react";
import Server from "../pages/index/Services";
import HeroSection from "../pages/index/HeroSection";
import AboutSection from "../pages/index/AboutSection";
import WhyUs from "../pages/index/WhyUs";
import Brands from "../pages/index/Brands";
import Schedule from "../pages/index/Schedule";
import Testemonial from "../pages/index/Testemonial";
import Counter from "../pages/index/Counters";
import Contact from "../pages/index/Contact";
import PrivacyPolicy from "../pages/index/PrivacyPolicy";
const Home: NextPage = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about-us">
        <AboutSection />
      </div>
      <div id="services">
        <Server />
      </div>
      <WhyUs />
      {/* <div id="brands">
        <Brands />
      </div> */}
      <div id="schedule">
        <Schedule />
      </div>
      <Testemonial />
      <Counter />
      <div id="contact">
        <Contact />
      </div>
      <div id="privacyPolicy">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default Home;
