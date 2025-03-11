'use client';
import ChampionList from '@/components/champions/ChampionList';
import { Text } from '@/components/ui/Text';
import Champion from '@/types/Champion';
import { fetchChampionList, fetchChampionsRotation } from '@/utils/serverApi';
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';

const Rotation = () => {
  const [championRotationList, setChampionRotationList] = useState<Champion[]>(
    []
  );

  useEffect(() => {
    fetchChampionsRotation().then((freeChampionIds) => {
      fetchChampionList().then((championList) => {
        const freeChampionList = championList?.filter((champion) =>
          freeChampionIds.includes(Number(champion.key))
        );
        setChampionRotationList(freeChampionList);
      });
    });
  }, []);

  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Text variant="h1">무료 챔피언 목록</Text>
        <Text variant="h3" className="text-gray-500">
          오늘 LOL에서 무료로 이용할 수 있는 챔피언을 확인해보세요.
        </Text>
      </div>
      <Suspense fallback={<Loading />}>
        <ChampionList championList={championRotationList} />
      </Suspense>
    </div>
  );
};

export default Rotation;
