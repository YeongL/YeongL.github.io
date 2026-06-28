import PetalRain from './components/PetalRain';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Footer from './components/Footer';
import './index.css';
import Guestbook from './components/Guestbook';
import Contact from './components/Contact';

// ====================================================
// 여기에 실제 정보를 입력하세요
// ====================================================
const WEDDING_INFO = {
  groomName: '김태훈',
  brideName: '이민영',
  date: '2026년 10월 18일 일요일 낮 12시 30분',
  targetDate: '2026-10-18T12:30:00',
  venue: '성균관 컨벤션 3층 스토리홀',

  greeting: `저희 두 사람이 사랑을 약속하는 자리에
소중한 분들을 모시고자 합니다.

바쁘신 가운데에도 부디 참석하시어
축복해 주신다면 더없는 기쁨이 되겠습니다.

김 성주 · 고 현아의 장남  태훈
이 종국 · 김 옥희의 장녀  민영`,

  venueName: '성균관 컨벤션',
  address: '서울 종로구 성균관로 31 성균관컨벤션웨딩홀\n성균관 컨벤션 3층 스토리홀',
  naverMapUrl: 'https://naver.me/IMyAR0V0',  // 실제 URL로 교체
  kakaoMapUrl: 'https://place.map.kakao.com/913429074',  // 실제 URL로 교체

  transport: [
    { type: '지하철', desc: '4호선 혜화역 1번 출구 앞에서 마을버스 7번 탑승, 성균관대 정문 하차' },
    { type: '셔틀버스', desc: '4호선 혜화역 4번 출구 T스토어 앞에서 셔틀버스 운행' },
    { type: '버스', desc: '간선 100, 102, 104, 107, 140, 143, 150, 151, 160, 162, 171, 172, 272, 301, 710번\n지선 8101, 8111번\n광역 1101, 7101번 ' },
    { type: '주차', desc: '건물 내 지하주차장 2시간 무료\n(주차권 프론트 수령)' },
  ],

  accounts: [
    {
      side: '신랑 측',
      people: [
        { role: '신랑', name: '김태훈', bank: '카카오뱅크', account: '3333-01-1234567' },
        { role: '신랑 부', name: '김성주', bank: '국민은행', account: '123-456-7890123' },
        { role: '신랑 모', name: '고현아', bank: '국민은행', account: '123-456-7890123' },
      ],
    },
    {
      side: '신부 측',
      people: [
        { role: '신부', name: '이민영', bank: '신한은행', account: '110-481-906510' },
        { role: '신부 부', name: '이종국', bank: '신한은행', account: '110-123-456789' },
        { role: '신부 모', name: '김옥희', bank: '우리은행', account: '1002-123-456789' },
      ],
    }
    
  ],

  // 실제 사진 URL 배열 (없으면 플레이스홀더 표시)
  photos: [
    { id: 1, src: '/photos/1.JPG', alt: '웨딩 사진 1' },
    { id: 2, src: '/photos/2.JPG', alt: '웨딩 사진 2' },
    { id: 3, src: '/photos/3.JPG', alt: '웨딩 사진 3' },
    { id: 4, src: '/photos/4.JPG', alt: '웨딩 사진 4' },
    { id: 5, src: '/photos/5.JPG', alt: '웨딩 사진 5' },
    { id: 6, src: '/photos/6.JPG', alt: '웨딩 사진 6' },
    { id: 7, src: '/photos/7.JPG', alt: '웨딩 사진 7' },
    { id: 8, src: '/photos/8.JPG', alt: '웨딩 사진 8' }
  ],
  contacts: [
    {
      side: '신랑 측',
      people: [
        { role: '신랑', name: '김태훈', phone: '010-9054-9775' },
        { role: '아버지', name: '김성주', phone: '010-3938-8705' },
        { role: '어머니', name: '고현아', phone: '010-9396-9775' },
      ],
    },
    {
      side: '신부 측',
      people: [
        { role: '신부', name: '이민영', phone: '010-9166-7154' },
        { role: '아버지', name: '이종국', phone: '010-3469-7154' },
        { role: '어머니', name: '김옥희', phone: '010-9296-7154' },
      ],
    },
  ],

};

export default function App() {
  return (
    <>
      <PetalRain count={14} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero
          groomName={WEDDING_INFO.groomName}
          brideName={WEDDING_INFO.brideName}
          date={WEDDING_INFO.date}
          venue={WEDDING_INFO.venue}
        />

        <Greeting text={WEDDING_INFO.greeting} />

        <Countdown targetDate={WEDDING_INFO.targetDate} />

        <Contact contacts={WEDDING_INFO.contacts} />

        <Gallery photos={WEDDING_INFO.photos} />

        <Location
          venueName={WEDDING_INFO.venueName}
          address={WEDDING_INFO.address}
          transport={WEDDING_INFO.transport}
          naverMapUrl={WEDDING_INFO.naverMapUrl}
          kakaoMapUrl={WEDDING_INFO.kakaoMapUrl}
        />

        <AccountInfo accounts={WEDDING_INFO.accounts} />
        <Guestbook />
      </main>
      

      <Footer
        groomName={WEDDING_INFO.groomName}
        brideName={WEDDING_INFO.brideName}
        date={WEDDING_INFO.date}
      />
    </>
  );
}
