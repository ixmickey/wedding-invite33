import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
// REMOVED: import { LangProvider, LocalizationProvider } from '@/locales';
import { Toaster } from 'sonner';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'The Wedding of Fiqri & Mio',
  description:
    'Join us in celebrating the union of Fiqri and his beloved. Discover our love story, wedding details, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Hardcoding to English
    <html lang="en"> 
      <body className={`${poppins.variable} antialiased`}>
        {/* Removed LangProvider and LocalizationProvider */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}