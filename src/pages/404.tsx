import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

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

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center mb-16"
          >
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              variants={itemVariants}
            >
              <AlertTriangle className="w-12 h-12 text-red-500" />
              <h1 className="text-5xl font-bold text-red-500">404</h1>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('notFound.message')}
            </motion.p>
          </motion.div>

          {/* Action Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.p variants={itemVariants} className="text-gray-400 mb-8">
              {t('notFound.action')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                {t('notFound.homeButton')}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-800/25 group"
              >
                <span>{t('notFound.contactButton')}</span>
                <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
