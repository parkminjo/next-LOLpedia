import { PATH } from '@/constants/routerPath';
import { URL } from '@/constants/url';
import { ChampionCardProps } from '@/types/props';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../ui/Text';

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`${PATH.CHAMPIONS}/${champion.id}`}>
      <div className="flex flex-col gap-3 rounded-xl border-2 border-solid p-4">
        <div>
          <Text variant="h3">{champion.name}</Text>
          <Text className="text-gray-500">{champion.title}</Text>
        </div>
        <Image
          src={`${URL.CHAMPION_LOADING_IMG}/${champion.id}_0.jpg`}
          width={50}
          height={50}
          alt={champion.id}
          priority
          className="max-h-[400px] w-screen object-cover"
        />
      </div>
    </Link>
  );
};

export default ChampionCard;
