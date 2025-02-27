import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { 
  Server, 
  Gamepad2, 
  Globe, 
  Cpu, 
  Book, 
  Mail,
  Home,
  MonitorDot,
  X,
  ChevronRight,
  ExternalLink,
  Handshake
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  const handleLinkClick = () => {
    onClose();
    setActiveSubmenu(null);
  };

  // Menu Items with translations
  const menuItems = [
    {
      label: t('menu.home'),
      icon: Home,
      path: '/',
    },
    {
      label: t('menu.vps.label'),
      icon: MonitorDot,
      children: [
        {
          label: t('menu.vps.kvm.title'),
          description: t('menu.vps.kvm.description'),
          icon: Server,
          path: '/offres/vps/kvm',
        },
        {
          label: t('menu.vps.lxc.title'),
          description: t('menu.vps.lxc.description'),
          icon: Server,
          path: '/offres/vps/lxc',
        },
      ],
    },
    {
      label: t('menu.offers.label'),
      icon: Cpu,
      children: [
        {
          label: t('menu.offers.games.title'),
          description: t('menu.offers.games.description'),
          icon: Gamepad2,
          path: '/games',
        },
        {
          label: t('menu.offers.web.title'),
          description: t('menu.offers.web.description'),
          icon: Globe,
          path: '/offres/web',
        },
        {
          label: t('menu.offers.all.title'),
          description: t('menu.offers.all.description'),
          icon: Cpu,
          path: '/offres',
        },
      ],
    },
    {
      label: t('menu.info.label'),
      icon: Book,
      children: [
        {
          label: t('menu.info.docs.title'),
          description: t('menu.info.docs.description'),
          icon: Book,
          path: 'https://docs.justmyhost.fr',
          external: true,
        },
        {
          label: t('menu.info.partners.title'),
          description: t('menu.info.partners.description'),
          icon: Handshake,
          path: '/partners',
        },
        {
          label: t('menu.info.status.title'),
          description: t('menu.info.status.description'),
          icon: Server,
          path: 'https://status.justmyhost.fr',
          external: true,
        },
      ],
    },
    {
      label: t('menu.contact'),
      icon: Mail,
      path: '/contact',
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const renderMenuItem = (item: typeof menuItems[0]) => {
    if ('children' in item) {
      return (
        <button
          onClick={() => setActiveSubmenu(activeSubmenu === item.label ? null : item.label)}
          className="flex items-center justify-between w-full p-4 hover:bg-gray-800/50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5 text-blue-500" />
            <span>{item.label}</span>
          </div>
          <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
            activeSubmenu === item.label ? 'rotate-90' : ''
          }`} />
        </button>
      );
    }

    return (
      <Link
        to={item.path}
        onClick={handleLinkClick}
        className="flex items-center space-x-3 p-4 hover:bg-gray-800/50 transition-colors"
      >
        <item.icon className="w-5 h-5 text-blue-500" />
        <span>{item.label}</span>
      </Link>
    );
  };

  const renderSubmenu = (items: any[]) => {
    return items.map((subItem) => (
      subItem.external ? (
        <a
          key={subItem.path}
          href={subItem.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="flex items-start space-x-3 p-4 hover:bg-gray-800/50 transition-colors"
        >
          <subItem.icon className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <div className="font-medium">{subItem.label}</div>
            <div className="text-sm text-gray-400">{subItem.description}</div>
          </div>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>
      ) : (
        <Link
          key={subItem.path}
          to={subItem.path}
          onClick={handleLinkClick}
          className="flex items-start space-x-3 p-4 hover:bg-gray-800/50 transition-colors"
        >
          <subItem.icon className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <div className="font-medium">{subItem.label}</div>
            <div className="text-sm text-gray-400">{subItem.description}</div>
          </div>
        </Link>
      )
    ));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{t('menu.title')}</h2>
              <LanguageSelector /> 
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {renderMenuItem(item)}
                  {item.children && activeSubmenu === item.label && (
                    <div className="bg-gray-800/30 border-y border-gray-800">
                      {renderSubmenu(item.children)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Client Area Button */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-800 p-4">
              <a
                href="https://my.justmyhost.fr/"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-600/25"
              >
                <span>{t('menu.clientArea')}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
