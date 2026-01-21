// animations/elementor.ts
export const elementorZoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // smooth premium
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}
