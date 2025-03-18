import Skeleton from '@/components/ui/Skeleton';
import { ARRAY_LENGTH } from '@/constants/number';

const Loading = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: ARRAY_LENGTH.SIX }).map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border-2 border-solid p-4"
            >
              <Skeleton />
              <Skeleton height="medium" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
