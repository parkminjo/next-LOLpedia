import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';

export const fetchItems = async () => {
  try {
    const response = await fetch(URL.ITEMS_DATA_URL, {
      cache: 'force-cache',
    });
    const { data } = await response.json();
    return Object.values(data) || [];
  } catch (error) {
    console.error(error);
  }
};

export const fetchChampions = async () => {
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
  }
};
