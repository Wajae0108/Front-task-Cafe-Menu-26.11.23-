import './globals.css';

export const metadata = {
  title: '나의 책장',
  description: '이벤트와 State로 만드는 나의 책장 — 제목 검색, 장르 선택, 독서 상태 기록',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
