import { useInView } from '../hooks/useInView';
import styles from './Section.module.css';

export default function Section({ title, children, accent = false }) {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${accent ? styles.accent : ''} fade-up ${visible ? 'visible' : ''}`}
    >
      {title && (
        <div className={styles.titleWrap}>
          <span className={styles.titleLine} />
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.titleLine} />
        </div>
      )}
      {children}
    </section>
  );
}
