'use server';

import { I18nProvider } from './i18n-provider';
import { detectLanguage } from './server';

export const LangProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lang = await detectLanguage();

  // FIX: Removed the 'lang={lang}' prop because it was removed from I18nProvider's definition.
  return <I18nProvider>{children}</I18nProvider>;
};
