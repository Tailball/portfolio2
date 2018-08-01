import React from 'react';
import { connect } from 'react-redux';

class GfxDesigner extends React.Component { 
  constructor(props) {
    super(props);

    this.translate = this.translate.bind(this);
  }

  translate(){
    return (
      this.props.lang === "EN" ?
      {
        description1: "Logos or businesscards for a professional company...",
        description2: "Posters or flyers for your next event...",
        description3: "I might be able to assist you with anything you'd need visualized.",
        servicetitle: "I am confident with"
      } : 
      {
        description1: "Logo's of businesscards voor een professioneel bedrijf...",
        description2: "Posters of flyers voor uw volgende evenement...",
        description3: "Ik kan u ondersteunen met alles wat u gevisualiseerd wil hebben.",
        servicetitle: "Ik ben zelfverzekerd met"
      }
    );
  }

  render() {
    return (
      <div className="service service__GfxDesigner">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-pencil" />
          </div>

          <div className="service__header__description">
            <h2>Graphic designer</h2>
            <p>
              { this.translate().description1 }<br />
              { this.translate().description2 }<br />
              { this.translate().description3 }
            </p>
          </div>
        </div>

        <div className="service__me">
          <h3>{ this.translate().servicetitle }</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Adobe XD</li>
            <li>Cyberlink Powerdirector</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.language
});

export default connect(mapStateToProps)(GfxDesigner);