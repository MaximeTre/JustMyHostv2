import React from 'react';
import { motion } from 'framer-motion';
import { Server, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function VpsOffers() {
  const { t } = useTranslation();

  const offers = [
    {
      type: 'kvm',
      title: 'vps.kvm.title',
      description: 'vps.kvm.description',
      features: [
        'vps.kvm.features.dedicatedResources',
        'vps.kvm.features.nativePerformance',
        'vps.kvm.features.totalIsolation',
        'vps.kvm.features.fullCustomization'
      ],
      path: '/offres/vps/kvm'
    },
    {
      type: 'lxc',
      title: 'vps.lxc.title',
      description: 'vps.lxc.description',
      features: [
        'vps.lxc.features.quickStartup',
        'vps.lxc.features.highDensity',
        'vps.lxc.features.optimizedPerformance',
        'vps.lxc.features.greatValue'
      ],
      path: '/offres/vps/lxc'
    }
  ];

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
              <Server className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl font-bold">{t('vps.title')}</h1>
            </motion.div>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('vps.subtitle')}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {offers.map((option) => (
              <motion.div
                key={option.type}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900/50 rounded-xl border border-blue-900/30 p-8 hover:border-blue-700/50 transition-all"
              >
                <h2 className="text-2xl font-bold mb-4">{t(option.title)}</h2>
                <p className="text-gray-400 mb-6">{t(option.description)}</p>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={option.path}
                  className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 font-medium inline-flex items-center justify-center"
                >
                  <span>{t('vps.cta')}</span>
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
