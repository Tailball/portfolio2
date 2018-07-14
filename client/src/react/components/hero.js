import React from 'react';
import scrollToElement from 'scroll-to-element';
import { connect } from 'react-redux';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.scrollDown = this.scrollDown.bind(this);
        this.translate = this.translate.bind(this);
    }

    scrollDown(){
        scrollToElement(".services", {   
                offset: 0, 
                ease: 
                "in-out-circ", 
                duration: 1200 
            });
    }

    translate() {
        return (
            this.props.lang === "EN" ? 
            {
                hello: "Hi, I'm Jochen, a Belgian freelance developer.",
                ido: "I make graphics and websites for small businesses."
            } : 
            {
                hello: "Mijn naam is Jochen, een freelancer uit België.",
                ido: "Ik ontwerp afbeeldingen en websites voor KMO's."
            }
        );
    }

    render() {
        return (
            <section className = "hero" >
                <div className="hero__description">
                    <h1>Designer, Developer</h1>
                    <p>{ this.translate().hello }</p>
                    <p>{ this.translate().ido }</p>
                </div>
                <div className="caretDown">
                    <i onClick={this.scrollDown} className="im im-angle-down" />
                </div>
            </section >
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(Hero);