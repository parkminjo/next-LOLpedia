import Loading from '@/app/loading';
import { Suspense } from 'react';
import ChampionCard from './ChampionCard';
import Champion from '@/types/Champion';

type ChampionListProps = {
  championList: Champion[];
};

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
