export interface GamePackage {
  id: string;
  name: string;
  ram: string;
  slots: number | string;
  storage: string;
  price: number;
  orderUrl: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
  packages: GamePackage[];
}