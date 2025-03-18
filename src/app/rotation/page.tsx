'use client';

import ChampionList from '@/components/features/champions/ChampionList';
import ChampionsLoading from '@/components/ui/ChampionsLoading';
import { Text } from '@/components/ui/Text';
import { QUERY_KEY } from '@/constants/queryKeys';
import { useCustomQuery } from '@/hooks/useQuery';
import { fetchChampionsRotation } from '@/utils/rotationApi';

const RotationPage = () => {
  const {
    data: freeChampionList,
    isPending,
    isError,
  } = useCustomQuery(QUERY_KEY.FREE_CHAMPION_LIST, fetchChampionsRotation);

  /** UI */
  if (isPending) {
    return <ChampionsLoading />;
  }

  if (isError) {
    return (
      <div className="mt-10 flex items-center justify-center px-8">
        <Text variant="h4" className="font-semibold md:text-3xl">
          챔피언 로테이션 정보를 불러오는데 에러가 발생하였습니다
        </Text>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-2">
        <Text variant="h2">무료 챔피언 목록</Text>
        <Text variant="h4" className="text-gray-500">
          오늘 LOL에서 무료로 이용할 수 있는 챔피언을 확인해보세요.
        </Text>
      </div>
      <ChampionList championList={freeChampionList} />
    </div>
  );
};

export default RotationPage;
