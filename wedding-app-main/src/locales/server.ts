import { cache } from 'react';
import { createInstance } from 'i18next';
import { cookies as getCookies } from 'next/headers';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import {
  defaultNS,
  cookieName,
  i18nOptions,
  fallbackLng,
} from './config-locales';

export async function detectLanguage() {
  const cookies = await getCookies();

  const language = cookies.get(cookieName)?.value ?? fallbackLng;

  return language;
}

// ----------------------------------------------------------------------

interface TranslationOptions {
  keyPrefix?: string;
}

export const getServerTranslations = cache(
  async (ns = defaultNS, options: TranslationOptions = {}) => {
    const language = await detectLanguage();

    const i18nextInstance = await initServerI18next(language, ns);

    return {
      t: i18nextInstance.getFixedT(
        language,
        Array.isArray(ns) ? ns[0] : ns,
        options.keyPrefix
      ),
      i18n: i18nextInstance,
    };
  }
);

// ----------------------------------------------------------------------

const initServerI18next = async (language: string, namespace: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)
      )
    )
    .init(i18nOptions(language, namespace));

  return i18nInstance;
};
