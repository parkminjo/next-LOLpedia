import { Text } from '@/components/ui/Text';

const Items = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">아이템 목록</Text>
        <Text variant="h3" className="text-gray-500">
          LOL에서 사용할 수 있는 아이템을 구경해보세요.
        </Text>
      </div>
      <div className="grid grid-cols-6 gap-8"></div>
    </div>
  );
};

export default Items;
