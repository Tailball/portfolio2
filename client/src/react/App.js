import React from 'react';

import NavBar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';

class App extends React.Component {
  render() {
    return <div className="mainContainer">
      <NavBar />
      <Hero />
      <Services />    
      

      <section className="portfolio" />

      <section className="cta" />

      <section className="about" />
    </div>;
  }
}

export default App;
