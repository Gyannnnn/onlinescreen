export type Locale = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'hi' | 'ja';

export const defaultLocale: Locale = 'en';

export const locales: Record<Locale, { label: string; pathPrefix: string; lang: string }> = {
  en: { label: 'English', pathPrefix: '', lang: 'en' },
  es: { label: 'Espanol', pathPrefix: '/es', lang: 'es' },
  pt: { label: 'Portugues', pathPrefix: '/pt', lang: 'pt' },
  fr: { label: 'Francais', pathPrefix: '/fr', lang: 'fr' },
  de: { label: 'Deutsch', pathPrefix: '/de', lang: 'de' },
  hi: { label: 'Hindi', pathPrefix: '/hi', lang: 'hi' },
  ja: { label: 'Japanese', pathPrefix: '/ja', lang: 'ja' },
};

export const localeOrder = Object.keys(locales) as Locale[];
