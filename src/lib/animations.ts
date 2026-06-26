export const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const scaleHover = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};
