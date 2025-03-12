import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import { ChampionDetailProps } from '@/types/props';
import { fetchChampionData } from '@/utils/serverApi';
import Image from 'next/image';

export const generateMetadata = ({ params }: ChampionDetailProps) => {
  const championId = params.id;

  return {
    title: championId,
    description: championId,
  };
};

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championId = params.id;
  const championData: Champion = await fetchChampionData(championId);

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
        <Text variant="h1" className="text-gold">
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
