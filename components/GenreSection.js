import BookCard from './BookCard';
import Shelf from './Shelf';

// 장르 이름(label)과 책 배열(books)을 받아 BookCard 목록을 그린다.
export default function GenreSection({ label, books }) {
  return (
    <Shelf title={`${label} (${books.length})`}>
      {books.length === 0 ? (
        <p className="empty">아직 등록된 책이 없습니다.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </Shelf>
  );
}
