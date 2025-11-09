import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

function About() {
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
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={`container ${styles.content}`}>
        <h2>About Me</h2>
        <p>
          Graduated Applied Computing student from Palestine Technical University - Kadoorie (2020 - July 2025) with a solid
          background in building and deploying full-stack web applications. Comfortable with modern technologies
          like React, Node.js, and PostgreSQL, with hands-on experience deploying databases and applications with
          Python through academic coursework, including applications related to AI.
        </p>
        <p>
          I'm a fast learner, detail-oriented, and enjoy solving technical problems with
          an interest in contributing to projects that involve cloud solutions and emerging AI technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
