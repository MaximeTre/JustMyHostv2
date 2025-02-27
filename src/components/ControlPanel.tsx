import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Terminal, 
  Settings2, 
  Shield, 
  Gauge,
  Database,
  FileCode,
  Globe,
  Gamepad
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ControlPanelProps {
  type: 'game' | 'web';
}

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

export default function ControlPanel({ type }: ControlPanelProps) {
  const { t } = useTranslation();

  // Définition des panneaux avec les traductions dynamiques
  const panels = {
    game: {
      title: t('controlpanel.game.title'),
      description: t('controlpanel.game.description'),
      image: '/images/panel-game.png',
      features: [
        {
          icon: Monitor,
          title: t('controlpanel.game.features.interfaceModerne.title'),
          description: t('controlpanel.game.features.interfaceModerne.description')
        },
        {
          icon: Terminal,
          title: t('controlpanel.game.features.console.title'),
          description: t('controlpanel.game.features.console.description')
        },
        {
          icon: Settings2,
          title: t('controlpanel.game.features.configuration.title'),
          description: t('controlpanel.game.features.configuration.description')
        },
        {
          icon: Gamepad,
          title: t('controlpanel.game.features.multiJeux.title'),
          description: t('controlpanel.game.features.multiJeux.description')
        }
      ]
    },
    web: {
      title: t('controlpanel.web.title'),
      description: t('controlpanel.web.description'),
      image: '/images/panel-web.png',
      features: [
        {
          icon: Globe,
          title: t('controlpanel.web.features.domaines.title'),
          description: t('controlpanel.web.features.domaines.description')
        },
        {
          icon: Database,
          title: t('controlpanel.web.features.basesDeDonnees.title'),
          description: t('controlpanel.web.features.basesDeDonnees.description')
        },
        {
          icon: FileCode,
          title: t('controlpanel.web.features.fichiers.title'),
          description: t('controlpanel.web.features.fichiers.description')
        },
        {
          icon: Shield,
          title: t('controlpanel.web.features.securite.title'),
          description: t('controlpanel.web.features.securite.description')
        }
      ]
    }
  };

  const panel = panels[type];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{panel.title}</h2>
            <p className="text-gray-400 text-lg">
              {panel.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden border border-blue-900/30"
            >
              <img
                src={panel.image}
                alt="Panel de gestion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {panel.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all group"
                >
                  <feature.icon className="w-8 h-8 text-blue-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}