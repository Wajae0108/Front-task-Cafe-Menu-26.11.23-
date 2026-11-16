// 책 한 권을 보여주는 카드 컴포넌트
export default function BookCard({
  emoji = '📘',      // 기본값
  title,
  author,
  pages,
  desc,
  rating = 0,        // 기본값
  isRead = false,
  isBest = false,
}) {
  // 별점 문자열: rating이 4면 ★★★★☆
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  // style 객체
  const infoStyle = { fontSize: '12px', color: '#889', margin: '4px 0' };

  return (
    <div className="book-card">
      {/* 이모지 + 제목, isBest이면 BEST 배지 */}
      <h3>
        {emoji} {title}
        {isBest && <span className="best">BEST</span>}
      </h3>
      <p className="author">{author}</p>
      <p className="stars">{stars}</p>
      <p className="status">{isRead ? '✅ 다 읽음' : '📖 읽는 중'}</p>

      {/* 쪽수와 소개 */}
      <p style={infoStyle}>{pages}쪽 · {desc}</p>
    </div>
  );
}
