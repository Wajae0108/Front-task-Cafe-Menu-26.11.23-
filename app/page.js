import menus from '@/data/menus';
import MenuBoard from '@/component/MenuBoard';
import StampCard from '@/component/StampCard';

export default function Home() {
  return (
    <main>
      <h1>☕ 루나 카페</h1>
      <p>전체 메뉴 {menus.length}개</p>
      <StampCard />
      <MenuBoard menus={menus} />
    </main>
  );
}
