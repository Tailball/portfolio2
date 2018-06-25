import React from 'react';

import NavBar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Portfolio from './components/portfolio';

class App extends React.Component {
  render() {
    return <div className="mainContainer">
      <NavBar />
      <Hero />
      <Services />    
      <Portfolio />

      <section className="cta" />

      <section className="about" />
    </div>;
  }
}

export default App;
