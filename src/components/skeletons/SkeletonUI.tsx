import clsx from 'clsx';

type SkeletonUIProps = {
  height?: 'small' | 'medium' | 'large';
};

const SkeletonUI = ({ height = 'small' }: SkeletonUIProps) => {
  const baseStyle = 'rounded-xl bg-gray-300 animate-pulse';
  const heights = {
    small: 'min-h-[30px]',
    medium: 'min-h-[100px]',
    large: 'min-h-[400px]',
  };

  return <div className={clsx(baseStyle, heights[height])}></div>;
};

export default SkeletonUI;
