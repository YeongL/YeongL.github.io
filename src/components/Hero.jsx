import styles from './Hero.module.css';

export default function Hero({ groomName, brideName, date, venue }) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>We're Getting Married</p>

        <div className={styles.names}>
          <span className={styles.name}>{groomName}</span>
          <span className={styles.ampersand}>&amp;</span>
          <span className={styles.name}>{brideName}</span>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12,2 C14,6 18,8 22,8 C18,10 16,14 16,18 C14,14 10,12 6,12 C10,10 12,6 12,2Z" fill="#D4AF6A"/>
            <path d="M12,22 C10,18 6,16 2,16 C6,14 8,10 8,6 C10,10 14,12 18,12 C14,14 12,18 12,22Z" fill="#C8718A" opacity="0.7"/>
          </svg>
          <span className={styles.dividerLine} />
        </div>

        <time className={styles.date}>{date}</time>
        <p className={styles.venue}>{venue}</p>
      </div>

      <div className={styles.scrollHint}>
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="#C8718A" strokeWidth="1.5"/>
          <circle className={styles.scrollDot} cx="9" cy="8" r="2.5" fill="#C8718A"/>
        </svg>
      </div>
    </section>
  );
}
