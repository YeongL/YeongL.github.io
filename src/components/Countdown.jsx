import { useState, useEffect } from 'react';
import Section from './Section';
import styles from './Countdown.module.css';

function pad(n) { return String(n).padStart(2, '0'); }

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    function calc() {
      const diff = new Date(targetDate) - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!timeLeft) return null;

  const units = [
    { label: '일', value: timeLeft.days },
    { label: '시간', value: pad(timeLeft.hours) },
    { label: '분', value: pad(timeLeft.minutes) },
    { label: '초', value: pad(timeLeft.seconds) },
  ];

  return (
    <Section title="D-Day" accent>
      <div className={styles.grid}>
        {units.map(({ label, value }) => (
          <div key={label} className={styles.unit}>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
