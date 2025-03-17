import { ErrorPageProps } from '@/types/props';
import { Text } from './Text';

const ErrorPage = ({ error, handleTryAgain }: ErrorPageProps) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 px-8">
      <Text variant="h4" className="font-semibold md:text-3xl">
        에러가 발생하였습니다. 다시 한 번 시도해주세요.
      </Text>
      <Text>에러 메시지: {error.message}</Text>
      <button onClick={handleTryAgain} className="rounded-xl bg-gold px-4 py-2">
        다시 시도하기
      </button>
    </div>
  );
};

export default ErrorPage;
