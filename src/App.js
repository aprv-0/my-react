import React, { useState } from "react";
import Header from "./components/Header";
import PortfolioList from "./components/PortfolioList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState("about");

  const handleLinkClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header handleLinkClick={handleLinkClick} />
      <main>
        {currentSection === "about" && (
          <section id="about" className="section about-section">
            <div className="container">
              <div className="section-content">
                <h2 className="section-title">APURVA KARPE</h2>
                <div className="section-bg">
                  <p className="section-title">Frontend Developer</p>
                  <p className="section-description">
                    I am an intercollegiate chess tournament player and won a
                    trophy for our college team.
                    <br />I participated in college group events and received a
                    star performer badge among approximately 120 students.
                    <br />I secured an 8.80 CGPA in my recent semester
                    examinations.
                    <br />
                    Currently, I am learning DSA in Java and practicing
                    full-stack technologies (React, PHP) to become proficient in
                    them.
                    <br />I am seeking an internship to understand how things
                    work within a team and to learn new things.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {currentSection === "portfolio" && <PortfolioList />}
        {currentSection === "contact" && (
          <section id="contact" className="section contact-section">
            <div className="container">
              <div className="section-content">
                <h2 className="section-title">Contact</h2>
                <p className="section-description">Let's work together!</p>
                <p>
                  Email:{" "}
                  <a href="mailto:apukarpe1502@gmail.com">apukarpe1502@gmail.com</a>
                </p>
                <p className="section-description">Phone: +91 9028495933</p>
                <p>
                  Instagram:{" "}
                  <a href="https://www.instagram.com/_aprv___/">@_aprv___</a>
                </p>
                <p>
                  Github:{" "}
                  <a href="https://github.com/aprv-0">@aprv-0</a>
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
