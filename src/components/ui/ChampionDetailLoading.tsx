'use client';
import { RingLoader } from 'react-spinners';

const ChampionDetailLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      {<RingLoader size={300} color="#D6B771" />}
    </div>
  );
};

export default ChampionDetailLoading;
