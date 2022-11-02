import React from "react";

import "./css/general/General.css";
import "./css/mediaQueries/MediaQueries.css";

import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default App;
