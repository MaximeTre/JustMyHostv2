import React from 'react';
import { motion } from 'framer-motion';
import { Server, Gamepad2, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';

const Offers = () => {
  const { t } = useTranslation();

  const offers = [
    {
      id: 'vps',
      title: t('offers.vps.title'),
      icon: Server,
      description: t('offers.vps.description'),
      features: t('offers.vps.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1600',
      link: '/offres/vps',
    },
    {
      id: 'gaming',
      title: t('offers.gaming.title'),
      icon: Gamepad2,
      description: t('offers.gaming.description'),
      features: t('offers.gaming.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600',
      link: '/games',
    },
    {
      id: 'web',
      title: t('offers.web.title'),
      icon: Globe,
      description: t('offers.web.description'),
      features: t('offers.web.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
      link: '/offres/web',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{t('offers.title')}</h1>
            <p className="text-xl text-gray-400">{t('offers.subtitle')}</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-24"
          >
            {offers.map((offer, index) => (
              <motion.section
                key={offer.id}
                id={offer.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <offer.icon className="absolute bottom-4 left-4 w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{offer.title}</h2>
                  <p className="text-xl text-gray-400 mb-6">{offer.description}</p>

                  <ul className="space-y-4 mb-8">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <ArrowRight className="w-5 h-5 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={offer.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 flex items-center space-x-2 w-fit"
                  >
                    <span>{t('offers.button')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Offers;
