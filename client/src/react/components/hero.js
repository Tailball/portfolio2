import React from 'react';

const Hero = () => {
    return (
        <section className = "hero" >
            <div className="hero__description">
                <h1>Designer, Developer</h1>
                <p>Hi, I'm Jochen, a Belgian freelance developer.</p>
                <p>I make graphics and websites for small businesses.</p>
            </div>
            <div className="caretDown">
                <i className="im im-angle-down" />
            </div>
        </section >
    );
}

export default Hero;