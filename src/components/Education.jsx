import styles from './Education.module.css';

export default function Education() {
  const education = {
    institution: 'Palestine Technical University - Kadoorie',
    degree: 'Bachelor of Computer Science',
    period: '2020 - 2025',
    location: 'Tulkarm, Palestine',
    highlights: [
      'Focus on Software Engineering',
      'Web Development & Database Systems',
      'Data Structures & Algorithms',
      'AI & Machine Learning Coursework',
    ],
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>🎓</div>
        <div className={styles.info}>
          <h3>{education.institution}</h3>
          <p className={styles.degree}>{education.degree}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.meta}>
          <span className={styles.period}>📅 {education.period}</span>
          <span className={styles.location}>📍 {education.location}</span>
        </div>
        <ul className={styles.highlights}>
          {education.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
