import type { Transition } from 'motion/react'; // ADD THIS IMPORT

export const NAVIGATION_ANIMATIONS = {
  navigation: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 } as Transition, // Added type cast
  },
  button: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    transition: { duration: 0.3 } as Transition, // Added type cast
  },
  background: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    // CRITICAL FIX: Explicitly assert the complex object as Transition
    transition: { duration: 0.3, type: 'spring', stiffness: 300 } as Transition, 
  },
  icon: {
    active: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1],
    },
    hover: { scale: 1.2, rotate: 5 },
    transition: { duration: 0.5 } as Transition, // Added type cast
  },
  pulse: {
    animate: { scale: [1, 1.5, 1] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } as Transition, // Added type cast
  },
};

export const NAVIGATION_SECTIONS = [
  {
    id: 'hero',
    labelKey: 'navigation.home',
    icon: '🏠',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    id: 'couple',
    labelKey: 'navigation.couple',
    icon: '💕',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'details',
    labelKey: 'navigation.details',
    icon: '📅',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'venue',
    labelKey: 'navigation.venue',
    icon: '📍',
    gradient: 'from-indigo-500 to-blue-500',
  },
  // Removed: 'gallery' section
  /*
  {
    id: 'gallery',
    labelKey: 'navigation.gallery',
    icon: '📸',
    gradient: 'from-blue-500 to-cyan-500',
  },
  */
  {
    id: 'rsvp',
    labelKey: 'navigation.rsvp',
    icon: '✉️',
    gradient: 'from-cyan-500 to-teal-500',
  },
];
