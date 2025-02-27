import React from 'react';
import { Server, Shield, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Infrastructure() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('infrastructure.title')}</h2>
          <p className="text-gray-400 text-lg">{t('infrastructure.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
              alt={t('infrastructure.imageAlt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold mb-2">{t('infrastructure.dataCenters.title')}</h3>
              <p className="text-gray-300">{t('infrastructure.dataCenters.description')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-900 rounded-xl p-6 flex items-start gap-4">
              <Server className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('infrastructure.features.enterpriseHardware.title')}</h3>
                <p className="text-gray-400">{t('infrastructure.features.enterpriseHardware.description')}</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('infrastructure.features.security.title')}</h3>
                <p className="text-gray-400">{t('infrastructure.features.security.description')}</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 flex items-start gap-4">
              <Wifi className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('infrastructure.features.optimizedNetwork.title')}</h3>
                <p className="text-gray-400">{t('infrastructure.features.optimizedNetwork.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
