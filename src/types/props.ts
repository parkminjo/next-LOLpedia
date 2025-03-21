import Champion from './Champion';

export type ParamsProps = {
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

export type NavToggleButtonProps = {
  navList: { href: string; name: string }[];
};
