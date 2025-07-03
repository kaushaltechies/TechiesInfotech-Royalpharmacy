import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import LocalizedStrings from 'react-native-localization';
import en from './en';
import ar from './ar';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, restart?: boolean) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

const strings = new LocalizedStrings({
  en:en,
  ar:ar,
});
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLangState] = useState<Language>('en');

  useEffect(() => {
    (async () => {
      const storedLang = await AsyncStorage.getItem('appLang');
      const lang: 'en' | 'ar' = storedLang === 'ar' ? 'ar' : 'en';
      strings.setLanguage(lang);
      setLangState(lang);

      const isRTL = lang === 'ar';
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.forceRTL(isRTL);
        RNRestart.Restart();
      }
    })();
  }, []);

  const setLanguage = async (lang: 'en' | 'ar', restart = false) => {
    await AsyncStorage.setItem('appLang', lang);
    strings.setLanguage(lang);
    setLangState(lang);

    const isRTL = lang === 'ar';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
      if (restart) {
        RNRestart.Restart();
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
