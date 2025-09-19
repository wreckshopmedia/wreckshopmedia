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
    color: colors.yellow,
    fontSize: 'clamp(2rem, 8cqi, 3rem)',
    letterSpacing: '0.175em',
    marginTop: '0.25em',
    marginBottom: '0.125em',
    fontFamily: '"Winky Sans", sans-serif',
    lineHeight: '1em',
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
    color: colors.blue,
  },
}));
