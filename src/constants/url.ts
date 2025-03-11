export const URL: Record<string, string> = {
  LOL: 'https://download.kr.riotgames.com/league',
  CHAMPIONS_DATA_URL:
    'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR',
  CHAMPION_LOADING_IMG_URL:
    'https://ddragon.leagueoflegends.com/cdn/img/champion/loading',
  CHAMPION_IMG_URL:
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash',
  ITEMS_DATA_URL:
    'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json',
  ITEMS_IMG_URL: 'https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item',
  CHAMPIONS_ROTATION_DATA_URL: `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
};
