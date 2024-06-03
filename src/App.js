// App.js
import React from 'react';
import Header from './components/Header';
import PortfolioList from './components/PortfolioList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="about">
          <div className="about-content">
            <h2>APURVA KARPE</h2>
            <p>A Frontend developer passionate about creating beautiful and engaging web experiences.</p>
            <button className="explore-button">Explore</button>
          </div>
        </section>
        <PortfolioList />
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2>Contact</h2>
            <p>Contact me at <a href="mailto:apurva@example.com">apurva@example.com</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
