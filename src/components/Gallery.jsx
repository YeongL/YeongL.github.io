import { useState } from 'react';
import Section from './Section';
import styles from './Gallery.module.css';

// 샘플 플레이스홀더 이미지 (실제 사진으로 교체하세요)
const PLACEHOLDER_COLORS = [
  '#F4D8DF', '#EDD5C0', '#D5E6D5', '#D8D5E6', '#E6D5D5',
  '#C8D8D8', '#E6E0D5', '#D5D8E6',
];

export default function Gallery({ photos = [] }) {
  const [active, setActive] = useState(null);

  // photos가 없으면 플레이스홀더 표시
  const items = photos.length > 0
    ? photos
    : PLACEHOLDER_COLORS.map((bg, i) => ({ id: i, bg }));

  return (
    <Section title="갤러리">
      <div className={styles.grid}>
        {items.map((item, i) => (
          <button
            key={item.id ?? i}
            className={`${styles.cell} ${i === 0 || i === 3 ? styles.tall : ''}`}
            onClick={() => setActive(item)}
            aria-label={`사진 ${i + 1} 크게 보기`}
          >
            {item.src
              ? <img src={item.src} alt={item.alt ?? `웨딩 사진 ${i + 1}`} className={styles.img} loading="lazy" />
              : <div className={styles.placeholder} style={{ background: item.bg }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C9.8 3 8 4.8 8 7C8 9.2 9.8 11 12 11C14.2 11 16 9.2 16 7C16 4.8 14.2 3 12 3Z" fill="white" opacity="0.6"/>
                    <path d="M4 21C4 17 7.6 14 12 14C16.4 14 20 17 20 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                  <span className={styles.placeholderLabel}>사진 {i + 1}</span>
                </div>
            }
          </button>
        ))}
      </div>

      {active && (
        <div className={styles.lightbox} onClick={() => setActive(null)} role="dialog" aria-modal>
          <button className={styles.closeBtn} onClick={() => setActive(null)} aria-label="닫기">✕</button>
          {active.src
            ? <img src={active.src} alt="" className={styles.lightboxImg} />
            : <div className={styles.lightboxPlaceholder} style={{ background: active.bg }} />
          }
        </div>
      )}
    </Section>
  );
}
