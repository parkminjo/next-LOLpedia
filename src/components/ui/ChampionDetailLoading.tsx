'use client';

import { RingLoader } from 'react-spinners';

const DetailLoading = () => {
  const SIZE = 300;
  const COLOR = '#D6B771';

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      {<RingLoader size={SIZE} color={COLOR} />}
    </div>
  );
};

export default DetailLoading;
