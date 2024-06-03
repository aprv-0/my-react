import React from 'react';
import PortfolioItem from './PortfolioItem';
import './PortfolioList.css';

const PortfolioList = () => {
  const portfolioItems = [
    { title: 'Project One', description: 'Description of project one.', image: 'path/to/image1.jpg', link: '#' },
    { title: 'Project Two', description: 'Description of project two.', image: 'path/to/image2.jpg', link: '#' },
    { title: 'Project Three', description: 'Description of project three.', image: 'path/to/image3.jpg', link: '#' },
  ];

  return (
    <section id="portfolio" className="portfolio-list">
    <h2>PORTFOLIO</h2>
      {portfolioItems.map((item, index) => (
        <PortfolioItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default PortfolioList;
