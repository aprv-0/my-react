import React from 'react';
import './Header.css';

const Header = ({ handleLinkClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h1 className="header-title">APURVA KARPE</h1>
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#about" onClick={() => handleLinkClick('about')}>About</a>
              <a href="#portfolio" onClick={() => handleLinkClick('portfolio')}>Portfolio</a>
              <a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
