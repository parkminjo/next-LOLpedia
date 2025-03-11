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
  championList: Champion[];
}

export interface LoadingProps {
  state: string;
}
