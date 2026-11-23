import books from '@/data/books';
import BookShelf from '@/components/BookShelf';

export default function Home() {
  return (
    <main>
      <header className="page-header">
        <p className="eyebrow">MY READING COLLECTION</p>
        <h1>📚 나의 책장</h1>
        <p>책을 찾고, 읽고, 나만의 독서 기록을 쌓아보세요.</p>
      </header>
      <BookShelf books={books} />
    </main>
  );
}
