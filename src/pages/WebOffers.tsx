import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Network, 
  Layout, 
  ShoppingCart 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import ControlPanel from '../components/ControlPanel';
import { webData } from '../data/webData';

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

export default function WebOffers() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Globe className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl font-bold">{t('webOffers.title')}</h1>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('webOffers.subtitle')}
            </motion.p>
          </div>

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
                  <th className="px-6 py-4 text-left">{t('webOffers.table.headers.name')}</th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-blue-500" />
                      <span>{t('webOffers.table.headers.processor')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <MemoryStick className="w-5 h-5 text-blue-500" />
                      <span>{t('webOffers.table.headers.ram')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-5 h-5 text-blue-500" />
                      <span>{t('webOffers.table.headers.storage')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Layout className="w-5 h-5 text-blue-500" />
                      <span>{t('webOffers.table.headers.sites')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Network className="w-5 h-5 text-blue-500" />
                      <span>{t('webOffers.table.headers.email')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">{t('webOffers.table.headers.price')}</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {webData.map((offer, index) => (
                  <motion.tr
                    key={offer.id}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    className={`bg-gray-900/30 hover:bg-gray-900/50 transition-colors ${
                      index !== webData.length - 1 ? 'border-b border-blue-900/30' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Globe className={`w-4 h-4 ${
                          offer.name.includes('Basic') 
                          ? 'text-blue-500' 
                          : offer.name.includes('Unlimited') 
                            ? 'text-yellow-500' 
                            : 'text-purple-500'
                        }`} />
                        <span className="font-semibold">{offer.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{offer.processor}</td>
                    <td className="px-6 py-4 text-gray-300">{offer.ram}</td>
                    <td className="px-6 py-4 text-gray-300">{offer.storage}</td>
                    <td className="px-6 py-4 text-gray-300">{offer.sites}</td>
                    <td className="px-6 py-4 text-gray-300">{offer.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-bold text-blue-400">{offer.price}€</span>
                        <span className="text-sm text-gray-400">{t('webOffers.table.priceSuffix')}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={offer.orderUrl}
                        className="inline-flex items-center justify-center w-32 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
                      >
                        <span>{t('webOffers.table.actions.order')}</span>
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
            {webData.map((offer, index) => (
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
                    <Globe className={`w-4 h-4 ${
                      offer.name.includes('Basic') ? 'text-blue-500' : 'text-purple-500'
                    }`} />
                    <h3 className="text-xl font-semibold">{t(`webOffers.offers.${offer.name}`)}</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-blue-400">{offer.price}€</span>
                      <span className="text-sm text-gray-400">{t('webOffers.table.priceSuffix')}</span>
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
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Layout className="w-4 h-4 text-gray-500" />
                    <span>{offer.sites} {t('webOffers.table.sitesSuffix')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Network className="w-4 h-4 text-gray-500" />
                    <span>{offer.email}</span>
                  </div>
                </div>

                <Link
                  to={offer.orderUrl}
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
                >
                  <span>{t('webOffers.table.actions.order')}</span>
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Control Panel Section */}
          <ControlPanel type="web" />
        </div>
      </div>
    </PageTransition>
  );
}
