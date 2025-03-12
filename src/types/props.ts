import Champion from './Champion';

export interface ChampionDetailProps {
  params: {
    id: string;
  };
}
export interface ChampionCardProps {
  champion: Champion;
}

export interface ChampionListProps {
  championList: Champion[] | undefined;
}

export interface LoadingProps {
  state: string;
}
