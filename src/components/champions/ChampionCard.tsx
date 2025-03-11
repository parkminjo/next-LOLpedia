import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import Image from 'next/image';
import { Text } from '../ui/Text';

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <div className="rounded-xl border-2 border-solid p-4 flex flex-col gap-3">
      <div>
        <Text variant="h2">{champion.name}</Text>
        <Text className="text-gray-500">{champion.title}</Text>
      </div>
      <Image
        src={`${URL.CHAMPION_IMG_URL}/${champion.id}_0.jpg`}
        width={50}
        height={50}
        alt={champion.name}
        className="w-screen max-h-[400px] object-cover"
      />
    </div>
  );
};

export default ChampionCard;
