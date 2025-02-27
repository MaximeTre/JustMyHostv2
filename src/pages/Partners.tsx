import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ExternalLink, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const partners = [
  {
    name: 'Intel',
    logo: 'https://img-api.mac4ever.com/1200/0/5b2537659d_intel.webp',
    website: 'https://www.intel.com',
    descriptionKey: 'partners.intel.description',
  },
  {
    name: 'AMD',
    logo: 'https://www.atombilisim.com.tr/Data/img/blogPost/7/tr_img_1_37.jpg',
    website: 'https://www.amd.com',
    descriptionKey: 'partners.amd.description',
  },
  {
    name: 'Nvidia',
    logo: 'https://www.ecranmobile.fr/photo/art/grande/80798331-58267841.jpg?v=1717711371',
    website: 'https://www.nvidia.com',
    descriptionKey: 'partners.nvidia.description',
  },
  {
    name: 'Cisco',
    logo: 'https://le-guide-du-secops.fr/wp-content/uploads/2022/02/Cisco.jpg',
    website: 'https://www.cisco.com',
    descriptionKey: 'partners.cisco.description',
  },
  {
    name: 'Cloudflare',
    logo: 'https://lumusoft.com/storage/blogs/December2023/1QBPqde1t6ReWoy8U4jE.webp',
    website: 'https://www.cloudflare.com',
    descriptionKey: 'partners.cloudflare.description',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Partners() {
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
              <Handshake className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl font-bold">{t('partners.title')}</h1>
            </motion.div>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('partners.subtitle')}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partners.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="bg-gray-900/50 rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-700/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{partner.name}</h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 transition-colors group-hover:text-blue-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400">{t(partner.descriptionKey)}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{t('partners.becomePartner.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {t('partners.becomePartner.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://my.justmyhost.fr/submitticket.php"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Mail className="w-6 h-6 mr-2" />
                {t('partners.becomePartner.contactButton')}
              </a>
              <a
                href="https://share.justmyhost.fr/api/shares/logo-jmh/files/f0234eed-bde5-4805-ad11-ca46fe1548e3"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 8l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
                {t('partners.becomePartner.resourcesButton')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
