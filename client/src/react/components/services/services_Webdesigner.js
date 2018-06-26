import React from "react";

const Webdesigner = () => {
    return <div className="service service__Webdesigner">
        <div className="service__header">
          <div className="service__header__icon">
            <i className="im im-code" />
          </div>

          <div className="service__header__description">
            <h2>Webdesigner</h2>
            <p>I design clean, modern looking websites for small businesses.<br />I aim for full-responsive design, meaning they will work on big screens, tables and phones.</p>
          </div>
        </div>

        <div className="service__me">
          <h3>I speak fluent</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3 and SASS</li>
            <li>Javascript ECMA 6</li>
            <li>React and Redux</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>;
};

export default Webdesigner;
