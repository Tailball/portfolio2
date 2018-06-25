import React from "react";

const WebDeveloper = () => {
  return <div className="service service__WebDeveloper">
      <div className="service__header">
        <div className="service__header__icon">
          <i className="im im-tools" />
        </div>

        <div className="service__header__description">
          <h2>Web developer</h2>
          <p>I am also capable of implementing functionality on your website and back-end server to make a true user experience.</p>
        </div>
      </div>

      <div className="service__me">
        <h3>I can implement</h3>
        <ul>
          <li>Node.js and Express</li>
          <li>MongoDB and Mongoose</li>
          <li>SQL server</li>
          <li>Heroku</li>
          <li>Amazon Web Services (AWS)</li>
        </ul>
      </div>
    </div>;
};

export default WebDeveloper;