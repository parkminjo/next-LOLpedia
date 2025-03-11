import SkeletonUI from '@/components/ui/SkeletonUI';

const Loading = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div className="rounded-xl border-2 border-solid p-4 flex flex-col gap-3">
              <SkeletonUI />
              <SkeletonUI />
              <SkeletonUI height="large" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
