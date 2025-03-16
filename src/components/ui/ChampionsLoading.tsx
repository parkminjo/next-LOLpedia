import { ARRAY_LENGTH } from '@/constants/number';
import Skeleton from './Skeleton';

export const ChampionsLoading = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: ARRAY_LENGTH.FOUR }).map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border-2 border-solid p-4"
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
