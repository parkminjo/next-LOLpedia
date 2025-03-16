'use client';

import { ICONS } from '@/constants/icons';
import { RxHamburgerMenu } from 'react-icons/rx';

export const NavToggleButton = () => {
  return (
    <button className="md:hidden">
      <RxHamburgerMenu size={ICONS.SIZE.BASE} color={ICONS.COLOR.BASE} />
    </button>
  );
};
