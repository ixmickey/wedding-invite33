// src/sections/home/components/closing-message.tsx

'use client';

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

interface ClosingMessageProps {
  bride: string;
  groom: string;
}

export const ClosingMessage = ({ bride, groom }: ClosingMessageProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="py-16 px-4 bg-gradient-to-br from-rose-100 to-pink-200" //
    >
      <div className="max-w-xl mx-auto text-center"> //
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-10" //
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4"> //
            {t('closing-message.title')}
          </h2>
          <div className="w-20 h-px bg-rose-500 mx-auto mb-6"></div> //
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/40 mb-10" //
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4 font-light"> //
            &quot;{t('closing-message.quote')}&quot;
          </p>
          <div className="text-sm sm:text-base text-gray-600"> //
            {t('closing-message.with-love')}
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-rose-600 mt-2"> //
            {groom} & {bride}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-5" //
        >
          <div className="flex justify-center space-x-3 text-xl sm:text-3xl md:text-4xl"> //
            <span className="animate-bounce">💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>
              💖
            </span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              💕
            </span>
          </div>

          <p className="text-xs sm:text-base text-gray-600"> //
            {t('closing-message.hashtags')}
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-white/40" //
        >
          <p className="text-xs sm:text-sm text-gray-500">
            {t('closing-message.contact')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
