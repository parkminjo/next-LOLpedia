import Champion from './Champion';

export type ChampionDetailProps = {
  params: {
    id: string;
  };
};
export type ChampionCardProps = {
  champion: Champion;
};

export type ChampionListProps = {
  championList: Champion[];
};

export type LoadingProps = {
  state: string;
};

export type ErrorPageProps = {
  error: Error;
  handleTryAgain: () => void;
};
