import clsx from 'clsx';

type SkeletonUIProps = {
  height?: 'small' | 'medium' | 'large';
  className?: string;
};

const SkeletonUI = ({ height = 'small', className }: SkeletonUIProps) => {
  const baseStyle = 'rounded-xl bg-gray-300 animate-pulse';
  const heights = {
    small: 'min-h-[30px]',
    medium: 'min-h-[100px]',
    large: 'min-h-[400px]',
  };

  return <div className={clsx(baseStyle, heights[height], className)}></div>;
};

export default SkeletonUI;
