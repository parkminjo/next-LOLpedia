import { PATH } from '@/constants/routerPath';
import Image from 'next/image';
import Link from 'next/link';
import { NavToggleButton } from './NavToggleButton';
import ThemeToggleButton from './ThemeToggleButton';
import Logo from '/public/images/lolLogo.png';

const Header = () => {
  const navList = [
    { href: PATH.CHAMPIONS, name: '챔피언' },
    { href: PATH.ITEMS, name: '아이템' },
    { href: PATH.ROTATION, name: '로테이션' },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[60px] w-screen items-center justify-between bg-gray-900 px-3 md:h-[70px] md:px-8">
      <div className="flex items-center gap-4">
        {/** 로고 */}
        <Link href={PATH.HOME}>
          <Image src={Logo} width={40} alt="로고" priority />
        </Link>

        {/** 네비게이션 */}
        <div className="hidden gap-2 md:flex">
          {navList.map((nav) => {
            return (
              <Link
                key={nav.name}
                href={nav.href}
                className="rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/** 다크 모드 & 햄버거 바 */}
      <div className="flex gap-3">
        <ThemeToggleButton />
        <NavToggleButton navList={navList} />
      </div>
    </nav>
  );
};

export default Header;
