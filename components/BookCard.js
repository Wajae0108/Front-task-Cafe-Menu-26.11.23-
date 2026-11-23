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
  onToggleRead,
}) {
  // 별점 문자열: rating이 4면 ★★★★☆
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <article className="book-card">
      {/* 이모지 + 제목, isBest이면 BEST 배지 */}
      <h3>
        {emoji} {title}
        {isBest && <span className="best">BEST</span>}
      </h3>
      <p className="author">{author}</p>
      <p className="stars" aria-label={`별점 5점 만점에 ${rating}점`}>{stars}</p>

      {/* 쪽수와 소개 */}
      <p className="book-description">{pages}쪽 · {desc}</p>
      {onToggleRead ? (
        <button type="button" className={`status-button${isRead ? ' complete' : ''}`} aria-pressed={isRead} aria-label={`${title}: ${isRead ? '다 읽음, 읽는 중으로 변경' : '읽는 중, 다 읽음으로 변경'}`} onClick={onToggleRead}>
          {isRead ? '✅ 다 읽음' : '📖 읽는 중'}
        </button>
      ) : <p className="status">{isRead ? '✅ 다 읽음' : '📖 읽는 중'}</p>}
    </article>
  );
}
