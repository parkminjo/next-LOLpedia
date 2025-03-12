import { ARRAY_LENGTH } from '@/constants/number';
import Skeleton from './Skeleton';

export const ChampionsLoading = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-8">
        {Array.from({ length: ARRAY_LENGTH.FOUR }).map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-xl border-2 border-solid p-4 flex flex-col gap-3"
            >
              <Skeleton />
              <Skeleton />
              <Skeleton height="large" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionsLoading;
