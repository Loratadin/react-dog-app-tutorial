import React from 'react';
import './menu.css';

const toggleMenuClasses = () => {
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle('is-active');
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened');
} 
const Menu = () => {
    return(
        <div>
            <div className="burger" id="burger" onClick={toggleMenuClasses}>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="menu-container" id="menu-container">
                <div className="menu-logo"><img className="menu-logo-img" src={require('../../assets/logo.png')} alt="dog"/></div>
                <div className="menu-title">Breed Finder</div>
                <a className="menu-github" href="https://github.com/Loratadin/dog-breed-search" target="_blank" rel="noopener noreferrer">Source Code in Git</a>
                <a className="menu-twitter" href="https://twitter.com/PAIRProgrammin1?lang=en" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
            </div>
        </div>
    );
}

export default Menu;