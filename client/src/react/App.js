import React from 'react';

class App extends React.Component {
  render() {
    return <div className="mainContainer">
      <div className="navBar">
        <div className="logo">
          <p>JP.</p>
        </div>
        <div className="lang">
          <a href="#">NL</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="#">EN</a>
        </div>
        <div className="getInTouch">
          <a href="#">get in touch</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero__description">
          <h1>Designer, Developer</h1>
          <p>Hi, I'm Jochen, a Belgian freelance developer.</p>
          <p>I make graphics and websites for small businesses.</p>
        </div>
        <div className="caretDown">
          <i className="im im-angle-down" />
        </div>
      </section>

      <section className="services" />

      <section className="portfolio" />

      <section className="cta" />

      <section className="about" />
    </div>;
  }
}

export default App;
