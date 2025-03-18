import { Text } from '@/components/ui/Text';
import { URL } from '@/constants/url';
import { ParamsProps } from '@/types/props';
import { fetchItemList } from '@/utils/serverApi';
import Image from 'next/image';

export const generateMetadata = ({ params }: ParamsProps) => {
  const itemId = decodeURIComponent(params.id);

  return {
    title: itemId,
    description: itemId,
  };
};

const ItemDetail = async ({ params }: ParamsProps) => {
  const itemId = decodeURIComponent(params.id);

  const itemList = await fetchItemList();
  const [itemData] = itemList.filter(
    (item) => item.name.replace(/(\s*)/g, '') === itemId,
  );

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex min-h-[400px] min-w-[350px] flex-col items-center justify-center gap-10 rounded-xl border-8 border-solid border-gold bg-gray-900 md:min-w-[400px]">
        <Text variant="h3" className="text-white">
          {itemData.name}
        </Text>
        <Image
          src={`${URL.ITEMS_IMG}/${itemData.image.full}`}
          width={50}
          height={50}
          alt={itemData.name}
          className="w-[100px] rounded-xl object-cover"
        />
        {itemData.plaintext && (
          <Text className="max-w-[300px] rounded-xl border-2 border-solid border-gold p-5 text-gray-200">
            {itemData.plaintext}
          </Text>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
