'use client';

import { ICONS } from '@/constants/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'dark' ? (
        <IoMoonOutline size={ICONS.SIZE.BASE} color={ICONS.COLOR.BASE} />
      ) : (
        <IoSunnyOutline size={ICONS.SIZE.BASE} color={ICONS.COLOR.BASE} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
