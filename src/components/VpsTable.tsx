import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  ShoppingCart,
  Server,
  Rocket,
  Star,
  Crown,
  Zap
} from 'lucide-react';
import { VpsOffer } from '../types/vps';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface VpsTableProps {
  type: 'kvm' | 'lxc';
  data: VpsOffer[];
}

const getOfferIcon = (name: string) => {
  if (name.toLowerCase().includes('starter')) return <Server className="w-4 h-4 text-blue-500" />;
  if (name.toLowerCase().includes('medium')) return <Zap className="w-4 h-4 text-green-500" />;
  if (name.toLowerCase().includes('pro')) return <Rocket className="w-4 h-4 text-yellow-500" />;
  if (name.toLowerCase().includes('premium')) return <Star className="w-4 h-4 text-purple-500" />;
  if (name.toLowerCase().includes('ultime')) return <Crown className="w-4 h-4 text-red-500" />;
  return <Server className="w-4 h-4 text-blue-500" />;
};

const tableVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export default function VpsTable({ type, data }: VpsTableProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop table */}
      <motion.div 
        className="hidden lg:block overflow-hidden rounded-xl border border-blue-900/30"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900/70 border-b border-blue-900/30">
              <th className="px-6 py-4 text-left">{t('vpsTable.headers.name')}</th>
              <th className="px-6 py-4 text-left">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  <span>{t('vpsTable.headers.processor')}</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left">
                <div className="flex items-center space-x-2">
                  <MemoryStick className="w-5 h-5 text-blue-500" />
                  <span>{t('vpsTable.headers.ram')}</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left">
                <div className="flex items-center space-x-2">
                  <HardDrive className="w-5 h-5 text-blue-500" />
                  <span>{t('vpsTable.headers.storage')}</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left">{t('vpsTable.headers.price')}</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((offer, index) => (
              <motion.tr
                key={offer.id}
                custom={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                className={`bg-gray-900/30 hover:bg-gray-900/50 transition-colors ${
                  index !== data.length - 1 ? 'border-b border-blue-900/30' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {getOfferIcon(offer.name)}
                    <span className="font-semibold">{offer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">{offer.processor}</td>
                <td className="px-6 py-4 text-gray-300">{offer.ram}</td>
                <td className="px-6 py-4 text-gray-300">{offer.storage}</td>
                <td className="px-6 py-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-bold text-blue-400">{offer.price}€</span>
                    <span className="text-sm text-gray-400">{t('vpsTable.priceSuffix')}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={offer.orderUrl}
                    className="inline-flex items-center justify-center w-32 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
                  >
                    <span>{t('vpsTable.actions.order')}</span>
                    <ShoppingCart className="w-4 h-4 ml-2" />
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile cards */}
      <motion.div 
        className="lg:hidden space-y-4"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((offer, index) => (
          <motion.div
            key={offer.id}
            custom={index}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900/30 rounded-xl border border-blue-900/30 p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                {getOfferIcon(offer.name)}
                <h3 className="text-xl font-semibold">{offer.name}</h3>
              </div>
              <div className="text-right">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold text-blue-400">{offer.price}€</span>
                  <span className="text-sm text-gray-400">{t('vpsTable.priceSuffix')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Cpu className="w-4 h-4 text-gray-500" />
                <span>{offer.processor}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MemoryStick className="w-4 h-4 text-gray-500" />
                <span>{offer.ram}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <HardDrive className="w-4 h-4 text-gray-500" />
                <span>{offer.storage}</span>
              </div>
            </div>

            <Link
              to={offer.orderUrl}
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
            >
              <span>{t('vpsTable.actions.order')}</span>
              <ShoppingCart className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
