import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <header id="home" className={styles.hero}>
      <div className="container">
        <h1>
          Hi, I'm <span className={styles.accent}>Taqi Al-den Qattousa</span>.
        </h1>
        <p className={styles.subtitle}>
          Applied Computing graduate | Web developer specializing in full-stack applications with
          React, Node.js, and PostgreSQL.
        </p>
        <a href="#projects" className={styles.btn}>
          View My Work
        </a>
      </div>
    </header>
  );
}

export default Hero;
