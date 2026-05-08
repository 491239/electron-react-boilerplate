import en_US from '../locales/en-US.json';
import zh_CN from '../locales/zh-CN.json';

export type Language = 'en-US' | 'zh-CN';

export const locales: Record<Language, Record<string, string>> = {
  'en-US': en_US,
  'zh-CN': zh_CN,
};

export const LANGUAGE_STORAGE_KEY = 'app-language';

export const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === 'zh-CN' || stored === 'en-US') {
    return stored;
  }
  return 'en-US';
};

export const setStoredLanguage = (lang: Language): void => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
};
