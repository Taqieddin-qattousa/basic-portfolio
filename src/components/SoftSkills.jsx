import styles from './SoftSkills.module.css';

export default function SoftSkills() {
  const skills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Critical Thinking',
    'Time Management',
  ];

  return (
    <div className={styles.card}>
      <h3>Soft Skills</h3>
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
