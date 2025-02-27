import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Terminal, Settings2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const distributions = [
  {
    name: 'Debian',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/640px-Openlogo-debianV2.svg.png',
    versions: ['11', '12'],
  },
  {
    name: 'Ubuntu',
    logo: 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png',
    versions: ['20.04', '22.04', '24.04'],
  }
];

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

export default function VpsFeatures() {
  const { t } = useTranslation();

  return (
    <div className="mt-24">
      {/* Distributions Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">{t('vpsFeatures.distributions.title')}</h2>
          <p className="text-gray-400">{t('vpsFeatures.distributions.description')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {distributions.map((distro) => (
            <motion.div
              key={distro.name}
              variants={itemVariants}
              className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all group"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={distro.logo}
                  alt={`${distro.name} logo`}
                  className="h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{distro.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {distro.versions.map((version) => (
                  <span
                    key={version}
                    className="px-2 py-1 text-sm bg-blue-600/20 rounded-md text-blue-400"
                  >
                    {version}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Control Panel Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">{t('vpsFeatures.panel.title')}</h2>
          <p className="text-gray-400">{t('vpsFeatures.panel.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="relative rounded-xl overflow-hidden"
          >
            <img
              src="/images/panel-vps.png"
              alt={t('vpsFeatures.panel.imageAlt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30">
              <Monitor className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('vpsFeatures.panel.features.intuitiveInterface.title')}</h3>
              <p className="text-gray-400">{t('vpsFeatures.panel.features.intuitiveInterface.description')}</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30">
              <Terminal className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('vpsFeatures.panel.features.webConsole.title')}</h3>
              <p className="text-gray-400">{t('vpsFeatures.panel.features.webConsole.description')}</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30">
              <Settings2 className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('vpsFeatures.panel.features.completeManagement.title')}</h3>
              <p className="text-gray-400">{t('vpsFeatures.panel.features.completeManagement.description')}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
