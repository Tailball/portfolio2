import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CTA extends React.Component {
    constructor(props) {
        super(props);

        this.translate = this.translate.bind(this);
    }

    translate() {
        return this.props.lang === "EN" ? 
        {
            title: "Start a project",
            explanation: "Interested in working together?",
            button: "Just click this big button!"
        }:
        {
            title: "Een project starten",
            explanation: "Interesse in een samenwerking?",
            button: "Klik dan op deze grote knop!"
        }
    }

    render () {
        return (
            <section className="cta">
                <Link to="/contact">
                    <h2>{ this.translate().title }</h2>
                    <p>{ this.translate().explanation }<br/>{ this.translate().button }</p>
                </Link>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(CTA);


