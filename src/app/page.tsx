import Image from 'next/image';
import Background from '/public/images/bg.jpg';
import LOLText from '/public/images/lol.webp';
import Link from 'next/link';
import { URL } from '@/constants/url';

const Home = () => {
  return (
    <>
      <Image
        src={Background}
        alt="배경"
        priority
        className="relative h-screen min-h-[cal(100vh-70px)] w-screen object-cover"
      />
      <Image
        src={LOLText}
        alt="League of Legend"
        priority
        className="absolute left-1/2 top-1/2 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2"
      />
      <Link
        href={URL.LOL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-1/2 top-[80%] -translate-x-1/2 rounded-lg bg-gold px-6 py-4 text-xl font-semibold hover:bg-hoverGold"
      >
        플레이하러 가기
      </Link>
    </>
  );
};

export default Home;
