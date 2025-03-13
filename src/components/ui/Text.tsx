import clsx from 'clsx';
import { JSX, ReactNode } from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: ReactNode;
  className?: string;
}

export const Text = ({ variant = 'p', children, className }: TextProps) => {
  const variants = {
    h1: 'text-5xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl',
    p: 'text-base',
  };

  const Component = variant as keyof JSX.IntrinsicElements;

  return (
    <Component className={clsx(variants[variant], className)}>
      {children}
    </Component>
  );
};
