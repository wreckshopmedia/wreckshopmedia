import { createStyles } from '@mantine/core';
import { colors } from '../theme/theme';

export const useGlobalStyles = createStyles(() => ({
  // ! FIX - THIS IS JUST PLACEHOLDER
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      // fontFamily: 'Open Sans, sans-serif',
    },
  },

  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wreckText: {
    color: colors.eerieBlack,
    fontSize: 'clamp(2rem, 8cqi, 3.5rem)',
    letterSpacing: '0.125em',
    marginBlock: '0.125em',
    fontFamily: '"Dongle", sans-serif',
  },

  shopText: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    textDecoration: 'inherit',
    textUnderlineOffset: 'inherit',
    textDecorationThickness: 'inherit',
    textDecorationLine: 'inherit',
    textTransform: 'inherit',
    fontStyle: 'inherit',
    letterSpacing: 'inherit',
    color: colors.offWhite,
  },
}));
