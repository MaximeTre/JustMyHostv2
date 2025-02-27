import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    name: 'Dupont Alexandre',
    role: 'vpsOwner',
    content: 'review1',
    rating: 5,
    avatar: 'https://www.top-heberg.com/assets/images/avatars/default.jpg',
  },
  {
    name: 'Zonettie Gaming',
    role: 'vpsOwner',
    content: 'review2',
    rating: 5,
    avatar: 'https://www.top-heberg.com/assets/images/avatars/default.jpg',
  },
  {
    name: 'Axel Benoit',
    role: 'vpsOwner',
    content: 'review3',
    rating: 5,
    avatar: 'https://www.top-heberg.com/assets/images/avatars/default.jpg',
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

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{t('reviews.title')}</h2>
          <p className="text-gray-400 text-lg">{t('reviews.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-xl p-8 border border-blue-900/30 backdrop-blur-sm hover:border-blue-700/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="bg-blue-600 rounded-full p-2 shadow-lg shadow-blue-600/20">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500 transition-transform group-hover:scale-110"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Review Content */}
              <div className="relative mb-8">
                <p className="text-gray-300 italic leading-relaxed">
                  "{t(`reviews.contents.${review.content}`)}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t(`reviews.roles.${review.role}`)}
                  </p>
                </div>
              </div>

              {/* Background Gradient Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
