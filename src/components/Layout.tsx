import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  Server, 
  Gamepad2, 
  Globe, 
  Cpu, 
  Book, 
  Users, 
  Share2, 
  Activity,
  MonitorDot,
  HardDrive,
  Home,
  Mail,
  UserCircle2,
  Handshake,
  Menu
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import NavDropdown from './NavDropdown';
import SocialIcons from './SocialIcons';
import TopHebergBadge from './TopHebergBadge';
import HostAdviceBadge from './HostAdviceBadge';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';

export default function Layout() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Items translated dynamically
  const offerItems = [
    {
      title: t('layout.offers.games.title'),
      subtitle: t('layout.offers.games.subtitle'),
      icon: Gamepad2,
      path: '/games',
    },
    {
      title: t('layout.offers.web.title'),
      subtitle: t('layout.offers.web.subtitle'),
      icon: Globe,
      path: '/offres/web',
    },
    {
      title: t('layout.offers.all.title'),
      subtitle: t('layout.offers.all.subtitle'),
      icon: Cpu,
      path: '/offres',
      highlight: true,
    },
  ];

  const vpsItems = [
    {
      title: t('layout.vps.kvm.title'),
      subtitle: t('layout.vps.kvm.subtitle'),
      icon: HardDrive,
      path: '/offres/vps/kvm',
    },
    {
      title: t('layout.vps.lxc.title'),
      subtitle: t('layout.vps.lxc.subtitle'),
      icon: Server,
      path: '/offres/vps/lxc',
    },
  ];

  const infoItems = [
    {
      title: t('layout.info.docs.title'),
      subtitle: t('layout.info.docs.subtitle'),
      icon: Book,
      path: 'https://docs.justmyhost.fr',
      external: true,
    },
    {
      title: t('layout.info.partners.title'),
      subtitle: t('layout.info.partners.subtitle'),
      icon: Handshake,
      path: '/partners',
    },
    {
      title: t('layout.info.share.title'),
      subtitle: t('layout.info.share.subtitle'),
      icon: Share2,
      path: 'https://share.justmyhost.fr',
      external: true,
    },
    {
      title: t('layout.info.status.title'),
      subtitle: t('layout.info.status.subtitle'),
      icon: Activity,
      path: 'https://status.justmyhost.fr',
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <nav className="fixed w-full backdrop-blur-sm z-50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/images/transparent.png" 
                alt="Server Icon" 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <span className="text-xl font-bold">{t('layout.brand')}</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group"
              >
                <Home className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{t('layout.nav.home')}</span>
              </Link>
              
              <NavDropdown 
                label={t('layout.nav.vps')} 
                items={vpsItems}
                icon={MonitorDot}
              />

              <NavDropdown 
                label={t('layout.nav.offers')} 
                items={offerItems}
                icon={Cpu}
              />

              <NavDropdown 
                label={t('layout.nav.info')} 
                items={infoItems}
                icon={Book}
              />

              <Link 
                to="/contact" 
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{t('layout.nav.contact')}</span>
              </Link>
              <LanguageSelector /> 
              <a 
                href="https://my.justmyhost.fr/"
                className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 group"
              >
                <UserCircle2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{t('layout.nav.clientArea')}</span>
              </a>
                           
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <Outlet />

      <footer className="relative bg-black/50 border-t border-blue-900/30 py-12 mt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/transparent.png" 
                  alt="Server Icon" 
                  className="w-6 h-6"
                  loading="lazy"
                />
                <span className="text-lg font-bold">{t('layout.brand')}</span>
              </div>
              <p className="text-gray-400">{t('layout.footer.description')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('layout.footer.services')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/offres/vps" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.vps')}
                  </Link>
                </li>
                <li>
                  <Link to="/games" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.games')}
                  </Link>
                </li>
                <li>
                  <Link to="/offres/web" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.web')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('layout.footer.support')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.contact')}
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://status.justmyhost.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('layout.footer.status')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('layout.footer.legal')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/mentions-legales" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.mentions')}
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales#cgu" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.cgu')}
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales#cgv" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.cgv')}
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales#gdpr" className="hover:text-blue-400 transition-colors">
                    {t('layout.footer.gdpr')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Top Heberg Badge */}
          <div className="mt-12 flex justify-center items-center space-x-4">
  <TopHebergBadge />
  <HostAdviceBadge />
</div>

          {/* Social Icons */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <SocialIcons />
            <p className="text-center text-gray-400 mt-6">
              © {new Date().getFullYear()} JustMyHost. {t('layout.footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
