import React from 'react';
import './App.css';

// Import all our components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClockWidget from './components/ClockWidget';
import SoftSkills from './components/SoftSkills';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="bento-container">
        {/* Name Section - Full Width */}
        <Hero />
        {/* Row 1: Clock Widget + Soft Skills (side by side) */}
        <div className="bento-row row-1">
          <ClockWidget />
          <SoftSkills />
        </div>
        {/* Social Icons - Full Width Below */}
        <SocialIcons />
        {/* About Me Section */}
        <h2 className="section-title">About Me</h2>{' '}
        {/* Row 2: About Paragraph + Technical Skills */}
        <div className="bento-row row-2">
          <About />
          <TechnicalSkills />
        </div>
        {/* Projects Section */}
        <h2 className="section-title">My Projects</h2>
        <Projects />
        {/* Education Section */}
        <h2 className="section-title">Education</h2>
        <Education />
        {/* Contact Section */}
        <h2 className="section-title">Contact Me</h2>
        <ContactForm />
        {/* Contacts Info */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
