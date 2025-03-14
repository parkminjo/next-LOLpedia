'use client';

import { useTheme } from 'next-themes';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

const ThemeToggleButton = () => {
  const ICON_COLOR = '#D1D5DB';
  const ICON_SIZE = 30;
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? (
          <IoMoonOutline size={ICON_SIZE} color={ICON_COLOR} />
        ) : (
          <IoMoon size={ICON_SIZE} color={ICON_COLOR} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
