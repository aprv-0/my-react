import React from 'react';
import './PortfolioList.css';

const PortfolioList = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-items">
          {<a href="https://aprv-0.github.io/Resume/">My Resume</a>}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
