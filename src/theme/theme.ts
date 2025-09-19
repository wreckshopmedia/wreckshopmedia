import type { MantineThemeOverride } from '@mantine/core';

export const colors = {
  eerieBlack: '#222725', // dark anchor
  yellow: '#F5E663', // accent
  blue: '#0E79B2', // primary
  peach: '#F68E5F', // playful accent
  offWhite: '#FAFAFF', // light anchor
};

export const BREAKPOINT_MOBILE = 768;

export const theme: MantineThemeOverride = {
  colors: {
    eerieBlack: [colors.eerieBlack],
    yellow: [colors.yellow],
    blue: [colors.blue],
    peach: [colors.peach],
    offWhite: [colors.offWhite],
  },

  other: {
    BREAKPOINT_MOBILE,
    mq: {
      customMax: (max: number) => `@media (max-width: ${max}px)`,
      customMin: (min: number) => `@media (min-width: ${min}px)`,
      mobile: `@media (max-width: ${BREAKPOINT_MOBILE}px)`,
      desktop: `@media (min-width: ${BREAKPOINT_MOBILE + 1}px)`,
    },
  },

  // ------------------- GLOBAL STYLES??? ------------------- //
  globalStyles: (theme) => ({
     body: {
        backgroundColor: theme.colorScheme === 'dark' ? colors.eerieBlack : colors.offWhite,
        color: theme.colorScheme === 'dark' ? colors.offWhite : colors.eerieBlack,
        fontFamily: '"Poiret One", sans-serif',
        height: '100vh',
        width: '100%',
        overflow: 'hidden', // idea page always fits viewport
        '& #root': {
          height: '100%',
          width: '100%',
        },
      },
  }),
};
