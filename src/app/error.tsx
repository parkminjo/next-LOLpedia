'use client';

import ErrorPage from '@/components/ui/ErrorPage';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const { refresh } = useRouter();

  const handleTryAgain = () => {
    startTransition(() => {
      refresh();
      reset();
    });
  };

  return <ErrorPage error={error} handleTryAgain={handleTryAgain} />;
};

export default Error;
