import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import { ChampionDetailProps } from '@/types/props';
import { fetchChampionData } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championId = params.id;
  const championData: Champion = await fetchChampionData(championId);

  return (
    <div>
      <Image
        src={`${URL.CHAMPION_IMG_URL}/${championId}_0.jpg`}
        width={1000}
        height={1000}
        alt={championData.id}
        className="relative w-screen h-screen object-cover"
      />
      <div className="absolute top-[50%] left-10">
        <Text variant="h1" className="text-white">
          {championData.name}
        </Text>
      </div>
    </div>
  );
};

export default ChampionDetail;
