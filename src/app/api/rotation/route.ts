import { URL } from '@/constants/url';
import Champion from '@/types/Champion';
import ChampionRotation from '@/types/ChampionRotation';
import { fetchVersion } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key가 없습니다.' });
  }

  try {
    const version = await fetchVersion();

    const [rotationResponse, championsResponse] = await Promise.all([
      fetch(URL.CHAMPIONS_ROTATION_DATA, {
        headers: {
          'X-Riot-Token': apiKey,
        } as HeadersInit,
      }),
      fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      ),
    ]);

    if (!rotationResponse.ok || !championsResponse.ok) {
      return NextResponse.json({ error: 'RIOT API 호출에 실패하였습니다.' });
    }

    const { freeChampionIds }: ChampionRotation = await rotationResponse.json();
    const { data: allChampionData } = await championsResponse.json();
    const championList: Champion[] = Object.values(allChampionData);

    const freeChampionList = championList.filter((champion) =>
      freeChampionIds.includes(Number(champion.key)),
    );

    return NextResponse.json({ freeChampionList });
  } catch (error) {
    return NextResponse.json(
      {
        error: `무료 로테이션 챔피언 정보를 불러오는데 실패하였습니다. Error: ${error}`,
      },
      { status: 500 },
    );
  }
}
