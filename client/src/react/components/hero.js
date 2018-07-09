import React from 'react';
import scrollToElement from 'scroll-to-element';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown(){
        scrollToElement(
            ".services", {   
                offset: 0, 
                ease: 
                "in-out-circ", 
                duration: 1200 
            });
    }

    render() {
        return (
            <section className = "hero" >
                <div className="hero__description">
                    <h1>Designer, Developer</h1>
                    <p>Hi, I'm Jochen, a Belgian freelance developer.</p>
                    <p>I make graphics and websites for small businesses.</p>
                </div>
                <div className="caretDown">
                    <i onClick={this.scrollDown} className="im im-angle-down" />
                </div>
            </section >
        );
    }
}

export default Hero;