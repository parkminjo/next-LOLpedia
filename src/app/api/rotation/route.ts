import { URL } from '@/constants/url';
import ChampionRotation from '@/types/ChampionRotation';

export const dynamic = 'force-static';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  try {
    const response = await fetch(URL.CHAMPIONS_ROTATION_DATA, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': apiKey,
      } as HeadersInit,
    });
    const { freeChampionIds }: ChampionRotation = await response.json();

    return Response.json({ freeChampionIds });
  } catch (error) {
    console.error(error);
  }
}
