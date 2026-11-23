'use client';

import { useState } from 'react';
import BookCard from '@/components/BookCard';

const genres = [
  { key: 'all', label: '전체' },
  { key: 'novel', label: '소설' },
  { key: 'essay', label: '에세이' },
  { key: 'it', label: 'IT' },
  { key: 'poem', label: '시' },
];

export default function BookShelf({ books }) {
  const [keyword, setKeyword] = useState('');
  const [genre, setGenre] = useState('all');
  // 상태를 책장에서 관리해 검색이나 탭 전환 후에도 읽음 상태를 유지합니다.
  const [bookList, setBookList] = useState(books);

  // 검색 결과와 통계는 별도 state 대신 현재 데이터로 계산합니다.
  const filtered = bookList.filter((book) =>
    book.title.toLowerCase().includes(keyword.trim().toLowerCase()) &&
    (genre === 'all' || book.genre === genre)
  );
  const readCount = bookList.filter((book) => book.isRead).length;
  const percent = bookList.length === 0 ? 0 : Math.round(readCount / bookList.length * 100);
  const topBooks = bookList.filter((book) => book.rating === 5);

  function toggleRead(id) {
    setBookList((previous) => previous.map((book) =>
      book.id === id ? { ...book, isRead: !book.isRead } : book
    ));
  }

  function resetFilters() {
    setKeyword('');
    setGenre('all');
  }

  return (
    <>
      <section className="overview" aria-label="독서 통계">
        <div className="stats">
          <div className="stat">전체 도서 <b>{bookList.length}<small>권</small></b></div>
          <div className="stat">다 읽은 책 <b>{readCount}<small>권</small></b></div>
          <div className="stat">독서 진행률 <b>{percent}<small>%</small></b></div>
        </div>
        <div className="bar" role="progressbar" aria-label="독서 진행률" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          <div style={{ width: `${percent}%` }} />
        </div>
      </section>
      {topBooks.length > 0 && <aside className="notice">⭐ 별점 5점 추천 · {topBooks.map((book) => book.title).join(', ')}</aside>}
      <section aria-labelledby="collection-title">
        <h2 id="collection-title">내 책 모아보기</h2>
        <label className="search-label" htmlFor="book-search">책 제목 검색</label>
        <input id="book-search" className="search" type="search" placeholder="찾고 싶은 책 제목을 입력하세요" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
        <div className="genre-tabs" role="group" aria-label="장르 선택">
          {genres.map((item) => (
            <button key={item.key} type="button" className={`genre-tab${genre === item.key ? ' active' : ''}`} aria-pressed={genre === item.key} onClick={() => setGenre(item.key)}>{item.label}</button>
          ))}
        </div>
        <div className="result-heading">
          <p role="status">검색 결과 <b>{filtered.length}권</b></p>
          {(keyword || genre !== 'all') && <button type="button" className="reset-button" onClick={resetFilters}>필터 초기화</button>}
        </div>
        {filtered.length === 0 ? (
          <div className="empty">
            <span aria-hidden="true">📚</span>
            <h3>조건에 맞는 책이 없습니다.</h3>
            <p>{keyword.trim() ? `“${keyword.trim()}” 검색어를 바꾸거나 다른 장르를 선택해 보세요.` : '다른 장르를 선택해 보세요.'}</p>
            <button type="button" className="genre-tab active" onClick={resetFilters}>전체 책 보기</button>
          </div>
        ) : (
          <div className="book-grid">
            {filtered.map((book) => <BookCard key={book.id} {...book} onToggleRead={() => toggleRead(book.id)} />)}
          </div>
        )}
      </section>
      <p className="save-note">읽음 상태는 현재 페이지를 이용하는 동안 유지됩니다.</p>
    </>
  );
}
