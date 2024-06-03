// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">APURVA KARPE</h1>
        </div>
        <div className="header-content">
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
