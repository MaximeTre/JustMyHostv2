import { Game } from '../types/game';

// Standard packages for all games
export const standardPackages = {
  "multiGaming01": {
    "id": "multi-gaming-and-script-01",
    "name": "Multi-Gaming - 01",
    "ram": "3 GO DDR4",
    "CPU": 2,
    "storage": "10 GO",
    "price": 0.99
  },
  "multiGaming02": {
    "id": "multi-gaming-and-script-02",
    "name": "Multi-Gaming - 02",
    "ram": "5 GO DDR4",
    "CPU": 2,
    "storage": "13 GO",
    "price": 2.49
  },
  "multiGaming03": {
    "id": "multi-gaming-and-script-03",
    "name": "Multi-Gaming - 03",
    "ram": "8 GO DDR4",
    "CPU": 4,
    "storage": "20 GO",
    "price": 4.49
  },
  "multiGaming04": {
    "id": "multi-gaming-and-script-04",
    "name": "Multi-Gaming - 04",
    "ram": "12 GO DDR4",
    "CPU": 5,
    "storage": "40 GO",
    "price": 6.99
  },
  "multiGaming05": {
    "id": "multi-gaming-and-script-05",
    "name": "Multi-Gaming - 05",
    "ram": "17 GO DDR4",
    "CPU": 7,
    "storage": "60 GO",
    "price": 9.99
  },
  "multiGaming06": {
    "id": "multi-gaming-and-script-06",
    "name": "Multi-Gaming - 06",
    "ram": "20 GO DDR4",
    "CPU": 10,
    "storage": "80 GO",
    "price": 12.99
  },
  "multiGaming07": {
    "id": "multi-gaming-and-script-07",
    "name": "Multi-Gaming - 07",
    "ram": "32 GO DDR4",
    "CPU": 16,
    "storage": "128 GO",
    "price": 19.99
  }
};

// Helper function to create packages with game-specific order URLs
const createPackages = (gameId: string) => [
  { ...standardPackages.multiGaming01, orderUrl: `/order/${gameId}/bronze` },
  { ...standardPackages.multiGaming02, orderUrl: `/order/${gameId}/silver` },
  { ...standardPackages.multiGaming03, orderUrl: `/order/${gameId}/gold` },
  { ...standardPackages.multiGaming04, orderUrl: `/order/${gameId}/platinum` },
];

export const gameData: Record<string, Game> = {
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft',
    description: 'Hébergez votre serveur Minecraft avec une performance optimale',
    image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png',
    packages: createPackages('minecraft'),
  },
  fivem: {
    id: 'fivem',
    name: 'FiveM',
    description: 'Serveurs FiveM optimisés pour une expérience GTA RP fluide',
    image: 'https://logo-marque.com/wp-content/uploads/2021/03/FiveM-Symbole.jpg',
    packages: createPackages('fivem'),
  },
  gmod: {
    id: 'gmod',
    name: "Garry's Mod",
    description: 'Hébergement de serveurs Garry\'s Mod haute performance',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Garry%27s_Mod_logo.svg/1200px-Garry%27s_Mod_logo.svg.png',
    packages: createPackages('gmod'),
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.JS',
    description: 'Hébergement optimisé pour vos applications Node.js',
    image: 'https://www.mindrops.com/fr/images/nodejs-image.webp',
    packages: createPackages('nodejs'),
  },
  python: {
    id: 'python',
    name: 'Python',
    description: 'Hébergement optimisé pour vos applications python',
    image: '/images/python.png',
    packages: createPackages('python'),
  },
  csgo: {
    id: 'csgo',
    name: 'CS:GO',
    description: 'Serveurs Counter-Strike: Global Offensive optimisés',
    image: 'https://charlestech.fr/wp-content/uploads/2022/02/cs-go-mac-m1.jpeg',
    packages: createPackages('csgo'),
  },
  redm: {
    id: 'redm',
    name: 'RedM',
    description: 'Serveurs RedM pour Red Dead Redemption 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovXPfJz6CecxLro2hDsauO2GdVOIG6GqsJg&s',
    packages: createPackages('redm'),
  },
  ark: {
    id: 'ark',
    name: 'ARK: Survival Evolved',
    description: 'Serveurs ARK optimisés pour une expérience de survie ultime',
    image: 'https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png',
    packages: createPackages('ark'),
  },
  novalife: {
    id: 'novalife',
    name: 'Nova-Life: Amboise',
    description: 'Serveurs Nova-Life pour une expérience RP immersive',
    image: 'https://playhosted.com/assets/images/ogimages/logoog/ognovalife.png',
    packages: createPackages('novalife'),
  },
  palworld: {
    id: 'palworld',
    name: 'Palworld',
    description: 'Serveurs Palworld pour une aventure unique',
    image: 'https://sm.ign.com/ign_fr/cover/p/palworld/palworld_g7rv.jpg',
    packages: createPackages('palworld'),
  },
  arma3: {
    id: 'arma3',
    name: 'Arma 3',
    description: 'Serveurs Arma 3 pour des missions militaires intenses',
    image: 'https://image.jeuxvideo.com/images/jaquettes/00040871/jaquette-arma-iii-pc-cover-avant-g-1362392188.jpg',
    packages: createPackages('arma3'),
  },
  beammp: {
    id: 'beammp',
    name: 'BeamMP Servers',
    description: 'Serveurs BeamMP pour BeamNG.drive',
    image: 'https://styles.redditmedia.com/t5_2lx67s/styles/communityIcon_h98xp84llsgd1.png',
    packages: createPackages('beammp'),
  },
  assetto: {
    id: 'assetto',
    name: 'Assetto Corsa',
    description: 'Serveurs Assetto Corsa pour une simulation de course réaliste',
    image: 'https://www.minuitdouze.com/wp-content/uploads/assetto-corsa-logo-race.jpg',
    packages: createPackages('assetto'),
  },
};