import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">
                <div className="logo">
                    <p>JP.</p>
                </div>
            </Link>
            <div className="lang">
                <a href="#">NL</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="#">EN</a>
            </div>
            <div className="getInTouch">
                <Link to="/contact">get in touch</Link>
            </div>
        </div>
    );
}

export default NavBar;