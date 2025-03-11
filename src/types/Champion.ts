export default interface Champion {
  version?: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: Image;
  tags: string[];
  partype: string;
  stats: Record<string, number>;
  skins?: Skin[];
  lore?: string;
  allytips?: string[];
  enemytips?: string[];
  spell?: Spell[];
  passive?: {
    name: string;
    description: string;
    image: Image;
  };
  recommended?: object[];
}

interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: Record<string, string[]>;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, null>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
