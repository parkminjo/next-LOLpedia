'use client';
import { LoadingProps } from '@/types/props';
import { RingLoader } from 'react-spinners';
import { Text } from './Text';

const LoadingUI = ({ state }: LoadingProps) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      {state === 'load' ? (
        <RingLoader size={300} color="#D6B771" />
      ) : (
        <Text>데이터 불러오기를 실패하였습니다</Text>
      )}
    </div>
  );
};

export default LoadingUI;
