import Image from 'next/image';
import { Text } from '../ui/Text';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';

interface ChampionItemProps {
  champion: Champion;
}

const ChampionItem = ({ champion }: ChampionItemProps) => {
  return (
    <div className="rounded-xl border-2 border-solid">
      <Text variant="h3">{champion.name}</Text>
      <Text className="text-gray-500">{champion.title}</Text>
      <Image
        src={`${URL.CHAMPION_IMG_URL}/${champion.id}_0.jpg`}
        width={50}
        height={50}
        alt={champion.name}
        className="w-full"
      />
    </div>
  );
};

export default ChampionItem;
