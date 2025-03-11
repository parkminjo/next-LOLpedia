import ItemCard from '@/components/items/ItemCard';
import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import Item from '@/types/Item';

const Items = async () => {
  const response = await fetch(URL.ITEMS_DATA_URL, {
    cache: 'force-cache',
  });
  const { data } = await response.json();
  const itemList: Item[] = Object.values(data);

  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">아이템 목록</Text>
        <Text variant="h3" className="text-gray-500">
          LOL에서 사용할 수 있는 아이템을 구경해보세요.
        </Text>
      </div>
      <div className="grid grid-cols-6 gap-8">
        {itemList.map((item) => {
          return <ItemCard key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Items;
