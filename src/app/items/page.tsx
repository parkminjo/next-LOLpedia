import ItemCard from '@/components/items/ItemCard';
import { Text } from '@/components/ui/Text';
import Item from '@/types/Item';
import { fetchItemList } from '@/utils/serverApi';
import { Suspense } from 'react';
import Loading from './loading';

const Items = async () => {
  const itemList: Item[] = await fetchItemList();

  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h2">아이템 목록</Text>
        <Text variant="h4" className="text-gray-500">
          LOL에서 사용할 수 있는 아이템을 구경해보세요.
        </Text>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-6 gap-8">
          {itemList.map((item) => {
            return <ItemCard key={item.name} item={item} />;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default Items;
