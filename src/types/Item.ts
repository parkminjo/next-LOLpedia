export default interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  info: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    z: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
    30: boolean;
    33: boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
}
