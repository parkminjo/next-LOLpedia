import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import Item from '@/types/Item';

/**
 * LOL 챔피언 데이터 가져오는 함수
 * @returns Object.values(data) - 챔피언 리스트
 */
export const fetchChampions = async (): Promise<Champion[]> => {
  try {
    const response = await fetch(URL.CHAMPIONS_DATA_URL, {
      next: {
        revalidate: REVALIDATE_TIME_24_HOURS,
      },
    });
    const { data } = await response.json();
    return Object.values(data) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * LOL 아이템 데이터 가져오는 함수
 * @returns Object.values(data) - 아이템 리스트
 */
export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await fetch(URL.ITEMS_DATA_URL, {
      cache: 'force-cache',
    });
    const { data } = await response.json();
    return Object.values(data) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchChampionsRotation = async (): Promise<number[]> => {
  try {
    const response = await fetch(URL.CHAMPIONS_ROTATION_DATA_URL);
    const { freeChampionIds } = await response.json();
    return freeChampionIds;
  } catch (error) {
    console.error(error);
    return [];
  }
};
