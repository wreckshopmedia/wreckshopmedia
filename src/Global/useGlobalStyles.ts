import { createStyles } from '@mantine/core';

export const useGlobalStyles = createStyles((theme) => ({
  // ! FIX - THIS IS JUST PLACEHOLDER
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
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
    color: theme.colors.yellow,
    fontSize: '2.75rem',
    letterSpacing: '0.175em',
    marginTop: '0.25em',
    marginBottom: '0.125em',
    fontFamily: '"Winky Sans", sans-serif',
    lineHeight: '1em',
    [theme.other.mq.mobile]: {
      fontSize: '2.25rem',
    },
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
    color: theme.colors.blue,
  },
}));
