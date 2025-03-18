import { URL } from '@/constants/url';
import ChampionRotation from '@/types/ChampionRotation';

/**
 * 무료 플레이가 가능한 챔피언 아이디를 가져오는 함수
 * @returns freeChampionIds - 무료 챔피언 아이디 리스트
 */
export const fetchChampionsRotation = async (): Promise<number[]> => {
  try {
    const response = await fetch(URL.NEXT_SERVER_ROTATION);
    const { freeChampionIds }: ChampionRotation = await response.json();

    return freeChampionIds;
  } catch (error) {
    console.error(error);
    return [];
  }
};
