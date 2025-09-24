import type { MantineThemeOverride } from '@mantine/core';

export const BASE = 0;
export const XS = 500;
export const SM = 768;
export const MD = 991;
export const LG = 1200;
export const XL = 1400;

export const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    ':root': {
      scrollBehavior: 'smooth',
      colorScheme: 'light dark',
      '--zain': '"Zain", sans-serif',
      '--winky-sans': '"Winky Sans", sans-serif',
    },

    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      background: theme.colors.peach,
      color: theme.colorScheme === 'dark' ? theme.colors.eerieBlack : theme.colors.offWhite,

      '& #root': {
        height: '100%',
        width: '100%',
      },
    },
  }),

  colors: {
    eerieBlack: ['#222725'],
    yellow: ['#F5E663'],
    blue: ['#0E79B2'],
    peach: ['#F68E5F'],
    offWhite: ['#FAFAFF'],
  },

  other: {
    SM,
    mq: {
      customMax: (max: number) => `@media (max-width: ${max}px)`,
      customMin: (min: number) => `@media (min-width: ${min}px)`,
      mobile: `@media (max-width: ${SM}px)`,
      desktop: `@media (min-width: ${SM + 1}px)`,
    },
  },
};
