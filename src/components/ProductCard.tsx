import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  ShoppingCart,
  Server,
  Rocket,
  Star,
  Crown,
  Zap,
  Gauge,
  PanelTop,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const products = [
  {
    title: "multiGaming01.title",
    subtitle: "multiGaming01.subtitle",
    price: 0.99,
    features: [
      { icon: Cpu, text: "multiGaming01.features.cpu" },
      { icon: MemoryStick, text: "multiGaming01.features.memory" },
      { icon: HardDrive, text: "multiGaming01.features.storage" },
      { icon: Gauge, text: "multiGaming01.features.bandwidth" },
      { icon: Shield, text: "multiGaming01.features.ddos" }
    ],
    link: "/games",
    highlight: false
  },
  {
    title: "vpsStarter.title",
    subtitle: "vpsStarter.subtitle",
    price: 2.49,
    features: [
      { icon: Cpu, text: "vpsStarter.features.cpu" },
      { icon: MemoryStick, text: "vpsStarter.features.memory" },
      { icon: HardDrive, text: "vpsStarter.features.storage" },
      { icon: Gauge, text: "vpsStarter.features.bandwidth" },
      { icon: Shield, text: "vpsStarter.features.ddos" }
    ],
    link: "/offres/vps",
    highlight: true
  },
  {
    title: "webBasic.title",
    subtitle: "webBasic.subtitle",
    price: 0.99,
    features: [
      { icon: Cpu, text: "webBasic.features.cpu" },
      { icon: Gauge, text: "webBasic.features.bandwidth" },
      { icon: PanelTop, text: "webBasic.features.sites" },
      { icon: Star, text: "webBasic.features.subdomain" },
      { icon: Shield, text: "webBasic.features.ddos" }
    ],
    link: "/offres/web",
    highlight: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
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

export default function ProductCard() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('productCard.title')}</h2>
          <p className="text-gray-400 text-lg">{t('productCard.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              className={`relative rounded-2xl ${
                product.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl shadow-blue-900/20'
                  : 'bg-gray-900/50 border border-blue-900/30 '
              } p-8 flex flex-col`}
            >
              {product.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t('productCard.popularBadge')}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{t(product.title)}</h3>
                <p className={`${product.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
                  {t(product.subtitle)}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{product.price}€</span>
                  <span className={`text-lg ml-2 ${product.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
                    {t('productCard.priceSuffix')}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {product.features.map((feature) => (
                  <li 
                    key={feature.text}
                    className="flex items-center space-x-3"
                  >
                    <feature.icon className={`w-5 h-5 ${
                      product.highlight ? 'text-blue-100' : 'text-blue-500'
                    }`} />
                    <span className={product.highlight ? 'text-blue-100' : 'text-gray-300'}>
                      {t(feature.text)}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={product.link}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  product.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20`}
              >
                <span>{t('productCard.cta')}</span>
                <ShoppingCart className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
