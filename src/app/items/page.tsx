import ItemCard from '@/components/features/items/ItemCard';
import { Text } from '@/components/ui/Text';
import { fetchItemList } from '@/utils/serverApi';

const ItemsPage = async () => {
  const itemList = await fetchItemList();

  return (
    <div className="container mx-auto my-10 flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-2">
        <Text variant="h2">아이템 목록</Text>
        <Text variant="h4" className="text-gray-500">
          LOL에서 사용할 수 있는 아이템을 구경해보세요.
        </Text>
      </div>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
        {itemList.map((item) => {
          return <ItemCard key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemsPage;
