import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Cpu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import VpsTable from '../components/VpsTable';
import VpsFeatures from '../components/VpsFeatures';
import { vpsData } from '../data/vpsData';

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

export default function VpsKvm() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Server,
      title: t('vpsKvm.features.fullVirtualization.title'),
      description: t('vpsKvm.features.fullVirtualization.description')
    },
    {
      icon: Shield,
      title: t('vpsKvm.features.totalCustomization.title'),
      description: t('vpsKvm.features.totalCustomization.description')
    },
    {
      icon: Cpu,
      title: t('vpsKvm.features.nativePerformance.title'),
      description: t('vpsKvm.features.nativePerformance.description')
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/offres/vps"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>{t('vpsKvm.backToOffers')}</span>
          </Link>

          <div className="text-center mb-16">
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Server className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl font-bold">{t('vpsKvm.title')}</h1>
            </motion.div>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('vpsKvm.subtitle')}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30"
              >
                <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <VpsTable type="kvm" data={vpsData.kvm} />

          <VpsFeatures />
        </div>
      </div>
    </PageTransition>
  );
}
