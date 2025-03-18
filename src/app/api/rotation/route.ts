import { REVALIDATE_TIME_24_HOURS } from '@/constants/number';
import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import ChampionRotation from '@/types/ChampionRotation';

export const dynamic = 'force-static';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  try {
    const [rotationResponse, championsResponse] = await Promise.all([
      fetch(URL.CHAMPIONS_ROTATION_DATA, {
        headers: {
          'X-Riot-Token': apiKey,
        } as HeadersInit,
      }),
      fetch(`${URL.CHAMPIONS_DATA}.json`, {
        next: {
          revalidate: REVALIDATE_TIME_24_HOURS,
        },
      }),
    ]);

    const { freeChampionIds }: ChampionRotation = await rotationResponse.json();
    const { data: allChampionData } = await championsResponse.json();
    const championList: Champion[] = Object.values(allChampionData);

    const freeChampionList = championList.filter((champion) =>
      freeChampionIds.includes(Number(champion.key)),
    );

    return Response.json({ freeChampionList });
  } catch (error) {
    return Response.json(
      {
        error: `무료 로테이션 챔피언 정보를 불러오는데 실패하였습니다. Error: ${error}`,
      },
      { status: 500 },
    );
  }
}
