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
        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-content">
              <h2 className="section-title">APURVA KARPE</h2>
              <p className="section-description">Frontend Developer</p>
            </div>
          </div>
        </section>
        <div className="section-divider"></div>
        <PortfolioList />
        <div className="section-divider"></div>
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-content">
              <h2 className="section-title">Contact</h2>
              <p className="section-description">Let's work together!</p>
              <p className="section-description">Email: <a href="mailto:apurva@example.com">apurva@example.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
