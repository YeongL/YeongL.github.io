import { useEffect, useRef } from 'react';
import Section from './Section';
import styles from './Location.module.css';

// 카카오맵 "지도 퍼가기"에서 복사한 값들
const KAKAO_MAP = {
  timestamp: '1782537605212',  // ← 복사한 값 그대로
  key: 'q95cdgq5acb',          // ← 복사한 값 그대로
  mapWidth: '640',
  mapHeight: '360',
};


function KakaoMap() {
  const containerId = `daumRoughmapContainer${KAKAO_MAP.timestamp}`;

  useEffect(() => {
    function renderMap() {
      if (window.daum?.roughmap?.Lander) {
        new window.daum.roughmap.Lander(KAKAO_MAP).render();
      } else {
        setTimeout(renderMap, 150);
      }
    }
    renderMap();
  }, []);

  return (
    <div
      id={containerId}
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%', minHeight: '360px' }}
    />
  );
}

export default function Location({ venueName, address, transport, naverMapUrl, kakaoMapUrl }) {
  return (
    <Section title="오시는 길" accent>
      <div className={styles.venueCard}>
        <svg className={styles.pinIcon} width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path d="M10 0C4.5 0 0 4.5 0 10C0 17.5 10 24 10 24C10 24 20 17.5 20 10C20 4.5 15.5 0 10 0Z" fill="#C8718A"/>
          <circle cx="10" cy="10" r="4" fill="white"/>
        </svg>
        <p className={styles.venueName}>{venueName}</p>
        <p className={styles.address}>{address}</p>
      </div>

      <div className={styles.mapWrap}>
        <KakaoMap />
      </div>

      <div className={styles.mapBtns}>
        {naverMapUrl && (
          <a href={naverMapUrl} target="_blank" rel="noopener noreferrer" className={`${styles.mapBtn} ${styles.naver}`}>
            네이버 지도
          </a>
        )}
        {kakaoMapUrl && (
          <a href={kakaoMapUrl} target="_blank" rel="noopener noreferrer" className={`${styles.mapBtn} ${styles.kakao}`}>
            카카오 지도
          </a>
        )}
      </div>

      {transport && (
        <div className={styles.transport}>
          {transport.map((item) => (
            <div key={item.type} className={styles.transportItem}>
              <span className={styles.transportType}>{item.type}</span>
              <span className={styles.transportDesc}>{item.desc}</span>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
