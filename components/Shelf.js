// 책장 컴포넌트: 제목(title)과 그 안에 들어갈 내용(children)을 받는다.
export default function Shelf({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
