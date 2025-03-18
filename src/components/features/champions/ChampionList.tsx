import { ChampionListProps } from '@/types/props';
import ChampionCard from './ChampionCard';

const ChampionList = ({ championList }: ChampionListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
      {championList.map((champion) => {
        return <ChampionCard key={champion.key} champion={champion} />;
      })}
    </div>
  );
};

export default ChampionList;
