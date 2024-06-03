import React from 'react';
import './Header.css';

const Header = () => {
  const handlePortfolioClick = () => {
    window.location.hash = '#portfolio';
  };

  const handleContactClick = () => {
    window.location.hash = '#contact';
  };

  return (
    <header className="header">
      <h1 className="header-title">APURVA KARPE</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#portfolio" onClick={handlePortfolioClick}>Portfolio</a>
        <a href="#contact" onClick={handleContactClick}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
