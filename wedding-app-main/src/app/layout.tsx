import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Suspense } from 'react';

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
        
        <Suspense fallback={<div>Loading app...</div>}> 
          {children}
        </Suspense>

        <Toaster />
      </body>
    </html>
  );
}
