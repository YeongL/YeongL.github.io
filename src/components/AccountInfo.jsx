import { useState } from 'react';
import Section from './Section';
import styles from './AccountInfo.module.css';

function AccountCard({ name, bank, account, relation }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement('input');
      el.value = account;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <span className={styles.relation}>{relation}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.bank}>{bank}</span>
        <span className={styles.account}>{account}</span>
      </div>
      <button className={`${styles.copyBtn} ${copied ? styles.copied : ''}`} onClick={handleCopy}>
        {copied ? '✓ 복사됨' : '복사'}
      </button>
    </div>
  );
}

export default function AccountInfo({ accounts }) {
  return (
    <Section title="마음 전하기">
      <p className={styles.desc}>
        축하의 마음을 전해 주시는 분들을 위해<br />
        계좌 정보를 안내드립니다.
      </p>
      <div className={styles.list}>
        {accounts.map((acc, i) => (
          <AccountCard key={i} {...acc} />
        ))}
      </div>
    </Section>
  );
}
