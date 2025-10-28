// src/sections/home/components/couple-introduction.tsx

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

  return (<div // ✅ FIX: Moved opening tag to the return line to prevent ASI
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
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-3"> {/* Reduced font size (from text-2xl/4xl/5xl/6xl) */}
          {t('couple.our-story')}
        </h2>
        <div className="w-20 h-px bg-rose-400 mx-auto"></div> {/* Reduced width */}
        <p className="text-xs sm:text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto"> {/* Reduced font size (from text-sm/lg/xl) */}
          {t('couple.story-text')}
        </p>
      </motion.div>

      {/* Couple Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"> {/* Reduced gap (from gap-8/16) */}
        {/* GROOM Card (Now on Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-right"
        >
          <div className="relative inline-block mb-3"> 
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl shadow-2xl border-6 border-white"> {/* Reduced size (from w-28/40/56/64) */}
              <Image
                src={groom.photo}
                alt={`${groom.fullName}'s photo`}
                width={256}
                height={256}
                className="rounded-full object-cover"
              />
            </div>
            {/* Icon shifted to right for a right-aligned column of content */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"> {/* Reduced size and offset (from w-8/12/16 and -bottom-2/-right-2) */}
              <span className="text-xs sm:text-lg">🤴</span> {/* Reduced emoji size (from text-base/xl) */}
            </div>
          </motion.div>

          <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-1"> {/* Reduced font size (from text-lg/3xl/4xl/5xl) */}
            {groom.fullName}
          </h3>
          <p className="text-xs sm:text-base md:text-lg text-blue-600 mb-3 font-medium"> {/* Reduced font size (from text-sm/lg/xl) */}
            {t('couple.the-groom')}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0 lg:ml-auto"> {/* Reduced font size (from text-xs/base/lg) */}
            {t('couple.groom-description')}
          </p>

          {/* Decorative Elements shifted to right for a right-aligned column of content */}
          <div className="mt-4 flex justify-center lg:justify-end space-x-1"> {/* Reduced margin and spacing */}
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> {/* Reduced size */}
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {/* Reduced size */}
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {/* Reduced size */}
          </div>
        </motion.div>

        {/* Heart Divider (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-3 border-rose-100" {/* Reduced size and border (from w-16/4 and text-xl/2xl/3xl) */}
          >
            <span className="text-base sm:text-2xl animate-pulse">
              💖
            </span>
          </motion.div>
        </div>

        {/* Heart Divider (Mobile) */}
        <div className="lg:hidden flex justify-center -my-3 z-10"> {/* Reduced negative margin (from -my-6) */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-rose-100" {/* Reduced size and border (from w-12/4 and text-lg/xl/2xl) */}
          >
            <span className="text-sm sm:text-lg md:text-xl animate-pulse">
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
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl shadow-2xl border-6 border-white"> {/* Reduced size (from w-28/40/56/64) */}
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
            <div className="absolute -bottom-1 -left-1 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-rose-400 rounded-full flex items-center justify-center shadow-lg"> {/* Reduced size and offset (from w-8/12/16 and -bottom-2/-left-2) */}
              <span className="text-xs sm:text-lg">👸</span> {/* Reduced emoji size (from text-base/xl) */}
            </div>
          </motion.div>

          <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-1"> {/* Reduced font size (from text-lg/3xl/4xl/5xl) */}
            {bride.fullName}
          </h3>
          <p className="text-xs sm:text-base md:text-lg text-rose-600 mb-3 font-medium"> {/* Reduced font size (from text-sm/lg/xl) */}
            {t('couple.the-bride')}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0"> {/* Reduced font size (from text-xs/base/lg) */}
            {t('couple.bride-description')}
          </p>

          {/* Decorative Elements shifted to left for a left-aligned column of content */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-1"> {/* Reduced margin and spacing */}
            <div className="w-1.5 h-1.5 bg-rose-300 rounded-full"></div> {/* Reduced size */}
            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div> {/* Reduced size */}
            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> {/* Reduced size */}
          </div>
        </motion.div>
      </div>

      {/* Love Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-10" {/* Reduced margin (from mt-16) */}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-auto shadow-lg border border-white/40"> {/* Reduced padding and max-width (from p-8/max-w-2xl) */}
          <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 italic mb-2"> {/* Reduced font size (from text-xl/2xl/3xl/4xl) */}
            {t('couple.love-quote')}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">— Clannad</p>
        </div>
      </motion.div>
    </div>
  );
};
