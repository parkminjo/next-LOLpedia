import clsx from 'clsx';
import { JSX, ReactNode } from 'react';

type TextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'p';
  children: ReactNode;
  className?: string;
};

export const Text = ({ variant = 'p', children, className }: TextProps) => {
  const baseStyles = 'text-gray-900';

  const variants = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl',
    p: 'text-base',
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </Component>
  );
};
