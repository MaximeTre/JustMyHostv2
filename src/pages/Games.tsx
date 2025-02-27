import React from 'react';
import { motion } from 'framer-motion';
import { 
  Medal, 
  MemoryStick, 
  HardDrive, 
  Cpu,
  ShoppingCart, 
  CreditCard,
  Sparkles,
  Star,
  Crown,
  Rocket,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import ControlPanel from '../components/ControlPanel';
import { standardPackages } from '../data/gameData';

const getTierIcon = (name: string) => {
  const baseClasses = "w-4 h-4";
  switch (name.toLowerCase()) {
    case 'bronze':
      return <Medal className={`${baseClasses} text-amber-600`} />;
    case 'silver':
      return <Medal className={`${baseClasses} text-gray-400`} />;
    case 'gold':
      return <Medal className={`${baseClasses} text-yellow-400`} />;
    case 'platinum':
      return <Star className={`${baseClasses} text-blue-300`} />;
    case 'ultimate':
      return <Crown className={`${baseClasses} text-red-400`} />;
    default:
      return <Rocket className={`${baseClasses} text-blue-500`} />;
  }
};

export default function Games() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{t('games.title')}</h1>
            <p className="text-xl text-gray-400">{t('games.subtitle')}</p>
          </div>

          {/* Subscription Explanation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-900/30 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold">{t('games.subscription.title')}</h2>
            </div>
            <p className="text-gray-300 mb-4">{t('games.subscription.description')}</p>
            <ul className="space-y-2">
              {t('games.subscription.features', { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Test Offer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900/20 to-gray-900/20 rounded-xl p-8 border border-blue-900/30 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-gray-200">{t('games.testOffer.title')}</h2>
            </div>
            <p className="text-gray-300 mb-4">{t('games.testOffer.description')}</p>
            <ul className="space-y-2">
              {t('games.testOffer.features', { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="https://my.justmyhost.fr/index.php?rp=/store/game/multi-gaming-and-script-free"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
              >
                <span>{t('games.testOffer.button')}</span>
                <Rocket className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Table for desktop */}
          <div className="hidden lg:block overflow-hidden rounded-xl border border-blue-900/30">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/70 border-b border-blue-900/30">
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Medal className="w-5 h-5 text-blue-500" />
                      <span>{t('games.table.offer')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-blue-500" />
                      <span>{t('games.table.cpu')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <MemoryStick className="w-5 h-5 text-blue-500" />
                      <span>{t('games.table.ram')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-5 h-5 text-blue-500" />
                      <span>{t('games.table.storage')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-blue-500" />
                      <span>{t('games.table.price')}</span>
                    </div>
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(standardPackages).map(([key, pkg]) => (
                  <tr
                    key={pkg.id}
                    className="bg-gray-900/30 hover:bg-gray-900/50 transition-colors border-b border-blue-900/30"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {getTierIcon(pkg.name)}
                        <span className="font-semibold">{pkg.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{pkg.CPU} vCore</td>
                    <td className="px-6 py-4 text-gray-300">{pkg.ram}</td>
                    <td className="px-6 py-4 text-gray-300">{pkg.storage}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-bold text-blue-400">{pkg.price}€</span>
                        <span className="text-sm text-gray-400">/mois</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`https://my.justmyhost.fr/index.php?rp=/store/game/${pkg.id}`}
                        className="inline-flex items-center justify-center w-32 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
                      >
                        <span>{t('games.table.button')}</span>
                        <ShoppingCart className="w-4 h-4 ml-2" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {Object.entries(standardPackages).map(([key, pkg]) => (
              <div
                key={pkg.id}
                className="bg-gray-900/30 rounded-xl border border-blue-900/30 p-6 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    {getTierIcon(pkg.name)}
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-blue-400">{pkg.price}€</span>
                      <span className="text-sm text-gray-400">/mois</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <Cpu className="w-4 h-4" />
                      <span>{t('games.table.cpu')}</span>
                    </div>
                    <span className="font-medium">{pkg.CPU} vCore</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <MemoryStick className="w-4 h-4" />
                      <span>{t('games.table.ram')}</span>
                    </div>
                    <span className="font-medium">{pkg.ram}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <HardDrive className="w-4 h-4" />
                      <span>{t('games.table.storage')}</span>
                    </div>
                    <span className="font-medium">{pkg.storage}</span>
                  </div>
                </div>

                <Link
                  to={`https://my.justmyhost.fr/index.php?rp=/store/game/${pkg.id}`}
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium"
                >
                  <span>{t('games.table.button')}</span>
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* Control Panel Section */}
          <ControlPanel type="game" />
        </div>
      </div>
    </PageTransition>
  );
}
