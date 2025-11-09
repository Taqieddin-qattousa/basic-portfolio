import React from 'react';
import styles from './ProjectCard.module.css';

// We use "destructuring" to get the props by name
function ProjectCard({ title, description, tags, ghLink, liveLink }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tags}>
        {/* We map over the tags array to create a span for each one */}
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={ghLink} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        {/* We only show the "Live Demo" link if the liveLink prop exists */}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
