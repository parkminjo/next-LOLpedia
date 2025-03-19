import ChampionList from '@/components/features/champions/ChampionList';
import ChampionsLoading from '@/components/ui/ChampionsLoading';
import { Text } from '@/components/ui/Text';
import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { fetchChampionList } from '@/utils/serverApi';
import { Suspense } from 'react';

export const revalidate = REVALIDATE_TIME_24_HOURS;

const ChampionsPage = async () => {
  const championList = await fetchChampionList();

  return (
    <div className="container mx-auto my-10 flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-2">
        <Text variant="h2">챔피언 목록</Text>
        <Text variant="h4" className="text-gray-500">
          LOL에서 제공하는 140여 명의 챔피언을 구경해보세요.
        </Text>
      </div>
      <Suspense fallback={<ChampionsLoading />}>
        <ChampionList championList={championList} />
      </Suspense>
    </div>
  );
};

export default ChampionsPage;
