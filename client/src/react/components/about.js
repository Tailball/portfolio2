import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends React.Component {
  constructor(props){
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate() {
    return (
      this.props.lang === "EN" ? 
      {
        about1: "I'm a Belgian male in his early 30s.",
        about2: "I like pizza, cats (and dogs) and video games.",
        about3: "Besides longboarding and making music with my punkrock band,",
        about4: " I love graphic design and programming for the web",
        about5: "Professionally speaking, I am a ",
        about6: "confident freelance web developer",
        about7: " and ",
        about8: " with experience in various types of businesses.",
        about9: "I started out as a .NET consultant, focussing mainly on Windows and web applications.",
        about10: "I decided to ",
        about11: " shift my focus ",
        about12: " to ",
        about13: "by self-educating me with the help of the mighty internet.",
        about14: "If you have any questions, remarks or constructive criticism, please ",
        about15: "get in touch",
        about16: ". I am eager to hear from you...",
        footer: "copyright 2018 - all code by me.",
        contact: "contact me"
      } : 
      {
        about1: "Ik ben een jonge 30-jarige mannelijke Belg.",
        about2: "Ik hou van pizza, katten (en honden) en video games.",
        about3: "Naast longboarden en muziek maken met mijn punkrock band,",
        about4: " werk ik graag aan grafisch ontwerp en web development.",
        about5: "Professioneel gesproken, ben ik een ",
        about6: "zelfverzekerde freelance web developer",
        about7: " en ",
        about8: " en heb ik ervaring met verschillende types van ondernemingen.",
        about9: "Ik begon ooit als .NET consultant en focuste mij voornamelijk op Windows en web applicaties.",
        about10: "Ik besloot om ",
        about11: " mijn focus ",
        about12: " naar ",
        about13: "te verleggen via zelfstudie (en het internet) en zo mezelf alle kneepjes van het vak aan te leren.",
        about14: "Indien u vragen, opmerkingen of opbouwende kritiek heeft, ",
        about15: "contacteer mij",
        about16: ", aub. Ik hoor graag terug van u!",
        footer: "copyright 2018 - all code van mezelf.",
        contact: "contacteer mij"
      }
    );
  }

  render(){
    return (
      <section className="about">
        <div className="about__description">
          <div className="logo about__description__logo">
            <p>JP.</p>
          </div>
          <div className="about__description__text">
            <p>
              { this.translate().about1 }<br />
              { this.translate().about2 }<br />
              { this.translate().about3 } 
              <span>{ this.translate().about4 }</span>.
            </p>
            <p>
              { this.translate().about5 }<span>{ this.translate().about6 }</span>{ this.translate().about7 }<span>graphic designer</span>{ this.translate().about8 }<br />
              { this.translate().about9 }<br />
              { this.translate().about10 }<span>{ this.translate().about11 }</span>{ this.translate().about12 }<span>web dev</span> { this.translate().about13 }<br />
              { this.translate().about14 }<span>{ this.translate().about15 }</span>
              { this.translate().about16 }
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
            { this.translate().contact }
            <i className="im im-mail" />
          </Link>
        </div>

        <div className="about__copyright">
          <p>
            { this.translate().footer }
          </p>
        </div>
      </section>
    );
  }
}
  
const mapStateToProps = (state) => ({
  lang: state.language
});

export default connect(mapStateToProps)(About);
