import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ScrollingLogos from './ScrollingLogos';

export default function GameServers() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">{t('gameServers.title')}</h2>
          </div>
          <p className="text-gray-400 text-lg">
            {t('gameServers.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Scrolling Logos */}
      <ScrollingLogos />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <Link
            to="/games"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
          >
            {t('gameServers.button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
