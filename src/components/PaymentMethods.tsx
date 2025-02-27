import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, HandCoins, Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function PaymentMethods() {
  const { t } = useTranslation();

  const paymentMethods = [
    {
      name: t('paymentMethods.visaMastercard'),
      icon: CreditCard,
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: t('paymentMethods.paypal'),
      icon: HandCoins,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: t('paymentMethods.paysafecard'),
      icon: Wallet,
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-12">{t('paymentMethods.title')}</h2>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            variants={containerVariants}
          >
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                <div className={`
                  relative w-20 h-20 rounded-full 
                  bg-gradient-to-br ${method.color}
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:scale-110
                  animate-float
                  shadow-lg shadow-black/25
                  backdrop-blur-sm
                `} style={{ animationDelay: `${index * 0.2}s` }}>
                  <method.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-transparent transition-colors" />
                </div>
                <p className="mt-4 text-gray-400 group-hover:text-white transition-colors">
                  {method.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            className="mt-12 text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('paymentMethods.description')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
