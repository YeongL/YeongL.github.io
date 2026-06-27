# 💍 모바일 청첩장 — Vite + React

## 빠른 시작

```bash
npm install
npm run dev
```

## GitHub Pages 배포

### 1. `vite.config.js`에서 base 경로 수정
```js
base: '/your-repo-name/',  // 본인의 GitHub 레포 이름으로 변경
```

### 2. GitHub 레포 Settings → Pages → Source: "GitHub Actions" 선택

### 3. `main` 브랜치에 push하면 자동 배포됩니다.

---

## 커스터마이징

### `src/App.jsx` 상단 `WEDDING_INFO` 객체 수정

| 항목 | 설명 |
|------|------|
| `groomName` / `brideName` | 신랑·신부 이름 |
| `date` | 식 날짜 텍스트 |
| `targetDate` | D-Day 카운트다운용 ISO 날짜 |
| `venue` | 장소명 (Hero 하단) |
| `greeting` | 인사말 전문 |
| `venueName` / `address` | 오시는 길 섹션 |
| `transport` | 교통수단 배열 |
| `naverMapUrl` / `kakaoMapUrl` | 지도 앱 딥링크 |
| `accounts` | 계좌 정보 배열 |
| `photos` | 갤러리 사진 배열 (src, alt) |

### 사진 추가
```js
photos: [
  { id: 1, src: '/wedding-invitation/photos/1.jpg', alt: '커플 사진' },
  { id: 2, src: '/wedding-invitation/photos/2.jpg', alt: '약혼 사진' },
]
```
`public/photos/` 폴더에 사진 파일을 넣으세요.

### 지도 iframe 교체
`src/components/Location.jsx`의 `<iframe src=...>` 부분을
카카오맵/네이버 지도에서 공유 → embed 코드로 교체하세요.

---

## 구조

```
src/
├── components/
│   ├── PetalRain.jsx   # 꽃잎 낙하 애니메이션
│   ├── Hero.jsx        # 메인 타이틀 화면
│   ├── Greeting.jsx    # 인사말
│   ├── Countdown.jsx   # D-Day 카운트다운
│   ├── Gallery.jsx     # 사진 갤러리 (라이트박스)
│   ├── Location.jsx    # 오시는 길 + 지도
│   ├── AccountInfo.jsx # 계좌 정보 (클립보드 복사)
│   └── Footer.jsx
├── hooks/
│   └── useInView.js    # 스크롤 페이드인 훅
├── App.jsx
└── index.css
```
