import styles from './Footer.module.css';

export default function Footer({ groomName, brideName, date }) {
  return (
    <footer className={styles.footer}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={styles.floral}>
        <path d="M16,4 C18,8 22,10 26,10 C22,12 20,16 20,20 C18,16 14,14 10,14 C14,12 16,8 16,4Z" fill="#F0D6DC"/>
        <path d="M16,28 C14,24 10,22 6,22 C10,20 12,16 12,12 C14,16 18,18 22,18 C18,20 16,24 16,28Z" fill="#D4AF6A" opacity="0.7"/>
      </svg>
      <p className={styles.names}>{groomName} &amp; {brideName}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.copy}>함께해 주셔서 감사합니다</p>
    </footer>
  );
}
