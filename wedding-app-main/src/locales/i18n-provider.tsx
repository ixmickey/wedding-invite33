// src/locales/i18n-provider.tsx

'use client';

import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider as Provider } from 'react-i18next';

import { i18nOptions } from './config-locales';

// ----------------------------------------------------------------------

// Initializing i18next with default English fallback
const init = { ...i18nOptions('en', 'common'), detection: { caches: ['cookie'] } };

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      // Will only look for `./langs/en/home.json`
      (lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)
    )
  )
  .init(init);

// ----------------------------------------------------------------------

export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Removed unused 'lang' prop and memo logic
  return <Provider i18n={i18next}>{children}</Provider>;
}