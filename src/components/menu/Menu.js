import React from 'react';
import './menu.css';

const Menu = () => {
    return(
        <div>
            <div className="burger">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-logo"><img className="menu-logo-img" src={require('../../assets/logo.png')}/></div>
                <div className="menu-title"></div>
                <a className="menu-github" href="https://github.com/Loratadin/dog-breed-search" target="_blank">Source Code in Git</a>
                <a className="menu-twitter" href="https://twitter.com/PAIRProgrammin1?lang=en" target="_blank" >Follow on Twitter</a>
            </div>
        </div>
    );
}

export default Menu;