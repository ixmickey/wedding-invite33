'use server';

import { I18nProvider } from './i18n-provider';
// REMOVED: import { detectLanguage } from './server';

export const LangProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // REMOVED: const lang = await detectLanguage(); 
  // The 'lang' variable and its calculation are no longer needed 
  // since I18nProvider doesn't accept a 'lang' prop.
  
  return <I18nProvider>{children}</I18nProvider>;
};
