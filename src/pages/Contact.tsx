import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Headphones, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SocialLinks from '../components/SocialLinks';
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

export default function Contact() {
  const { t } = useTranslation();

  const supportFeatures = [
    {
      icon: Headphones,
      title: t('contact.supportFeatures.expertSupport.title'),
      description: t('contact.supportFeatures.expertSupport.description')
    },
    {
      icon: Mail,
      title: t('contact.supportFeatures.quickResponse.title'),
      description: t('contact.supportFeatures.quickResponse.description')
    },
    {
      icon: Clock,
      title: t('contact.supportFeatures.support247.title'),
      description: t('contact.supportFeatures.support247.description')
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <MessageCircle className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl font-bold">{t('contact.title')}</h1>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('contact.description')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {supportFeatures.map((feature) => (
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-8 text-center">{t('contact.socialMediaTitle')}</h2>
              <SocialLinks />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">{t('contact.supportTitle')}</h2>
              <p className="text-gray-400 mb-8">
                {t('contact.supportDescription')}
              </p>
              <a
                href="https://my.justmyhost.fr/submitticket.php"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 group"
              >
                <span>{t('contact.ticketButton')}</span>
                <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
