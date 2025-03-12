import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import { ChampionDetailProps } from '@/types/props';
import { fetchChampionData } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championId = params.id;
  const championData = await fetchChampionData(championId);

  if (!championData) {
    return <div>챔피언 정보를 불러올 수 없습니다</div>;
  }

  return (
    <div className="relative">
      <Image
        src={`${URL.CHAMPION_IMG_URL}/${championId}_0.jpg`}
        width={500}
        height={500}
        alt={championData.id}
        priority
        className="relative w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-[40%] left-20 flex flex-col gap-4">
        <Text variant="h1" className="text-[#D6B771]">
          {championData.name}
        </Text>
        <Text variant="h3" className="text-gray-200">
          {championData.title}
        </Text>
        <Text variant="h4" className="max-w-[600px] text-gray-200">
          {championData.lore}
        </Text>
      </div>
    </div>
  );
};

export default ChampionDetail;
