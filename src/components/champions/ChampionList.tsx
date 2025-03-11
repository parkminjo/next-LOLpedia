import { ChampionListProps } from '@/types/props';
import ChampionCard from './ChampionCard';

const ChampionList = ({ championList }: ChampionListProps) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {championList.map((champion) => {
        return <ChampionCard key={champion.key} champion={champion} />;
      })}
    </div>
  );
};

export default ChampionList;
