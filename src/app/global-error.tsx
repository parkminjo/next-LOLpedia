'use client';

import { Text } from '@/components/ui/Text';
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
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <Text variant="h2">
            에러가 발생하였습니다. 다시 한 번 시도해주세요.
          </Text>
          <Text>에러 메시지: {error.message}</Text>
          <button
            onClick={handleTryAgain}
            className="rounded-xl bg-gold px-4 py-2"
          >
            다시 시도하기
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
