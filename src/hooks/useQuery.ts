'use client';

import { useQuery } from '@tanstack/react-query';

export const useCustomQuery = <T>(
  queryKey: string,
  queryFn: () => Promise<T>
) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
  });
};
