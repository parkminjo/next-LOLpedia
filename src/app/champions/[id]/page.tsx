import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import { ParamsProps } from '@/types/props';
import { fetchChampionData } from '@/utils/serverApi';
import Image from 'next/image';

export const generateMetadata = ({ params }: ParamsProps) => {
  const championId = params.id;

  return {
    title: championId,
    description: championId,
  };
};

const ChampionDetail = async ({ params }: ParamsProps) => {
  const championId = params.id;
  const championData = await fetchChampionData(championId);

  /** UI */
  if (!championData) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <Text variant="h2">챔피언 데이터를 불러오지 못하였습니다.</Text>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Image
        src={`${URL.CHAMPION_IMG}/${championId}_0.jpg`}
        width={500}
        height={500}
        alt={championData.id}
        priority
        className="relative h-screen w-screen object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-[30%] flex flex-col gap-4 px-8 md:left-20">
        <Text variant="h2" className="text-gold md:text-5xl">
          {championData.name}
        </Text>
        <Text
          variant="h4"
          className="text-gray-200 md:text-2xl md:font-semibold"
        >
          {championData.title}
        </Text>
        <Text className="max-w-[600px] text-gray-200 md:text-xl">
          {championData.lore}
        </Text>
      </div>
    </div>
  );
};

export default ChampionDetail;
