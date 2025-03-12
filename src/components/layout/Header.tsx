import { PATH } from '@/constants/routerPath';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/images/lolLogo.png';
import ThemeSwitchButton from './ThemeSwitchButton';

const Header = () => {
  const navList = [
    { href: PATH.HOME, name: '로고' },
    { href: PATH.CHAMPIONS, name: '챔피언' },
    { href: PATH.ITEMS, name: '아이템' },
    { href: PATH.ROTATION, name: '로테이션' },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[70px] w-screen items-center justify-between bg-gray-900 px-8">
      <div className="flex items-center gap-3">
        {navList.map((nav) => {
          return (
            <Link
              key={nav.name}
              href={nav.href}
              className={clsx(
                'rounded-lg px-3 py-2 text-gray-300',
                nav.href !== PATH.HOME && 'hover:bg-gray-700 hover:text-white',
              )}
            >
              {nav.href === PATH.HOME ? (
                <Image src={Logo} width={40} alt={nav.name} priority />
              ) : (
                nav.name
              )}
            </Link>
          );
        })}
      </div>
      <ThemeSwitchButton />
    </nav>
  );
};

export default Header;
