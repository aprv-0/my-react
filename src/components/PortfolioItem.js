import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = ({ title, description, image, link }) => {
  return (
    <div className="portfolio-item">
      <img src={image} alt={title} className="portfolio-image" />
      <h2 className="portfolio-title">{title}</h2>
      <p className="portfolio-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project</a>
    </div>
  );
};

export default PortfolioItem;
