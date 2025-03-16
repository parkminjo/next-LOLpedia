import ChampionList from '@/components/champions/ChampionList';
import { Text } from '@/components/ui/Text';
import { fetchChampionList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from './loading';

const Champions = async () => {
  const championList = await fetchChampionList();

  return (
    <div className="container my-10 flex flex-col gap-8 px-5 md:mx-auto">
      <div className="flex flex-col gap-2">
        <Text variant="h2">챔피언 목록</Text>
        <Text variant="h4" className="text-gray-500">
          LOL에서 제공하는 140여 명의 챔피언을 구경해보세요.
        </Text>
      </div>
      <Suspense fallback={<Loading />}>
        <ChampionList championList={championList} />
      </Suspense>
    </div>
  );
};

export default Champions;
