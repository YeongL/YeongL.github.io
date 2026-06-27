import Section from './Section';
import styles from './Location.module.css';

// 카카오맵 "지도 퍼가기"에서 복사한 값들
const KAKAO_MAP = {
  lat: 37.5853522,     // ← 위도
  lng: 126.9967232,    // ← 경도
  name: '성균관컨벤션 웨딩홀',   // ← 장소명
  level: 3,         // 지도 확대 레벨 (1~14, 낮을수록 확대)
};


function KakaoMap() {
  const iframeSrc = `https://map.kakao.com/link/map/${encodeURIComponent(KAKAO_MAP.name)},${KAKAO_MAP.lat},${KAKAO_MAP.lng}`;

  return (
    <iframe
      src={iframeSrc}
      style={{ width: '100%', height: '280px', border: 'none', borderRadius: '12px' }}
      title="웨딩홀 지도"
      loading="lazy"
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
