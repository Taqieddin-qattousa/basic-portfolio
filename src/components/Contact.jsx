import React, { useEffect, useRef } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={`container ${styles.content}`}>
        <h2>Get In Touch</h2>
        <p>I'm currently open to new opportunities. Feel free to reach out!</p>
        <p className={styles.location}>📍 Dair Qadis, Ramallah, Palestine</p>
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
    </section>
  );
}

export default Contact;
