import styles from './SocialIcons.module.css';

export default function SocialIcons() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Taqieddin-qattousa',
      icon: '💻',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/taqi-alden-qattousa-b52023269/',
      icon: '💼',
    },
    {
      name: 'Email',
      url: 'mailto:yazansam18l@gmail.com',
      icon: '📧',
    },
  ];

  return (
    <div className={styles.card}>
      <h3>Connect</h3>
      <div className={styles.socialGrid}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.icon}>{social.icon}</span>
            <span className={styles.name}>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
