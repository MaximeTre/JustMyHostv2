import React from 'react';
import { motion } from 'framer-motion';

export default function HostAdviceBadge() {
  return (
    <motion.a
      href="https://hostadvice.com/hosting-company/justmyhost-reviews/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="w-fit transition-transform duration-300 hover:shadow-lg hover:shadow-blue-900/20 rounded-lg overflow-hidden"
    >
      <img src="https://hostadvice.com/awards/2025-excellent-service.png" alt="JustMyHost review" />
    </motion.a>
  );
}
