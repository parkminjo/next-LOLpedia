import ChampionItem from '@/components/champions/ChampionItem';
import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';
import { Champion } from '@/types/Champion';

const Champions = async () => {
  const response = await fetch(URL.CHAMPIONS_DATA_URL, {
    next: {
      revalidate: REVALIDATE_TIME_24_HOURS,
    },
  });
  const { data } = await response.json();
  const championList: Champion[] = Object.values(data);

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-4 gap-8">
        {championList.map((champion) => {
          return <ChampionItem key={champion.key} champion={champion} />;
        })}
      </div>
    </div>
  );
};

export default Champions;
