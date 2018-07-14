import React from "react";
import { connect } from 'react-redux';

class Tutor extends React.Component {
  constructor(props) {
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate() {
    return (
      this.props.lang === "EN" ?
        {
          title: "Tutor",
          description1: "I can also teach individuals or small groups various aspects of programming principles and webdesign.",
          servicetitle: "I can share my knowledge of",
          service1: "Basic and advanced programming principles",
          service2: "OOP and SOLID philosophies",
          service3: "HTML5, CSS3 with SASS",
          service4: "Node.js, NPM and Express",
          service5: "React and Redux",
          service6: "C# and VB.NET",
          service7: "Database modeling and SQL code",
        } : 
        {          
          title: "Training",
          description1: "Ik kan individuele studenten of kleine groepen verscheidene aspecten van programmeer principes en webdesign bijbrengen",
          servicetitle: "Ik kan mijn kennis delen van",
          service1: "Basis en geavanceerde programmeer principes",
          service2: "OOP en SOLID filosofieën",
          service3: "HTML5, CSS3 met SASS",
          service4: "Node.js, NPM en Express",
          service5: "React en Redux",
          service6: "C# en VB.NET",
          service7: "Database modeling en SQL code",
        }
    );
  }

  render() {
    return (
      <div className="service service__Tutor">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-language" />
          </div>

          <div className="service__header__description">
            <h2>{ this.translate().title }</h2>
            <p>{ this.translate().description1 }</p>
          </div>
        </div>

        <div className="service__me">
          <h3>{ this.translate().servicetitle }</h3>
          <ul>
            <li>{ this.translate().service1 }</li>
            <li>{ this.translate().service2 }</li>
            <li>{ this.translate().service3 }</li>
            <li>Javascript ES6</li>
            <li>{ this.translate().service4 }</li>
            <li>{ this.translate().service5 }</li>
            <li>{ this.translate().service6 }</li>
            <li>{ this.translate().service7 }</li>
            <li>Ms Office software (Excel, Word, Powerpoint, Access)</li>
            <li>Visual Basic for Applications (VBA)</li>
            <li>Source control (TFS, GIT)</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.language
});
  
export default connect(mapStateToProps)(Tutor);