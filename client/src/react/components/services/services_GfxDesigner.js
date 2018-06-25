import React from 'react';

const GfxDesigner = () => {
    return <div className="service service__GfxDesigner">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-pencil" />
          </div>

          <div className="service__header__description">
            <h2>Graphic designer</h2>
            <p>
              Logos or businesscards for a professional company...<br />Posters or flyers for your next event...<br />I might be able to assist you for anything you'd need visualized.
            </p>
          </div>
        </div>

        <div className="service__me">
          <h3>I am confident with</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Cyberlink Powerdirector</li>
          </ul>
        </div>
      </div>;
}

export default GfxDesigner;