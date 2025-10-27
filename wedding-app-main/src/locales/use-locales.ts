// src/locales/use-locales.ts

'use client';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { allLangs } from './all-langs';
import type resources from '@/types/resources';
// ----------------------------------------------------------------------

export function useTranslate(ns?: typeof resources) {
  // @ts-expect-error - err
  const { t, i18n } = useTranslation(ns);

  const currentLang = allLangs[0]; // Now permanently English

  const onChangeLang = useCallback(
    async (newLang: string) => {
      // Logic for language switching is disabled, log warning instead of failing.
      if (newLang !== currentLang.value) {
        console.warn(`Language change to ${newLang} is ignored as only ${currentLang.value} is supported.`);
      }
    },
    [currentLang]
  );

  return {
    t,
    i18n,
    onChangeLang,
    currentLang: currentLang,
  };
}
