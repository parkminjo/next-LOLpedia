import { PATH } from '@/constants/RouterPath';
import Link from 'next/link';
import clsx from 'clsx';

const Header = () => {
  const navList = [
    { href: PATH.HOME, name: '홈' },
    { href: PATH.CHAMPIONS, name: '챔피언' },
    { href: PATH.ITEMS, name: '아이템' },
    { href: PATH.ROTATION, name: '로테이션' },
  ];

  return (
    <nav className="w-screen h-[60px] bg-gray-900 text-white flex items-center px-8">
      <div className="flex gap-3">
        {navList.map((nav) => {
          return (
            <Link
              key={nav.name}
              href={nav.href}
              className={clsx(
                'rounded-lg px-3 py-1',
                nav.name !== '홈' && 'hover:bg-gray-700'
              )}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
