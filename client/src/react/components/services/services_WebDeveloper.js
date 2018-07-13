import React from 'react';
import { connect } from 'react-redux';

class WebDeveloper extends React.Component {
  constructor(props){
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate() {
    return (
      this.props.lang === "EN" ?
        {
          description1: "I am capable of implementing functionality on your website and back-end server to make a true user experience.",
          description2: "I can also help you with Office Automatisation.",
          servicetitle: "I can implement",
          service1: "MongoDB and Mongoose",
          servicetitle2: "Office Automatisation",
          service2: "Usage of VBA code, macros and smart formulas",
          service3: "Speed up your business work flow",
          service4: "Automate Excel, Access and even Word!",
        } : 
        {
          description1: "Ik ben in staat om functionaliteit op uw website of back-end server te implementeren om zo een ware gebruikerservaring te creeëren.",
          description2: "Ik kan u ook helpen met Office automatisatie.",
          servicetitle: "Ik kan volgende implementeren",
          service1: "MongoDB en Mongoose",
          servicetitle2: "Office Automatisatie",
          service2: "Gebruik makend van VBA code, macro's en slimme formules",
          service3: "Versnel de workflow van uw business",
          service4: "Automatiseer Excel, Access en zelfs Word!",
        }
    );
  }

  render() {
    return (
      <div className="service service__WebDeveloper">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-tools" />
          </div>

          <div className="service__header__description">
            <h2>(Web) developer</h2>
            <p>
              { this.translate().description1 }<br />
              { this.translate().description2 }
            </p>
          </div>
        </div>

        <div className="service__me">
          <h3>{ this.translate().servicetitle }</h3>
          <ul>
            <li>Node.js and NPM</li>
            <li>Express framework</li>
            <li>{ this.translate().service1 }</li>
            <li>SQL server</li>
            <li>Heroku deployment</li>
          </ul>

          <h3>{ this.translate().servicetitle2 }</h3>
          <ul>
            <li>{ this.translate().service2 }</li>
            <li>{ this.translate().service3 }</li>
            <li>{ this.translate().service4 }</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  lang: state.language  
};

export default connect(mapStateToProps)(WebDeveloper);