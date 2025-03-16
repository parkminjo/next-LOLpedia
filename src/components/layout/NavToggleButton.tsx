'use client';

import { ICONS } from '@/constants/icons';
import { NavToggleButtonProps } from '@/types/props';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export const NavToggleButton = ({ navList }: NavToggleButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex items-center md:hidden"
      >
        <RxHamburgerMenu size={ICONS.SIZE.BASE} color={ICONS.COLOR.BASE} />
      </button>

      {isMenuOpen && (
        <div className="top-18 absolute left-0 flex h-screen w-screen flex-col gap-4 bg-gray-900 p-6 md:hidden">
          {navList.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className="rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
