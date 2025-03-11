import { URLType } from '@/types/URL';

export const URL: URLType = {
  LOL: 'https://download.kr.riotgames.com/league',
  CHAMPIONS_DATA_URL: process.env.NEXT_RIOT_CHAMPIONS_URL || '',
};
