import { PATH } from '@/constants/routerPath';
import { URL } from '@/constants/url';
import { ChampionCardProps } from '@/types/props';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../ui/Text';

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`${PATH.CHAMPIONS}/${champion.id}`}>
      <div className="rounded-xl border-2 border-solid p-4 flex flex-col gap-3">
        <div>
          <Text variant="h2">{champion.name}</Text>
          <Text className="text-gray-500">{champion.title}</Text>
        </div>
        <Image
          src={`${URL.CHAMPION_LOADING_IMG_URL}/${champion.id}_0.jpg`}
          width={50}
          height={50}
          alt={champion.id}
          className="w-screen max-h-[400px] object-cover"
        />
      </div>
    </Link>
  );
};

export default ChampionCard;
