'use client';

import ErrorPage from '@/components/ui/ErrorPage';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

const GlobalError = ({
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

  return (
    <html>
      <body>
        <ErrorPage error={error} handleTryAgain={handleTryAgain} />
      </body>
    </html>
  );
};

export default GlobalError;
