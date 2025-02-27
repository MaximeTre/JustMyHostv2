import { useTranslation } from 'react-i18next';
import { Server, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="text-center">
        <h1
  className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
  dangerouslySetInnerHTML={{ __html: t('hero.title') }}
/>

          
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/offres"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:shadow-lg hover:shadow-blue-600/25"
            >
              {t('hero.buttons.offers')}
            </Link>
            <Link
              to="/contact"
              className="border border-blue-700 hover:border-blue-600 hover:bg-blue-600/10 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105"
            >
              {t('hero.buttons.contact')}
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl border border-blue-900/30 backdrop-blur-sm hover:border-blue-700/50 transition-colors">
              <Server className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('features.infrastructure.title')}</h3>
              <p className="text-gray-400 text-center">
                {t('features.infrastructure.description')}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl border border-blue-900/30 backdrop-blur-sm hover:border-blue-700/50 transition-colors">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('features.ddos.title')}</h3>
              <p className="text-gray-400 text-center">
                {t('features.ddos.description')}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl border border-blue-900/30 backdrop-blur-sm hover:border-blue-700/50 transition-colors">
              <Cpu className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('features.performance.title')}</h3>
              <p className="text-gray-400 text-center">
                {t('features.performance.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}