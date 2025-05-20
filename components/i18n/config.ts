export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어'
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const languageNames = {
  en: 'English',
  zh: 'Chinese',
  ja: 'Japanese',
  ko: 'Korean'
} as const;
