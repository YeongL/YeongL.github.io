import { useState, useEffect } from 'react';
import {
  collection, addDoc, getDocs, deleteDoc, doc,
  orderBy, query, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import Section from './Section';
import styles from './Guestbook.module.css';

const EMOJIS = ['🎉', '❤️', '💐', '🥂', '✨', '🍀'];

function GuestCard({ entry, onDelete }) {
  const [showDeleteInput, setShowDeleteInput] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);

  function handleDelete() {
    if (pw === entry.password) {
      onDelete(entry.id);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1500);
    }
  }

  const date = entry.createdAt?.toDate
    ? entry.createdAt.toDate().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' })
    : '';

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className={styles.emoji}>{entry.emoji}</span>
          <span className={styles.name}>{entry.name}</span>
          {date && <span className={styles.date}>{date}</span>}
        </div>
        <button
          className={styles.deleteToggle}
          onClick={() => setShowDeleteInput(v => !v)}
          aria-label="삭제"
        >
          ✕
        </button>
      </div>

      <p className={styles.message}>{entry.message}</p>

      {showDeleteInput && (
        <div className={styles.deleteRow}>
          <input
            type="password"
            placeholder="작성 시 입력한 비밀번호"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleDelete()}
            className={`${styles.pwInput} ${pwError ? styles.pwError : ''}`}
          />
          <button className={styles.deleteBtn} onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🎉');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function fetchEntries() {
    try {
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setEntries(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchEntries(); }, []);

  async function handleSubmit() {
    if (!name.trim() || !message.trim() || !password.trim()) return;
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: message.trim(),
        password: password.trim(),
        emoji: selectedEmoji,
        createdAt: serverTimestamp(),
      });
      setName('');
      setMessage('');
      setPassword('');
      setSelectedEmoji('🎉');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
      fetchEntries();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, 'guestbook', id));
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  return (
    <Section title="방명록">
      <div className={styles.form}>
        <div className={styles.emojiRow}>
          {EMOJIS.map(e => (
            <button
              key={e}
              className={`${styles.emojiBtn} ${selectedEmoji === e ? styles.emojiSelected : ''}`}
              onClick={() => setSelectedEmoji(e)}
            >
              {e}
            </button>
          ))}
        </div>

        <input
          className={styles.input}
          placeholder="이름"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={10}
        />
        <textarea
          className={styles.textarea}
          placeholder="축하 메시지를 남겨주세요 💌"
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength={200}
          rows={3}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="삭제용 비밀번호 (숫자 4자리 권장)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          maxLength={20}
        />

        <button
          className={`${styles.submitBtn} ${submitted ? styles.submitted : ''}`}
          onClick={handleSubmit}
          disabled={submitting || !name.trim() || !message.trim() || !password.trim()}
        >
          {submitted ? '✓ 등록됐습니다!' : submitting ? '등록 중...' : '축하 메시지 남기기'}
        </button>
      </div>

      <div className={styles.list}>
        {loading && <p className={styles.empty}>불러오는 중...</p>}
        {!loading && entries.length === 0 && (
          <p className={styles.empty}>아직 방명록이 없어요. 첫 번째로 남겨주세요 💌</p>
        )}
        {entries.map(entry => (
          <GuestCard key={entry.id} entry={entry} onDelete={handleDelete} />
        ))}
      </div>
    </Section>
  );
}