import React from "react";

const Tutor = () => {
    return <div className="service service__Tutor">
        <div className="service__icon">
          <i className="im im-language" />
        </div>

        <div className="service__description">
          <h2>Tutor</h2>
          <p>I can also teach small groups various aspects of programming and webdesign.</p>
        </div>

        <div className="service__me">
          <h3>I can share my knowledge of</h3>
          <ul>
            <li>Basic and advanced programming principles, using C#</li>
            <li>OOP and SOLID philosophies</li>
            <li>Database modeling and SQL code</li>
            <li>HTML, CSS, SASS</li>
            <li>Javascript</li>
            <li>Node.js Express</li>
            <li>React</li>
            <li>Ms Office software</li>
            <li>Source control (TFS, GIT)</li>
          </ul>
        </div>
      </div>;
};

export default Tutor;