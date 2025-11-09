import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

// Enhanced project data with more details for modal
const projectData = [
  {
    id: 1,
    title: 'DevQuest',
    icon: '🚀',
    description:
      'Developed a secure, full-stack web application supporting real-time code execution and automated test validation for instant user feedback.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Azure', 'Stripe'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: 'https://devquest-web.azurewebsites.net/',
    features: [
      'Designed and implemented the backend using Node.js and managed data with PostgreSQL',
      'Deployed and managed the application & PostgreSQL database using Azure, ensuring scalability and reliability',
      'Designed the UI/UX from scratch and developed the frontend using React with a focus on modern, intuitive design',
      'Integrated the Stripe API to handle secure payment processing',
      'Managed the full development lifecycle, including deployment, feature iteration, and handling user feedback',
    ],
    details:
      'Full-stack programming learning platform built as graduation project (Sep 2024 - Jan 2025). Features real-time code execution, automated testing, and secure payment integration.',
  },
  {
    id: 2,
    title: 'Personal Web Apps',
    icon: '💻',
    description:
      'Created multiple small-scale web apps using React, Node.js, and PostgreSQL to sharpen frontend/backend skills.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
    features: [
      'Built multiple full-stack applications from scratch',
      'Implemented user authentication and authorization',
      'Designed and managed database schemas',
      'Created responsive and modern user interfaces',
    ],
    details:
      'Collection of personal projects to explore different web development concepts and strengthen both frontend and backend skills.',
  },
  {
    id: 3,
    title: 'Full-Stack Course',
    icon: '📚',
    description:
      'Completing comprehensive nanodegree program covering modern web development practices and technologies.',
    tags: ['React', 'Node.js', 'JavaScript', 'Databases'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
    features: [
      'Learning industry-standard development practices',
      'Building real-world projects with modern frameworks',
      'Mastering JavaScript, HTML, CSS, and databases',
      'Gaining hands-on experience with deployment and version control',
    ],
    details:
      'Full-Stack Web Development Nanodegree from Udacity (Ongoing). Comprehensive course covering the complete web development stack.',
  },
  {
    id: 4,
    title: 'Auth & DB Design',
    icon: '🔐',
    description:
      'Explored user authentication, database design, and UI responsiveness to strengthen backend and frontend skills.',
    tags: ['Node.js', 'PostgreSQL', 'Auth', 'Responsive Design'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
    features: [
      'Implemented secure user authentication systems',
      'Designed normalized database schemas',
      'Created responsive layouts for various screen sizes',
      'Applied best practices for security and data protection',
    ],
    details:
      'Personal projects focused on mastering authentication patterns, database architecture, and creating responsive user interfaces.',
  },
  {
    id: 5,
    title: 'Cloud & CI/CD',
    icon: '☁️',
    description:
      'Managed full development lifecycle including deployment, feature iteration, and user feedback handling using Azure.',
    tags: ['Azure', 'DevOps', 'CI/CD', 'Cloud'],
    ghLink: 'https://github.com/Taqieddin-qattousa',
    liveLink: null,
    features: [
      'Deployed applications to Azure cloud platform',
      'Set up continuous integration and deployment pipelines',
      'Managed cloud resources and databases',
      'Monitored application performance and logs',
    ],
    details:
      'Experience with cloud deployment, DevOps practices, and managing the full software development lifecycle on Azure.',
  },
];

function Projects() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Set initial state - cards start below
      gsap.set(card, {
        opacity: 0,
        y: 400,
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
        i * 0.25 // Stagger timing
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="projects" className={styles.projects} ref={sectionRef}>
        <div className="container">
          <h2>My Projects</h2>
          <div className={styles.grid}>
            {projectData.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={styles.cardReveal}
              >
                <ProjectCard
                  title={project.title}
                  tags={project.tags}
                  icon={project.icon}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

export default Projects;
