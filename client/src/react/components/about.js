import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return <section className="about">
      <div className="about__description">
        <div className="logo about__description__logo">
          <p>JP.</p>
        </div>
        <div className="about__description__text">
          <p>
            I'm a Belgian male in his early 30s. <br />I like pizza, cats (and dogs) and video games. <br />Besides longboarding and making music with my punkrock band, <span>I love graphic design and programming for the web</span>.
          </p>
          <p>
            Professionally speaking, I am a <span>confident freelance web developer</span> and <span>graphic designer</span> with experience in various types of businesses.<br />I started out as a .NET consultant, focussing mainly on Windows and web applications. <br />I decided to <span>
              shift my focus
            </span> to <span>web dev</span> by self-educating me with the help of the mighty internet.<br />
            If you have any questions, remarks or constructive criticism, please <span>get in touch</span>. I am eager to hear from you...
          </p>
        </div>
      </div>

      <div className="about__socialmedia">
        <a href="https://www.facebook.com/JochenPanjaerGraphics/" target="_blank">
          facebook
          <i className="im im-facebook" />
        </a>
        <a href="https://www.linkedin.com/in/jochen-panjaer-9bbab191/" target="_blank">
          linkedin
          <i className="im im-linkedin" />
        </a>
        <a href="https://github.com/Tailball" target="_blank">
          github
          <i className="im im-github" />
        </a>
        <Link to="/contact">
          contact me
          <i className="im im-mail" />
        </Link>
      </div>

      <div className="about__copyright">
        <p>
          copyright 2018 - all code by <Link to="/contact">me</Link>.
        </p>
      </div>
    </section>;
};

export default About;