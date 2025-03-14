import { URL } from '@/constants/url';
import Image from 'next/image';
import { Text } from '../ui/Text';
import Item from '@/types/Item';
import Link from 'next/link';
import { PATH } from '@/constants/routerPath';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Link href={`${PATH.ITEMS}/${item.name.replace(/(\s*)/g, '')}`}>
      <div className="flex flex-col gap-3 rounded-xl border-2 border-solid p-4">
        <Text variant="h4" className="font-semibold">
          {item.name}
        </Text>
        <Image
          src={`${URL.ITEMS_IMG}/${item.image.full}`}
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
