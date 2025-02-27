import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  en: { name: 'English', flag: '🇬🇧' }
};

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages[i18n.language as keyof typeof languages] || languages.fr;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-600/10 transition-colors"
      >
        <span>{currentLang.flag}</span>
        <span>{i18n.language.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-gray-900/95 backdrop-blur-sm shadow-xl border border-blue-900/30 overflow-hidden">
          <div className="p-2">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => changeLang(code)}
                className="flex items-center space-x-3 w-full p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}