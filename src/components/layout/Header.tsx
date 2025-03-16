import { ICONS } from '@/constants/icons';
import { PATH } from '@/constants/routerPath';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import ThemeToggleButton from './ThemeToggleButton';
import Logo from '/public/images/lolLogo.png';

const Header = () => {
  const navList = [
    { href: PATH.CHAMPIONS, name: '챔피언' },
    { href: PATH.ITEMS, name: '아이템' },
    { href: PATH.ROTATION, name: '로테이션' },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[70px] w-screen items-center justify-between bg-gray-900 px-3 md:px-8">
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
      <div className="flex gap-4">
        <ThemeToggleButton />
        <button className="md:hidden">
          <RxHamburgerMenu size={ICONS.SIZE.BASE} color={ICONS.COLOR.BASE} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
