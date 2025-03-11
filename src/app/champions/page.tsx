import ChampionCard from '@/components/champions/ChampionCard';
import { Text } from '@/components/ui/Text';
import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import { fetchChampions } from '../api/fetchData';

const Champions = async () => {
  const championList: Champion[] = (await fetchChampions()) as Champion[];

  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">챔피언 목록</Text>
        <Text variant="h3" className="text-gray-500">
          LOL에서 제공하는 140여 명의 챔피언을 구경해보세요.
        </Text>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {championList.map((champion) => {
          return <ChampionCard key={champion.key} champion={champion} />;
        })}
      </div>
    </div>
  );
};

export default Champions;
