'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface CoupleIntroductionProps {
  bride: WeddingConfigType['bride'];
  groom: WeddingConfigType['groom'];
  isVisible: boolean;
}

export const CoupleIntroduction = ({
  bride,
  groom,
}: CoupleIntroductionProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="py-12 px-4 bg-gradient-to-b from-white to-rose-50/30" // Reduced vertical padding
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10" // Reduced margin
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-3"> // Reduced base font size
            {t('couple.our-story')}
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto"></div> // Reduced width
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 mt-4 max-w-xl mx-auto"> // Reduced base font size and max-width
            {t('couple.story-text')}
          </p>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* GROOM Card (Now on Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="relative inline-block mb-3"> 
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl shadow-2xl border-6 border-white"> // Reduced size and border
                <Image
                  src={groom.photo}
                  alt={`${groom.fullName}'s photo`}
                  width={256}
                  height={256}
                  className="rounded-full object-cover"
                />
              </div>
              {/* Icon shifted to right for a right-aligned column of content */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"> // Reduced size and offset
                <span className="text-base sm:text-xl">🤴</span> // Reduced base emoji size
              </div>
            </div>

            <h3 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-1"> // Reduced base font size
              {groom.fullName}
            </h3>
            <p className="text-sm sm:text-lg md:text-xl text-blue-600 mb-3 font-medium"> // Reduced base font size
              {t('couple.the-groom')}
            </p>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0 lg:ml-auto"> // Reduced base font size and max-width
              {t('couple.groom-description')}
            </p>

            {/* Decorative Elements shifted to right for a right-aligned column of content */}
            <div className="mt-4 flex justify-center lg:justify-end space-x-1"> // Reduced margin and spacing
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> // Reduced size
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> // Reduced size
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> // Reduced size
            </div>
          </motion.div>

          {/* Heart Divider (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-3 border-rose-100" // Reduced size and border
            >
              <span className="text-base sm:text-2xl animate-pulse">
                💖
              </span>
            </motion.div>
          </div>

          {/* Heart Divider (Mobile) */}
          <div className="lg:hidden flex justify-center -my-3 z-10"> // Reduced negative margin
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-rose-100" // Reduced size and border
            >
              <span className="text-md sm:text-xl md:text-2xl animate-pulse">
                💖
              </span>
            </motion.div>
          </div>

          {/* BRIDE Card (Now on Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-3"> 
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl shadow-2xl border-6 border-white"> // Reduced size and border
                <Image
                  src={bride.photo}
                  alt={`${bride.fullName}'s photo`}
                  width={256}
                  height={256}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Icon shifted to left for a left-aligned column of content */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-rose-400 rounded-full flex items-center justify-center shadow-lg"> // Reduced size and offset
                <span className="text-base sm:text-xl">👸</span> // Reduced base emoji size
              </div>
            </div>

            <h3 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-1"> // Reduced base font size
              {bride.fullName}
            </h3>
            <p className="text-sm sm:text-lg md:text-xl text-rose-600 mb-3 font-medium"> // Reduced base font size
              {t('couple.the-bride')}
            </p>
            <p className="text-xs sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0"> // Reduced base font size and max-width
              {t('couple.bride-description')}
            </p>

            {/* Decorative Elements shifted to left for a left-aligned column of content */}
            <div className="mt-4 flex justify-center lg:justify-start space-x-1"> // Reduced margin and spacing
              <div className="w-1.5 h-1.5 bg-rose-300 rounded-full"></div> // Reduced size
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div> // Reduced size
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> // Reduced size
            </div>
          </motion.div>
        </div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10" // Reduced margin
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-auto shadow-lg border border-white/40"> // Reduced padding and max-width
            <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-serif text-gray-700 italic mb-2"> // Reduced base font size
              {t('couple.love-quote')}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">— Clannad</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
