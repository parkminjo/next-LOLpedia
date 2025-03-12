'use client';

import { Text } from '@/components/ui/Text';
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

  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-4">
      <Text variant="h2">에러가 발생하였습니다. 다시 한 번 시도해주세요.</Text>
      <Text>에러 메시지: {error.message}</Text>
      <button onClick={handleTryAgain} className="bg-gold px-4 py-2 rounded-xl">
        다시 시도하기
      </button>
    </div>
  );
};

export default Error;
