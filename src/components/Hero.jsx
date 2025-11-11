import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <header id="home" className={styles.hero}>
      <div className="container">
        <h1>Taqi Al-den Qattousa</h1>
      </div>
    </header>
  );
}

export default Hero;
