export const URL: Record<string, string> = {
  LOL: 'https://download.kr.riotgames.com/league',
  CHAMPIONS_DATA_URL: process.env.NEXT_RIOT_CHAMPIONS_URL || '',
  CHAMPION_IMG_URL:
    'https://ddragon.leagueoflegends.com/cdn/img/champion/loading',
  ITEMS_DATA_URL: process.env.NEXT_RIOT_ITEMS_URL || '',
  ITEMS_IMG_URL: 'https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item',
};
