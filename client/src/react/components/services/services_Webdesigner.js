import React from "react";
import { connect } from 'react-redux';

class Webdesigner extends React.Component {
  constructor(props) {
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate() {
    return (
      this.props.lang === "EN" ?
        {
          description1: "I design clean, modern looking websites for small businesses.",
          description2: "I aim for full-responsive design, meaning they will work on big screens, tablets and phones.",
          servicetitle: "I speak fluent",
          service1: "CSS3 and SASS",
          service2: "React and Redux",
        } : 
        {          
          description1: "Ik ontwerp propere, moderne websites voor KMO's.",
          description2: "Ik mik op een volledig responsive design, wat wil zeggen dat ze zowel op grote schermen als tablets en smartphones mooi ogen.",
          servicetitle: "I spreek vloeiend",
          service1: "CSS3 en SASS",
          service2: "React en Redux",
        }
    );
  }

  render () {
    return (
      <div className="service service__Webdesigner">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-code" />
          </div>

          <div className="service__header__description">
            <h2>Webdesigner</h2>
            <p>
              { this.translate().description1 }<br />
              { this.translate().description2 }
            </p>
          </div>
        </div>

        <div className="service__me">
          <h3>{ this.translate().servicetitle }</h3>
          <ul>
            <li>HTML5</li>
            <li>{ this.translate().service1 }</li>
            <li>Javascript ECMA 6</li>
            <li>{ this.translate().service2 }</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  lang: state.language
});

export default connect(mapStateToProps)(Webdesigner);
