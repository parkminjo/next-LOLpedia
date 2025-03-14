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
  maps: { [key: number]: boolean };
  stats: {
    FlatMovementSpeedMod: number;
  };
}
