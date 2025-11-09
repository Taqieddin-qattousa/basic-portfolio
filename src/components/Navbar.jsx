import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <a href="#home" className={styles.logo}>
          Your Name
        </a>
        <ul className={styles.menu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
