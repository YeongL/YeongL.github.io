import Section from './Section';
import styles from './Greeting.module.css';

export default function Greeting({ text }) {
  return (
    <Section title="인사말">
      <div className={styles.wrap}>
        <svg className={styles.quoteIcon} width="28" height="20" viewBox="0 0 28 20" fill="none">
          <path d="M0 20V12C0 8 1.5 4.8 4.5 2.4C7.5 0 11 0 11 0L9 4C7.5 4 6.2 4.7 5.2 6.1C4.2 7.5 3.7 9 3.7 10.5H8V20H0ZM17 20V12C17 8 18.5 4.8 21.5 2.4C24.5 0 28 0 28 0L26 4C24.5 4 23.2 4.7 22.2 6.1C21.2 7.5 20.7 9 20.7 10.5H25V20H17Z" fill="#F0D6DC"/>
        </svg>
        <p className={styles.text} style={{ whiteSpace: 'pre-line' }}>{text}</p>
      </div>
    </Section>
  );
}
