import { Text } from '@/components/ui/Text';
import { PATH } from '@/constants/routerPath';
import Item from '@/types/Item';
import { fetchVersion } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

interface ItemCardProps {
  item: Item;
}

const ItemCard = async ({ item }: ItemCardProps) => {
  const version = await fetchVersion();

  return (
    <Link href={`${PATH.ITEMS}/${item.name.replace(/(\s*)/g, '')}`}>
      <div className="flex flex-col gap-3 rounded-xl border-2 border-solid p-4">
        <Text variant="h4" className="font-semibold">
          {item.name}
        </Text>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
          width={50}
          height={50}
          alt={item.name}
          className="max-h-[400px] w-screen rounded-xl object-cover"
        />
      </div>
    </Link>
  );
};

export default ItemCard;
