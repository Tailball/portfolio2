import React from 'react';

import NavBar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Portfolio from './components/portfolio';
import CTA from './components/cta';
import About from './components/about';

class App extends React.Component {
  render() {
    return <div className="mainContainer">
      <NavBar />
      <Hero />
      <Services />
      <CTA />
      <Portfolio />
      <About />
    </div>;
  }
}

export default App;
