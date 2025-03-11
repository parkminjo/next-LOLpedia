import Loading from '@/app/champions/loading';
import { ChampionListProps } from '@/types/props';
import { Suspense } from 'react';
import ChampionCard from './ChampionCard';

const ChampionList = ({ championList }: ChampionListProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-4 gap-8">
        {championList.map((champion) => {
          return <ChampionCard key={champion.key} champion={champion} />;
        })}
      </div>
    </Suspense>
  );
};

export default ChampionList;
