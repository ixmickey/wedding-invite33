'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
// Removed Resend and Toast dependencies entirely

export const RSVP = () => {
  const { t } = useTranslation('home');
  
  // State updated: Removed guests and dietaryRestrictions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Formspree Endpoint URL - Data will be sent here.
  const FORM_ENDPOINT = "https://formspree.io/f/movpvobl"; 

// BLANK LINE ADDED HERE to separate 'const' declarations (Fix 1)
  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    let name = e.target.name;
    const value = e.target.value;

    // Only mapping _replyto is required now
    if (name === '_replyto') {
        name = 'email'; 
    } 

// BLANK LINE ADDED HERE to separate control flow from return-like statement (Fix 2 & 3)

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  return (
    <div
      ref={ref}
      className="py-12 px-4 bg-gradient-to-br from-rose-50 to-pink-100" // Reduced vertical padding
    >
      <div className="max-w-xl mx-auto"> {/* Reduced max-width */}
        {/* Header (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10" // Reduced margin
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-3"> // Reduced base font size
            {t('rsvp.title')}
          </h2>
          <div className="w-20 h-px bg-rose-400 mx-auto mb-5"></div> // Reduced width and margin
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto"> // Reduced base font size and max-width
            {t('rsvp.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Reduced gap */}
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-rose-100"> {/* Reduced border radius and padding */}
              <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-gray-800 mb-5 text-center"> {/* Reduced base font size */}
                {t('rsvp.confirm-attendance')}
              </h3>

              {/* FINAL SUBMISSION METHOD: Direct HTML form action to Formspree */}
              <form 
                action={FORM_ENDPOINT} 
                method="POST" 
                className="space-y-4" // Reduced spacing
              >
                {/* Hidden field for email subject */}
                <input type="hidden" name="_subject" value="New Wedding RSVP Submission" />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1" // Reduced margin
                  >
                    {t('rsvp.full-name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all duration-300 text-sm text-gray-800" // Reduced padding, border-radius, and font size
                    placeholder={t('rsvp.full-name')}
                  />
                </div>
                {/* Email - MAPPED to _replyto in Formspree submit */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1" // Reduced margin
                  >
                    {t('rsvp.email-address')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto" // Formspree's special name
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all duration-300 text-sm text-gray-800" // Reduced padding, border-radius, and font size
                    placeholder={t('rsvp.email-address')}
                  />
                </div>
                {/* Attendance */}
                <div>
                  <label
                    htmlFor="attendance"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1" // Reduced margin
                  >
                    {t('rsvp.will-attend')} *
                  </label>
                  <select
                    id="attendance"
                    name="attendance" // Now matches formData.attendance
                    value={formData.attendance}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all duration-300 text-sm text-gray-800" // Reduced padding, border-radius, and font size
                  >
                    <option value="">{t('rsvp.please-select')}</option>
                    <option value="yes">{t('rsvp.yes-there')}</option>
                    <option value="no">{t('rsvp.no-cant')}</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1" // Reduced margin
                  >
                    {t('rsvp.message-couple')}
                  </label>
                  <textarea
                    id="message"
                    name="message" // Now matches formData.message
                    value={formData.message}
                    onChange={handleChange}
                    rows={3} // Reduced rows
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm text-gray-800" // Reduced padding, border-radius, and font size
                    placeholder={t('rsvp.message-placeholder')}
                  />
                </div>

                {/* Submit Button - Simplified/Static */}
                <button
                  type="submit"
                  className={`w-full py-3 px-5 rounded-lg font-medium text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:from-rose-500 hover:to-pink-600`} // Reduced padding, border-radius, font size, and hover offset
                >
                  {t('rsvp.send-rsvp')}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6" // Reduced spacing
          >
            {/* RSVP Deadline */}
            <div className="bg-white rounded-xl p-5 shadow-lg border border-rose-100"> // Reduced padding and border radius
              <div className="flex items-start mb-3"> // Reduced margin
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0"> // Reduced size and margin
                  <span className="text-rose-600 text-lg">⏰</span> // Reduced emoji size
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-base"> // Reduced base font size
                    {t('rsvp.deadline')}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {t('rsvp.deadline-date')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('rsvp.deadline-help')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-5 shadow-lg border border-rose-100"> // Reduced padding and border radius
              <div className="flex items-start mb-3"> // Reduced margin
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0"> // Reduced size and margin
                  <span className="text-blue-600 text-lg">📞</span> // Reduced emoji size
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-base"> // Reduced base font size
                    {t('rsvp.questions')}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {t('rsvp.questions-help')}
                  </p>
                </div>
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-gray-600"> // Reduced spacing
                <p>📧 husainghadiyali0219@gmail.com</p>
                <p>📱 +91 99265 00186</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
