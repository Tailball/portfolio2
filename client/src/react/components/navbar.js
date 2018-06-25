import React from 'react';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="logo">
                <p>JP.</p>
            </div>
            <div className="lang">
                <a href="#">NL</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="#">EN</a>
            </div>
            <div className="getInTouch">
                <a href="#">get in touch</a>
            </div>
        </div>
    );
}

export default NavBar;