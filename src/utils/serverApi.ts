import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import ChampionRotation from '@/types/ChampionRotation';
import Item from '@/types/Item';

/**
 * LOL 챔피언 데이터 가져오는 함수
 * @returns Object.values(data) - 챔피언 리스트
 */
export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const response = await fetch(`${URL.CHAMPIONS_DATA_URL}.json`, {
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
 * 특정 LOL 챔피언 데이터 가져오는 함수
 * @returns championData - 해당 챔피언 정보
 */
export const fetchChampionData = async (championId: string) => {
  try {
    const response = await fetch(
      `${URL.CHAMPIONS_DATA_URL}/${championId}.json`,
      {
        cache: 'no-store',
      }
    );
    const { data: championData } = await response.json();

    return championData[championId];
  } catch (error) {
    console.error(error);
  }
};

/**
 * LOL 아이템 데이터 가져오는 함수
 * @returns Object.values(data) - 아이템 리스트
 */
export const fetchItemList = async (): Promise<Item[]> => {
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

/**
 * 무료 플레이가 가능한 챔피언 아이디를 가져오는 함수
 * @returns freeChampionIds - 무료 챔피언 아이디 리스트
 */
export const fetchChampionsRotation = async (): Promise<number[]> => {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  if (!apiKey) {
    return [];
  }

  try {
    const response = await fetch(URL.CHAMPIONS_ROTATION_DATA_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': apiKey,
      },
    });
    const { freeChampionIds }: ChampionRotation = await response.json();

    return freeChampionIds;
  } catch (error) {
    console.error(error);
    return [];
  }
};
