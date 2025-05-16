import React from 'react';
import { motion } from 'framer-motion';

export default function TopHebergBadge() {
  return (
    <motion.a
      href="https://www.top-heberg.com/hebergeur/justmyhost-527"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="w-fit transition-transform duration-300 hover:shadow-lg hover:shadow-blue-900/20 rounded-lg overflow-hidden"
    >
      <img src="https://share.justmyhost.fr/api/shares/top-heberg/files/bb2f7517-a8f9-4f49-9e12-5bafbc2a46d2?download=false" width="250" alt="Top-heberg.com" />
    </motion.a>
  );
}
