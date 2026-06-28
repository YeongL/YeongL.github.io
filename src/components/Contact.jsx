import { useState } from 'react';
import Section from './Section';
import styles from './Contact.module.css';

function PersonCard({ person }) {
  return (
    <div className={styles.personCard}>
      <div className={styles.info}>
        <span className={styles.role}>{person.role}</span>
        <span className={styles.name}>{person.name}</span>
      </div>
      <div className={styles.btns}>
        <a href={`tel:${person.phone}`} className={`${styles.btn} ${styles.call}`}>📞 전화</a>
        <a href={`sms:${person.phone}`} className={`${styles.btn} ${styles.sms}`}>💬 문자</a>
      </div>
    </div>
  );
}

export default function Contact({ contacts }) {
  const [open, setOpen] = useState(false);

  const groomGroup = contacts.find(g => g.side === '신랑 측');
  const brideGroup = contacts.find(g => g.side === '신부 측');

  const groom = groomGroup?.people.find(p => p.role === '신랑');
  const bride = brideGroup?.people.find(p => p.role === '신부');
  const groomParents = groomGroup?.people.filter(p => p.role !== '신랑') ?? [];
  const brideParents = brideGroup?.people.filter(p => p.role !== '신부') ?? [];

  return (
    <Section title="연락처">

      {/* 신랑/신부 가로 */}
      <div className={styles.twoCol}>
        <div className={styles.col}>
          <p className={styles.side}>신랑 측</p>
          {groom && (
            <div className={styles.mainPerson}>
              <span className={styles.mainLabel}>신랑</span>
              <div className={styles.btns}>
                <a href={`tel:${groom.phone}`} className={`${styles.btn} ${styles.call}`}>📞 전화</a>
                <a href={`sms:${groom.phone}`} className={`${styles.btn} ${styles.sms}`}>💬 문자</a>
              </div>
            </div>
          )}
        </div>

        <div className={styles.divider} />

        <div className={styles.col}>
          <p className={styles.side}>신부 측</p>
          {bride && (
            <div className={styles.mainPerson}>
              <span className={styles.mainLabel}>신부</span>
              <div className={styles.btns}>
                <a href={`tel:${bride.phone}`} className={`${styles.btn} ${styles.call}`}>📞 전화</a>
                <a href={`sms:${bride.phone}`} className={`${styles.btn} ${styles.sms}`}>💬 문자</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 혼주 접기/펼치기 */}
      <button
        className={`${styles.toggleBtn} ${open ? styles.active : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        {open ? '혼주 연락처 닫기 ▲' : '혼주 연락처 보기 ▼'}
      </button>

      <div className={`${styles.content} ${open ? styles.open : ''}`}>
        <div className={styles.parentWrap}>
          <div className={styles.twoCol}>
            <div className={styles.col}>
              {groomParents.map(person => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
            <div className={styles.divider} />
            <div className={styles.col}>
              {brideParents.map(person => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
}