import { WebOffer } from '../types/web';

export const webData: WebOffer[] = [
  {
    id: 'basic-web',
    name: 'Basic - Web',
    processor: 'Intel® Xeon CPU E5-2667 v3 @3.60 GHz',
    ram: '∞ MB DDR3',
    storage: '16 GO SSD',
    sites: '2 sites',
    email: '3 email',
    price: 0.99,
    orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/web/basic-web'
  },
  {
    id: 'deluxe-web',
    name: 'Deluxe - Web',
    processor: 'Intel® Xeon CPU E5-2667 v3 @3.60 GHz',
    ram: '∞ MB DDR3',
    storage: '32 GO SSD',
    sites: '6 sites',
    email: '6 email',
    price: 2.99,
    orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/web/deluxe-web'
  },
  {
    id: 'Unlimited-web',
    name: 'Unlimited  - Web',
    processor: 'Intel® Xeon CPU E5-2667 v3 @3.60 GHz',
    ram: '∞ MB DDR3',
    storage: '50 GO SSD',
    sites: '∞',
    email: '∞',
    price: 9.99,
    orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/web/Unlimited-web'
  }
];