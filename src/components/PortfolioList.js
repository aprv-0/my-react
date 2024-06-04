import React from 'react';
import './PortfolioList.css';

const PortfolioList = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-items">
          <div className='portfolio-links'>
            <p>Project 1</p>
            <a href="https://aprv-0.github.io/Resume/">My Resume</a>
          </div>
          <div className='portfolio-links'>
            <p>Project 2</p>
            <a href="https://github.com/aprv-0/PGLife_with_react" target="_blank">PGLife_with_react</a>
          </div>
          <div className='portfolio-links'>
            <p>Project 3</p>
            <a href="https://github.com/aprv-0/PGLife_without_react" target="_blank">PGLife_without_react</a>
          </div>
          <div className='portfolio-links'>
            <p>Project 4</p>
            <a href="https://aprv-0.github.io/REST-API/" target="_blank">REST-API</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
