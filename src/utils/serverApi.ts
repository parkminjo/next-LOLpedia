'use server';

import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import Item from '@/types/Item';

/**
 * 버전에 대한 정보를 가져오는 함수
 * @returns latestVersion - 최신 버전
 */
export const fetchVersion = async (): Promise<string | null> => {
  try {
    const response = await fetch(URL.VERSION);
    const versions: string[] = await response.json();
    const [latestVersion] = versions;

    return latestVersion;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * LOL 챔피언 데이터 가져오는 함수
 * @returns Object.values(data) - 챔피언 리스트
 */
export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const version = await fetchVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    );
    if (!response.ok) {
      throw new Error('무료 챔페인 리스트를 가져오는데 실패하였습니다.');
    }

    const { data } = await response.json();
    const championList: Champion[] = Object.values(data);

    return championList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * 특정 LOL 챔피언 데이터 가져오는 함수
 * @returns championData - 해당 챔피언 정보
 */
export const fetchChampionData = async (
  championId: string,
): Promise<Champion | null> => {
  try {
    const version = await fetchVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championId}.json`,
      {
        cache: 'no-store',
      },
    );
    const { data } = await response.json();
    const championData: Champion = data[championId];

    return championData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * LOL 아이템 데이터 가져오는 함수
 * @returns Object.values(data) - 아이템 리스트
 */
export const fetchItemList = async (): Promise<Item[]> => {
  try {
    const version = await fetchVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    );
    const { data } = await response.json();
    const itemList: Item[] = Object.values(data);

    return itemList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
