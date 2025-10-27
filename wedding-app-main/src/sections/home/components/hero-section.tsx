// src/sections/home/components/hero-section.tsx

'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    // Further reduced vertical padding/height on mobile, rely on inner padding
    <div className="h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-4 pt-16 sm:pt-18 md:pt-20"> {/* Reduced horizontal px to px-4, adjusted pt-16 up from pt-10 to account for nav overlap */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-lg mx-auto text-center"> {/* Slightly tighter max-width */}
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-3 sm:mb-6" // Reduced margin
            >
              <div className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 font-medium"> {/* Reduced base font to text-xs */}
                {t('hero.welcome')}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-gray-800 mb-4 leading-tight"> {/* Reduced base font to text-4xl */}
                Our
                <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Wedding
                </span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div> {/* Reduced width */}
            </motion.div>

            {/* Couple Photos (Groom Left, Bride Right - CORRECTED) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-2 sm:mb-4" // Reduced margin
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-3 sm:mb-6"> {/* Reduced gap and margin */}
                
                {/* 1. GROOM (Now on Left) */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div 
                    // Aggressively reduced circle size on mobile (base classes)
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center 
                               // Aggressively reduced emoji size on mobile (base classes)
                               text-xl sm:text-3xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 shadow-lg" 
                  >
                    🤵🏻
                  </div>
                  <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-1"> {/* Reduced base width */}
                    <h3
                      // Reduced base font size 
                      className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 break-words hyphens-auto leading-tight overflow-wrap-anywhere"
                      title={couple.groom.fullName}
                    >
                      {couple.groom.name}
                    </h3>
                  </div>
                </div>

                {/* Heart - Hidden on mobile, shown on larger screens */}
                <div className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-500 animate-pulse flex-shrink-0">
                  💕
                </div>

                {/* Heart for mobile - shown between couple on mobile */}
                <div className="sm:hidden text-lg text-rose-500 animate-pulse my-1"> {/* Reduced emoji size and margin */}
                  💕
                </div>

                {/* 2. BRIDE (Now on Right) */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div 
                    // Aggressively reduced circle size on mobile (base classes)
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center 
                               // Aggressively reduced emoji size on mobile (base classes)
                               text-xl sm:text-3xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 shadow-lg" 
                  >
                    👰🏻
                  </div>
                  <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-1"> {/* Reduced base width */}
                    <h3
                      // Reduced base font size
                      className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 break-words hyphens-auto leading-tight overflow-wrap-anywhere"
                      title={couple.bride.fullName}
                    >
                      {couple.bride.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                onClick={() => onScrollToSection('rsvp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" // Reduced horizontal padding and base font size
              >
                {t('navigation.rsvp')}
              </motion.button>
              <motion.button
                onClick={() => onScrollToSection('details')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer" // Reduced horizontal padding and base font size
              >
                {t('hero.view-details')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-4 sm:pb-8"> {/* Reduced bottom padding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-600 text-center cursor-pointer"
              onClick={() => onScrollToSection('couple')}
            >
              <div className="text-xs mb-0 sm:mb-2"> {/* Reduced bottom margin */}
                {t('hero.scroll-down')}
              </div>
              <div className="text-md sm:text-xl">⬇️</div> {/* Reduced emoji size */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
