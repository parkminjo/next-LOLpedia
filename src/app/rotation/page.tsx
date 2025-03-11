import { Text } from '@/components/ui/Text';

const Rotation = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">로테이션</Text>
        <Text variant="h3" className="text-gray-500">
          오늘 LOL에서 무료로 이용할 수 있는 챔피언을 확인해보세요.
        </Text>
      </div>
      <div className="grid grid-cols-4 gap-8"></div>
    </div>
  );
};

export default Rotation;
