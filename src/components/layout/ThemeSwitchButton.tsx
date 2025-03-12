'use client';

import { useTheme } from 'next-themes';
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoon } from 'react-icons/io5';

const ThemeSwitchButton = () => {
  const ICON_COLOR = '#D1D5DB';
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <IoMoonOutline size={30} color={ICON_COLOR} />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <IoMoon size={30} color={ICON_COLOR} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitchButton;
