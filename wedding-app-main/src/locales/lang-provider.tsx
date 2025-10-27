// src/locales/lang-provider.tsx

'use server';

import { I18nProvider } from './i18n-provider';
// REMOVED: import { detectLanguage } from './server'; 

export const LangProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // REMOVED: const lang = await detectLanguage(); 
  
  return <I18nProvider>{children}</I18nProvider>;
};
