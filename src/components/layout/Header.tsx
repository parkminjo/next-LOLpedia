import { PATH } from '@/constants/RouterPath';
import Link from 'next/link';

const Header = () => {
  const navList = [
    { href: PATH.HOME, name: '홈' },
    { href: PATH.CHAMPIONS, name: '챔피언' },
    { href: PATH.ITEMS, name: '아이템' },
    { href: PATH.ROTATION, name: '로테이션' },
  ];

  return (
    <nav>
      {navList.map((nav) => {
        return (
          <Link key={nav.name} href={nav.href}>
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Header;
