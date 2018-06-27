import React from "react";

import Hero from "../components/hero";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import CTA from "../components/cta";
import About from "../components/about";

class Base extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Hero />
        <Services />
        <CTA />
        <Portfolio />
        <About />
      </div>
    );
  }
}

export default Base;
