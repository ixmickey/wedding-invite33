// src/sections/home/components/wedding-details-card.tsx

'use client';

import { motion } from 'motion/react';
import {
  formatWeddingTime,
  generateGoogleCalendarLink,
} from '@/lib/wedding-utils';
import type { WeddingConfigType } from '@/types';
import { useTranslation } from 'react-i18next';
import { useTranslate } from '@/locales';
import { generateMapLink } from '@/lib/wedding-utils'; // Need to import generateMapLink for use in ceremony card

interface WeddingDetailsCardProps {
  date: Date;
  venue: WeddingConfigType['venue'];
}

export const WeddingDetailsCard = ({
  date,
  venue,
}: WeddingDetailsCardProps) => {
  const { currentLang } = useTranslate();
  const { t } = useTranslation('home');

  // Final locale logic (as discussed)
  const dateDisplayLocale = currentLang.value === 'id' ? 'en' : currentLang.numberFormat.code;
  const monthAbbrLocale = 'en-US'; 

  const calendarEvent = {
    title: t('details.our-wedding-day'),
    start: date,
    end: new Date(date.getTime() + 5 * 60 * 60 * 1000), // 5 hours later
    description: t('details.join-us'),
    location: venue.ceremony.address,
  };

  return (
    <div className="py-16 bg-gradient-to-br from-white to-rose-50/50"> //
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12" //
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4">
            {t('details.title')}
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"> //
            {t('details.join-us-text')}
          </p>
        </motion.div>

        {/* Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-white via-rose-50/30 to-pink-50/50 rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 mb-10 border border-rose-100/50 overflow-hidden group" //
        >
          {/* Background Decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>

          <div className="relative z-10">
            {/* Save the Date Header */}
            <div className="text-center mb-6"> //
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-rose-200/50" // Reduced gap and padding
              >
                <span className="text-xl">💕</span> //
                <span className="text-xs sm:text-sm font-semibold text-rose-600 tracking-wide uppercase"> //
                  {t('details.date')}
                </span>
              </motion.div>
            </div>

            {/* Date Display */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 md:gap-6 mb-6"> {/* Reduced gap */}
              {/* Day */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-xl p-3 sm:p-5 shadow-lg mb-2 h-16 sm:h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"> {/* Reduced height and min-width */}
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none"> {/* Reduced largest font size */}
                    {date.getDate()}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mt-1"> {/* Reduced margin */}
                  {t('details.day')}
                </p>
              </motion.div>

              {/* Month */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-3 sm:p-5 shadow-lg mb-2 h-16 sm:h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"> {/* Reduced height and min-width */}
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-none mb-1"> {/* Reduced largest font size */}
                    {/* Month abbreviation uses 'en-US' for DEC */}
                    {date
                      .toLocaleDateString(monthAbbrLocale, {
                        month: 'short',
                      })
                      .toUpperCase()}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-medium opacity-90"> {/* Reduced font size */}
                    {date.getFullYear()}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mt-1"> {/* Reduced margin */}
                  {t('details.month')} & {t('details.year')}
                </p>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl p-3 sm:p-5 shadow-lg mb-2 h-16 sm:h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[90px] md:min-w-[120px]"> {/* Reduced height and min-width */}
                  <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-none"> //
                    {/* Time uses the standard locale code (English) */}
                    {formatWeddingTime(date, currentLang.numberFormat.code)}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mt-1"> {/* Reduced margin */}
                  {t('details.time')}
                </p>
              </motion.div>
            </div>

            {/* Weekday Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mb-6 px-0" //
            >
              <div className="relative inline-block w-full max-w-xs sm:max-w-md md:max-w-lg bg-gradient-to-r from-white/90 via-rose-50/80 to-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 shadow-xl border border-rose-100/50 group/weekday hover:shadow-2xl transition-all duration-300"> {/* Reduced padding and border-radius */}
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60 group-hover/weekday:scale-110 transition-transform duration-300"></div> //
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-60 group-hover/weekday:scale-110 transition-transform duration-300"></div> //

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-2"> {/* Reduced gap */}
                    <span className="text-base sm:text-lg md:text-2xl">🗓️</span> {/* Reduced emoji size */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-gray-800 font-bold text-center leading-tight"> {/* Reduced overall font size */}
                      {date.toLocaleDateString(dateDisplayLocale, {
                        weekday: 'long',
                      })}
                    </p>
                    <span className="text-base sm:text-lg md:text-2xl">🗓️</span> {/* Reduced emoji size */}
                  </div>
                  <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-2"></div> //
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-medium"> {/* Reduced largest font size */}
                    {date.toLocaleDateString(dateDisplayLocale, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-rose-600 font-semibold mt-1"> //
                    {t('details.mark-calendar')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href={generateGoogleCalendarLink(calendarEvent)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 group/btn" // Reduced padding and font size
              >
                <span className="text-lg group-hover/btn:scale-110 transition-transform duration-200"> //
                  📅
                </span>
                <span>{t('details.add-to-calendar')}</span>
                <motion.span
                  className="text-[10px] opacity-75" // Reduced text size
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-3 max-w-xs mx-auto"> {/* Reduced text size and margin */}
                {t('details.message')}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-1 gap-6 max-w-sm mx-auto"> //
          {/* Ceremony Card (Now the sole venue card) */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 group hover:shadow-2xl transition-all duration-300" //
          >
            <div className="text-center mb-4"> //
              <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform duration-300"> //
                <div className="text-2xl">⛪</div> //
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1"> //
                {t('details.ceremony')}
              </h3>
              <div className="w-12 h-px bg-purple-400 mx-auto"></div> //
            </div>

            <div className="space-y-4 text-center">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base"> //
                  {venue.ceremony.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {venue.ceremony.address}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3"> //
                <p className="font-medium text-gray-800 text-xs sm:text-sm"> //
                  {t('details.time')}
                </p>
                <p className="text-purple-600 font-semibold text-sm sm:text-base">
                  {venue.ceremony.time}
                </p>
              </div>

              <motion.a
                href={generateMapLink(venue.ceremony.name)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-2 rounded-full text-xs font-medium hover:shadow-lg transition-all duration-300" //
              >
                📍 {t('details.get-directions')}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center" //
        >
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100"> //
            <h4 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3"> //
              {t('details.please-note')}
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-600"> //
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-2xl mb-1">👗</div> //
                <p className="font-medium">{t('details.dress-code')}</p>
                <p>{t('details.formal-attire')}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-2xl mb-1">🚗</div> //
                <p className="font-medium">{t('details.parking')}</p>
                <p>{t('details.valet-available')}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg sm:text-2xl mb-1">📱</div> //
                <p className="font-medium">{t('details.contact')}</p>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
