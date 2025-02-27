import { VpsOffer } from '../types/vps';

export const vpsData: Record<'kvm' | 'lxc', VpsOffer[]> = {
  kvm: [
    {
      id: 'kvm-starter',
      name: 'VPS KVM - Starter',
      processor: '2x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '4096 MB',
      storage: '32 GO SSD',
      price: 3.49,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps-kvm/kvm-starter'
    },
    {
      id: 'kvm-medium',
      name: 'VPS KVM - Medium',
      processor: '4x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '8096 MB',
      storage: '64 GO SSD',
      price: 5.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps-kvm/kvm-medium'
    },
    {
      id: 'kvm-pro',
      name: 'VPS KVM - Pro',
      processor: '8x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '16096 MB',
      storage: '128 GO SSD',
      price: 8.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps-kvm/kvm-pro'
    },
    {
      id: 'kvm-premium',
      name: 'VPS KVM - Premium',
      processor: '12x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '32096 MB',
      storage: '256 GO SSD',
      price: 16.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps-kvm/kvm-premium'
    },
    {
      id: 'kvm-ultime',
      name: 'VPS KVM - Ultime',
      processor: '20x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '64096 MB',
      storage: '512 GO SSD',
      price: 29.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps-kvm/kvm-ultime'
    }
  ],
  lxc: [
    {
      id: 'lxc-starter',
      name: 'VPS - Starter',
      processor: '2x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '4096 MB',
      storage: '32 GO SSD',
      price: 2.49,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps/lxc-starter'
    },
    {
      id: 'lxc-medium',
      name: 'VPS - Medium',
      processor: '4x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '8096 MB',
      storage: '64 GO SSD',
      price: 4.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps/lxc-medium'
    },
    {
      id: 'lxc-pro',
      name: 'VPS - Pro',
      processor: '8x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '16096 MB',
      storage: '128 GO SSD',
      price: 7.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps/lxc-pro'
    },
    {
      id: 'lxc-premium',
      name: 'VPS - Premium',
      processor: '12x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '32096 MB',
      storage: '256 GO SSD',
      price: 15.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps/lxc-premium'
    },
    {
      id: 'lxc-ultime',
      name: 'VPS - Ultime',
      processor: '20x Intel Xeon CPU E5-2667 v3 @3.60 GHz',
      ram: '64096 MB',
      storage: '512 GO SSD',
      price: 24.99,
      orderUrl: 'https://my.justmyhost.fr/index.php?rp=/store/vps/lxc-ultime'
    }
  ]
};