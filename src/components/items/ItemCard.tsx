import { URL } from '@/constants/url';
import Image from 'next/image';
import { Text } from '../ui/Text';
import Item from '@/types/Item';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="rounded-xl border-2 border-solid p-4 flex flex-col gap-3">
      <Text variant="h3" className="font-semibold">
        {item.name}
      </Text>
      <Image
        src={`${URL.ITEMS_IMG_URL}/${item.image.full}`}
        width={50}
        height={50}
        alt={item.name}
        className="w-screen max-h-[400px] object-cover rounded-xl"
      />
    </div>
  );
};

export default ItemCard;
