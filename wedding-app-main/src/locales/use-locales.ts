// src/locales/use-locales.ts

'use client';

import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { allLangs } from './all-langs';
import type resources from '@/types/resources';
// ----------------------------------------------------------------------

export function useTranslate(ns?: typeof resources) {
  const router = useRouter();

  // @ts-expect-error - err
  const { t, i18n } = useTranslation(ns);

  const fallback = allLangs[0]; // Now guaranteed to be English
  const currentLang = fallback;

  // Language change logic is simplified to only accept 'en'
  const onChangeLang = useCallback(
    async (newLang: string) => {
      // Only proceed if the language is the supported English
      if (newLang === 'en') { 
        try {
          const langChangePromise = i18n.changeLanguage(newLang);

          const currentMessages = messages.en;

          toast.promise(langChangePromise, {
            loading: currentMessages.loading,
            success: () => currentMessages.success,
            error: currentMessages.error,
            id: `lang-change-${newLang}`,
            position: 'top-right',
            closeButton: true,
          });

          if (currentLang) {
            dayjs.locale(currentLang.adapterLocale);
          }

          router.refresh();
        } catch (error) {
          console.error(error);
        }
      }
    },
    [currentLang, i18n, router]
  );

  return {
    t,
    i18n,
    onChangeLang,
    currentLang: currentLang,
  };
}
