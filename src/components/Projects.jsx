import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

// This is where you'll list your projects.
// Add or remove projects here!
const projectData = [
  {
    id: 1,
    title: 'DevQuest - Full-Stack Programming Platform',
    description: 'Developed a secure, full-stack web application supporting real-time code execution and automated test validation for instant user feedback.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Azure', 'Stripe'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: 'https://devquest-web.azurewebsites.net/', // Update with actual link if different
  },
  {
    id: 2,
    title: 'Personal Web Applications',
    description: 'Created multiple small-scale web apps using React, Node.js, and PostgreSQL to sharpen frontend/backend skills.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
  },
  {
    id: 3,
    title: 'Full-Stack Web Development Course',
    description: 'Completing comprehensive nanodegree program covering modern web development practices and technologies.',
    tags: ['React', 'Node.js', 'JavaScript', 'Databases'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
  },
  {
    id: 4,
    title: 'Authentication & Database Design',
    description: 'Explored user authentication, database design, and UI responsiveness to strengthen backend and frontend skills.',
    tags: ['Node.js', 'PostgreSQL', 'Auth', 'Responsive Design'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
  },
  {
    id: 5,
    title: 'Cloud Deployment & CI/CD',
    description: 'Managed full development lifecycle including deployment, feature iteration, and user feedback handling using Azure.',
    tags: ['Azure', 'DevOps', 'CI/CD', 'Cloud'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
  },
];

function Projects() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true, // THIS PINS THE SECTION!
        anticipatePin: 1,
        // markers: true, // Uncomment for debugging
      },
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Set initial state - cards start way below
      gsap.set(card, {
        opacity: 0,
        y: 600,
      });

      // Animate each card scrolling up into view
      timeline.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        i * 0.3 // Stagger timing
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className="container">
        <h2>My Projects</h2>
        <div className={styles.grid}>
          {/* We map over our projectData and create a card for each project */}
          {projectData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.cardReveal}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                liveLink={project.liveLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
