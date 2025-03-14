'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeToggleButton = () => {
  const ICON_COLOR = '#D1D5DB';
  const ICON_SIZE = 30;
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'dark' ? (
          <IoMoonOutline size={ICON_SIZE} color={ICON_COLOR} />
        ) : (
          <IoSunnyOutline size={ICON_SIZE} color={ICON_COLOR} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
