import styles from './TechnicalSkills.module.css';

export default function TechnicalSkills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 },
  ];

  return (
    <div className={styles.card}>
      <h3>Technical Skills</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
