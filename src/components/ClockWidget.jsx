import styles from './ClockWidget.module.css';

export default function ClockWidget() {
  return (
    <div className={styles.card}>
      <div className={styles.placeholder}>
        <span className={styles.icon}>🕐</span>
        <p>Clock & Music Player</p>
        <span className={styles.note}>(Coming Soon)</span>
      </div>
    </div>
  );
}
