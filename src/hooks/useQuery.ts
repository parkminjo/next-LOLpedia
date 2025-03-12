'use client';

import { useQuery } from '@tanstack/react-query';

/**
 * useQuery를 반환하는 커스텀 훅
 * @param queryKey - 배열 형태의 queryKey ex) ['queryKey']
 * @param queryFn - fetch 함수
 * @returns useQuery
 */
export const useCustomQuery = <T>(
  queryKey: string,
  queryFn: () => Promise<T>
) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
  });
};
