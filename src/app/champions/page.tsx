import ChampionList from '@/components/champions/ChampionList';
import { Text } from '@/components/ui/Text';
import Champion from '@/types/Champion';
import { fetchChampions } from '@/utils/serverApi';

const Champions = async () => {
  const championList: Champion[] = await fetchChampions();

  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">챔피언 목록</Text>
        <Text variant="h3" className="text-gray-500">
          LOL에서 제공하는 140여 명의 챔피언을 구경해보세요.
        </Text>
      </div>
      <ChampionList championList={championList} />
    </div>
  );
};

export default Champions;
