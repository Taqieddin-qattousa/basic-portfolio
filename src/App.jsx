import React from 'react';

// Import all our components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
