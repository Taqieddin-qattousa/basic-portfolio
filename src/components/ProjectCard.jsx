import React from 'react';
import styles from './ProjectCard.module.css';

// Compact card that opens modal on click
function ProjectCard({ title, tags, icon, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon || '💼'}</div>
      </div>
      <h3>{title}</h3>
      <div className={styles.tags}>
        {tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.viewMore}>Click to view details →</div>
    </div>
  );
}

export default ProjectCard;
