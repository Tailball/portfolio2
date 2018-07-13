import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ChangeLanguage } from "../../redux/actions/languageActions";

class NavBar extends React.Component {
    constructor (props){
        super(props);

        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(lang){
        this.props.dispatch(ChangeLanguage(lang));
    }

    render() {
        return <div className="navBar">
            <Link to="/">
              <div className="logo">
                <p>JP.</p>
              </div>
            </Link>
            <div className="lang">
              <a href="#" onClick={() => this.changeLanguage("NL")} className={this.props.lang === "NL" ? "link-selected" : ""}>NL</a>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <a href="#" onClick={() => this.changeLanguage("EN")} className={this.props.lang === "EN" ? "link-selected" : ""}>EN</a>
            </div>
            <div className="getInTouch">
              <Link to="/contact">{this.props.lang === "EN" ? "get in touch" : "contacteer mij"}</Link>
            </div>
          </div>;
    }
}

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(NavBar);