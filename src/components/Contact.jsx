import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactCard}>
      <div className={`container ${styles.content}`}>
        <p>I'm currently open to new opportunities. Feel free to reach out!</p>
        <p className={styles.location}>📍 Ramallah, Palestine</p>
        <div className={styles.links}>
          <a href="mailto:yazansam18l@gmail.com" className={styles.btn}>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/taqi-alden-qattousa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Taqieddin-qattousa"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            GitHub
          </a>
        </div>
        <p className={styles.phone}>📞 +970593062910</p>
      </div>
    </div>
  );
}

export default Contact;
